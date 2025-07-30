import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { BarChart2, ArrowUp, ArrowDown, Users, MessageSquare, Clock, Zap } from 'lucide-react';
export const Analytics = () => {
  // Sample analytics data
  const analyticsData = {
    summary: {
      totalInteractions: '1.45M',
      activeUsers: '32,456',
      responseTime: '1.2s',
      successRate: '94.7%'
    },
    trends: {
      dailyInteractions: [2800, 3200, 3100, 2900, 3400, 3600, 3200, 3800, 4100, 3900, 4200, 4500, 4300, 4600],
      userGrowth: [1200, 1350, 1400, 1450, 1500, 1550, 1700, 1850, 2000, 2100, 2300, 2450, 2600, 2750],
      agentPerformance: [88, 89, 87, 90, 92, 91, 93, 94, 95, 94, 96, 97, 96, 97]
    },
    topQueries: [{
      query: 'How do I reset my password?',
      count: 1245
    }, {
      query: 'Where is my order?',
      count: 987
    }, {
      query: 'How to upgrade my plan?',
      count: 876
    }, {
      query: 'Cancel my subscription',
      count: 654
    }, {
      query: 'Connect to customer support',
      count: 543
    }],
    userSegments: [{
      name: 'Enterprise',
      percentage: 35
    }, {
      name: 'Small Business',
      percentage: 40
    }, {
      name: 'Personal',
      percentage: 25
    }]
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="mt-1 text-gray-500">
            Comprehensive insights into platform usage and performance
          </p>
        </div>
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Interactions
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.summary.totalInteractions}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>12% from last month</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Users
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.summary.activeUsers}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>8% from last month</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Avg Response Time
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.summary.responseTime}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm text-green-600">
              <ArrowDown className="h-4 w-4 mr-1" />
              <span>5% improvement</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 mr-4">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Success Rate
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.summary.successRate}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              <span>2.3% from last month</span>
            </div>
          </div>
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Daily Interactions
            </h2>
            <div className="h-64 flex items-end space-x-2">
              {analyticsData.trends.dailyInteractions.map((value, index) => <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-blue-500 rounded-t" style={{
                height: `${value / Math.max(...analyticsData.trends.dailyInteractions) * 100}%`
              }}></div>
                </div>)}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>14 days ago</span>
              <span>Today</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              User Growth
            </h2>
            <div className="h-64 flex items-end space-x-2">
              {analyticsData.trends.userGrowth.map((value, index) => <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-500 rounded-t" style={{
                height: `${value / Math.max(...analyticsData.trends.userGrowth) * 100}%`
              }}></div>
                </div>)}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>14 days ago</span>
              <span>Today</span>
            </div>
          </div>
        </div>
        {/* Additional Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:col-span-2">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Top Queries
            </h2>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Query
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Count
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {analyticsData.topQueries.map((item, index) => <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.query}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                        {item.count.toLocaleString()}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              User Segments
            </h2>
            <div className="space-y-4">
              {analyticsData.userSegments.map((segment, index) => <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">
                      {segment.name}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {segment.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'}`} style={{
                  width: `${segment.percentage}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </main>
    </div>;
};