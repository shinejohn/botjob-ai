import React from 'react';
import { CheckCircle, Clock, Award, BarChart2, Activity } from 'lucide-react';
export const AgentPerformance = ({
  agent
}: {
  agent: any;
}) => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Performance Metrics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Success Rate */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {agent.successRate}
          </div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        {/* Response Time */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {agent.responseTime}
          </div>
          <div className="text-sm text-gray-600">Response Time</div>
        </div>
        {/* Satisfaction */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
            <Award className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {agent.satisfaction}
          </div>
          <div className="text-sm text-gray-600">Satisfaction</div>
        </div>
        {/* Uptime */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
            <Activity className="h-6 w-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{agent.uptime}</div>
          <div className="text-sm text-gray-600">Uptime</div>
        </div>
      </div>
      {/* Tasks Completed Chart */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Tasks Completed</h3>
          <div className="text-lg font-bold text-gray-900">
            {agent.tasksCompleted}
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-end space-x-2 h-40">
            {/* This would be a real chart in production */}
            {[35, 45, 60, 75, 65, 90, 85].map((height, index) => <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-blue-500 rounded-t-sm" style={{
              height: `${height}%`
            }}></div>
                <div className="text-xs text-gray-500 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Comparison to Similar Agents */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Performance Compared to Similar Agents
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                Response Time
              </span>
              <span className="text-sm font-medium text-green-600">
                20% faster
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{
              width: '80%'
            }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                Accuracy
              </span>
              <span className="text-sm font-medium text-green-600">
                5% higher
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{
              width: '75%'
            }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                Customer Satisfaction
              </span>
              <span className="text-sm font-medium text-green-600">
                12% higher
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{
              width: '85%'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};