import React, { useState } from 'react';
import { Check, AlertTriangle, HelpCircle, ArrowRight, Zap, Plus, X } from 'lucide-react';
export const PlanManagement = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [pricingModel, setPricingModel] = useState('fixed');
  const [showAddOns, setShowAddOns] = useState(false);
  // Sample plan data
  const plans = [{
    id: 'starter',
    name: 'Business Starter',
    price: 149.99,
    description: 'Perfect for small businesses and startups',
    features: ['3 AI agents included', 'Unlimited phone minutes', 'Email integration', 'Calendar management', 'Basic payment processing', '8am-8pm support'],
    limits: {
      agents: 3,
      minutes: 1500,
      messages: 5000,
      users: 5
    },
    current: true
  }, {
    id: 'professional',
    name: 'Business Professional',
    price: 299.99,
    description: 'Ideal for growing businesses with advanced needs',
    features: ['7 AI agents included', 'Unlimited phone minutes', 'Email & SMS integration', 'Calendar management', 'Advanced payment processing', '24/7 priority support', 'Custom training', 'API access'],
    limits: {
      agents: 7,
      minutes: 4000,
      messages: 15000,
      users: 15
    },
    recommended: true
  }, {
    id: 'enterprise',
    name: 'Enterprise',
    price: 599.99,
    description: 'Full-featured solution for large organizations',
    features: ['15 AI agents included', 'Unlimited everything', 'All integrations', 'Advanced analytics', 'Dedicated account manager', 'Custom development', 'SLA guarantees', 'On-premise options'],
    limits: {
      agents: 15,
      minutes: 'Unlimited',
      messages: 'Unlimited',
      users: 'Unlimited'
    }
  }];
  // Sample add-ons
  const addOns = [{
    id: 'additional-agent',
    name: 'Additional Agent',
    price: 49.99,
    description: 'Add one more AI agent to your plan',
    recommended: true
  }, {
    id: 'premium-voice',
    name: 'Premium Voice Package',
    price: 29.99,
    description: 'Higher quality voice with more natural speech patterns'
  }, {
    id: 'custom-training',
    name: 'Custom Training Session',
    price: 199.99,
    description: '2-hour session with AI training specialist'
  }, {
    id: 'advanced-analytics',
    name: 'Advanced Analytics Package',
    price: 79.99,
    description: 'Detailed performance metrics and custom reports'
  }];
  // Current plan is the one marked as current
  const currentPlan = plans.find(plan => plan.current);
  // Handle plan selection
  const handleSelectPlan = plan => {
    setSelectedPlan(plan);
    setShowUpgradeModal(true);
  };
  // Handle pricing model toggle
  const handlePricingModelChange = model => {
    setPricingModel(model);
  };
  return <div>
      {/* Current Plan */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Current Plan</h2>
            <p className="text-sm text-gray-500">
              Your subscription renews on June 1, 2023
            </p>
          </div>
          <div className="flex items-center">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full flex items-center">
              <Check className="h-4 w-4 mr-1" />
              Active
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {currentPlan.name}
              </h3>
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                Current Plan
              </span>
            </div>
            <p className="text-gray-600 mb-4">{currentPlan.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">AI Agents</div>
                <div className="text-lg font-medium text-gray-900">
                  {currentPlan.limits.agents} Included
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Team Members</div>
                <div className="text-lg font-medium text-gray-900">
                  {typeof currentPlan.limits.users === 'string' ? currentPlan.limits.users : `${currentPlan.limits.users} Users`}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Minutes</div>
                <div className="text-lg font-medium text-gray-900">
                  {typeof currentPlan.limits.minutes === 'string' ? currentPlan.limits.minutes : `${currentPlan.limits.minutes.toLocaleString()} / month`}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Messages</div>
                <div className="text-lg font-medium text-gray-900">
                  {typeof currentPlan.limits.messages === 'string' ? currentPlan.limits.messages : `${currentPlan.limits.messages.toLocaleString()} / month`}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">
                Plan Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {currentPlan.features.map((feature, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-500">Monthly Subscription</div>
              <div className="text-3xl font-bold text-gray-900">
                ${currentPlan.price.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500">
                Plus usage-based charges
              </div>
            </div>
            <div className="space-y-3">
              <button onClick={() => setShowAddOns(true)} className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center justify-center">
                <Plus className="h-4 w-4 mr-2" />
                Add Features
              </button>
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Change Plan
              </button>
              <button className="w-full py-2 px-4 bg-white text-red-600 border border-red-300 rounded-md hover:bg-red-50">
                Cancel Subscription
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <p className="text-xs text-gray-600">
                  Canceling your subscription will deactivate all your AI agents
                  at the end of your billing period on June 1, 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Model Toggle */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Pricing Model</h2>
          <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <HelpCircle className="h-4 w-4 mr-1" />
            Compare pricing models
          </button>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className={`flex-1 p-4 rounded-lg border ${pricingModel === 'fixed' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} cursor-pointer`} onClick={() => handlePricingModelChange('fixed')}>
            <div className="flex items-start">
              <div className={`h-5 w-5 rounded-full ${pricingModel === 'fixed' ? 'bg-blue-500' : 'border border-gray-300'} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}>
                {pricingModel === 'fixed' && <Check className="h-3 w-3 text-white" />}
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-900">
                  Fixed + Overage
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pay a fixed monthly fee with included usage limits. Additional
                  usage charged at standard rates.
                </p>
                <div className="mt-3 text-sm">
                  <div className="flex items-center text-green-600 mb-1">
                    <Check className="h-4 w-4 mr-1" />
                    Predictable base cost
                  </div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Check className="h-4 w-4 mr-1" />
                    Good for consistent usage
                  </div>
                  <div className="flex items-center text-amber-600">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Overages can be expensive
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-1 p-4 rounded-lg border ${pricingModel === 'usage' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} cursor-pointer`} onClick={() => handlePricingModelChange('usage')}>
            <div className="flex items-start">
              <div className={`h-5 w-5 rounded-full ${pricingModel === 'usage' ? 'bg-blue-500' : 'border border-gray-300'} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}>
                {pricingModel === 'usage' && <Check className="h-3 w-3 text-white" />}
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-900">
                  Usage-Based
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pay only for what you use with no monthly minimums. Usage
                  charged at standard rates.
                </p>
                <div className="mt-3 text-sm">
                  <div className="flex items-center text-green-600 mb-1">
                    <Check className="h-4 w-4 mr-1" />
                    No wasted resources
                  </div>
                  <div className="flex items-center text-green-600 mb-1">
                    <Check className="h-4 w-4 mr-1" />
                    Scales with your needs
                  </div>
                  <div className="flex items-center text-amber-600">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Less predictable monthly cost
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-start">
            <HelpCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              You can change your pricing model once per billing cycle. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
        </div>
      </div>
      {/* Available Plans */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          Available Plans
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map(plan => <div key={plan.id} className={`border rounded-lg overflow-hidden ${plan.recommended ? 'border-blue-500 shadow-md' : 'border-gray-200'}`}>
              {plan.recommended && <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                  Recommended
                </div>}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ${plan.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.slice(0, 5).map((feature, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>)}
                  {plan.features.length > 5 && <li className="text-sm text-blue-600">
                      +{plan.features.length - 5} more features
                    </li>}
                </ul>
                <button onClick={() => handleSelectPlan(plan)} className={`w-full py-2 rounded-md font-medium ${plan.current ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`} disabled={plan.current}>
                  {plan.current ? 'Current Plan' : 'Select Plan'}
                </button>
              </div>
            </div>)}
        </div>
        <div className="mt-6 text-center">
          <button className="text-blue-600 font-medium hover:text-blue-800">
            Need a custom plan? Contact sales
          </button>
        </div>
      </div>
      {/* Add-ons Section */}
      {showAddOns && <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">
              Available Add-ons
            </h2>
            <button onClick={() => setShowAddOns(false)} className="text-gray-400 hover:text-gray-500">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map(addon => <div key={addon.id} className={`p-4 rounded-lg border ${addon.recommended ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-medium text-gray-900">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {addon.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">
                      ${addon.price.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">per month</div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  {addon.recommended && <span className="text-xs text-blue-600 flex items-center">
                      <Zap className="h-3 w-3 mr-1" />
                      Popular add-on
                    </span>}
                  <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                    Add to Plan
                  </button>
                </div>
              </div>)}
          </div>
        </div>}
      {/* Upgrade Modal */}
      {showUpgradeModal && selectedPlan && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Upgrade to {selectedPlan.name}
                </h3>
                <button onClick={() => setShowUpgradeModal(false)} className="text-gray-400 hover:text-gray-500">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Plan Comparison
                </h4>
                <div className="flex border-b border-gray-200 pb-4 mb-4">
                  <div className="w-1/3"></div>
                  <div className="w-1/3 text-center">
                    <div className="font-medium text-gray-900">
                      Current Plan
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentPlan.name}
                    </div>
                  </div>
                  <div className="w-1/3 text-center">
                    <div className="font-medium text-blue-600">New Plan</div>
                    <div className="text-sm text-gray-500">
                      {selectedPlan.name}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-1/3 text-sm text-gray-600">Price</div>
                    <div className="w-1/3 text-center font-medium text-gray-900">
                      ${currentPlan.price.toFixed(2)}/mo
                    </div>
                    <div className="w-1/3 text-center font-medium text-blue-600">
                      ${selectedPlan.price.toFixed(2)}/mo
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-sm text-gray-600">AI Agents</div>
                    <div className="w-1/3 text-center font-medium text-gray-900">
                      {currentPlan.limits.agents}
                    </div>
                    <div className="w-1/3 text-center font-medium text-blue-600">
                      {selectedPlan.limits.agents}
                      {selectedPlan.limits.agents > currentPlan.limits.agents && <span className="text-green-500 ml-1">
                          +
                          {selectedPlan.limits.agents - currentPlan.limits.agents}
                        </span>}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-sm text-gray-600">Minutes</div>
                    <div className="w-1/3 text-center font-medium text-gray-900">
                      {typeof currentPlan.limits.minutes === 'string' ? currentPlan.limits.minutes : currentPlan.limits.minutes.toLocaleString()}
                    </div>
                    <div className="w-1/3 text-center font-medium text-blue-600">
                      {typeof selectedPlan.limits.minutes === 'string' ? selectedPlan.limits.minutes : selectedPlan.limits.minutes.toLocaleString()}
                      {typeof selectedPlan.limits.minutes !== 'string' && typeof currentPlan.limits.minutes !== 'string' && selectedPlan.limits.minutes > currentPlan.limits.minutes && <span className="text-green-500 ml-1">
                            +
                            {(selectedPlan.limits.minutes - currentPlan.limits.minutes).toLocaleString()}
                          </span>}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-sm text-gray-600">Messages</div>
                    <div className="w-1/3 text-center font-medium text-gray-900">
                      {typeof currentPlan.limits.messages === 'string' ? currentPlan.limits.messages : currentPlan.limits.messages.toLocaleString()}
                    </div>
                    <div className="w-1/3 text-center font-medium text-blue-600">
                      {typeof selectedPlan.limits.messages === 'string' ? selectedPlan.limits.messages : selectedPlan.limits.messages.toLocaleString()}
                      {typeof selectedPlan.limits.messages !== 'string' && typeof currentPlan.limits.messages !== 'string' && selectedPlan.limits.messages > currentPlan.limits.messages && <span className="text-green-500 ml-1">
                            +
                            {(selectedPlan.limits.messages - currentPlan.limits.messages).toLocaleString()}
                          </span>}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-sm text-gray-600">
                      Team Members
                    </div>
                    <div className="w-1/3 text-center font-medium text-gray-900">
                      {typeof currentPlan.limits.users === 'string' ? currentPlan.limits.users : currentPlan.limits.users}
                    </div>
                    <div className="w-1/3 text-center font-medium text-blue-600">
                      {typeof selectedPlan.limits.users === 'string' ? selectedPlan.limits.users : selectedPlan.limits.users}
                      {typeof selectedPlan.limits.users !== 'string' && typeof currentPlan.limits.users !== 'string' && selectedPlan.limits.users > currentPlan.limits.users && <span className="text-green-500 ml-1">
                            +
                            {selectedPlan.limits.users - currentPlan.limits.users}
                          </span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  New Features
                </h4>
                <div className="bg-blue-50 rounded-md p-4 border border-blue-100">
                  <ul className="space-y-2">
                    {selectedPlan.features.filter(feature => !currentPlan.features.includes(feature)).map((feature, index) => <li key={index} className="flex items-center text-sm text-blue-800">
                          <Plus className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>)}
                    {selectedPlan.features.filter(feature => !currentPlan.features.includes(feature)).length === 0 && <li className="text-sm text-blue-800">
                        All features from your current plan, with higher usage
                        limits
                      </li>}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">
                      Price Difference
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      +${(selectedPlan.price - currentPlan.price).toFixed(2)}
                      /month
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">New Total</div>
                    <div className="text-xl font-bold text-blue-600">
                      ${selectedPlan.price.toFixed(2)}/month
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Your plan will be upgraded immediately. You'll be charged a
                  prorated amount for the remainder of your current billing
                  period.
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowUpgradeModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Confirm Upgrade
              </button>
            </div>
          </div>
        </div>}
    </div>;
};