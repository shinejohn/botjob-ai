import { useState, useEffect } from 'react';
import { agentService } from '../services/agentService';
import { useAuth } from '../contexts/AuthContext';

export const useAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAgents = async () => {
    try {
      setLoading(true);
      const data = await agentService.getMarketplaceAgents();
      setAgents(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return {
    agents,
    loading,
    error,
    refetch: fetchAgents
  };
};

export const useAgent = (id: string) => {
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAgent = async () => {
    try {
      setLoading(true);
      const data = await agentService.getAgentById(id);
      setAgent(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAgent();
    }
  }, [id]);

  return {
    agent,
    loading,
    error,
    refetch: fetchAgent
  };
};

export const useAgentBySlug = (slug: string) => {
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAgent = async () => {
    try {
      setLoading(true);
      const data = await agentService.getAgentBySlug(slug);
      setAgent(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchAgent();
    }
  }, [slug]);

  return {
    agent,
    loading,
    error,
    refetch: fetchAgent
  };
};

export const useDeveloperAgents = () => {
  const { userProfile } = useAuth();
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAgents = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await agentService.getAgentsByDeveloper(userProfile.id);
      setAgents(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, [userProfile?.id]);

  return {
    agents,
    loading,
    error,
    refetch: fetchAgents
  };
};

export const useAgentSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string, filters: any = {}) => {
    try {
      setLoading(true);
      const data = await agentService.searchAgents(query, filters);
      setResults(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    results,
    loading,
    error,
    search
  };
};

export const useFeaturedAgents = (limit = 6) => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFeaturedAgents = async () => {
    try {
      setLoading(true);
      const data = await agentService.getFeaturedAgents(limit);
      setAgents(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedAgents();
  }, [limit]);

  return {
    agents,
    loading,
    error,
    refetch: fetchFeaturedAgents
  };
};

export const useAgentCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await agentService.getCategories();
      setCategories(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories
  };
};