import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Invoice = Database['public']['Tables']['invoices']['Row'];

export const billingService = {
  // Get user's invoices
  async getInvoices(businessId: string) {
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('business_id', businessId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get invoice by ID
  async getInvoice(id: string) {
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Get current month usage
  async getCurrentUsage(businessId: string) {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const endOfMonth = new Date(startOfMonth);
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);

    // Get usage for all instances belonging to this business
    const { data, error } = await supabase
      .from('usage_logs')
      .select(`
        *,
        agent_instances (
          agent_subscriptions (
            business_id
          )
        )
      `)
      .gte('created_at', startOfMonth.toISOString())
      .lt('created_at', endOfMonth.toISOString());

    if (error) throw error;

    // Filter by business and calculate totals
    const businessUsage = data.filter(log => 
      log.agent_instances?.agent_subscriptions?.business_id === businessId
    );

    const summary = {
      totalCost: businessUsage.reduce((sum, log) => sum + (log.cost || 0), 0),
      totalCalls: businessUsage.filter(log => log.usage_type === 'call').length,
      totalEmails: businessUsage.filter(log => log.usage_type === 'email').length,
      totalTasks: businessUsage.filter(log => log.usage_type === 'task').length,
      totalCallMinutes: businessUsage
        .filter(log => log.usage_type === 'call')
        .reduce((sum, log) => sum + (log.duration_seconds || 0), 0) / 60,
      byType: {
        call: businessUsage.filter(log => log.usage_type === 'call').reduce((sum, log) => sum + (log.cost || 0), 0),
        email: businessUsage.filter(log => log.usage_type === 'email').reduce((sum, log) => sum + (log.cost || 0), 0),
        task: businessUsage.filter(log => log.usage_type === 'task').reduce((sum, log) => sum + (log.cost || 0), 0),
        api: businessUsage.filter(log => log.usage_type === 'api').reduce((sum, log) => sum + (log.cost || 0), 0),
      }
    };

    return summary;
  },

  // Get usage by date range
  async getUsageByDateRange(businessId: string, startDate: string, endDate: string) {
    const { data, error } = await supabase
      .from('usage_logs')
      .select(`
        *,
        agent_instances (
          instance_name,
          agent_subscriptions (
            business_id,
            agents (
              name
            )
          )
        )
      `)
      .gte('created_at', startDate)
      .lte('created_at', endDate);

    if (error) throw error;

    // Filter by business
    const businessUsage = data.filter(log => 
      log.agent_instances?.agent_subscriptions?.business_id === businessId
    );

    return businessUsage;
  },

  // Get usage trends
  async getUsageTrends(businessId: string, days = 30) {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const usage = await this.getUsageByDateRange(
      businessId,
      startDate.toISOString(),
      endDate.toISOString()
    );

    // Group by date
    const dailyUsage = usage.reduce((acc, log) => {
      const date = new Date(log.created_at).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = {
          date,
          totalCost: 0,
          calls: 0,
          emails: 0,
          tasks: 0,
          api: 0
        };
      }
      
      acc[date].totalCost += log.cost || 0;
      acc[date][log.usage_type as keyof typeof acc[typeof date]] += 1;
      
      return acc;
    }, {} as Record<string, any>);

    return Object.values(dailyUsage).sort((a: any, b: any) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  },

  // Get subscription costs
  async getSubscriptionCosts(businessId: string) {
    const { data: subscriptions, error } = await supabase
      .from('agent_subscriptions')
      .select(`
        *,
        agents (
          name,
          base_price,
          pricing_model
        )
      `)
      .eq('business_id', businessId)
      .eq('status', 'active');

    if (error) throw error;

    const costs = subscriptions.map(sub => ({
      agentName: sub.agents?.name,
      monthlyPrice: sub.agents?.base_price || 0,
      pricingModel: sub.agents?.pricing_model,
      status: sub.status,
      currentPeriodEnd: sub.current_period_end
    }));

    const totalMonthlyCost = costs.reduce((sum, cost) => 
      sum + (cost.pricingModel === 'subscription' ? cost.monthlyPrice : 0), 0
    );

    return {
      subscriptions: costs,
      totalMonthlyCost
    };
  },

  // Get payment methods (placeholder for Stripe integration)
  async getPaymentMethods(businessId: string) {
    // This would integrate with Stripe to get payment methods
    // For now, return mock data structure
    return {
      defaultPaymentMethod: null,
      paymentMethods: []
    };
  },

  // Update payment method (placeholder for Stripe integration)
  async updateDefaultPaymentMethod(businessId: string, paymentMethodId: string) {
    // This would integrate with Stripe
    throw new Error('Not implemented yet - requires Stripe integration');
  },

  // Calculate estimated monthly bill
  async getEstimatedBill(businessId: string) {
    const [currentUsage, subscriptionCosts] = await Promise.all([
      this.getCurrentUsage(businessId),
      this.getSubscriptionCosts(businessId)
    ]);

    // Calculate prorated usage for full month
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const dayOfMonth = now.getDate();
    const projectedUsageCost = (currentUsage.totalCost / dayOfMonth) * daysInMonth;

    return {
      subscriptionCosts: subscriptionCosts.totalMonthlyCost,
      projectedUsageCosts: projectedUsageCost,
      currentUsageCosts: currentUsage.totalCost,
      estimatedTotal: subscriptionCosts.totalMonthlyCost + projectedUsageCost,
      breakdown: {
        subscriptions: subscriptionCosts.subscriptions,
        usage: currentUsage
      }
    };
  }
};