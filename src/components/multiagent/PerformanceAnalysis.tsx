import React, { useState } from 'react';
import { BarChart2, Calendar, Download, Filter, HelpCircle, ArrowRight, Zap, AlertTriangle, Search } from 'lucide-react';
export const PerformanceAnalysis = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [teamFilter, setTeamFilter] = useState('all');
  // Sample performance data
  const performanceData = {
    // Overall metrics
    totalInteractions: 2485,
    successfulHandoffs: 187,
    failedHandoffs: 23,
    avgHandoffTime: 12.3,
    // Handoff success rate by team
    handoffSuccessRates: {
      'Customer Support Team': 89.4,
      'Sales Team': 94.2,
      'Marketing Team': 78.5
    },
    // Agent correlation data
    agentCorrelations: [{
      sourceAgent: 'Customer Support Bot',
      targetAgent: 'Technical Support Specialist',
      successRate: 92.7,
      avgResponseTime: 8.2,
      customerSatisfaction: 4.5,
      totalHandoffs: 112
    }, {
      sourceAgent: 'Customer Support Bot',
      targetAgent: 'Sales Assistant',
      successRate: 95.1,
      avgResponseTime: 6.5,
      customerSatisfaction: 4.7,
      totalHandoffs: 82
    }, {
      sourceAgent: 'Sales Assistant',
      targetAgent: 'Data Analyst Assistant',
      successRate: 87.3,
      avgResponseTime: 15.8,
      customerSatisfaction: 4.2,
      totalHandoffs: 32
    }, {
      sourceAgent: 'Marketing Content Creator',
      targetAgent: 'Sales Assistant',
      successRate: 91.5,
      avgResponseTime: 10.2,
      customerSatisfaction: 4.4,
      totalHandoffs: 24
    }],
    // Daily handoff data
    dailyHandoffs: [{
      day: 'Mon',
      successful: 32,
      failed: 3
    }, {
      day: 'Tue',
      successful: 28,
      failed: 4
    }, {
      day: 'Wed',
      successful: 35,
      failed: 2
    }, {
      day: 'Thu',
      successful: 42,
      failed: 5
    }, {
      day: 'Fri',
      successful: 38,
      failed: 6
    }, {
      day: 'Sat',
      successful: 22,
      failed: 2
    }, {
      day: 'Sun',
      successful: 18,
      failed: 1
    }],
    // Handoff reasons
    handoffReasons: [{
      reason: 'Technical question',
      count: 87,
      percentage: 41.4
    }, {
      reason: 'Pricing inquiry',
      count: 53,
      percentage: 25.2
    }, {
      reason: 'Complex request',
      count: 34,
      percentage: 16.2
    }, {
      reason: 'Customer frustration',
      count: 21,
      percentage: 10.0
    }, {
      reason: 'Data analysis needed',
      count: 15,
      percentage: 7.2
    }],
    // Common issues
    commonIssues: [{
      issue: 'Context loss during handoff',
      count: 12,
      severity: 'high'
    }, {
      issue: 'Delay in agent response after handoff',
      count: 8,
      severity: 'medium'
    }, {
      issue: 'Redundant information requests',
      count: 15,
      severity: 'medium'
    }, {
      issue: 'Incorrect agent selection',
      count: 5,
      severity: 'high'
    }, {
      issue: 'Customer repeating information',
      count: 18,
      severity: 'low'
    }]
  };
  // Filter agent correlations based on team filter
  const filteredCorrelations = teamFilter === 'all' ? performanceData.agentCorrelations : performanceData.agentCorrelations.filter(correlation => {
    // This is a simplified filter. In a real app, you would have a mapping of agents to teams
    if (teamFilter === 'Customer Support Team') {
      return correlation.sourceAgent === 'Customer Support Bot' || correlation.targetAgent === 'Technical Support Specialist';
    } else if (teamFilter === 'Sales Team') {
      return correlation.sourceAgent === 'Sales Assistant' || correlation.targetAgent === 'Sales Assistant';
    } else if (teamFilter === 'Marketing Team') {
      return correlation.sourceAgent === 'Marketing Content Creator';
    }
    return false;
  });
  // Calculate handoff success rate
  const handoffSuccessRate = (performanceData.successfulHandoffs / (performanceData.successfulHandoffs + performanceData.failedHandoffs) * 100).toFixed(1);
  // Get issue severity color
  const getIssueSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };
  // Get correlation score color
  const getCorrelationScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 85) return 'text-blue-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Performance Analysis
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <select value={teamFilter} onChange={e => setTeamFilter(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all">All Teams</option>
              <option value="Customer Support Team">
                Customer Support Team
              </option>
              <option value="Sales Team">Sales Team</option>
              <option value="Marketing Team">Marketing Team</option>
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button onClick={() => setTimeRange('7d')} className={`px-3 py-2 text-sm ${timeRange === '7d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              7 Days
            </button>
            <button onClick={() => setTimeRange('30d')} className={`px-3 py-2 text-sm ${timeRange === '30d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              30 Days
            </button>
            <button onClick={() => setTimeRange('90d')} className={`px-3 py-2 text-sm ${timeRange === '90d' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              90 Days
            </button>
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <Download className="h-5 w-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">
              Total Interactions
            </h3>
            <BarChart2 className="h-5 w-5 text-blue-500" />
          </div>
          <div className="flex items-end">
            <div className="text-2xl font-bold text-gray-900">
              {performanceData.totalInteractions.toLocaleString()}
            </div>
            <div className="ml-2 text-sm text-green-600">+12.4%</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">
              Handoff Success Rate
            </h3>
            <BarChart2 className="h-5 w-5 text-green-500" />
          </div>
          <div className="flex items-end">
            <div className="text-2xl font-bold text-gray-900">
              {handoffSuccessRate}%
            </div>
            <div className="ml-2 text-sm text-green-600">+3.2%</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">
              Total Handoffs
            </h3>
            <BarChart2 className="h-5 w-5 text-purple-500" />
          </div>
          <div className="flex items-end">
            <div className="text-2xl font-bold text-gray-900">
              {performanceData.successfulHandoffs + performanceData.failedHandoffs}
            </div>
            <div className="ml-2 text-sm text-green-600">+8.7%</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">
              Avg. Handoff Time
            </h3>
            <BarChart2 className="h-5 w-5 text-orange-500" />
          </div>
          <div className="flex items-end">
            <div className="text-2xl font-bold text-gray-900">
              {performanceData.avgHandoffTime}s
            </div>
            <div className="ml-2 text-sm text-red-600">+1.5s</div>
          </div>
        </div>
      </div>
      {/* Handoff Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Handoff Performance
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-600">Successful</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
              <span className="text-xs text-gray-600">Failed</span>
            </div>
          </div>
        </div>
        <div className="h-64">
          <div className="flex h-full items-end space-x-8">
            {performanceData.dailyHandoffs.map((day, index) => <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col-reverse">
                  <div className="w-full bg-blue-500 rounded-t" style={{
                height: `${day.successful * 2}px`
              }}></div>
                  <div className="w-full bg-red-500 rounded-t" style={{
                height: `${day.failed * 2}px`
              }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">{day.day}</div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Agent Correlation Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Agent Correlation Analysis
          </h3>
          <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <HelpCircle className="h-4 w-4 mr-1" />
            How is this calculated?
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source Agent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Target Agent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Success Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Response Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Satisfaction
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Handoffs
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCorrelations.map((correlation, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {correlation.sourceAgent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      {correlation.targetAgent}
                      <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${getCorrelationScoreColor(correlation.successRate)}`}>
                      {correlation.successRate}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {correlation.avgResponseTime}s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-1">
                        {correlation.customerSatisfaction}
                      </span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <svg key={i} className={`h-4 w-4 ${i < Math.floor(correlation.customerSatisfaction) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {correlation.totalHandoffs}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Handoff Reasons */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Handoff Reasons
          </h3>
          <div className="space-y-4">
            {performanceData.handoffReasons.map((reason, index) => <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">{reason.reason}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {reason.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: `${reason.percentage}%`
              }}></div>
                </div>
              </div>)}
          </div>
        </div>
        {/* Common Issues */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Common Issues
          </h3>
          <div className="space-y-4">
            {performanceData.commonIssues.map((issue, index) => <div key={index} className="flex items-start">
                <div className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${issue.severity === 'high' ? 'bg-red-100 text-red-600' : issue.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'} mr-3`}>
                  <AlertTriangle className="h-3 w-3" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {issue.issue}
                    </span>
                    <span className={`text-xs font-medium ${getIssueSeverityColor(issue.severity)}`}>
                      {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Occurred {issue.count} times in the selected period
                  </p>
                </div>
              </div>)}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              <Zap className="h-4 w-4 mr-1" />
              View Optimization Recommendations
            </button>
          </div>
        </div>
      </div>
      {/* Team Performance Comparison */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Team Performance Comparison
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(performanceData.handoffSuccessRates).map(([team, rate], index) => <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  {team}
                </h4>
                <div className="flex items-center mb-2">
                  <div className="text-2xl font-bold text-gray-900 mr-2">
                    {rate}%
                  </div>
                  <div className={`text-sm ${rate > 90 ? 'text-green-600' : rate > 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {rate > 90 ? 'Excellent' : rate > 80 ? 'Good' : 'Needs Improvement'}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className={`h-2.5 rounded-full ${rate > 90 ? 'bg-green-600' : rate > 80 ? 'bg-yellow-600' : 'bg-red-600'}`} style={{
              width: `${rate}%`
            }}></div>
                </div>
                <div className="text-xs text-gray-500">
                  Based on {index === 0 ? 112 : index === 1 ? 82 : 24} handoffs
                  in the selected period
                </div>
              </div>)}
        </div>
      </div>
    </div>;
};