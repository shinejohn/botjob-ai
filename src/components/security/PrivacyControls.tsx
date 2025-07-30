import React, { useState } from 'react';
import { Shield, User, FileText, Settings, AlertTriangle, CheckCircle, X, Eye, Download, Filter, Search, Globe, Lock, RefreshCw } from 'lucide-react';
export const PrivacyControls = () => {
  const [showConsentModal, setShowConsentModal] = useState(false);
  // Sample privacy settings
  const privacySettings = {
    dataRetention: {
      customerData: '24 months',
      analyticsData: '12 months',
      logsData: '6 months',
      marketingData: '36 months',
      status: 'compliant'
    },
    consentManagement: {
      consentTypes: ['Marketing', 'Analytics', 'Essential', 'Third-party'],
      consentVersion: '2.1',
      lastUpdated: '2023-05-10T00:00:00Z',
      status: 'compliant'
    },
    dataSubjectRights: {
      totalRequests: 28,
      pendingRequests: 3,
      completedRequests: 25,
      averageResolutionTime: '5 days',
      status: 'compliant'
    },
    dataProcessing: {
      registeredProcessors: 12,
      dpaStatus: 'complete',
      riskAssessments: 'completed',
      status: 'compliant'
    }
  };
  // Sample data subject requests
  const dataSubjectRequests = [{
    id: 'dsr-001',
    type: 'access',
    requestedBy: 'john.doe@example.com',
    requestedAt: '2023-06-15T14:30:00Z',
    status: 'completed',
    completedAt: '2023-06-20T11:45:00Z',
    assignedTo: 'Sarah Johnson'
  }, {
    id: 'dsr-002',
    type: 'deletion',
    requestedBy: 'jane.smith@example.com',
    requestedAt: '2023-06-18T09:15:00Z',
    status: 'in_progress',
    completedAt: null,
    assignedTo: 'Michael Wong'
  }, {
    id: 'dsr-003',
    type: 'portability',
    requestedBy: 'robert.brown@example.com',
    requestedAt: '2023-06-20T16:45:00Z',
    status: 'pending',
    completedAt: null,
    assignedTo: null
  }, {
    id: 'dsr-004',
    type: 'correction',
    requestedBy: 'susan.miller@example.com',
    requestedAt: '2023-06-12T10:30:00Z',
    status: 'completed',
    completedAt: '2023-06-14T15:20:00Z',
    assignedTo: 'Sarah Johnson'
  }, {
    id: 'dsr-005',
    type: 'restriction',
    requestedBy: 'david.wilson@example.com',
    requestedAt: '2023-06-16T11:00:00Z',
    status: 'completed',
    completedAt: '2023-06-19T14:10:00Z',
    assignedTo: 'John Smith'
  }];
  // Sample data processors
  const dataProcessors = [{
    id: 'proc-001',
    name: 'AWS',
    purpose: 'Cloud Infrastructure',
    dataAccessed: ['Customer Data', 'Analytics Data'],
    dpaStatus: 'signed',
    location: 'United States',
    lastReviewed: '2023-04-15T00:00:00Z'
  }, {
    id: 'proc-002',
    name: 'Salesforce',
    purpose: 'CRM',
    dataAccessed: ['Customer Data', 'Marketing Data'],
    dpaStatus: 'signed',
    location: 'United States',
    lastReviewed: '2023-03-20T00:00:00Z'
  }, {
    id: 'proc-003',
    name: 'Mailchimp',
    purpose: 'Email Marketing',
    dataAccessed: ['Email Addresses', 'Marketing Preferences'],
    dpaStatus: 'signed',
    location: 'United States',
    lastReviewed: '2023-05-10T00:00:00Z'
  }, {
    id: 'proc-004',
    name: 'Google Analytics',
    purpose: 'Analytics',
    dataAccessed: ['Usage Data', 'IP Addresses'],
    dpaStatus: 'signed',
    location: 'United States',
    lastReviewed: '2023-02-28T00:00:00Z'
  }, {
    id: 'proc-005',
    name: 'Stripe',
    purpose: 'Payment Processing',
    dataAccessed: ['Payment Information', 'Billing Addresses'],
    dpaStatus: 'signed',
    location: 'United States',
    lastReviewed: '2023-04-05T00:00:00Z'
  }];
  // Sample consent records
  const consentVersions = [{
    id: 'consent-v2.1',
    version: '2.1',
    effectiveDate: '2023-05-10T00:00:00Z',
    changes: 'Updated to include new data processing activities and third-party processors',
    status: 'current'
  }, {
    id: 'consent-v2.0',
    version: '2.0',
    effectiveDate: '2022-11-15T00:00:00Z',
    changes: 'Major update to align with latest GDPR and CCPA requirements',
    status: 'archived'
  }, {
    id: 'consent-v1.5',
    version: '1.5',
    effectiveDate: '2022-06-20T00:00:00Z',
    changes: 'Added new marketing consent options and updated language for clarity',
    status: 'archived'
  }, {
    id: 'consent-v1.0',
    version: '1.0',
    effectiveDate: '2021-12-01T00:00:00Z',
    changes: 'Initial consent management implementation',
    status: 'archived'
  }];
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'compliant':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Compliant
          </span>;
      case 'non_compliant':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Non-Compliant
          </span>;
      case 'review_needed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Review Needed
          </span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </span>;
      case 'in_progress':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <RefreshCw className="h-3 w-3 mr-1" />
            In Progress
          </span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </span>;
      case 'signed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Signed
          </span>;
      case 'unsigned':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <X className="h-3 w-3 mr-1" />
            Unsigned
          </span>;
      case 'current':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Current
          </span>;
      case 'archived':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 flex items-center">
            <Archive className="h-3 w-3 mr-1" />
            Archived
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
          </span>;
    }
  };
  const getRequestTypeBadge = (type: string) => {
    switch (type) {
      case 'access':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            Access
          </span>;
      case 'deletion':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Deletion
          </span>;
      case 'portability':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
            Portability
          </span>;
      case 'correction':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Correction
          </span>;
      case 'restriction':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Restriction
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>;
    }
  };
  return <div className="space-y-6">
      {/* Privacy Settings Overview */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-blue-500" />
            Privacy Controls Overview
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Data Retention</h4>
                {getStatusBadge(privacySettings.dataRetention.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Customer Data:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataRetention.customerData}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Analytics Data:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataRetention.analyticsData}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Logs Data:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataRetention.logsData}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Marketing Data:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataRetention.marketingData}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <Settings className="h-3 w-3 mr-1" />
                  Manage Retention
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">
                  Consent Management
                </h4>
                {getStatusBadge(privacySettings.consentManagement.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Consent Types:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.consentManagement.consentTypes.length}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Current Version:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.consentManagement.consentVersion}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Last Updated:</span>
                  <span className="font-medium text-gray-900">
                    {formatDate(privacySettings.consentManagement.lastUpdated)}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button onClick={() => setShowConsentModal(true)} className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <Settings className="h-3 w-3 mr-1" />
                  Manage Consent
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">
                  Data Subject Rights
                </h4>
                {getStatusBadge(privacySettings.dataSubjectRights.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Total Requests:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataSubjectRights.totalRequests}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Pending:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataSubjectRights.pendingRequests}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Completed:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataSubjectRights.completedRequests}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Avg. Resolution:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataSubjectRights.averageResolutionTime}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  View Requests
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Data Processing</h4>
                {getStatusBadge(privacySettings.dataProcessing.status)}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Processors:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataProcessing.registeredProcessors}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">DPA Status:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataProcessing.dpaStatus}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Risk Assessments:</span>
                  <span className="font-medium text-gray-900">
                    {privacySettings.dataProcessing.riskAssessments}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  <FileText className="h-3 w-3 mr-1" />
                  View Processors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Data Subject Requests */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <User className="h-5 w-5 mr-2 text-blue-500" />
            Data Subject Requests
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="request-type" className="block text-sm font-medium text-gray-700 mb-1">
                Request Type
              </label>
              <div className="relative">
                <select id="request-type" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Types</option>
                  <option value="access">Access</option>
                  <option value="deletion">Deletion</option>
                  <option value="portability">Portability</option>
                  <option value="correction">Correction</option>
                  <option value="restriction">Restriction</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="request-status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <select id="request-status" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="request-search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input type="text" id="request-search" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search by email or ID" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requested By
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requested On
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dataSubjectRequests.map(request => <tr key={request.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {request.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getRequestTypeBadge(request.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.requestedBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(request.requestedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(request.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.assignedTo || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="h-4 w-4" />
                        </button>
                        {request.status === 'completed' && <button className="text-blue-600 hover:text-blue-900">
                            <Download className="h-4 w-4" />
                          </button>}
                        {request.status !== 'completed' && <button className="text-blue-600 hover:text-blue-900">
                            <Edit className="h-4 w-4" />
                          </button>}
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Data Processors */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Server className="h-5 w-5 mr-2 text-blue-500" />
            Data Processors
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Processor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Purpose
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data Accessed
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DPA Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Reviewed
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataProcessors.map(processor => <tr key={processor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {processor.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {processor.purpose}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {processor.dataAccessed.map((data, index) => <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                          {data}
                        </span>)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(processor.dpaStatus)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">
                        {processor.location}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(processor.lastReviewed)}
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
      </div>
      {/* Consent Management */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-500" />
            Consent Management
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Consent Types
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-900">
                      Essential
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      Required for the core functionality of the service. Cannot
                      be disabled.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-900">
                      Analytics
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      Used to track user behavior and improve our service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-900">
                      Marketing
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      Used to send marketing communications and personalized
                      offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-sm font-medium text-gray-900">
                      Third-party
                    </h5>
                    <p className="mt-1 text-sm text-gray-500">
                      Allows sharing of data with third-party services and
                      partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Consent Version History
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Version
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Effective Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Changes
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {consentVersions.map(version => <tr key={version.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {version.version}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(version.effectiveDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(version.status)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {version.changes}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900">
                          View
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy Documentation */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-500" />
            Privacy Documentation
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Privacy Policy
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Current privacy policy (v2.3)
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Data Processing Register
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    GDPR Article 30 documentation
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Data Protection Impact Assessment
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Latest DPIA results
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Cookie Policy
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Current cookie policy (v1.5)
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Regulatory Compliance Report
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    GDPR, CCPA, and other regulations
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Data Breach Response Plan
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Procedures for handling data breaches
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Consent Management Modal */}
      {showConsentModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Consent Management
              </h3>
              <button onClick={() => setShowConsentModal(false)} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="consent-version" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Consent Version
                  </label>
                  <input type="text" id="consent-version" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" value="2.1" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Consent Types
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="consent-essential" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked disabled />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="consent-essential" className="font-medium text-gray-700">
                          Essential
                        </label>
                        <p className="text-gray-500">
                          Required for the core functionality. Cannot be
                          disabled.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="consent-analytics" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="consent-analytics" className="font-medium text-gray-700">
                          Analytics
                        </label>
                        <p className="text-gray-500">
                          Used to track user behavior and improve our service.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="consent-marketing" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="consent-marketing" className="font-medium text-gray-700">
                          Marketing
                        </label>
                        <p className="text-gray-500">
                          Used to send marketing communications and personalized
                          offers.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="consent-thirdparty" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="consent-thirdparty" className="font-medium text-gray-700">
                          Third-party
                        </label>
                        <p className="text-gray-500">
                          Allows sharing of data with third-party services and
                          partners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="new-consent-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Add New Consent Type
                  </label>
                  <div className="flex space-x-2">
                    <input type="text" id="new-consent-type" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter name for new consent type" />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Add
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <label htmlFor="update-version" className="block text-sm font-medium text-gray-700 mb-1">
                    Update Consent Version
                  </label>
                  <div className="flex space-x-2">
                    <input type="text" id="update-version" className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="2.2" />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Update
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Updating the consent version will require users to
                    re-consent on their next login.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              <button onClick={() => setShowConsentModal(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={() => setShowConsentModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>}
    </div>;
};