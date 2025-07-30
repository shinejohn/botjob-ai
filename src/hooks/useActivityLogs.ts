import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const useRecentActivity = (limit = 10) => {
  const { userProfile, user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async () => {
    // Handle demo mode
    if (user?.id?.startsWith('demo-')) {
      const demoActivities = [
        {
          id: 'demo-activity-1',
          created_at: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
          activity_type: 'call_completed',
          activity_data: { duration: 180, customer: 'John Smith' },
          success: true,
          agent_instances: {
            instance_name: 'Support Agent #1',
            agent_subscriptions: {
              agents: {
                name: 'Customer Support Pro',
                avatar_url: '👤',
                category: 'customer_service'
              }
            }
          }
        },
        {
          id: 'demo-activity-2',
          created_at: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
          activity_type: 'email_sent',
          activity_data: { to: 'client@example.com', subject: 'Follow-up on your inquiry' },
          success: true,
          agent_instances: {
            instance_name: 'Sales Agent #1',
            agent_subscriptions: {
              agents: {
                name: 'Sales Assistant AI',
                avatar_url: '💼',
                category: 'sales'
              }
            }
          }
        },
        {
          id: 'demo-activity-3',
          created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
          activity_type: 'task_completed',
          activity_data: { task: 'Updated CRM records for 15 contacts' },
          success: true,
          agent_instances: {
            instance_name: 'Support Agent #1',
            agent_subscriptions: {
              agents: {
                name: 'Customer Support Pro',
                avatar_url: '👤',
                category: 'customer_service'
              }
            }
          }
        }
      ];
      setActivities(demoActivities.slice(0, limit));
      setLoading(false);
      return;
    }
    
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
  }, [userProfile?.id, user?.id, limit]);

  return {
    activities,
    loading,
    error,
    refetch: fetchActivities
  };
};