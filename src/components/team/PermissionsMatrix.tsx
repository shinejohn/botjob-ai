import React, { useState, Fragment } from 'react';
import { Shield, Check, Minus, Info, HelpCircle, Download, Filter } from 'lucide-react';
export const PermissionsMatrix = () => {
  const [filterRole, setFilterRole] = useState('all');
  const [filterFeature, setFilterFeature] = useState('all');
  // Sample roles data
  const roles = [{
    id: 'admin',
    name: 'Admin',
    description: 'Full access to all settings and agents'
  }, {
    id: 'manager',
    name: 'Manager',
    description: 'Can manage agents and view analytics'
  }, {
    id: 'developer',
    name: 'Developer',
    description: 'Can create and modify agents'
  }, {
    id: 'viewer',
    name: 'Viewer',
    description: 'Can only view agents and analytics'
  }, {
    id: 'custom',
    name: 'Custom Role',
    description: 'Custom permissions set'
  }];
  // Sample feature categories
  const featureCategories = [{
    id: 'all',
    name: 'All Features'
  }, {
    id: 'team',
    name: 'Team Management'
  }, {
    id: 'agents',
    name: 'Agent Management'
  }, {
    id: 'analytics',
    name: 'Analytics & Reporting'
  }, {
    id: 'billing',
    name: 'Billing & Subscription'
  }];
  // Sample permissions data
  const permissions = [
  // Team Management
  {
    id: 'view_team',
    name: 'View Team Members',
    category: 'team',
    description: 'Can view the list of team members'
  }, {
    id: 'invite_team',
    name: 'Invite Team Members',
    category: 'team',
    description: 'Can invite new team members'
  }, {
    id: 'remove_team',
    name: 'Remove Team Members',
    category: 'team',
    description: 'Can remove team members'
  }, {
    id: 'manage_roles',
    name: 'Manage Roles',
    category: 'team',
    description: 'Can assign and change roles for team members'
  },
  // Agent Management
  {
    id: 'view_agents',
    name: 'View Agents',
    category: 'agents',
    description: 'Can view the list of agents'
  }, {
    id: 'create_agents',
    name: 'Create Agents',
    category: 'agents',
    description: 'Can create new agents'
  }, {
    id: 'edit_agents',
    name: 'Edit Agents',
    category: 'agents',
    description: 'Can modify existing agents'
  }, {
    id: 'delete_agents',
    name: 'Delete Agents',
    category: 'agents',
    description: 'Can delete agents'
  }, {
    id: 'train_agents',
    name: 'Train Agents',
    category: 'agents',
    description: 'Can train and provide feedback to agents'
  }, {
    id: 'deploy_agents',
    name: 'Deploy Agents',
    category: 'agents',
    description: 'Can deploy agents to production'
  },
  // Analytics & Reporting
  {
    id: 'view_analytics',
    name: 'View Analytics',
    category: 'analytics',
    description: 'Can view analytics dashboards'
  }, {
    id: 'export_reports',
    name: 'Export Reports',
    category: 'analytics',
    description: 'Can export analytics reports'
  }, {
    id: 'view_logs',
    name: 'View Activity Logs',
    category: 'analytics',
    description: 'Can view detailed activity logs'
  },
  // Billing & Subscription
  {
    id: 'view_billing',
    name: 'View Billing',
    category: 'billing',
    description: 'Can view billing information and invoices'
  }, {
    id: 'manage_subscription',
    name: 'Manage Subscription',
    category: 'billing',
    description: 'Can change subscription plans and payment methods'
  }, {
    id: 'purchase_addons',
    name: 'Purchase Add-ons',
    category: 'billing',
    description: 'Can purchase additional features or capacity'
  }];
  // Sample permission matrix data (role-permission mapping)
  const permissionMatrix = {
    admin: ['view_team', 'invite_team', 'remove_team', 'manage_roles', 'view_agents', 'create_agents', 'edit_agents', 'delete_agents', 'train_agents', 'deploy_agents', 'view_analytics', 'export_reports', 'view_logs', 'view_billing', 'manage_subscription', 'purchase_addons'],
    manager: ['view_team', 'invite_team', 'view_agents', 'create_agents', 'edit_agents', 'train_agents', 'deploy_agents', 'view_analytics', 'export_reports', 'view_logs', 'view_billing'],
    developer: ['view_team', 'view_agents', 'create_agents', 'edit_agents', 'train_agents', 'view_analytics', 'view_logs'],
    viewer: ['view_team', 'view_agents', 'view_analytics'],
    custom: ['view_team', 'view_agents', 'edit_agents', 'train_agents', 'view_analytics', 'export_reports']
  };
  // Filter permissions based on selected category
  const filteredPermissions = permissions.filter(permission => {
    if (filterFeature !== 'all' && permission.category !== filterFeature) {
      return false;
    }
    return true;
  });
  // Filter roles based on selected role
  const filteredRoles = roles.filter(role => {
    if (filterRole !== 'all' && role.id !== filterRole) {
      return false;
    }
    return true;
  });
  // Check if a role has a specific permission
  const hasPermission = (roleId: string, permissionId: string) => {
    return permissionMatrix[roleId as keyof typeof permissionMatrix].includes(permissionId);
  };
  return <div>
      <div className="flex items-center mb-6">
        <Shield className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Permissions Matrix</h2>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex">
          <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-800">About Permissions</h3>
            <p className="text-sm text-blue-700 mt-1">
              This matrix shows which permissions are granted to each role. Team
              members can only perform actions if their role has the
              corresponding permission. The Admin role always has all
              permissions and cannot be modified.
            </p>
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <select value={filterRole} onChange={e => setFilterRole(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all">All Roles</option>
              {roles.map(role => <option key={role.id} value={role.id}>
                  {role.name}
                </option>)}
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="relative">
            <select value={filterFeature} onChange={e => setFilterFeature(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              {featureCategories.map(category => <option key={category.id} value={category.id}>
                  {category.name}
                </option>)}
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          <Download className="h-5 w-5 mr-2" />
          Export Permissions
        </button>
      </div>
      {/* Permissions Matrix Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 border-r border-gray-200">
                  Permission
                </th>
                {filteredRoles.map(role => <th key={role.id} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {role.name}
                  </th>)}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPermissions.map((permission, i) => <Fragment key={permission.id}>
                  {/* Category Header */}
                  {i === 0 || filteredPermissions[i - 1].category !== permission.category ? <tr className="bg-gray-50">
                      <td colSpan={filteredRoles.length + 1} className="px-6 py-2 text-sm font-medium text-gray-700 sticky left-0 bg-gray-50">
                        {featureCategories.find(c => c.id === permission.category)?.name}
                      </td>
                    </tr> : null}
                  {/* Permission Row */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white border-r border-gray-200 flex items-center">
                      {permission.name}
                      <button className="ml-2 text-gray-400 hover:text-gray-600 group relative">
                        <HelpCircle className="h-4 w-4" />
                        <span className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10">
                          {permission.description}
                        </span>
                      </button>
                    </td>
                    {filteredRoles.map(role => <td key={role.id} className="px-6 py-4 whitespace-nowrap text-center">
                        {role.id === 'admin' ? <span className="text-green-600">
                            <Check className="h-5 w-5 mx-auto" />
                          </span> : hasPermission(role.id, permission.id) ? <span className="text-green-600">
                            <Check className="h-5 w-5 mx-auto" />
                          </span> : <span className="text-gray-300">
                            <Minus className="h-5 w-5 mx-auto" />
                          </span>}
                      </td>)}
                  </tr>
                </Fragment>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Custom Role Management */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Custom Roles</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create Custom Role
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
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
                  Members
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Custom Role
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    Custom permissions set
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">2 members</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};