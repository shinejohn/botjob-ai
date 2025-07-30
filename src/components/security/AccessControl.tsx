import React, { useState } from 'react';
import { Users, User, Shield, Plus, Search, Filter, Edit, Trash, Lock, Check, AlertTriangle } from 'lucide-react';
export const AccessControl = () => {
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showRoleModal, setShowRoleModal] = useState(false);
  // Sample users with access
  const users = [{
    id: 'user-1',
    name: 'John Smith',
    email: 'john.smith@acme.example.com',
    role: 'Admin',
    department: 'IT',
    status: 'active',
    lastLogin: '2023-06-22T09:15:00Z',
    mfaEnabled: true,
    permissions: ['read', 'write', 'delete', 'admin']
  }, {
    id: 'user-2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@acme.example.com',
    role: 'Compliance Officer',
    department: 'Legal',
    status: 'active',
    lastLogin: '2023-06-21T14:30:00Z',
    mfaEnabled: true,
    permissions: ['read', 'write', 'compliance_audit']
  }, {
    id: 'user-3',
    name: 'Michael Wong',
    email: 'michael.wong@acme.example.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'active',
    lastLogin: '2023-06-22T11:45:00Z',
    mfaEnabled: true,
    permissions: ['read', 'write']
  }, {
    id: 'user-4',
    name: 'Emily Chen',
    email: 'emily.chen@acme.example.com',
    role: 'Support',
    department: 'Customer Success',
    status: 'inactive',
    lastLogin: '2023-06-15T10:20:00Z',
    mfaEnabled: false,
    permissions: ['read']
  }, {
    id: 'user-5',
    name: 'David Kim',
    email: 'david.kim@acme.example.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'active',
    lastLogin: '2023-06-22T08:30:00Z',
    mfaEnabled: true,
    permissions: ['read', 'write']
  }];
  // Sample roles
  const roles = [{
    id: 'role-1',
    name: 'Admin',
    description: 'Full system access',
    permissions: ['read', 'write', 'delete', 'admin'],
    userCount: 1
  }, {
    id: 'role-2',
    name: 'Compliance Officer',
    description: 'Access to compliance and audit features',
    permissions: ['read', 'write', 'compliance_audit'],
    userCount: 1
  }, {
    id: 'role-3',
    name: 'Developer',
    description: 'Access to development and testing environments',
    permissions: ['read', 'write'],
    userCount: 2
  }, {
    id: 'role-4',
    name: 'Support',
    description: 'Customer data access for support purposes',
    permissions: ['read'],
    userCount: 1
  }, {
    id: 'role-5',
    name: 'Viewer',
    description: 'Read-only access to the system',
    permissions: ['read'],
    userCount: 0
  }];
  // Sample permission groups
  const permissionGroups = [{
    id: 'perm-group-1',
    name: 'Data Access',
    permissions: [{
      id: 'read',
      name: 'Read Data',
      description: 'View data in the system'
    }, {
      id: 'write',
      name: 'Write Data',
      description: 'Create and modify data'
    }, {
      id: 'delete',
      name: 'Delete Data',
      description: 'Remove data from the system'
    }]
  }, {
    id: 'perm-group-2',
    name: 'Administrative',
    permissions: [{
      id: 'admin',
      name: 'Admin Access',
      description: 'Full administrative access'
    }, {
      id: 'user_management',
      name: 'User Management',
      description: 'Manage users and permissions'
    }, {
      id: 'billing',
      name: 'Billing Access',
      description: 'Access to billing and payment information'
    }]
  }, {
    id: 'perm-group-3',
    name: 'Compliance',
    permissions: [{
      id: 'compliance_audit',
      name: 'Compliance Audit',
      description: 'Perform compliance audits'
    }, {
      id: 'export_data',
      name: 'Export Data',
      description: 'Export data for compliance purposes'
    }, {
      id: 'view_logs',
      name: 'View Audit Logs',
      description: 'Access to system audit logs'
    }]
  }];
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Active
          </span>;
      case 'inactive':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Inactive
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  return <div className="space-y-6">
      {/* Security Warning */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Access Control Notice
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Changes to access control settings may impact security
                compliance. All changes are logged and audited.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* User Access Management */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-500" />
            User Access Management
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="role-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <div className="relative">
                <select id="role-filter" value={roleFilter} onChange={e => setRoleFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="compliance">Compliance Officer</option>
                  <option value="developer">Developer</option>
                  <option value="support">Support</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <select id="status-filter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="user-search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input type="text" id="user-search" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search users" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    MFA
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map(user => <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <User className="h-10 w-10 rounded-full bg-gray-100 p-2 text-gray-500" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(user.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.mfaEnabled ? <span className="flex items-center text-green-600">
                          <Check className="h-4 w-4 mr-1" />
                          <span className="text-xs">Enabled</span>
                        </span> : <span className="flex items-center text-red-600">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          <span className="text-xs">Disabled</span>
                        </span>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(user.lastLogin)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Role Management */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-blue-500" />
            Role Management
          </h3>
          <button onClick={() => setShowRoleModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </button>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Permissions
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Users
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {roles.map(role => <tr key={role.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {role.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {role.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {role.permissions.map((permission, index) => <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                            {permission}
                          </span>)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {role.userCount} {role.userCount === 1 ? 'user' : 'users'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Permission Groups */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Lock className="h-5 w-5 mr-2 text-blue-500" />
            Permission Groups
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {permissionGroups.map(group => <div key={group.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900">
                    {group.name}
                  </h4>
                </div>
                <div className="p-4">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Permission
                        </th>
                        <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {group.permissions.map(permission => <tr key={permission.id}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            {permission.name}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                            {permission.description}
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Role Creation Modal */}
      {showRoleModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Create New Role
              </h3>
              <button onClick={() => setShowRoleModal(false)} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="role-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Role Name
                  </label>
                  <input type="text" id="role-name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter role name" />
                </div>
                <div>
                  <label htmlFor="role-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea id="role-description" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the purpose of this role"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Permissions
                  </label>
                  <div className="space-y-4">
                    {permissionGroups.map(group => <div key={group.id} className="border border-gray-200 rounded-md p-3">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          {group.name}
                        </h4>
                        <div className="space-y-2">
                          {group.permissions.map(permission => <div key={permission.id} className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id={`permission-${permission.id}`} type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor={`permission-${permission.id}`} className="font-medium text-gray-700">
                                  {permission.name}
                                </label>
                                <p className="text-gray-500">
                                  {permission.description}
                                </p>
                              </div>
                            </div>)}
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              <button onClick={() => setShowRoleModal(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={() => setShowRoleModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Create Role
              </button>
            </div>
          </div>
        </div>}
    </div>;
};