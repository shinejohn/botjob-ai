import React from 'react';
import { TrendingUpIcon, CheckCircleIcon } from 'lucide-react';
import { useSubscriptions } from '../../hooks/useSubscriptions';
import { useCurrentUsage } from '../../hooks/useBilling';

export const QuickStats = () => {
  const { subscriptions, loading: subscriptionsLoading } = useSubscriptions();
  const { usage, loading: usageLoading } = useCurrentUsage();

  // Calculate active agents
  const activeAgents = subscriptions?.filter(sub => sub.status === 'active').length || 0;
  const totalAgentLimit = 10; // This could come from user's plan

  // Calculate usage percentage
  const currentUsage = usage?.totalCost || 0;
  const usageLimit = 150; // This could come from user's plan
  const usagePercentage = Math.min((currentUsage / usageLimit) * 100, 100);

  // Calculate total tasks from all agents
  const totalTasks = subscriptions?.reduce((sum, sub) => {
    return sum + (sub.agent_instances?.reduce((instanceSum, instance) => {
      // This would ideally come from aggregated activity logs
      return instanceSum + 100; // Placeholder
    }, 0) || 0);
  }, 0) || 1247; // Fallback to static number for now

  // Calculate average success rate
  const averageSuccessRate = subscriptions?.length > 0 
    ? subscriptions.reduce((sum, sub) => {
        const agentSuccessRate = sub.agents?.performance_metrics?.success_rate || 94.7;
        return sum + agentSuccessRate;
      }, 0) / subscriptions.length
    : 94.7;

  if (subscriptionsLoading || usageLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Active Agents */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Active Agents</p>
            <h3 className="text-2xl font-bold mt-1">{activeAgents}/{totalAgentLimit}</h3>
          </div>
          <div className="p-2 bg-blue-50 rounded-md">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <div className="mt-4">
          {activeAgents >= totalAgentLimit ? (
            <button className="text-sm text-blue-600 font-medium">
              Upgrade for more →
            </button>
          ) : (
            <button className="text-sm text-green-600 font-medium">
              {totalAgentLimit - activeAgents} slots available
            </button>
          )}
        </div>
      </div>

      {/* This Month's Usage */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">
              This Month's Usage
            </p>
            <h3 className="text-2xl font-bold mt-1">
              ${currentUsage.toFixed(0)}/${usageLimit}
            </h3>
          </div>
          <div className="p-2 bg-green-50 rounded-md">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${
                usagePercentage > 90 ? 'bg-red-500' : 
                usagePercentage > 75 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${usagePercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Tasks Completed */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Tasks Completed</p>
            <h3 className="text-2xl font-bold mt-1">{totalTasks.toLocaleString()}</h3>
          </div>
          <div className="p-2 bg-purple-50 rounded-md">
            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
          <span className="text-sm font-medium text-green-500">
            +15% from last month
          </span>
        </div>
      </div>

      {/* Success Rate */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">Success Rate</p>
            <h3 className="text-2xl font-bold mt-1">{averageSuccessRate.toFixed(1)}%</h3>
          </div>
          <div className="p-2 bg-green-50 rounded-md">
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm font-medium text-gray-600">
            {averageSuccessRate >= 95 ? 'Excellent performance' :
             averageSuccessRate >= 85 ? 'Good performance' :
             'Needs improvement'}
          </span>
        </div>
      </div>
    </div>
  );
};