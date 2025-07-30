import React, { useState } from 'react';
import { Zap, Check, ChevronRight, AlertTriangle, HelpCircle, Sliders, BarChart2, Search } from 'lucide-react';
export const TeamOptimization = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  // Sample optimization recommendations
  const recommendations = [{
    id: 'rec-1',
    title: 'Improve Technical Support Bot response time',
    description: 'The Technical Support Bot has an average response time of 8.2 seconds, which is higher than the target of 5 seconds. Optimizing its knowledge base and reducing API calls could improve performance.',
    impact: 'high',
    status: 'pending',
    category: 'performance',
    estimatedImprovement: '35%',
    difficulty: 'medium',
    affectedAgents: ['Technical Support Specialist']
  }, {
    id: 'rec-2',
    title: 'Refine handoff conditions for Sales Assistant',
    description: 'Current handoff conditions for the Sales Assistant are triggering too frequently (12% of all customer interactions). Adding more specific keyword filters could reduce unnecessary handoffs.',
    impact: 'medium',
    status: 'implemented',
    category: 'handoff',
    estimatedImprovement: '18%',
    difficulty: 'low',
    affectedAgents: ['Customer Support Bot', 'Sales Assistant']
  }, {
    id: 'rec-3',
    title: 'Add context preservation in handoffs',
    description: 'Customer context is being partially lost during handoffs between agents. Implementing a structured context object that is passed between agents would reduce redundant questions.',
    impact: 'high',
    status: 'pending',
    category: 'handoff',
    estimatedImprovement: '42%',
    difficulty: 'high',
    affectedAgents: ['All agents']
  }, {
    id: 'rec-4',
    title: 'Create specialized team for technical inquiries',
    description: 'Technical inquiries are currently handled by multiple agents with varying expertise. Creating a dedicated technical support team with specialized knowledge would improve resolution rates.',
    impact: 'medium',
    status: 'in-progress',
    category: 'team',
    estimatedImprovement: '27%',
    difficulty: 'medium',
    affectedAgents: ['Technical Support Specialist', 'Customer Support Bot']
  }, {
    id: 'rec-5',
    title: 'Implement pre-handoff customer notification',
    description: 'Customers are sometimes confused when handed off to a new agent. Adding a brief notification explaining the handoff reason would improve customer experience.',
    impact: 'low',
    status: 'pending',
    category: 'customer',
    estimatedImprovement: '15%',
    difficulty: 'low',
    affectedAgents: ['All agents']
  }];
  // Sample optimization metrics
  const optimizationMetrics = {
    implementedRecommendations: 3,
    totalRecommendations: 12,
    potentialImprovementScore: 78,
    avgHandoffReduction: 23.5,
    avgResponseTimeImprovement: 34.2,
    customerSatisfactionIncrease: 12.8
  };
  // Filter recommendations based on status and search
  const filteredRecommendations = recommendations.filter(rec => {
    // Filter by status
    if (filterStatus !== 'all' && rec.status !== filterStatus) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return rec.title.toLowerCase().includes(query) || rec.description.toLowerCase().includes(query) || rec.category.toLowerCase().includes(query) || rec.affectedAgents.some(agent => agent.toLowerCase().includes(query));
    }
    return true;
  });
  // Get impact badge color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'implemented':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Get category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'performance':
        return 'bg-purple-100 text-purple-800';
      case 'handoff':
        return 'bg-indigo-100 text-indigo-800';
      case 'team':
        return 'bg-pink-100 text-pink-800';
      case 'customer':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Team Optimization
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search recommendations..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button onClick={() => setFilterStatus('all')} className={`px-3 py-2 text-sm ${filterStatus === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              All
            </button>
            <button onClick={() => setFilterStatus('pending')} className={`px-3 py-2 text-sm ${filterStatus === 'pending' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              Pending
            </button>
            <button onClick={() => setFilterStatus('in-progress')} className={`px-3 py-2 text-sm ${filterStatus === 'in-progress' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              In Progress
            </button>
            <button onClick={() => setFilterStatus('implemented')} className={`px-3 py-2 text-sm ${filterStatus === 'implemented' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>
              Implemented
            </button>
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <Sliders className="h-5 w-5 mr-2" />
            Advanced Filters
          </button>
        </div>
      </div>
      {/* Optimization Score Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-2 flex flex-col justify-center items-center">
            <div className="relative h-36 w-36">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#eee" strokeWidth="3" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4f46e5" strokeWidth="3" strokeDasharray={`${optimizationMetrics.potentialImprovementScore}, 100`} strokeLinecap="round" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {optimizationMetrics.potentialImprovementScore}
                </div>
                <div className="text-xs text-gray-500">Optimization Score</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="text-sm text-gray-500">
                {optimizationMetrics.implementedRecommendations} of{' '}
                {optimizationMetrics.totalRecommendations} recommendations
                implemented
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: `${optimizationMetrics.implementedRecommendations / optimizationMetrics.totalRecommendations * 100}%`
              }}></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Handoff Reduction
              </div>
              <div className="flex items-end">
                <div className="text-2xl font-bold text-gray-900">
                  {optimizationMetrics.avgHandoffReduction}%
                </div>
                <div className="ml-2 text-sm text-green-600 flex items-center">
                  <ChevronRight className="h-4 w-4 transform rotate-90" />
                  Potential
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Reduced agent transfers
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Response Time
              </div>
              <div className="flex items-end">
                <div className="text-2xl font-bold text-gray-900">
                  {optimizationMetrics.avgResponseTimeImprovement}%
                </div>
                <div className="ml-2 text-sm text-green-600 flex items-center">
                  <ChevronRight className="h-4 w-4 transform rotate-90" />
                  Faster
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Improved agent response
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500 mb-1">
                Customer Satisfaction
              </div>
              <div className="flex items-end">
                <div className="text-2xl font-bold text-gray-900">
                  {optimizationMetrics.customerSatisfactionIncrease}%
                </div>
                <div className="ml-2 text-sm text-green-600 flex items-center">
                  <ChevronRight className="h-4 w-4 transform rotate-90" />
                  Increase
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Higher CSAT scores
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">
              Optimization Recommendations
            </h3>
            <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
              <HelpCircle className="h-4 w-4 mr-1" />
              How are these generated?
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredRecommendations.map(recommendation => <div key={recommendation.id} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${recommendation.impact === 'high' ? 'bg-red-100 text-red-600' : recommendation.impact === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'} mr-4`}>
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">
                      {recommendation.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      {recommendation.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(recommendation.impact)}`}>
                        {recommendation.impact.charAt(0).toUpperCase() + recommendation.impact.slice(1)}{' '}
                        Impact
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(recommendation.status)}`}>
                        {recommendation.status.charAt(0).toUpperCase() + recommendation.status.slice(1)}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(recommendation.category)}`}>
                        {recommendation.category.charAt(0).toUpperCase() + recommendation.category.slice(1)}
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <BarChart2 className="h-3 w-3 mr-1 text-green-500" />
                        <span className="mr-1">Est. Improvement:</span>
                        <span className="font-medium text-gray-900">
                          {recommendation.estimatedImprovement}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Sliders className="h-3 w-3 mr-1 text-blue-500" />
                        <span className="mr-1">Difficulty:</span>
                        <span className="font-medium text-gray-900">
                          {recommendation.difficulty.charAt(0).toUpperCase() + recommendation.difficulty.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <AlertTriangle className="h-3 w-3 mr-1 text-yellow-500" />
                        <span className="mr-1">Affects:</span>
                        <span className="font-medium text-gray-900">
                          {recommendation.affectedAgents.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {recommendation.status === 'implemented' ? <div className="flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      <Check className="h-3 w-3 mr-1" />
                      Implemented
                    </div> : <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                      Implement
                    </button>}
                </div>
              </div>
            </div>)}
          {filteredRecommendations.length === 0 && <div className="p-8 text-center">
              <p className="text-gray-500">
                No recommendations found matching your filters.
              </p>
            </div>}
        </div>
      </div>
      {/* Optimization Insights */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Optimization Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              Team Performance Trends
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">
                    Customer Support Team
                  </span>
                  <span className="text-xs text-green-600">
                    +12% improvement
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{
                  width: '78%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">Sales Team</span>
                  <span className="text-xs text-green-600">
                    +8% improvement
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: '65%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">Marketing Team</span>
                  <span className="text-xs text-yellow-600">
                    +3% improvement
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{
                  width: '42%'
                }}></div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View detailed performance analysis
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              Optimization Opportunities
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                  <Check className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Handoff optimization</span>{' '}
                    can reduce customer wait time by up to 35%
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                  <Check className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Context preservation</span>{' '}
                    between agents can eliminate 87% of redundant questions
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                  <Check className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Specialized agent teams</span>{' '}
                    can improve resolution rates by 27%
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                  <Check className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">
                      Pre-handoff notifications
                    </span>{' '}
                    can improve customer satisfaction by 15%
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                Request custom optimization analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};