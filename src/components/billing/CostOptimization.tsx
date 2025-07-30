import React, { useState } from 'react';
import { TrendingDown, Info, AlertTriangle, Check, ArrowRight, Settings, BarChart2, Clock, Users } from 'lucide-react';
export const CostOptimization = () => {
  const [showRecommendationDetails, setShowRecommendationDetails] = useState(null);
  const recommendations = [{
    id: 1,
    title: 'Consolidate Customer Support Agents',
    description: 'You have 3 similar customer support agents with overlapping capabilities. Consolidating them could reduce costs by up to 15%.',
    impact: 'high',
    estimatedSavings: 45.75,
    details: 'Our analysis shows that the "Customer Support Bot", the "Email Support Agent", and the "Chat Support Agent" have 78% overlapping capabilities. By merging these into a single agent with conditional workflows, you can maintain the same quality of service while reducing resource usage.'
  }, {
    id: 2,
    title: 'Optimize Scheduled Runs',
    description: 'Several agents are running on schedules with low utilization. Adjusting schedules could save up to 10% on these agents.',
    impact: 'medium',
    estimatedSavings: 22.15,
    details: 'The "Data Analyst Assistant" is currently scheduled to run every 4 hours, but our analysis shows it\' s only performing meaningful work',
    '40': '% of those runs, .Adjusting to run every',
    '8': 'hours during business hours would maintain effectiveness',
    while: "reducing costs ., ',:"
  }, {
    id: 3,
    title: 'Upgrade to Annual Billing',
    description: 'Switch from monthly to annual billing to receive a 10% discount on your base subscription.',
    impact: 'medium',
    estimatedSavings: 179.88,
    details: 'Your current monthly base subscription is $149.99 ($1,799.88 annually). By switching to annual billing, you would save $179.88 per year.'
  }, {
    id: 4,
    title: 'Implement Usage Caps',
    description: 'Set usage caps on development agents to prevent unexpected charges during testing.',
    impact: 'low',
    estimatedSavings: 18.5,
    details: 'Your development agents occasionally exceed expected usage during testing phases. Setting appropriate caps would prevent unexpected charges while maintaining development velocity.'
  }];
  const usageInsights = [{
    title: 'Peak Usage Times',
    description: 'Your agents are most active between 9am-11am and 2pm-4pm EST.',
    icon: Clock
  }, {
    title: 'User Adoption',
    description: '72% of your team members actively use AI agents at least weekly.',
    icon: Users
  }, {
    title: 'Resource Allocation',
    description: '60% of your usage is from customer-facing agents, 40% internal.',
    icon: BarChart2
  }, {
    title: 'Efficiency Opportunities',
    description: 'Prompt optimization could reduce token usage by approximately 15%.',
    icon: Settings
  }];
  // Get impact color
  const getImpactColor = impact => {
    switch (impact) {
      case 'high':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'medium':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'low':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };
  // Calculate total potential savings
  const totalPotentialSavings = recommendations.reduce((total, rec) => total + rec.estimatedSavings, 0);
  return <div>
      {/* Summary Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-md p-6 mb-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <TrendingDown className="h-6 w-6 mr-2" />
              Cost Optimization Center
            </h2>
            <p className="text-blue-100 mb-4 md:mb-0">
              Optimize your AI usage and reduce costs with our personalized
              recommendations.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-sm text-blue-50">Potential Monthly Savings</p>
            <p className="text-2xl font-bold">
              ${totalPotentialSavings.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommendations */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Optimization Recommendations
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Based on your usage patterns and billing history
              </p>
            </div>
            <div className="divide-y divide-gray-200">
              {recommendations.map(rec => <div key={rec.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex-1">
                      <h4 className="text-md font-medium text-gray-900 mb-1">
                        {rec.title}
                      </h4>
                      <p className="text-sm text-gray-500">{rec.description}</p>
                    </div>
                    <div className="mt-3 md:mt-0 flex items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getImpactColor(rec.impact)} mr-4`}>
                        {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)}{' '}
                        Impact
                      </span>
                      <span className="text-green-600 font-medium">
                        -${rec.estimatedSavings.toFixed(2)}/mo
                      </span>
                    </div>
                  </div>
                  {showRecommendationDetails === rec.id ? <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
                      <p className="text-sm text-gray-700 mb-4">
                        {rec.details}
                      </p>
                      <div className="flex justify-between items-center">
                        <button onClick={() => setShowRecommendationDetails(null)} className="text-sm text-gray-600 hover:text-gray-800">
                          Hide Details
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center">
                          Apply Recommendation
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div> : <div className="flex justify-end">
                      <button onClick={() => setShowRecommendationDetails(rec.id)} className="text-sm text-blue-600 hover:text-blue-800">
                        View Details
                      </button>
                    </div>}
                </div>)}
            </div>
          </div>
        </div>

        {/* Usage Insights & Tips */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Usage Insights
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Understanding your AI consumption patterns
              </p>
            </div>
            <div className="p-6 space-y-5">
              {usageInsights.map((insight, index) => <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <insight.icon className="h-5 w-5 text-blue-500 mt-0.5" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      {insight.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {insight.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Cost-Saving Tips
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Use shorter, more specific prompts to reduce token usage
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Implement caching for common queries to reduce redundant API
                    calls
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Set usage alerts to be notified when approaching limits
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Schedule batch processing during off-peak hours for
                    non-urgent tasks
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-800">
                      Need personalized guidance?
                    </h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Schedule a consultation with our AI efficiency experts to
                      get tailored recommendations for your specific use cases.
                    </p>
                    <button className="mt-3 text-sm text-blue-700 font-medium hover:text-blue-800">
                      Book a Consultation →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};