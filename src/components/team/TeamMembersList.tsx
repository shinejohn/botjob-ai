import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Mail, UserMinus, Edit, Shield, CheckCircle, Clock } from 'lucide-react';
export const TeamMembersList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  // Sample team members data
  const teamMembers = [{
    id: 'user-1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    role: 'Admin',
    status: 'active',
    lastActive: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    agentsManaged: 5,
    dateJoined: '2023-01-15'
  }, {
    id: 'user-2',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    role: 'Manager',
    status: 'active',
    lastActive: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    agentsManaged: 3,
    dateJoined: '2023-02-21'
  }, {
    id: 'user-3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    role: 'Developer',
    status: 'active',
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    agentsManaged: 2,
    dateJoined: '2023-03-10'
  }, {
    id: 'user-4',
    name: 'David Kim',
    email: 'david.kim@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    role: 'Viewer',
    status: 'pending',
    lastActive: null,
    agentsManaged: 0,
    dateJoined: '2023-06-05'
  }, {
    id: 'user-5',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@example.com',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    role: 'Manager',
    status: 'active',
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    agentsManaged: 4,
    dateJoined: '2023-04-18'
  }];
  // Available roles for filtering
  const roles = [{
    value: 'all',
    label: 'All Roles'
  }, {
    value: 'Admin',
    label: 'Admin'
  }, {
    value: 'Manager',
    label: 'Manager'
  }, {
    value: 'Developer',
    label: 'Developer'
  }, {
    value: 'Viewer',
    label: 'Viewer'
  }];
  // Filter team members based on search and role filter
  const filteredMembers = teamMembers.filter(member => {
    // Filter by role
    if (filterRole !== 'all' && member.role !== filterRole) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return member.name.toLowerCase().includes(query) || member.email.toLowerCase().includes(query);
    }
    return true;
  });
  // Toggle dropdown menu for a member
  const toggleDropdown = (userId: string) => {
    if (showDropdown === userId) {
      setShowDropdown(null);
    } else {
      setShowDropdown(userId);
    }
  };
  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Format date to relative time
  const formatRelativeTime = (dateString: string | null) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Team Members
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search members..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="relative">
            <select value={filterRole} onChange={e => setFilterRole(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              {roles.map(role => <option key={role.value} value={role.value}>
                  {role.label}
                </option>)}
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
      {/* Team Members Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team Member
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agents
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembers.map(member => <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img src={member.avatar} alt={member.name} className="h-10 w-10 rounded-full object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{member.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(member.status)}`}>
                      {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.status === 'active' ? formatRelativeTime(member.lastActive) : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.agentsManaged}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(member.dateJoined).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                    <button onClick={() => toggleDropdown(member.id)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                    {showDropdown === member.id && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Edit className="h-4 w-4 mr-2 text-gray-500" />
                          Edit Role
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Shield className="h-4 w-4 mr-2 text-gray-500" />
                          Manage Permissions
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Mail className="h-4 w-4 mr-2 text-gray-500" />
                          Send Email
                        </button>
                        <div className="border-t border-gray-100 my-1"></div>
                        <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                          <UserMinus className="h-4 w-4 mr-2 text-red-500" />
                          Remove
                        </button>
                      </div>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        {filteredMembers.length === 0 && <div className="py-8 text-center">
            <p className="text-gray-500">
              No team members found matching your filters.
            </p>
          </div>}
      </div>
      {/* Team Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">
            Total Members
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {teamMembers.length}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">
            Active Members
          </div>
          <div className="text-2xl font-bold text-green-600">
            {teamMembers.filter(m => m.status === 'active').length}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">
            Pending Invites
          </div>
          <div className="text-2xl font-bold text-yellow-600">
            {teamMembers.filter(m => m.status === 'pending').length}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">
            Total Agents Managed
          </div>
          <div className="text-2xl font-bold text-blue-600">
            {teamMembers.reduce((acc, member) => acc + member.agentsManaged, 0)}
          </div>
        </div>
      </div>
      {/* Pending Invitations */}
      {teamMembers.some(m => m.status === 'pending') && <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Pending Invitations
          </h3>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {teamMembers.filter(m => m.status === 'pending').map(member => <li key={member.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                        {member.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {member.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-sm text-yellow-600 mr-4">
                        <Clock className="h-4 w-4 mr-1" />
                        Invited{' '}
                        {new Date(member.dateJoined).toLocaleDateString()}
                      </span>
                      <button className="text-sm text-blue-600 mr-3 hover:text-blue-800">
                        Resend
                      </button>
                      <button className="text-sm text-red-600 hover:text-red-800">
                        Cancel
                      </button>
                    </div>
                  </li>)}
            </ul>
          </div>
        </div>}
    </div>;
};