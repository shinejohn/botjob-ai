import React, { useState } from 'react';
import { BarChart2, TrendingUp, Clock, DollarSign, ThumbsUp, Users, MessageSquare, Mail, Phone, Calendar } from 'lucide-react';
export const PerformanceOverview = ({
  agent
}: {
  agent: any;
}) => {
  const [timeRange, setTimeRange] = useState('7d');
  // Sample data for charts
  const usageData = {
    calls: [12, 15, 10, 18, 14, 12, 16],
    emails: [24, 18, 22, 20, 26, 23, 28],
    tasks: [8, 10, 6, 9, 12, 8, 11]
  };
  const successRateData = [94, 95, 96, 97, 96, 98, 97];
  const costProjection = {
    current: 145.5,
    projected: 580.0,
    breakdown: {
      baseFee: 29.99,
      calls: 67.5,
      emails: 32.8,
      tasks: 15.21
    }
  };
  const satisfactionData = {
    average: 4.8,
    responses: 124,
    breakdown: [2, 4, 10, 38, 70]
  };
  // Helper function to get labels for time range
  const getTimeLabels = () => {
    const today = new Date();
    const labels = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      labels.push(date.toLocaleDateString('en-US', {
        weekday: 'short'
      }));
    }
    return labels;
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Performance Overview
        </h2>
        <div className="flex space-x-2">
          <button onClick={() => setTimeRange('7d')} className={`px-3 py-1 text-sm rounded-md ${timeRange === '7d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            7 Days
          </button>
          <button onClick={() => setTimeRange('30d')} className={`px-3 py-1 text-sm rounded-md ${timeRange === '30d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            30 Days
          </button>
          <button onClick={() => setTimeRange('90d')} className={`px-3 py-1 text-sm rounded-md ${timeRange === '90d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            90 Days
          </button>
          <button onClick={() => setTimeRange('custom')} className={`px-3 py-1 text-sm rounded-md ${timeRange === 'custom' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            Custom
          </button>
        </div>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Interactions</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {agent.totalInteractions.toLocaleString()}
              </h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-md">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+12%</span>
            <span className="text-gray-500 ml-1">vs. previous period</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Success Rate</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {(agent.successRate * 100).toFixed(1)}%
              </h3>
            </div>
            <div className="p-3 bg-green-100 rounded-md">
              <BarChart2 className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+2.5%</span>
            <span className="text-gray-500 ml-1">vs. previous period</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Avg. Response Time</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {agent.responseTime} min
              </h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-md">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">-18%</span>
            <span className="text-gray-500 ml-1">faster than before</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Customer Satisfaction
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {agent.customerSatisfaction}/5
              </h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-md">
              <ThumbsUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+0.3</span>
            <span className="text-gray-500 ml-1">vs. previous period</span>
          </div>
        </div>
      </div>
      {/* Usage Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Usage by Channel
          </h3>
          <div className="h-64">
            <div className="flex h-full items-end space-x-2">
              {getTimeLabels().map((label, index) => <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col-reverse">
                    <div className="w-full bg-blue-500 rounded-t" style={{
                  height: `${usageData.calls[index] * 3}px`
                }}></div>
                    <div className="w-full bg-green-500 rounded-t" style={{
                  height: `${usageData.emails[index] * 3}px`
                }}></div>
                    <div className="w-full bg-purple-500 rounded-t" style={{
                  height: `${usageData.tasks[index] * 3}px`
                }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{label}</div>
                </div>)}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Calls</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Emails</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Tasks</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Success Rate Trend
          </h3>
          <div className="h-64">
            <div className="flex h-full items-end space-x-2">
              {getTimeLabels().map((label, index) => <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-500 rounded-t" style={{
                height: `${(successRateData[index] - 90) * 10}px`
              }}></div>
                  <div className="text-xs text-gray-500 mt-2">{label}</div>
                </div>)}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-sm text-gray-600">Baseline: 90%</div>
            <div className="text-sm font-medium text-green-600">
              Average: 96.1%
            </div>
          </div>
        </div>
      </div>
      {/* Cost and Satisfaction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Cost Breakdown & Projections
            </h3>
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-500">Current Month-to-Date</p>
              <p className="text-2xl font-bold text-gray-900">
                ${costProjection.current.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Projected Monthly Total</p>
              <p className="text-2xl font-bold text-gray-900">
                ${costProjection.projected.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Base Subscription</span>
                <span className="text-sm font-medium text-gray-900">
                  ${costProjection.breakdown.baseFee.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{
                width: `${costProjection.breakdown.baseFee / costProjection.current * 100}%`
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Phone Calls</span>
                <span className="text-sm font-medium text-gray-900">
                  ${costProjection.breakdown.calls.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{
                width: `${costProjection.breakdown.calls / costProjection.current * 100}%`
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Emails</span>
                <span className="text-sm font-medium text-gray-900">
                  ${costProjection.breakdown.emails.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{
                width: `${costProjection.breakdown.emails / costProjection.current * 100}%`
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Tasks</span>
                <span className="text-sm font-medium text-gray-900">
                  ${costProjection.breakdown.tasks.toFixed(2)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{
                width: `${costProjection.breakdown.tasks / costProjection.current * 100}%`
              }}></div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Projected costs are based on current usage patterns and may vary.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Customer Satisfaction
            </h3>
            <Users className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center mb-6">
            <div className="text-5xl font-bold text-gray-900 mr-4">
              {agent.customerSatisfaction}
            </div>
            <div>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(star => <svg key={star} className={`h-6 w-6 ${star <= Math.round(agent.customerSatisfaction) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Based on {satisfactionData.responses} responses
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map(rating => <div key={rating} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{rating} stars</div>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${rating >= 4 ? 'bg-green-500' : rating === 3 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                  width: `${satisfactionData.breakdown[rating - 1] / satisfactionData.responses * 100}%`
                }}></div>
                  </div>
                </div>
                <div className="w-10 text-sm text-gray-600">
                  {Math.round(satisfactionData.breakdown[rating - 1] / satisfactionData.responses * 100)}
                  %
                </div>
              </div>)}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">
              Top Positive Feedback
            </h4>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                • Quick response times
              </div>
              <div className="text-sm text-gray-600">
                • Accurate information provided
              </div>
              <div className="text-sm text-gray-600">
                • Professional and friendly tone
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};