import { useState, useEffect } from 'react';
import { subscriptionService } from '../services/subscriptionService';
import { useAuth } from '../contexts/AuthContext';

export const useSubscriptions = () => {
  const { userProfile, user } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscriptions = async () => {
    // Handle demo mode
    if (user?.id?.startsWith('demo-')) {
      setSubscriptions([
        {
          id: 'demo-sub-1',
          status: 'active',
          agents: {
            id: 'demo-agent-1',
            name: 'Customer Support Pro',
            performance_metrics: { success_rate: 96.5 }
          },
          agent_instances: [{
            id: 'demo-instance-1',
            instance_name: 'Support Agent #1',
            status: 'active'
          }]
        },
        {
          id: 'demo-sub-2',
          status: 'active',
          agents: {
            id: 'demo-agent-2',
            name: 'Sales Assistant AI',
            performance_metrics: { success_rate: 92.3 }
          },
          agent_instances: [{
            id: 'demo-instance-2',
            instance_name: 'Sales Agent #1',
            status: 'active'
          }]
        }
      ]);
      setLoading(false);
      return;
    }
    
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      const data = await subscriptionService.getUserSubscriptions(userProfile.id);
      setSubscriptions(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, [userProfile?.id, user?.id]);

  return {
    subscriptions,
    loading,
    error,
    refetch: fetchSubscriptions
  };
};

export const useSubscription = (id: string) => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscription = async () => {
    try {
      setLoading(true);
      const data = await subscriptionService.getSubscription(id);
      setSubscription(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSubscription();
    }
  }, [id]);

  return {
    subscription,
    loading,
    error,
    refetch: fetchSubscription
  };
};

export const useAgentInstances = (subscriptionId?: string) => {
  const { userProfile } = useAuth();
  const [instances, setInstances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInstances = async () => {
    if (!subscriptionId) return;

    try {
      setLoading(true);
      const data = await subscriptionService.getInstances(subscriptionId);
      setInstances(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstances();
  }, [subscriptionId]);

  return {
    instances,
    loading,
    error,
    refetch: fetchInstances
  };
};

export const useAgentInstance = (id: string) => {
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInstance = async () => {
    try {
      setLoading(true);
      const data = await subscriptionService.getInstance(id);
      setInstance(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchInstance();
    }
  }, [id]);

  const updateInstance = async (updates: any) => {
    try {
      const updatedInstance = await subscriptionService.updateInstance(id, updates);
      setInstance(updatedInstance);
      return updatedInstance;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const pauseInstance = async () => {
    try {
      const updatedInstance = await subscriptionService.pauseInstance(id);
      setInstance(updatedInstance);
      return updatedInstance;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const resumeInstance = async () => {
    try {
      const updatedInstance = await subscriptionService.resumeInstance(id);
      setInstance(updatedInstance);
      return updatedInstance;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  return {
    instance,
    loading,
    error,
    refetch: fetchInstance,
    updateInstance,
    pauseInstance,
    resumeInstance
  };
};

export const useUsageLogs = (instanceId: string, startDate?: string, endDate?: string) => {
  const [usage, setUsage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsage = async () => {
    try {
      setLoading(true);
      const data = await subscriptionService.getUsageLogs(instanceId, startDate, endDate);
      setUsage(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (instanceId) {
      fetchUsage();
    }
  }, [instanceId, startDate, endDate]);

  return {
    usage,
    loading,
    error,
    refetch: fetchUsage
  };
};

export const useActivityLogs = (instanceId: string, limit = 50) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      const data = await subscriptionService.getActivityLogs(instanceId, limit);
      setActivities(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (instanceId) {
      fetchActivities();
    }
  }, [instanceId, limit]);

  return {
    activities,
    loading,
    error,
    refetch: fetchActivities
  };
};