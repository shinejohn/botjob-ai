import React, { useState } from 'react';
import { AlertTriangle, Plus, Filter, Search, Calendar, User, ExternalLink, Clock, CheckCircle, XCircle, AlertCircle, ChevronDown } from 'lucide-react';
export const IncidentReporting = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [showReportForm, setShowReportForm] = useState(false);
  // Sample incidents
  const incidents = [{
    id: 'inc-001',
    title: 'Unauthorized Data Access Attempt',
    description: 'Multiple failed login attempts detected from unrecognized IP address attempting to access customer data.',
    reportedBy: {
      id: 'user-1',
      name: 'John Smith',
      email: 'john.smith@acme.example.com'
    },
    assignedTo: {
      id: 'user-2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.example.com'
    },
    reportedAt: '2023-06-18T09:45:00Z',
    status: 'resolved',
    resolution: 'Blocked IP address and enforced additional authentication measures.',
    resolutionDate: '2023-06-18T14:30:00Z',
    severity: 'high',
    category: 'security',
    affectedSystems: ['User Authentication', 'Customer Database'],
    relatedRegulations: ['GDPR', 'SOC 2']
  }, {
    id: 'inc-002',
    title: 'Customer Data Exposed in API Response',
    description: 'API endpoint returning more customer PII than necessary in response payload.',
    reportedBy: {
      id: 'user-3',
      name: 'Michael Wong',
      email: 'michael.wong@acme.example.com'
    },
    assignedTo: {
      id: 'user-1',
      name: 'John Smith',
      email: 'john.smith@acme.example.com'
    },
    reportedAt: '2023-06-15T16:20:00Z',
    status: 'in_progress',
    resolution: null,
    resolutionDate: null,
    severity: 'medium',
    category: 'privacy',
    affectedSystems: ['API Gateway', 'Customer Service Portal'],
    relatedRegulations: ['GDPR', 'CCPA']
  }, {
    id: 'inc-003',
    title: 'Missed HIPAA Training Deadline',
    description: 'Healthcare team members did not complete required HIPAA training refresher before deadline.',
    reportedBy: {
      id: 'user-2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.example.com'
    },
    assignedTo: {
      id: 'user-2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.example.com'
    },
    reportedAt: '2023-06-12T11:15:00Z',
    status: 'resolved',
    resolution: 'Expedited training completion and implemented automated reminders.',
    resolutionDate: '2023-06-14T15:45:00Z',
    severity: 'low',
    category: 'training',
    affectedSystems: ['Training Platform'],
    relatedRegulations: ['HIPAA']
  }, {
    id: 'inc-004',
    title: 'Data Retention Policy Violation',
    description: 'Customer data retained beyond permitted timeframe specified in retention policy.',
    reportedBy: {
      id: 'user-4',
      name: 'Emily Chen',
      email: 'emily.chen@acme.example.com'
    },
    assignedTo: null,
    reportedAt: '2023-06-20T10:30:00Z',
    status: 'open',
    resolution: null,
    resolutionDate: null,
    severity: 'medium',
    category: 'data_governance',
    affectedSystems: ['Data Warehouse', 'Archive System'],
    relatedRegulations: ['GDPR', 'CCPA', 'Internal Policy']
  }, {
    id: 'inc-005',
    title: 'Vendor Access Control Issue',
    description: 'Third-party vendor had inappropriate level of access to production systems.',
    reportedBy: {
      id: 'user-1',
      name: 'John Smith',
      email: 'john.smith@acme.example.com'
    },
    assignedTo: {
      id: 'user-2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@acme.example.com'
    },
    reportedAt: '2023-06-10T14:20:00Z',
    status: 'in_progress',
    resolution: null,
    resolutionDate: null,
    severity: 'high',
    category: 'access_control',
    affectedSystems: ['IAM', 'Production Database'],
    relatedRegulations: ['SOC 2', 'ISO 27001']
  }];
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
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
      case 'open':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Open
          </span>;
      case 'in_progress':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            In Progress
          </span>;
      case 'resolved':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Resolved
          </span>;
      case 'closed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 flex items-center">
            <XCircle className="h-3 w-3 mr-1" />
            Closed
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Critical
          </span>;
      case 'high':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
            High
          </span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Medium
          </span>;
      case 'low':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Low
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'security':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Security
          </span>;
      case 'privacy':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            Privacy
          </span>;
      case 'training':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Training
          </span>;
      case 'data_governance':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
            Data Governance
          </span>;
      case 'access_control':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Access Control
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            {category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>;
    }
  };
  return <div className="space-y-6">
      {/* Header with filters */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
              Compliance & Security Incidents
            </h3>
            <button onClick={() => setShowReportForm(!showReportForm)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Report Incident
            </button>
          </div>
          {showReportForm && <div className="mt-6 p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-4">
                Report New Incident
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="incident-title" className="block text-sm font-medium text-gray-700 mb-1">
                    Incident Title*
                  </label>
                  <input type="text" id="incident-title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Brief descriptive title" />
                </div>
                <div>
                  <label htmlFor="incident-category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category*
                  </label>
                  <select id="incident-category" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select category</option>
                    <option value="security">Security</option>
                    <option value="privacy">Privacy</option>
                    <option value="training">Training</option>
                    <option value="data_governance">Data Governance</option>
                    <option value="access_control">Access Control</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="incident-severity" className="block text-sm font-medium text-gray-700 mb-1">
                    Severity*
                  </label>
                  <select id="incident-severity" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select severity</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="affected-systems" className="block text-sm font-medium text-gray-700 mb-1">
                    Affected Systems*
                  </label>
                  <input type="text" id="affected-systems" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Comma-separated list of systems" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="incident-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description*
                  </label>
                  <textarea id="incident-description" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Detailed description of the incident"></textarea>
                </div>
                <div>
                  <label htmlFor="related-regulations" className="block text-sm font-medium text-gray-700 mb-1">
                    Related Regulations
                  </label>
                  <select id="related-regulations" multiple className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" size={3}>
                    <option value="gdpr">GDPR</option>
                    <option value="ccpa">CCPA</option>
                    <option value="hipaa">HIPAA</option>
                    <option value="pci">PCI DSS</option>
                    <option value="soc2">SOC 2</option>
                    <option value="iso27001">ISO 27001</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Hold Ctrl/Cmd to select multiple
                  </p>
                </div>
                <div>
                  <label htmlFor="incident-file" className="block text-sm font-medium text-gray-700 mb-1">
                    Attachments
                  </label>
                  <input type="file" id="incident-file" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" multiple />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload relevant screenshots or documents
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button onClick={() => setShowReportForm(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Submit Report
                </button>
              </div>
            </div>}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <select id="status-filter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Statuses</option>
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="severity-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Severity
              </label>
              <div className="relative">
                <select id="severity-filter" value={severityFilter} onChange={e => setSeverityFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
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
                <input type="text" id="search" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search incidents" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Incidents List */}
      <div className="space-y-4">
        {incidents.map(incident => <div key={incident.id} className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex items-start">
                <AlertTriangle className={`h-5 w-5 mt-0.5 ${incident.severity === 'critical' ? 'text-red-500' : incident.severity === 'high' ? 'text-orange-500' : incident.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'}`} />
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    {incident.title}
                  </h4>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {getStatusBadge(incident.status)}
                    {getSeverityBadge(incident.severity)}
                    {getCategoryBadge(incident.category)}
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center">
                <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm text-gray-600 mb-4">
                {incident.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Incident Details
                  </h5>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Calendar className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div className="ml-2">
                        <p className="text-xs text-gray-500">Reported</p>
                        <p className="text-sm text-gray-900">
                          {formatDate(incident.reportedAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <User className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div className="ml-2">
                        <p className="text-xs text-gray-500">Reported By</p>
                        <p className="text-sm text-gray-900">
                          {incident.reportedBy.name}
                        </p>
                      </div>
                    </div>
                    {incident.assignedTo && <div className="flex items-start">
                        <User className="h-4 w-4 text-gray-400 mt-0.5" />
                        <div className="ml-2">
                          <p className="text-xs text-gray-500">Assigned To</p>
                          <p className="text-sm text-gray-900">
                            {incident.assignedTo.name}
                          </p>
                        </div>
                      </div>}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Compliance Impact
                  </h5>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-500">Affected Systems</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {incident.affectedSystems.map((system, index) => <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">
                            {system}
                          </span>)}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        Related Regulations
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {incident.relatedRegulations.map((regulation, index) => <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                              {regulation}
                            </span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {incident.resolution && <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                  <h5 className="text-sm font-medium text-green-800 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Resolution
                  </h5>
                  <p className="mt-1 text-sm text-green-700">
                    {incident.resolution}
                  </p>
                  {incident.resolutionDate && <p className="mt-1 text-xs text-green-600">
                      Resolved on {formatDate(incident.resolutionDate)}
                    </p>}
                </div>}
              <div className="mt-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  {incident.status !== 'resolved' && incident.status !== 'closed' && <>
                        <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                          Update
                        </button>
                        <button className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md hover:bg-green-200">
                          Resolve
                        </button>
                      </>}
                  {incident.status === 'resolved' && <button className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200">
                      Close
                    </button>}
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-900 flex items-center">
                  Audit Trail
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>)}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">5</span> of{' '}
            <span className="font-medium">12</span> incidents
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <ChevronDown className="h-5 w-5 rotate-90" />
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-blue-500 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100">
              1
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <ChevronDown className="h-5 w-5 -rotate-90" />
            </button>
          </nav>
        </div>
      </div>
    </div>;
};