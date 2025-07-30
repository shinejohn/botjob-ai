import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Subscription = Database['public']['Tables']['agent_subscriptions']['Row'];
type SubscriptionInsert = Database['public']['Tables']['agent_subscriptions']['Insert'];
type SubscriptionUpdate = Database['public']['Tables']['agent_subscriptions']['Update'];

type Instance = Database['public']['Tables']['agent_instances']['Row'];
type InstanceInsert = Database['public']['Tables']['agent_instances']['Insert'];
type InstanceUpdate = Database['public']['Tables']['agent_instances']['Update'];

export const subscriptionService = {
  // Get user's active subscriptions
  async getUserSubscriptions(businessId: string) {
    const { data, error } = await supabase
      .from('agent_subscriptions')
      .select(`
        *,
        agents (
          id,
          name,
          slug,
          avatar_url,
          category,
          pricing_model,
          base_price
        ),
        agent_instances (
          id,
          instance_name,
          status,
          phone_number,
          email_address,
          last_active_at
        )
      `)
      .eq('business_id', businessId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get subscription by ID
  async getSubscription(id: string) {
    const { data, error } = await supabase
      .from('agent_subscriptions')
      .select(`
        *,
        agents (
          *,
          developer_profiles (
            name
          )
        ),
        agent_instances (*)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new subscription
  async createSubscription(subscription: SubscriptionInsert) {
    const { data, error } = await supabase
      .from('agent_subscriptions')
      .insert(subscription)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update subscription
  async updateSubscription(id: string, updates: SubscriptionUpdate) {
    const { data, error } = await supabase
      .from('agent_subscriptions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Cancel subscription
  async cancelSubscription(id: string) {
    const { data, error } = await supabase
      .from('agent_subscriptions')
      .update({
        status: 'cancelled',
        cancelled_at: new Date().toISOString(),
        cancel_at_period_end: true
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Agent Instance Management
  async getInstances(subscriptionId: string) {
    const { data, error } = await supabase
      .from('agent_instances')
      .select('*')
      .eq('subscription_id', subscriptionId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getInstance(id: string) {
    const { data, error } = await supabase
      .from('agent_instances')
      .select(`
        *,
        agent_subscriptions (
          agents (
            name,
            capabilities,
            integrations
          )
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async createInstance(instance: InstanceInsert) {
    const { data, error } = await supabase
      .from('agent_instances')
      .insert(instance)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateInstance(id: string, updates: InstanceUpdate) {
    const { data, error } = await supabase
      .from('agent_instances')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async pauseInstance(id: string) {
    return this.updateInstance(id, { status: 'paused' });
  },

  async resumeInstance(id: string) {
    return this.updateInstance(id, { status: 'active' });
  },

  async deleteInstance(id: string) {
    const { error } = await supabase
      .from('agent_instances')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Usage and Activity
  async getUsageLogs(instanceId: string, startDate?: string, endDate?: string) {
    let query = supabase
      .from('usage_logs')
      .select('*')
      .eq('instance_id', instanceId)
      .order('created_at', { ascending: false });

    if (startDate) {
      query = query.gte('created_at', startDate);
    }
    if (endDate) {
      query = query.lte('created_at', endDate);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getActivityLogs(instanceId: string, limit = 50) {
    const { data, error } = await supabase
      .from('activity_logs')
      .select('*')
      .eq('instance_id', instanceId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  },

  async logUsage(usage: {
    instance_id: string;
    usage_type: 'call' | 'email' | 'task' | 'api';
    duration_seconds?: number;
    quantity?: number;
    metadata?: any;
    cost?: number;
  }) {
    const { data, error } = await supabase
      .from('usage_logs')
      .insert(usage)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async logActivity(activity: {
    instance_id: string;
    activity_type: string;
    activity_data: any;
    success?: boolean;
    error_message?: string;
    duration_ms?: number;
  }) {
    const { data, error } = await supabase
      .from('activity_logs')
      .insert(activity)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};