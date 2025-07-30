import React, { useState } from 'react';
import { Users, Plus, Search, Filter, MoreHorizontal, Edit, Trash2, ArrowRight, Clipboard, Check, UserPlus, UserMinus } from 'lucide-react';
export const TeamCreation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  // Sample agent teams data
  const agentTeams = [{
    id: 'team-1',
    name: 'Customer Support Team',
    description: 'Handles customer inquiries and support tickets',
    members: [{
      id: 'agent-1',
      name: 'Customer Support Bot',
      role: 'Primary',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }, {
      id: 'agent-4',
      name: 'Marketing Content Creator',
      role: 'Knowledge Base',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }],
    category: 'Support',
    status: 'active',
    interactions: 1248,
    handoffs: 37,
    successRate: 94.8
  }, {
    id: 'team-2',
    name: 'Sales Team',
    description: 'Handles lead qualification and sales processes',
    members: [{
      id: 'agent-2',
      name: 'Sales Assistant',
      role: 'Primary',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }, {
      id: 'agent-3',
      name: 'Data Analyst Assistant',
      role: 'Analytics',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }],
    category: 'Sales',
    status: 'active',
    interactions: 876,
    handoffs: 12,
    successRate: 97.2
  }, {
    id: 'team-3',
    name: 'Marketing Team',
    description: 'Handles content creation and marketing campaigns',
    members: [{
      id: 'agent-4',
      name: 'Marketing Content Creator',
      role: 'Primary',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }, {
      id: 'agent-3',
      name: 'Data Analyst Assistant',
      role: 'Analytics',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }],
    category: 'Marketing',
    status: 'inactive',
    interactions: 0,
    handoffs: 0,
    successRate: 0
  }];
  // Sample available agents for team creation
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
    id: 'agent-4',
    name: 'Marketing Content Creator',
    category: 'Marketing',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'agent-5',
    name: 'Customer Onboarding Assistant',
    category: 'Support',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'agent-6',
    name: 'Technical Support Specialist',
    category: 'Support',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  }];
  // Sample agent roles for team members
  const agentRoles = [{
    id: 'primary',
    name: 'Primary',
    description: 'Handles initial interaction and main tasks'
  }, {
    id: 'specialist',
    name: 'Specialist',
    description: 'Provides specialized knowledge in specific areas'
  }, {
    id: 'analytics',
    name: 'Analytics',
    description: 'Analyzes data and provides insights'
  }, {
    id: 'knowledge',
    name: 'Knowledge Base',
    description: 'Provides information and documentation'
  }, {
    id: 'escalation',
    name: 'Escalation',
    description: 'Handles complex issues that others cannot resolve'
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
    value: 'Marketing',
    label: 'Marketing'
  }];
  // Create team state
  const [newTeam, setNewTeam] = useState({
    name: '',
    description: '',
    category: 'Support',
    members: [] as any[]
  });
  // Filter agent teams based on search and category filter
  const filteredTeams = agentTeams.filter(team => {
    // Filter by category
    if (filterCategory !== 'all' && team.category !== filterCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return team.name.toLowerCase().includes(query) || team.description.toLowerCase().includes(query);
    }
    return true;
  });
  // Toggle dropdown menu for a team
  const toggleDropdown = (teamId: string) => {
    if (showDropdown === teamId) {
      setShowDropdown(null);
    } else {
      setShowDropdown(teamId);
    }
  };
  // Open view modal for a team
  const openViewModal = (team: any) => {
    setSelectedTeam(team);
    setShowViewModal(true);
    setShowDropdown(null);
  };
  // Add agent to new team
  const addAgentToTeam = (agent: any) => {
    if (!newTeam.members.some(member => member.id === agent.id)) {
      setNewTeam({
        ...newTeam,
        members: [...newTeam.members, {
          ...agent,
          role: 'Primary'
        }]
      });
    }
  };
  // Remove agent from new team
  const removeAgentFromTeam = (agentId: string) => {
    setNewTeam({
      ...newTeam,
      members: newTeam.members.filter(member => member.id !== agentId)
    });
  };
  // Update agent role in new team
  const updateAgentRole = (agentId: string, role: string) => {
    setNewTeam({
      ...newTeam,
      members: newTeam.members.map(member => member.id === agentId ? {
        ...member,
        role
      } : member)
    });
  };
  // Handle create team submission
  const handleCreateTeam = () => {
    // In a real app, this would create a new team in the database
    console.log('Creating team:', newTeam);
    // Reset form and close modal
    setNewTeam({
      name: '',
      description: '',
      category: 'Support',
      members: []
    });
    setShowCreateModal(false);
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Agent Teams
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search teams..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
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
            Create Team
          </button>
        </div>
      </div>
      {/* Agent Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map(team => <div key={team.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {team.name}
                  </h3>
                  <span className="inline-block mt-1 px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                    {team.category}
                  </span>
                  <p className="mt-2 text-sm text-gray-500">
                    {team.description}
                  </p>
                </div>
                <div className="relative">
                  <button onClick={() => toggleDropdown(team.id)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                  {showDropdown === team.id && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                      <button onClick={() => openViewModal(team)} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        View Team
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Edit className="h-4 w-4 mr-2 text-gray-500" />
                        Edit Team
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Clipboard className="h-4 w-4 mr-2 text-gray-500" />
                        Clone Team
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                        Delete Team
                      </button>
                    </div>}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Team Members
                </h4>
                <div className="flex -space-x-2 overflow-hidden mb-4">
                  {team.members.map(member => <img key={member.id} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={member.avatar} alt={member.name} title={`${member.name} (${member.role})`} />)}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-2 rounded-md">
                    <span className="text-gray-500">Interactions</span>
                    <div className="font-medium text-gray-900">
                      {team.interactions.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <span className="text-gray-500">Handoffs</span>
                    <div className="font-medium text-gray-900">
                      {team.handoffs}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <span className="text-gray-500">Success Rate</span>
                    <div className="font-medium text-gray-900">
                      {team.successRate}%
                    </div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <span className="text-gray-500">Status</span>
                    <div className={`font-medium ${team.status === 'active' ? 'text-green-600' : 'text-gray-500'}`}>
                      {team.status.charAt(0).toUpperCase() + team.status.slice(1)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button onClick={() => openViewModal(team)} className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Team
                </button>
              </div>
            </div>
          </div>)}
      </div>
      {filteredTeams.length === 0 && <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-500">
            No agent teams found matching your filters.
          </p>
        </div>}
      {/* Create Team Modal */}
      {showCreateModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Create New Agent Team
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
                {/* Team Details */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4">
                    Team Details
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Name
                      </label>
                      <input type="text" value={newTeam.name} onChange={e => setNewTeam({
                    ...newTeam,
                    name: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter team name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea value={newTeam.description} onChange={e => setNewTeam({
                    ...newTeam,
                    description: e.target.value
                  })} rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the team's purpose and function" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select value={newTeam.category} onChange={e => setNewTeam({
                    ...newTeam,
                    category: e.target.value
                  })} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        {categories.filter(c => c.value !== 'all').map(category => <option key={category.value} value={category.value}>
                              {category.label}
                            </option>)}
                      </select>
                    </div>
                  </div>
                  {/* Team Members */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-medium text-gray-700">
                        Team Members
                      </h4>
                      <span className="text-xs text-gray-500">
                        {newTeam.members.length} selected
                      </span>
                    </div>
                    {newTeam.members.length > 0 ? <ul className="space-y-2 mb-4">
                        {newTeam.members.map(member => <li key={member.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <img src={member.avatar} alt={member.name} className="h-8 w-8 rounded-full object-cover mr-3" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {member.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {member.category}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <select value={member.role} onChange={e => updateAgentRole(member.id, e.target.value)} className="mr-2 text-sm border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                {agentRoles.map(role => <option key={role.id} value={role.name}>
                                    {role.name}
                                  </option>)}
                              </select>
                              <button onClick={() => removeAgentFromTeam(member.id)} className="text-red-600 hover:text-red-800">
                                <UserMinus className="h-4 w-4" />
                              </button>
                            </div>
                          </li>)}
                      </ul> : <div className="text-center p-4 bg-gray-50 rounded-md mb-4">
                        <p className="text-sm text-gray-500">
                          No agents added yet. Select agents from the list.
                        </p>
                      </div>}
                  </div>
                </div>
                {/* Available Agents */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-medium text-gray-700">
                      Available Agents
                    </h4>
                    <div className="relative">
                      <input type="text" placeholder="Search agents..." className="pl-8 pr-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      <Search className="h-4 w-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <ul className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                      {availableAgents.map(agent => {
                    const isSelected = newTeam.members.some(member => member.id === agent.id);
                    return <li key={agent.id} className="p-3 hover:bg-gray-50">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <img src={agent.avatar} alt={agent.name} className="h-10 w-10 rounded-full object-cover mr-3" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {agent.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {agent.category}
                                  </div>
                                </div>
                              </div>
                              <button onClick={() => isSelected ? removeAgentFromTeam(agent.id) : addAgentToTeam(agent)} className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${isSelected ? 'text-green-600 hover:bg-green-50' : 'text-blue-600 hover:bg-blue-50'}`}>
                                {isSelected ? <>
                                    <Check className="h-4 w-4 mr-1" />
                                    Selected
                                  </> : <>
                                    <UserPlus className="h-4 w-4 mr-1" />
                                    Add
                                  </>}
                              </button>
                            </div>
                          </li>;
                  })}
                    </ul>
                  </div>
                  {/* Agent Roles Info */}
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Agent Roles
                    </h4>
                    <div className="bg-gray-50 rounded-md p-3">
                      <ul className="space-y-2">
                        {agentRoles.map(role => <li key={role.id} className="flex items-start">
                            <div className="flex-shrink-0 w-20 text-xs font-medium text-gray-700">
                              {role.name}:
                            </div>
                            <div className="flex-1 text-xs text-gray-600">
                              {role.description}
                            </div>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={handleCreateTeam} disabled={!newTeam.name || newTeam.members.length === 0} className={`px-4 py-2 rounded-md text-white ${!newTeam.name || newTeam.members.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
                Create Team
              </button>
            </div>
          </div>
        </div>}
      {/* View Team Modal */}
      {showViewModal && selectedTeam && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {selectedTeam.name}
                </h3>
                <button onClick={() => setShowViewModal(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team Details */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Team Details
                    </h4>
                    <p className="text-sm text-gray-600">
                      {selectedTeam.description}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500">Category</div>
                        <div className="font-medium text-gray-900">
                          {selectedTeam.category}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500">Status</div>
                        <div className={`font-medium ${selectedTeam.status === 'active' ? 'text-green-600' : 'text-gray-500'}`}>
                          {selectedTeam.status.charAt(0).toUpperCase() + selectedTeam.status.slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Team Performance
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500">
                          Interactions
                        </div>
                        <div className="font-medium text-gray-900">
                          {selectedTeam.interactions.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500">Handoffs</div>
                        <div className="font-medium text-gray-900">
                          {selectedTeam.handoffs}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500">
                          Success Rate
                        </div>
                        <div className="font-medium text-gray-900">
                          {selectedTeam.successRate}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Communication Flow
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="flex flex-col items-center">
                        {selectedTeam.members.filter((m: any) => m.role === 'Primary').map((member: any) => <div key={member.id} className="flex flex-col items-center mb-4">
                              <img src={member.avatar} alt={member.name} className="h-12 w-12 rounded-full object-cover mb-1" />
                              <div className="text-sm font-medium text-gray-900">
                                {member.name}
                              </div>
                              <div className="text-xs text-blue-600">
                                {member.role}
                              </div>
                            </div>)}
                        <ArrowRight className="h-6 w-6 text-gray-400 mb-4 transform rotate-90" />
                        <div className="flex justify-center space-x-4 mb-4">
                          {selectedTeam.members.filter((m: any) => m.role !== 'Primary').map((member: any) => <div key={member.id} className="flex flex-col items-center">
                                <img src={member.avatar} alt={member.name} className="h-10 w-10 rounded-full object-cover mb-1" />
                                <div className="text-xs font-medium text-gray-900">
                                  {member.name}
                                </div>
                                <div className="text-xs text-blue-600">
                                  {member.role}
                                </div>
                              </div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Team Members */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-4">
                    Team Members
                  </h4>
                  <div className="space-y-4">
                    {selectedTeam.members.map((member: any) => <div key={member.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <img src={member.avatar} alt={member.name} className="h-12 w-12 rounded-full object-cover mr-4" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="text-sm font-medium text-gray-900">
                                {member.name}
                              </h5>
                              <div className="mt-1 inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {member.role}
                              </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="text-gray-500">
                                Response Time:
                              </span>
                              <span className="ml-1 text-gray-900">0.8s</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Accuracy:</span>
                              <span className="ml-1 text-gray-900">96%</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Handoffs:</span>
                              <span className="ml-1 text-gray-900">12</span>
                            </div>
                            <div>
                              <span className="text-gray-500">
                                Interactions:
                              </span>
                              <span className="ml-1 text-gray-900">487</span>
                            </div>
                          </div>
                        </div>
                      </div>)}
                    <button className="w-full py-2 border border-dashed border-gray-300 rounded-md text-sm text-blue-600 hover:text-blue-800 hover:border-blue-300 flex items-center justify-center">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Team Member
                    </button>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Team Actions
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Team
                      </button>
                      <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-center">
                        <Clipboard className="h-4 w-4 mr-2" />
                        Clone Team
                      </button>
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 flex items-center justify-center">
                        <GitBranch className="h-4 w-4 mr-2" />
                        Configure Workflow
                      </button>
                      <button className="w-full py-2 px-4 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 flex items-center justify-center">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Team
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button onClick={() => setShowViewModal(false)} className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200">
                Close
              </button>
            </div>
          </div>
        </div>}
    </div>;
};