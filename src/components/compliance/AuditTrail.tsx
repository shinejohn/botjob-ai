import React, { useState } from 'react';
import { Download, Filter, Search, FileText, User, Calendar, ChevronDown } from 'lucide-react';
export const AuditTrail = () => {
  const [dateRange, setDateRange] = useState('last30');
  const [eventType, setEventType] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  // Sample audit events
  const auditEvents = [{
    id: 'evt-001',
    timestamp: '2023-06-22T14:32:15Z',
    user: {
      id: 'user-1',
      name: 'John Smith',
      email: 'john.smith@acme.example.com',
      role: 'Admin'
    },
    event: 'User Login',
    details: 'Successful login from 192.168.1.1',
    category: 'authentication',
    severity: 'info'
  }, {
    id: 'evt-002',
    timestamp: '2023-06-22T11:15:42Z',
    user: {
      id: 'user-2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.example.com',
      role: 'Compliance Officer'
    },
    event: 'Compliance Report Generated',
    details: 'GDPR compliance report generated and exported',
    category: 'compliance',
    severity: 'info'
  }, {
    id: 'evt-003',
    timestamp: '2023-06-21T16:45:22Z',
    user: {
      id: 'user-1',
      name: 'John Smith',
      email: 'john.smith@acme.example.com',
      role: 'Admin'
    },
    event: 'User Permission Changed',
    details: 'Modified permissions for user Emily Chen (emily.chen@acme.example.com)',
    category: 'access_control',
    severity: 'warning'
  }, {
    id: 'evt-004',
    timestamp: '2023-06-20T09:12:33Z',
    user: {
      id: 'user-3',
      name: 'Michael Wong',
      email: 'michael.wong@acme.example.com',
      role: 'Developer'
    },
    event: 'API Key Created',
    details: 'New API key created for customer portal integration',
    category: 'security',
    severity: 'info'
  }, {
    id: 'evt-005',
    timestamp: '2023-06-19T13:05:11Z',
    user: {
      id: 'user-2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.example.com',
      role: 'Compliance Officer'
    },
    event: 'Data Export',
    details: 'Customer data exported for GDPR compliance request',
    category: 'data_access',
    severity: 'warning'
  }, {
    id: 'evt-006',
    timestamp: '2023-06-18T15:22:45Z',
    user: {
      id: 'user-1',
      name: 'John Smith',
      email: 'john.smith@acme.example.com',
      role: 'Admin'
    },
    event: 'System Configuration Changed',
    details: 'Modified data retention settings from 90 days to 180 days',
    category: 'system',
    severity: 'warning'
  }, {
    id: 'evt-007',
    timestamp: '2023-06-17T10:33:21Z',
    user: {
      id: 'user-4',
      name: 'Emily Chen',
      email: 'emily.chen@acme.example.com',
      role: 'Support'
    },
    event: 'Customer Data Accessed',
    details: 'Viewed customer profile for support ticket #45982',
    category: 'data_access',
    severity: 'info'
  }, {
    id: 'evt-008',
    timestamp: '2023-06-16T08:45:32Z',
    user: {
      id: 'system',
      name: 'System',
      email: 'system@acme.example.com',
      role: 'System'
    },
    event: 'Automated Backup Completed',
    details: 'Daily automated backup completed successfully',
    category: 'system',
    severity: 'info'
  }, {
    id: 'evt-009',
    timestamp: '2023-06-15T23:12:05Z',
    user: {
      id: 'system',
      name: 'System',
      email: 'system@acme.example.com',
      role: 'System'
    },
    event: 'Failed Login Attempt',
    details: 'Multiple failed login attempts for user john.smith@acme.example.com from 209.85.220.41',
    category: 'authentication',
    severity: 'critical'
  }, {
    id: 'evt-010',
    timestamp: '2023-06-15T14:22:18Z',
    user: {
      id: 'user-2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.example.com',
      role: 'Compliance Officer'
    },
    event: 'Compliance Policy Updated',
    details: 'Updated HIPAA compliance policy document',
    category: 'compliance',
    severity: 'info'
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
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Critical
          </span>;
      case 'warning':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Warning
          </span>;
      case 'info':
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            Info
          </span>;
    }
  };
  return <div className="space-y-6">
      {/* Header with filters */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <h3 className="text-lg font-medium text-gray-900">Audit Trail</h3>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="date-range" className="block text-sm font-medium text-gray-700 mb-1">
                Date Range
              </label>
              <div className="relative">
                <select id="date-range" value={dateRange} onChange={e => setDateRange(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="last7">Last 7 days</option>
                  <option value="last30">Last 30 days</option>
                  <option value="custom">Custom range</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Calendar className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
                Event Type
              </label>
              <div className="relative">
                <select id="event-type" value={eventType} onChange={e => setEventType(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Events</option>
                  <option value="authentication">Authentication</option>
                  <option value="access_control">Access Control</option>
                  <option value="data_access">Data Access</option>
                  <option value="compliance">Compliance</option>
                  <option value="security">Security</option>
                  <option value="system">System</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="user-filter" className="block text-sm font-medium text-gray-700 mb-1">
                User
              </label>
              <div className="relative">
                <select id="user-filter" value={userFilter} onChange={e => setUserFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Users</option>
                  <option value="user-1">John Smith</option>
                  <option value="user-2">Sarah Johnson</option>
                  <option value="user-3">Michael Wong</option>
                  <option value="user-4">Emily Chen</option>
                  <option value="system">System</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input type="text" id="search" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search audit logs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Audit Log Table */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {auditEvents.map(event => <tr key={event.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(event.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {event.user.name}
                      </div>
                      <div className="text-xs text-gray-500 ml-1">
                        ({event.user.role})
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {event.user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {event.event}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {event.details}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getSeverityBadge(event.severity)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      View Details
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <ChevronDown className="h-5 w-5 rotate-90" />
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-blue-500 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
                  3
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  4
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  5
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <ChevronDown className="h-5 w-5 -rotate-90" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>;
};