import React, { useState } from 'react';
import { GitMerge, Plus, Edit, Trash2, Search, Filter, MoreHorizontal, Save, ArrowRight, AlertTriangle, Check, HelpCircle, MessageSquare, Mail, Phone, Calendar } from 'lucide-react';
export const HandoffRules = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  // Sample handoff rules data
  const handoffRules = [{
    id: 'rule-1',
    name: 'Technical Issue Escalation',
    description: 'Escalate technical issues to specialist',
    category: 'Support',
    status: 'active',
    sourceAgent: 'Customer Support Bot',
    targetAgent: 'Technical Support Specialist',
    conditions: ['Contains technical keywords', 'Customer frustration detected', 'Multiple back-and-forth exchanges'],
    triggers: 3,
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString() // 2 days ago
  }, {
    id: 'rule-2',
    name: 'Sales Opportunity Handoff',
    description: 'Transfer qualified leads to sales team',
    category: 'Sales',
    status: 'active',
    sourceAgent: 'Customer Support Bot',
    targetAgent: 'Sales Assistant',
    conditions: ['Pricing question detected', 'Budget discussion initiated', 'Demo request mentioned'],
    triggers: 12,
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString() // 5 days ago
  }, {
    id: 'rule-3',
    name: 'Data Analysis Request',
    description: 'Transfer data requests to analyst',
    category: 'Analytics',
    status: 'inactive',
    sourceAgent: 'Sales Assistant',
    targetAgent: 'Data Analyst Assistant',
    conditions: ['Request for metrics or reports', 'Mention of data analysis', 'Performance statistics requested'],
    triggers: 0,
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
  }];
  // Sample agents for rule creation
  const availableAgents = [{
    id: 'agent-1',
    name: 'Customer Support Bot',
    category: 'Support',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'agent-2',
    name: 'Sales Assistant',
    category: 'Sales',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'agent-3',
    name: 'Data Analyst Assistant',
    category: 'Analytics',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'agent-6',
    name: 'Technical Support Specialist',
    category: 'Support',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }];
  // Sample condition types
  const conditionTypes = [{
    id: 'keyword',
    name: 'Keyword Detection',
    description: 'Trigger when specific keywords are mentioned'
  }, {
    id: 'sentiment',
    name: 'Sentiment Analysis',
    description: 'Trigger based on customer sentiment'
  }, {
    id: 'intent',
    name: 'Intent Recognition',
    description: 'Trigger when specific intent is detected'
  }, {
    id: 'duration',
    name: 'Conversation Duration',
    description: 'Trigger after conversation exceeds time limit'
  }, {
    id: 'repetition',
    name: 'Repetition Detection',
    description: 'Trigger when customer repeats similar questions'
  }];
  // Sample channel types
  const channelTypes = [{
    id: 'all',
    name: 'All Channels',
    icon: <MessageSquare className="h-4 w-4" />
  }, {
    id: 'chat',
    name: 'Chat',
    icon: <MessageSquare className="h-4 w-4" />
  }, {
    id: 'email',
    name: 'Email',
    icon: <Mail className="h-4 w-4" />
  }, {
    id: 'phone',
    name: 'Phone',
    icon: <Phone className="h-4 w-4" />
  }, {
    id: 'calendar',
    name: 'Calendar',
    icon: <Calendar className="h-4 w-4" />
  }];
  // Available categories for filtering
  const categories = [{
    value: 'all',
    label: 'All Categories'
  }, {
    value: 'Support',
    label: 'Support'
  }, {
    value: 'Sales',
    label: 'Sales'
  }, {
    value: 'Analytics',
    label: 'Analytics'
  }, {
    value: 'Marketing',
    label: 'Marketing'
  }];
  // New rule state
  const [newRule, setNewRule] = useState({
    name: '',
    description: '',
    category: 'Support',
    sourceAgent: '',
    targetAgent: '',
    channel: 'all',
    conditions: [] as string[],
    isActive: true
  });
  // Current condition being added
  const [currentCondition, setCurrentCondition] = useState('');
  // Filter handoff rules based on search and category filter
  const filteredRules = handoffRules.filter(rule => {
    // Filter by category
    if (filterCategory !== 'all' && rule.category !== filterCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return rule.name.toLowerCase().includes(query) || rule.description.toLowerCase().includes(query) || rule.sourceAgent.toLowerCase().includes(query) || rule.targetAgent.toLowerCase().includes(query);
    }
    return true;
  });
  // Toggle dropdown menu for a rule
  const toggleDropdown = (ruleId: string) => {
    if (showDropdown === ruleId) {
      setShowDropdown(null);
    } else {
      setShowDropdown(ruleId);
    }
  };
  // Add condition to new rule
  const addCondition = () => {
    if (currentCondition.trim()) {
      setNewRule({
        ...newRule,
        conditions: [...newRule.conditions, currentCondition.trim()]
      });
      setCurrentCondition('');
    }
  };
  // Remove condition from new rule
  const removeCondition = (index: number) => {
    const updatedConditions = [...newRule.conditions];
    updatedConditions.splice(index, 1);
    setNewRule({
      ...newRule,
      conditions: updatedConditions
    });
  };
  // Handle create rule submission
  const handleCreateRule = () => {
    // In a real app, this would create a new handoff rule in the database
    console.log('Creating handoff rule:', newRule);
    // Reset form and close modal
    setNewRule({
      name: '',
      description: '',
      category: 'Support',
      sourceAgent: '',
      targetAgent: '',
      channel: 'all',
      conditions: [],
      isActive: true
    });
    setShowCreateModal(false);
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Handoff Rules
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search rules..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="relative">
            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              {categories.map(category => <option key={category.value} value={category.value}>
                  {category.label}
                </option>)}
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button onClick={() => setShowCreateModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Create Rule
          </button>
        </div>
      </div>
      {/* Handoff Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRules.map(rule => <div key={rule.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {rule.name}
                  </h3>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {rule.category}
                    </span>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${rule.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {rule.status.charAt(0).toUpperCase() + rule.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <button onClick={() => toggleDropdown(rule.id)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                  {showDropdown === rule.id && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Edit className="h-4 w-4 mr-2 text-gray-500" />
                        Edit Rule
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <GitMerge className="h-4 w-4 mr-2 text-gray-500" />
                        Duplicate Rule
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                        Delete Rule
                      </button>
                    </div>}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">{rule.description}</p>
              <div className="mt-4 flex items-center">
                <div className="flex-1 flex items-center">
                  <div className="text-xs text-gray-500 mr-2">From:</div>
                  <div className="font-medium text-sm text-gray-900">
                    {rule.sourceAgent}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <div className="flex-1 flex items-center">
                  <div className="text-xs text-gray-500 mr-2">To:</div>
                  <div className="font-medium text-sm text-gray-900">
                    {rule.targetAgent}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xs font-medium text-gray-500 mb-2">
                  Conditions:
                </h4>
                <ul className="space-y-1">
                  {rule.conditions.map((condition, index) => <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                      {condition}
                    </li>)}
                </ul>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-2 rounded-md">
                  <span className="text-gray-500">Triggers</span>
                  <div className="font-medium text-gray-900">
                    {rule.triggers}
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded-md">
                  <span className="text-gray-500">Last Modified</span>
                  <div className="font-medium text-gray-900">
                    {new Date(rule.lastModified).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Rule
                </button>
              </div>
            </div>
          </div>)}
      </div>
      {filteredRules.length === 0 && <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-500">
            No handoff rules found matching your filters.
          </p>
        </div>}
      {/* Create Rule Modal */}
      {showCreateModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Create Handoff Rule
                </h3>
                <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rule Details */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4">
                    Rule Details
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rule Name
                      </label>
                      <input type="text" value={newRule.name} onChange={e => setNewRule({
                    ...newRule,
                    name: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter rule name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea value={newRule.description} onChange={e => setNewRule({
                    ...newRule,
                    description: e.target.value
                  })} rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe when this handoff rule should trigger" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select value={newRule.category} onChange={e => setNewRule({
                    ...newRule,
                    category: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {categories.filter(c => c.value !== 'all').map(category => <option key={category.value} value={category.value}>
                              {category.label}
                            </option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Communication Channel
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {channelTypes.map(channel => <button key={channel.id} type="button" onClick={() => setNewRule({
                      ...newRule,
                      channel: channel.id
                    })} className={`flex items-center justify-center py-2 px-3 rounded-md text-sm ${newRule.channel === channel.id ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}>
                            {channel.icon}
                            <span className="ml-1">{channel.name}</span>
                          </button>)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="rule-active" checked={newRule.isActive} onChange={e => setNewRule({
                    ...newRule,
                    isActive: e.target.checked
                  })} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="rule-active" className="ml-2 block text-sm text-gray-900">
                        Rule is active
                      </label>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <div>
                        <h5 className="text-sm font-medium text-blue-800">
                          Handoff Tips
                        </h5>
                        <ul className="mt-1 text-xs text-blue-700 space-y-1 list-disc list-inside">
                          <li>
                            Create specific conditions for precise handoffs
                          </li>
                          <li>
                            Be careful with "catch-all" rules that may trigger
                            too often
                          </li>
                          <li>Test your rules with sample conversations</li>
                          <li>Monitor handoff frequency to optimize rules</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Agent Selection & Conditions */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4">
                    Agent Handoff
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Source Agent (From)
                      </label>
                      <select value={newRule.sourceAgent} onChange={e => setNewRule({
                    ...newRule,
                    sourceAgent: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select source agent</option>
                        {availableAgents.map(agent => <option key={agent.id} value={agent.name}>
                            {agent.name}
                          </option>)}
                      </select>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                        <ArrowRight className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Target Agent (To)
                      </label>
                      <select value={newRule.targetAgent} onChange={e => setNewRule({
                    ...newRule,
                    targetAgent: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select target agent</option>
                        {availableAgents.filter(agent => agent.name !== newRule.sourceAgent).map(agent => <option key={agent.id} value={agent.name}>
                              {agent.name}
                            </option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-medium text-gray-700">
                        Handoff Conditions
                      </h4>
                      <div className="text-xs text-gray-500">
                        {newRule.conditions.length} conditions
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Condition Type
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {conditionTypes.map(type => <option key={type.id} value={type.id}>
                            {type.name}
                          </option>)}
                      </select>
                    </div>
                    <div className="flex mb-4">
                      <input type="text" value={currentCondition} onChange={e => setCurrentCondition(e.target.value)} placeholder="Enter condition..." className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      <button type="button" onClick={addCondition} className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                        Add
                      </button>
                    </div>
                    {newRule.conditions.length > 0 ? <div className="border border-gray-200 rounded-md">
                        <ul className="divide-y divide-gray-200">
                          {newRule.conditions.map((condition, index) => <li key={index} className="p-3 flex justify-between items-center">
                              <div className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm text-gray-700">
                                  {condition}
                                </span>
                              </div>
                              <button type="button" onClick={() => removeCondition(index)} className="text-gray-400 hover:text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </li>)}
                        </ul>
                      </div> : <div className="text-center p-4 bg-gray-50 rounded-md border border-dashed border-gray-300">
                        <p className="text-sm text-gray-500">
                          No conditions added yet. Add at least one condition
                          for the handoff rule.
                        </p>
                      </div>}
                    {newRule.conditions.length > 0 && <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-md flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                        <div className="text-sm text-yellow-700">
                          This rule will trigger when <strong>ANY</strong> of
                          the conditions above are met. Add multiple conditions
                          to create more specific rules.
                        </div>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={handleCreateRule} disabled={!newRule.name || !newRule.sourceAgent || !newRule.targetAgent || newRule.conditions.length === 0} className={`px-4 py-2 rounded-md text-white ${!newRule.name || !newRule.sourceAgent || !newRule.targetAgent || newRule.conditions.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                <Save className="h-4 w-4 inline-block mr-1" />
                Save Rule
              </button>
            </div>
          </div>
        </div>}
    </div>;
};