import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Agent = Database['public']['Tables']['agents']['Row'];
type AgentInsert = Database['public']['Tables']['agents']['Insert'];
type AgentUpdate = Database['public']['Tables']['agents']['Update'];

export const agentService = {
  // Get all active agents for marketplace
  async getMarketplaceAgents() {
    const { data, error } = await supabase
      .from('agents')
      .select(`
        *,
        developer_profiles (
          name,
          verified,
          total_earnings
        ),
        reviews (
          rating,
          comment,
          created_at
        )
      `)
      .eq('status', 'active')
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get agent by ID with full details
  async getAgentById(id: string) {
    const { data, error } = await supabase
      .from('agents')
      .select(`
        *,
        developer_profiles (
          name,
          verified,
          bio,
          total_earnings,
          commission_rate
        ),
        reviews (
          *,
          business_profiles (
            company_name
          )
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Get agent by slug
  async getAgentBySlug(slug: string) {
    const { data, error } = await supabase
      .from('agents')
      .select(`
        *,
        developer_profiles (
          name,
          verified,
          bio,
          total_earnings
        ),
        reviews (
          *,
          business_profiles (
            company_name
          )
        )
      `)
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  },

  // Get agents by developer
  async getAgentsByDeveloper(developerId: string) {
    const { data, error } = await supabase
      .from('agents')
      .select('*')
      .eq('developer_id', developerId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Create new agent
  async createAgent(agent: AgentInsert) {
    const { data, error } = await supabase
      .from('agents')
      .insert(agent)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update agent
  async updateAgent(id: string, updates: AgentUpdate) {
    const { data, error } = await supabase
      .from('agents')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete agent
  async deleteAgent(id: string) {
    const { error } = await supabase
      .from('agents')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Search agents
  async searchAgents(query: string, filters: {
    category?: string;
    priceMin?: number;
    priceMax?: number;
    capabilities?: string[];
    languages?: string[];
  } = {}) {
    let queryBuilder = supabase
      .from('agents')
      .select(`
        *,
        developer_profiles (
          name,
          verified
        ),
        reviews (
          rating
        )
      `)
      .eq('status', 'active');

    // Text search
    if (query) {
      queryBuilder = queryBuilder.or(`name.ilike.%${query}%,description.ilike.%${query}%,tagline.ilike.%${query}%`);
    }

    // Category filter
    if (filters.category) {
      queryBuilder = queryBuilder.eq('category', filters.category);
    }

    // Price range filter
    if (filters.priceMin !== undefined) {
      queryBuilder = queryBuilder.gte('base_price', filters.priceMin);
    }
    if (filters.priceMax !== undefined) {
      queryBuilder = queryBuilder.lte('base_price', filters.priceMax);
    }

    // Capabilities filter
    if (filters.capabilities && filters.capabilities.length > 0) {
      queryBuilder = queryBuilder.overlaps('capabilities', filters.capabilities);
    }

    // Languages filter
    if (filters.languages && filters.languages.length > 0) {
      queryBuilder = queryBuilder.overlaps('languages', filters.languages);
    }

    const { data, error } = await queryBuilder.order('featured', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get featured agents
  async getFeaturedAgents(limit = 6) {
    const { data, error } = await supabase
      .from('agents')
      .select(`
        *,
        developer_profiles (
          name,
          verified
        )
      `)
      .eq('status', 'active')
      .eq('featured', true)
      .limit(limit);

    if (error) throw error;
    return data;
  },

  // Get agent categories
  async getCategories() {
    const { data, error } = await supabase
      .from('agents')
      .select('category')
      .eq('status', 'active');

    if (error) throw error;
    
    const categories = [...new Set(data.map(agent => agent.category))];
    return categories;
  },

  // Update agent performance metrics
  async updatePerformanceMetrics(agentId: string) {
    const { error } = await supabase.rpc('update_agent_performance_metrics', {
      agent_id_param: agentId
    });

    if (error) throw error;
  }
};