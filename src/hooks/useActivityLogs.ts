import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const useRecentActivity = (limit = 10) => {
  const { userProfile } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async () => {
    if (!userProfile?.id) return;

    try {
      setLoading(true);
      
      // Get all activity logs for user's agent instances
      const { data, error: fetchError } = await supabase
        .from('activity_logs')
        .select(`
          *,
          agent_instances (
            instance_name,
            agent_subscriptions (
              business_id,
              agents (
                name,
                avatar_url,
                category
              )
            )
          )
        `)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (fetchError) throw fetchError;

      // Filter activities for the current business
      const businessActivities = data?.filter(activity => 
        activity.agent_instances?.agent_subscriptions?.business_id === userProfile.id
      ) || [];

      setActivities(businessActivities);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [userProfile?.id, limit]);

  return {
    activities,
    loading,
    error,
    refetch: fetchActivities
  };
};