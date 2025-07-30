import React from 'react';
import { PlayIcon, PauseIcon, SettingsIcon, EyeIcon } from 'lucide-react';
import { useSubscriptions } from '../../hooks/useSubscriptions';
import { useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';

export const ActiveAgents = () => {
  const navigate = useNavigate();
  const { subscriptions, loading } = useSubscriptions();

  // Transform subscriptions and instances into agent display format
  const agents = subscriptions?.flatMap(sub => 
    sub.agent_instances?.map(instance => ({
      id: instance.id,
      name: instance.instance_name || sub.agents?.name || 'Unnamed Agent',
      avatar: sub.agents?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(instance.instance_name || 'Agent')}&background=random`,
      status: instance.status,
      agentType: sub.agents?.category,
      lastActiveAt: instance.last_active_at,
      performance: sub.agents?.performance_metrics || {},
      subscriptionId: sub.id,
      agentId: sub.agent_id
    }))
  ).filter(Boolean) || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'paused': return 'bg-yellow-500';
      case 'training': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getActivityText = (agent: any) => {
    if (agent.status === 'training') {
      return 'Currently in training mode';
    }
    if (agent.lastActiveAt) {
      return `Last active ${formatDistanceToNow(new Date(agent.lastActiveAt), { addSuffix: true })}`;
    }
    return 'No recent activity';
  };

  const getPerformanceMetric = (performance: any) => {
    if (performance.success_rate) {
      return {
        metric: 'Success Rate',
        value: `${performance.success_rate}%`
      };
    }
    if (performance.avg_response_time) {
      return {
        metric: 'Avg Response',
        value: `${performance.avg_response_time}ms`
      };
    }
    return {
      metric: 'Performance',
      value: 'N/A'
    };
  };

  const handlePauseResume = async (agent: any) => {
    // This would call the subscription service to pause/resume
    console.log(`${agent.status === 'active' ? 'Pausing' : 'Resuming'} agent:`, agent.id);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mr-3"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900">Active Agents</h2>
        <button 
          onClick={() => navigate('/agents')}
          className="text-sm text-blue-600 font-medium hover:text-blue-700"
        >
          View All
        </button>
      </div>
      
      {agents.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No active agents yet</p>
          <button 
            onClick={() => navigate('/marketplace')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Browse Marketplace →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.slice(0, 6).map(agent => (
            <div key={agent.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <img 
                  src={agent.avatar} 
                  alt={agent.name} 
                  className="h-12 w-12 rounded-full object-cover mr-3" 
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className={`inline-block h-2 w-2 rounded-full mr-2 ${getStatusColor(agent.status)}`}></span>
                    <span className="text-sm text-gray-500 capitalize">{agent.status}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-3">{getActivityText(agent)}</p>
              
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  {(() => {
                    const perf = getPerformanceMetric(agent.performance);
                    return (
                      <>
                        <span className="font-medium">{perf.metric}:</span>{' '}
                        {perf.value}
                      </>
                    );
                  })()}
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => navigate(`/agents/${agent.subscriptionId}/details`)}
                    className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
                    title="View Details"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => navigate(`/agents/${agent.subscriptionId}/settings`)}
                    className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
                    title="Settings"
                  >
                    <SettingsIcon className="h-5 w-5" />
                  </button>
                  {agent.status === 'active' ? (
                    <button 
                      onClick={() => handlePauseResume(agent)}
                      className="p-1 text-yellow-500 hover:text-yellow-700 rounded-full hover:bg-yellow-50"
                      title="Pause Agent"
                    >
                      <PauseIcon className="h-5 w-5" />
                    </button>
                  ) : agent.status === 'paused' ? (
                    <button 
                      onClick={() => handlePauseResume(agent)}
                      className="p-1 text-green-500 hover:text-green-700 rounded-full hover:bg-green-50"
                      title="Resume Agent"
                    >
                      <PlayIcon className="h-5 w-5" />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};