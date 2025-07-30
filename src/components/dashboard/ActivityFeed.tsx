import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, FilterIcon, DownloadIcon } from 'lucide-react';
import { useRecentActivity } from '../../hooks/useActivityLogs';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export const ActivityFeed = () => {
  const navigate = useNavigate();
  const { activities, loading } = useRecentActivity(10);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const getActivityIcon = (activityType: string) => {
    switch (activityType) {
      case 'call_answered': return '📞';
      case 'email_sent': return '📧';
      case 'task_completed': return '✅';
      case 'escalation_triggered': return '⚠️';
      case 'meeting_scheduled': return '📅';
      case 'training_completed': return '🎓';
      case 'error_occurred': return '❌';
      default: return '💬';
    }
  };

  const getActivityDescription = (activity: any) => {
    const type = activity.activity_type;
    const data = activity.activity_data || {};
    
    switch (type) {
      case 'call_answered':
        return `Answered call from ${data.caller || 'unknown'}`;
      case 'email_sent':
        return `Sent email to ${data.recipient || 'recipient'}`;
      case 'task_completed':
        return `Completed task: ${data.task_name || 'Task'}`;
      case 'escalation_triggered':
        return `Escalated to human agent: ${data.reason || 'Complex issue'}`;
      case 'meeting_scheduled':
        return `Scheduled meeting with ${data.attendee || 'attendee'}`;
      default:
        return type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  const getActivityDetails = (activity: any) => {
    const data = activity.activity_data || {};
    
    if (activity.error_message) {
      return `Error: ${activity.error_message}`;
    }
    
    return data.details || data.result || JSON.stringify(data, null, 2);
  };

  const handleExport = () => {
    // Placeholder for export functionality
    console.log('Exporting activity data...');
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-start">
                <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
            <FilterIcon className="h-4 w-4 text-gray-500 mr-1" />
            <span>Filter</span>
          </button>
          <button 
            onClick={handleExport}
            className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <DownloadIcon className="h-4 w-4 text-gray-500 mr-1" />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      {activities.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No recent activity</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map(activity => (
            <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div className="flex items-start">
                <div className="h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full mr-3 text-lg">
                  {getActivityIcon(activity.activity_type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">
                        {activity.agent_instances?.instance_name || 
                         activity.agent_instances?.agent_subscriptions?.agents?.name || 
                         'Unknown Agent'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {getActivityDescription(activity)}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(activity.created_at), { addSuffix: true })}
                    </span>
                  </div>
                  
                  <div className="mt-2">
                    <button 
                      onClick={() => toggleExpanded(activity.id)}
                      className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                    >
                      <span>Details</span>
                      {expandedIds.has(activity.id) ? 
                        <ChevronUpIcon className="h-4 w-4 ml-1" /> : 
                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                      }
                    </button>
                    
                    {expandedIds.has(activity.id) && (
                      <div className="mt-2 p-3 bg-gray-50 rounded-md">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                          {getActivityDetails(activity)}
                        </pre>
                        {activity.duration_ms && (
                          <p className="text-xs text-gray-500 mt-2">
                            Duration: {activity.duration_ms}ms
                          </p>
                        )}
                        {!activity.success && (
                          <p className="text-xs text-red-600 mt-1">
                            This activity failed
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 text-center">
        <button 
          onClick={() => navigate('/activity')}
          className="text-sm text-blue-600 font-medium hover:text-blue-700"
        >
          View All Activity
        </button>
      </div>
    </div>
  );
};