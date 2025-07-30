import React, { useState } from 'react';
import { GitBranch, Plus, X, Edit, Trash2, Save, ArrowRight, MessageSquare, Mail, Phone, Calendar, HelpCircle, Search, Filter, MoreHorizontal, Play, Pause } from 'lucide-react';
export const WorkflowBuilder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  // Sample workflows data
  const workflows = [{
    id: 'workflow-1',
    name: 'Customer Support Flow',
    description: 'Handles customer inquiries and routes to appropriate specialist',
    category: 'Support',
    status: 'active',
    team: 'Customer Support Team',
    steps: 5,
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString() // 2 days ago
  }, {
    id: 'workflow-2',
    name: 'Sales Qualification Process',
    description: 'Qualifies leads and schedules demos with sales team',
    category: 'Sales',
    status: 'active',
    team: 'Sales Team',
    steps: 4,
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString() // 5 days ago
  }, {
    id: 'workflow-3',
    name: 'Content Approval Pipeline',
    description: 'Routes content creation and approval process',
    category: 'Marketing',
    status: 'draft',
    team: 'Marketing Team',
    steps: 3,
    lastModified: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
  }];
  // Sample workflow steps for builder
  const [workflowSteps, setWorkflowSteps] = useState([{
    id: 'step-1',
    type: 'start',
    title: 'Initial Contact',
    description: 'Customer initiates contact through website chat',
    agent: {
      id: 'agent-1',
      name: 'Customer Support Bot',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    conditions: []
  }, {
    id: 'step-2',
    type: 'decision',
    title: 'Inquiry Type',
    description: 'Determine the type of customer inquiry',
    conditions: [{
      id: 'cond-1',
      name: 'Technical Support',
      nextStep: 'step-3'
    }, {
      id: 'cond-2',
      name: 'Billing Question',
      nextStep: 'step-4'
    }, {
      id: 'cond-3',
      name: 'Other',
      nextStep: 'step-5'
    }]
  }, {
    id: 'step-3',
    type: 'action',
    title: 'Technical Support',
    description: 'Handle technical support inquiries',
    agent: {
      id: 'agent-6',
      name: 'Technical Support Specialist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    conditions: []
  }, {
    id: 'step-4',
    type: 'action',
    title: 'Billing Support',
    description: 'Handle billing and payment inquiries',
    agent: {
      id: 'agent-2',
      name: 'Sales Assistant',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    conditions: []
  }, {
    id: 'step-5',
    type: 'action',
    title: 'General Inquiries',
    description: 'Handle general questions and other inquiries',
    agent: {
      id: 'agent-1',
      name: 'Customer Support Bot',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    },
    conditions: []
  }]);
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
    value: 'Marketing',
    label: 'Marketing'
  }];
  // Available step types
  const stepTypes = [{
    id: 'start',
    name: 'Start',
    description: 'Entry point for the workflow'
  }, {
    id: 'action',
    name: 'Action',
    description: 'Task performed by an agent'
  }, {
    id: 'decision',
    name: 'Decision',
    description: 'Branch based on conditions'
  }, {
    id: 'handoff',
    name: 'Handoff',
    description: 'Transfer to another agent'
  }, {
    id: 'end',
    name: 'End',
    description: 'Workflow completion'
  }];
  // Sample available agents
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
  // New workflow state
  const [newWorkflow, setNewWorkflow] = useState({
    name: '',
    description: '',
    category: 'Support',
    team: ''
  });
  // Filter workflows based on search and category filter
  const filteredWorkflows = workflows.filter(workflow => {
    // Filter by category
    if (filterCategory !== 'all' && workflow.category !== filterCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return workflow.name.toLowerCase().includes(query) || workflow.description.toLowerCase().includes(query);
    }
    return true;
  });
  // Toggle dropdown menu for a workflow
  const toggleDropdown = (workflowId: string) => {
    if (showDropdown === workflowId) {
      setShowDropdown(null);
    } else {
      setShowDropdown(workflowId);
    }
  };
  // Add new step to workflow
  const addWorkflowStep = () => {
    const newStep = {
      id: `step-${workflowSteps.length + 1}`,
      type: 'action',
      title: 'New Step',
      description: 'Description for new step',
      agent: null,
      conditions: []
    };
    setWorkflowSteps([...workflowSteps, newStep]);
  };
  // Remove step from workflow
  const removeWorkflowStep = (stepId: string) => {
    setWorkflowSteps(workflowSteps.filter(step => step.id !== stepId));
  };
  // Handle create workflow submission
  const handleCreateWorkflow = () => {
    // In a real app, this would create a new workflow in the database
    console.log('Creating workflow:', newWorkflow);
    console.log('With steps:', workflowSteps);
    // Reset form and close modal
    setNewWorkflow({
      name: '',
      description: '',
      category: 'Support',
      team: ''
    });
    setShowCreateModal(false);
  };
  // Get step type icon
  const getStepTypeIcon = (type: string) => {
    switch (type) {
      case 'start':
        return <Play className="h-4 w-4" />;
      case 'action':
        return <MessageSquare className="h-4 w-4" />;
      case 'decision':
        return <GitBranch className="h-4 w-4" />;
      case 'handoff':
        return <ArrowRight className="h-4 w-4" />;
      case 'end':
        return <Pause className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Workflow Builder
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search workflows..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
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
            Create Workflow
          </button>
        </div>
      </div>
      {/* Workflows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkflows.map(workflow => <div key={workflow.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {workflow.name}
                  </h3>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {workflow.category}
                    </span>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${workflow.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <button onClick={() => toggleDropdown(workflow.id)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                  {showDropdown === workflow.id && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Edit className="h-4 w-4 mr-2 text-gray-500" />
                        Edit Workflow
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <GitBranch className="h-4 w-4 mr-2 text-gray-500" />
                        Clone Workflow
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                        Delete Workflow
                      </button>
                    </div>}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {workflow.description}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-2 rounded-md">
                  <span className="text-gray-500">Team</span>
                  <div className="font-medium text-gray-900">
                    {workflow.team}
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded-md">
                  <span className="text-gray-500">Steps</span>
                  <div className="font-medium text-gray-900">
                    {workflow.steps}
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded-md col-span-2">
                  <span className="text-gray-500">Last Modified</span>
                  <div className="font-medium text-gray-900">
                    {new Date(workflow.lastModified).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Edit Workflow
                </button>
              </div>
            </div>
          </div>)}
      </div>
      {filteredWorkflows.length === 0 && <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-500">
            No workflows found matching your filters.
          </p>
        </div>}
      {/* Create Workflow Modal */}
      {showCreateModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Create New Workflow
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Workflow Details */}
                <div className="md:col-span-1">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">
                    Workflow Details
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Workflow Name
                      </label>
                      <input type="text" value={newWorkflow.name} onChange={e => setNewWorkflow({
                    ...newWorkflow,
                    name: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter workflow name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea value={newWorkflow.description} onChange={e => setNewWorkflow({
                    ...newWorkflow,
                    description: e.target.value
                  })} rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the workflow's purpose" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select value={newWorkflow.category} onChange={e => setNewWorkflow({
                    ...newWorkflow,
                    category: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {categories.filter(c => c.value !== 'all').map(category => <option key={category.value} value={category.value}>
                              {category.label}
                            </option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team
                      </label>
                      <select value={newWorkflow.team} onChange={e => setNewWorkflow({
                    ...newWorkflow,
                    team: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select a team</option>
                        <option value="Customer Support Team">
                          Customer Support Team
                        </option>
                        <option value="Sales Team">Sales Team</option>
                        <option value="Marketing Team">Marketing Team</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <div>
                        <h5 className="text-sm font-medium text-blue-800">
                          Workflow Tips
                        </h5>
                        <ul className="mt-1 text-xs text-blue-700 space-y-1 list-disc list-inside">
                          <li>Start with an entry point for your workflow</li>
                          <li>Add decision points to create branches</li>
                          <li>Assign different agents to specialized tasks</li>
                          <li>Include handoff rules between agents</li>
                          <li>End with resolution or escalation steps</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Workflow Builder */}
                <div className="md:col-span-2">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-medium text-gray-700">
                      Workflow Steps
                    </h4>
                    <button onClick={addWorkflowStep} className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Step
                    </button>
                  </div>
                  <div className="space-y-6">
                    {workflowSteps.map((step, index) => <div key={step.id} className="relative bg-white rounded-lg border border-gray-200 p-4">
                        {/* Step connector line */}
                        {index < workflowSteps.length - 1 && <div className="absolute left-1/2 bottom-0 w-0.5 h-6 bg-gray-300 transform translate-x-[-50%] translate-y-[100%]"></div>}
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            <div className={`flex items-center justify-center h-6 w-6 rounded-full mr-2 ${step.type === 'start' ? 'bg-green-100 text-green-600' : step.type === 'decision' ? 'bg-yellow-100 text-yellow-600' : step.type === 'handoff' ? 'bg-purple-100 text-purple-600' : step.type === 'end' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                              {getStepTypeIcon(step.type)}
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-400 mr-2">
                                Step {index + 1}:
                              </span>
                              <span className="font-medium text-gray-900">
                                {step.title}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <button className="text-gray-400 hover:text-blue-600 mr-2">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button onClick={() => removeWorkflowStep(step.id)} className="text-gray-400 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">
                              Step Type
                            </label>
                            <select value={step.type} className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                              {stepTypes.map(type => <option key={type.id} value={type.id}>
                                  {type.name}
                                </option>)}
                            </select>
                          </div>
                          {step.type !== 'decision' && step.type !== 'end' && <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">
                                Assigned Agent
                              </label>
                              <select value={step.agent?.id || ''} className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                <option value="">Select an agent</option>
                                {availableAgents.map(agent => <option key={agent.id} value={agent.id}>
                                    {agent.name}
                                  </option>)}
                              </select>
                            </div>}
                          <div className="md:col-span-2">
                            <label className="block text-xs font-medium text-gray-500 mb-1">
                              Description
                            </label>
                            <textarea value={step.description} rows={2} className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                          </div>
                        </div>
                        {/* Decision Conditions */}
                        {step.type === 'decision' && step.conditions.length > 0 && <div className="mt-4 pt-4 border-t border-gray-200">
                              <label className="block text-xs font-medium text-gray-500 mb-2">
                                Conditions
                              </label>
                              <div className="space-y-2">
                                {step.conditions.map(condition => <div key={condition.id} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                                    <div className="flex items-center">
                                      <GitBranch className="h-4 w-4 text-gray-400 mr-2" />
                                      <span className="text-sm text-gray-700">
                                        {condition.name}
                                      </span>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="text-xs text-gray-500 mr-2">
                                        Next: Step{' '}
                                        {workflowSteps.findIndex(s => s.id === condition.nextStep) + 1}
                                      </span>
                                      <button className="text-gray-400 hover:text-red-600">
                                        <X className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>)}
                                <button className="w-full py-1 border border-dashed border-gray-300 rounded-md text-xs text-blue-600 hover:text-blue-800 hover:border-blue-300 flex items-center justify-center">
                                  <Plus className="h-3 w-3 mr-1" />
                                  Add Condition
                                </button>
                              </div>
                            </div>}
                        {/* Agent Details (if assigned) */}
                        {step.agent && <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex items-center">
                              <img src={step.agent.avatar} alt={step.agent.name} className="h-8 w-8 rounded-full object-cover mr-2" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {step.agent.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Assigned Agent
                                </div>
                              </div>
                            </div>
                          </div>}
                      </div>)}
                    {workflowSteps.length === 0 && <div className="text-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <GitBranch className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">
                          No steps added yet. Click "Add Step" to start building
                          your workflow.
                        </p>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={handleCreateWorkflow} disabled={!newWorkflow.name || !newWorkflow.team || workflowSteps.length === 0} className={`px-4 py-2 rounded-md text-white ${!newWorkflow.name || !newWorkflow.team || workflowSteps.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                <Save className="h-4 w-4 inline-block mr-1" />
                Save Workflow
              </button>
            </div>
          </div>
        </div>}
    </div>;
};