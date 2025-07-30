import React, { useState } from 'react';
import { Search, Filter, Users, User, Lock, Unlock, Share2, UserPlus, UserMinus, MoreHorizontal } from 'lucide-react';
export const AgentAssignment = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  // Sample agents data
  const agents = [{
    id: 'agent-1',
    name: 'Customer Support Bot',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    category: 'Support',
    status: 'Active',
    assignedTo: [{
      id: 'user-1',
      name: 'Sarah Johnson',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }, {
      id: 'user-2',
      name: 'Michael Chen',
      role: 'Manager',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }],
    accessLevel: 'team'
  }, {
    id: 'agent-2',
    name: 'Sales Assistant',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    category: 'Sales',
    status: 'Active',
    assignedTo: [{
      id: 'user-1',
      name: 'Sarah Johnson',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }],
    accessLevel: 'restricted'
  }, {
    id: 'agent-3',
    name: 'Data Analyst Assistant',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    category: 'Analytics',
    status: 'Paused',
    assignedTo: [{
      id: 'user-3',
      name: 'Emily Rodriguez',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }],
    accessLevel: 'private'
  }, {
    id: 'agent-4',
    name: 'Marketing Content Creator',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    category: 'Marketing',
    status: 'Active',
    assignedTo: [{
      id: 'user-5',
      name: 'Lisa Thompson',
      role: 'Manager',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    }],
    accessLevel: 'restricted'
  }];
  // Sample team members data (for assignment modal)
  const teamMembers = [{
    id: 'user-1',
    name: 'Sarah Johnson',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'user-2',
    name: 'Michael Chen',
    role: 'Manager',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'user-3',
    name: 'Emily Rodriguez',
    role: 'Developer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'user-4',
    name: 'David Kim',
    role: 'Viewer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    id: 'user-5',
    name: 'Lisa Thompson',
    role: 'Manager',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
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
  // Available access levels
  const accessLevels = [{
    value: 'team',
    label: 'Team Access',
    description: 'All team members can use this agent'
  }, {
    value: 'restricted',
    label: 'Restricted Access',
    description: 'Only assigned team members can use this agent'
  }, {
    value: 'private',
    label: 'Private Access',
    description: 'Only you can use this agent'
  }];
  // Filter agents based on search and category filter
  const filteredAgents = agents.filter(agent => {
    // Filter by category
    if (filterCategory !== 'all' && agent.category !== filterCategory) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return agent.name.toLowerCase().includes(query);
    }
    return true;
  });
  // Toggle dropdown menu for an agent
  const toggleDropdown = (agentId: string) => {
    if (showDropdown === agentId) {
      setShowDropdown(null);
    } else {
      setShowDropdown(agentId);
    }
  };
  // Open assignment modal for an agent
  const openAssignModal = (agent: any) => {
    setSelectedAgent(agent);
    setShowAssignModal(true);
    setShowDropdown(null);
  };
  // Get access level badge color
  const getAccessLevelColor = (level: string) => {
    switch (level) {
      case 'team':
        return 'bg-green-100 text-green-800';
      case 'restricted':
        return 'bg-yellow-100 text-yellow-800';
      case 'private':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Get access level icon
  const getAccessLevelIcon = (level: string) => {
    switch (level) {
      case 'team':
        return <Users className="h-4 w-4" />;
      case 'restricted':
        return <Lock className="h-4 w-4" />;
      case 'private':
        return <User className="h-4 w-4" />;
      default:
        return <Lock className="h-4 w-4" />;
    }
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Agent Assignment
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search agents..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
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
        </div>
      </div>
      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map(agent => <div key={agent.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <img src={agent.avatar} alt={agent.name} className="h-12 w-12 rounded-full object-cover mr-3" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {agent.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {agent.category}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <button onClick={() => toggleDropdown(agent.id)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                  {showDropdown === agent.id && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                      <button onClick={() => openAssignModal(agent)} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <UserPlus className="h-4 w-4 mr-2 text-gray-500" />
                        Manage Access
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <Share2 className="h-4 w-4 mr-2 text-gray-500" />
                        Share Agent
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {agent.accessLevel === 'team' ? <>
                            <Lock className="h-4 w-4 mr-2 text-gray-500" />
                            Restrict Access
                          </> : <>
                            <Unlock className="h-4 w-4 mr-2 text-gray-500" />
                            Make Team Access
                          </>}
                      </button>
                    </div>}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center mb-3">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full items-center ${getAccessLevelColor(agent.accessLevel)}`}>
                    {getAccessLevelIcon(agent.accessLevel)}
                    <span className="ml-1">
                      {accessLevels.find(level => level.value === agent.accessLevel)?.label}
                    </span>
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Assigned To
                  </h4>
                  {agent.assignedTo.length > 0 ? <div className="flex -space-x-2 overflow-hidden">
                      {agent.assignedTo.slice(0, 3).map((user: any) => <img key={user.id} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={user.avatar} alt={user.name} title={`${user.name} (${user.role})`} />)}
                      {agent.assignedTo.length > 3 && <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white text-xs font-medium text-gray-700">
                          +{agent.assignedTo.length - 3}
                        </div>}
                    </div> : <div className="text-sm text-gray-500">
                      No team members assigned
                    </div>}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button onClick={() => openAssignModal(agent)} className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Manage Team Access
                </button>
              </div>
            </div>
          </div>)}
      </div>
      {filteredAgents.length === 0 && <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p className="text-gray-500">
            No agents found matching your filters.
          </p>
        </div>}
      {/* Assignment Modal */}
      {showAssignModal && selectedAgent && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Manage Access for {selectedAgent.name}
                </h3>
                <button onClick={() => setShowAssignModal(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              {/* Access Level */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Access Level
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {accessLevels.map(level => <div key={level.value} className={`border rounded-lg p-3 cursor-pointer ${selectedAgent.accessLevel === level.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                      <div className="flex items-start">
                        <input type="radio" id={`level-${level.value}`} name="accessLevel" checked={selectedAgent.accessLevel === level.value} onChange={() => {
                    setSelectedAgent({
                      ...selectedAgent,
                      accessLevel: level.value
                    });
                  }} className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300" />
                        <div className="ml-2">
                          <label htmlFor={`level-${level.value}`} className="block text-sm font-medium text-gray-900">
                            {level.label}
                          </label>
                          <p className="text-sm text-gray-500">
                            {level.description}
                          </p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              {/* Team Members */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-medium text-gray-700">
                    Team Members
                  </h4>
                  <div className="relative">
                    <input type="text" placeholder="Search members..." className="pl-8 pr-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    <Search className="h-4 w-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
                    {teamMembers.map(member => {
                  const isAssigned = selectedAgent.assignedTo.some((u: any) => u.id === member.id);
                  return <li key={member.id} className="p-3 hover:bg-gray-50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <img src={member.avatar} alt={member.name} className="h-8 w-8 rounded-full object-cover mr-3" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {member.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {member.role}
                                </div>
                              </div>
                            </div>
                            <button onClick={() => {
                        if (isAssigned) {
                          // Remove user
                          setSelectedAgent({
                            ...selectedAgent,
                            assignedTo: selectedAgent.assignedTo.filter((u: any) => u.id !== member.id)
                          });
                        } else {
                          // Add user
                          setSelectedAgent({
                            ...selectedAgent,
                            assignedTo: [...selectedAgent.assignedTo, member]
                          });
                        }
                      }} className={`px-3 py-1 rounded-md text-sm font-medium flex items-center ${isAssigned ? 'text-red-600 hover:bg-red-50' : 'text-blue-600 hover:bg-blue-50'}`}>
                              {isAssigned ? <>
                                  <UserMinus className="h-4 w-4 mr-1" />
                                  Remove
                                </> : <>
                                  <UserPlus className="h-4 w-4 mr-1" />
                                  Assign
                                </>}
                            </button>
                          </div>
                        </li>;
                })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowAssignModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={() => {
            // In a real app, this would update the agent's access settings
            setShowAssignModal(false);
          }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>}
    </div>;
};