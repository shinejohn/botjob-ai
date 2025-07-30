import React, { useState, Component } from 'react';
import { AlertCircle, Shield, Activity, Clock, Calendar, ExternalLink, Eye, AlertTriangle, Check, X, Filter, Search, ChevronDown } from 'lucide-react';
export const ThreatMonitoring = () => {
  const [severityFilter, setSeverityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  // Sample security alerts
  const securityAlerts = [{
    id: 'alert-001',
    title: 'Unusual Login Activity Detected',
    description: 'Multiple failed login attempts followed by successful login from unusual location.',
    severity: 'high',
    status: 'active',
    detectedAt: '2023-06-22T08:15:00Z',
    source: 'User Authentication System',
    affectedAssets: ['Authentication Service', 'User Database'],
    assignedTo: 'John Smith',
    actions: ['Investigate', 'Block IP', 'Reset Password']
  }, {
    id: 'alert-002',
    title: 'Suspicious API Usage Pattern',
    description: 'Abnormal rate of API calls detected from a single client, possible API abuse.',
    severity: 'medium',
    status: 'investigating',
    detectedAt: '2023-06-21T16:45:00Z',
    source: 'API Gateway',
    affectedAssets: ['API Gateway', 'Customer Service API'],
    assignedTo: 'Sarah Johnson',
    actions: ['Monitor', 'Rate Limit']
  }, {
    id: 'alert-003',
    title: 'Potential Data Exfiltration Attempt',
    description: 'Large volume of data being exported from database during non-business hours.',
    severity: 'critical',
    status: 'active',
    detectedAt: '2023-06-22T02:30:00Z',
    source: 'Database Monitoring',
    affectedAssets: ['Customer Database', 'Data Warehouse'],
    assignedTo: null,
    actions: ['Investigate', 'Block Connection', 'Review Logs']
  }, {
    id: 'alert-004',
    title: 'Outdated SSL Certificate',
    description: 'SSL certificate for api.example.com will expire in 7 days.',
    severity: 'low',
    status: 'resolved',
    detectedAt: '2023-06-20T10:15:00Z',
    resolvedAt: '2023-06-21T14:30:00Z',
    source: 'Certificate Monitor',
    affectedAssets: ['API Gateway'],
    assignedTo: 'Michael Wong',
    resolution: 'Certificate renewed and deployed',
    actions: []
  }, {
    id: 'alert-005',
    title: 'Malware Detection',
    description: 'Potential malware detected in uploaded file.',
    severity: 'high',
    status: 'resolved',
    detectedAt: '2023-06-19T13:45:00Z',
    resolvedAt: '2023-06-19T15:20:00Z',
    source: 'Antivirus Scanner',
    affectedAssets: ['File Upload Service', 'Document Storage'],
    assignedTo: 'Sarah Johnson',
    resolution: 'File quarantined and deleted, user notified',
    actions: []
  }];
  // Sample security metrics
  const securityMetrics = {
    activeThreatCount: 3,
    avgResolutionTime: 2.5,
    blockedAttacks: {
      today: 247,
      weekly: 1853,
      monthly: 7245
    },
    topAttackVectors: [{
      name: 'Brute Force',
      count: 523,
      trend: 'up'
    }, {
      name: 'SQL Injection',
      count: 215,
      trend: 'down'
    }, {
      name: 'XSS',
      count: 187,
      trend: 'stable'
    }, {
      name: 'File Upload',
      count: 124,
      trend: 'up'
    }],
    securityScore: 82 // out of 100
  };
  // Sample vulnerability scan results
  const vulnerabilityScanResults = {
    lastScan: '2023-06-21T00:00:00Z',
    nextScheduledScan: '2023-06-28T00:00:00Z',
    vulnerabilities: {
      critical: 0,
      high: 2,
      medium: 5,
      low: 12
    },
    topVulnerabilities: [{
      id: 'vuln-001',
      title: 'Cross-Site Scripting in Search Component',
      severity: 'high',
      cvss: 7.5,
      affected: 'Web Application - Search Feature',
      status: 'open',
      discoveredAt: '2023-06-21T00:00:00Z',
      remediation: 'Implement proper input validation and output encoding'
    }, {
      id: 'vuln-002',
      title: 'Outdated Node.js Package with Known Vulnerabilities',
      severity: 'high',
      cvss: 7.2,
      affected: 'API Server Dependencies',
      status: 'in_progress',
      discoveredAt: '2023-06-21T00:00:00Z',
      remediation: 'Update to latest version of the package'
    }, {
      id: 'vuln-003',
      title: 'Insecure Password Storage',
      severity: 'medium',
      cvss: 5.5,
      affected: 'Authentication Service',
      status: 'in_progress',
      discoveredAt: '2023-06-21T00:00:00Z',
      remediation: 'Implement stronger password hashing algorithm'
    }]
  };
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
  const getTimeSince = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffMins < 60) {
      return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
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
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Active
          </span>;
      case 'investigating':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <Eye className="h-3 w-3 mr-1" />
            Investigating
          </span>;
      case 'resolved':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <Check className="h-3 w-3 mr-1" />
            Resolved
          </span>;
      case 'dismissed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 flex items-center">
            <X className="h-3 w-3 mr-1" />
            Dismissed
          </span>;
      case 'open':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Open
          </span>;
      case 'in_progress':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            In Progress
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <span className="text-red-500">↑</span>;
      case 'down':
        return <span className="text-green-500">↓</span>;
      case 'stable':
        return <span className="text-gray-500">→</span>;
      default:
        return null;
    }
  };
  return <div className="space-y-6">
      {/* Security Metrics */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-blue-500" />
            Security Metrics
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Active Threats</h4>
                <div className="bg-red-100 text-red-800 p-2 rounded-full">
                  <AlertCircle className="h-5 w-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {securityMetrics.activeThreatCount}
              </p>
              <p className="text-sm text-gray-500 mt-1">Requiring attention</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Resolution Time</h4>
                <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {securityMetrics.avgResolutionTime}h
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Average resolution time
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Blocked Attacks</h4>
                <div className="bg-green-100 text-green-800 p-2 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {securityMetrics.blockedAttacks.today}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Today ({securityMetrics.blockedAttacks.weekly} this week)
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Security Score</h4>
                <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {securityMetrics.securityScore}/100
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className={`h-2.5 rounded-full ${securityMetrics.securityScore >= 80 ? 'bg-green-500' : securityMetrics.securityScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                width: `${securityMetrics.securityScore}%`
              }}></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4">
                Top Attack Vectors
              </h4>
              <div className="space-y-3">
                {securityMetrics.topAttackVectors.map((vector, index) => <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-sm text-gray-700">
                        {vector.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 mr-2">
                        {vector.count}
                      </span>
                      {getTrendIcon(vector.trend)}
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4">
                Vulnerability Summary
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Last Scan</p>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(vulnerabilityScanResults.lastScan)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Scan</p>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(vulnerabilityScanResults.nextScheduledScan)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Critical/High</p>
                  <p className="text-sm font-medium text-red-600">
                    {vulnerabilityScanResults.vulnerabilities.critical} /{' '}
                    {vulnerabilityScanResults.vulnerabilities.high}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Medium/Low</p>
                  <p className="text-sm font-medium text-yellow-600">
                    {vulnerabilityScanResults.vulnerabilities.medium} /{' '}
                    {vulnerabilityScanResults.vulnerabilities.low}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  View full vulnerability report
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Security Alerts */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-blue-500" />
            Security Alerts
          </h3>
        </div>
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <select id="status-filter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="investigating">Investigating</option>
                  <option value="resolved">Resolved</option>
                  <option value="dismissed">Dismissed</option>
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
                <input type="text" id="search" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search alerts" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {securityAlerts.map(alert => <div key={alert.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-start">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${alert.severity === 'critical' ? 'text-red-500' : alert.severity === 'high' ? 'text-orange-500' : alert.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'}`} />
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">
                        {alert.title}
                      </h4>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {getSeverityBadge(alert.severity)}
                        {getStatusBadge(alert.status)}
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                          {getTimeSince(alert.detectedAt)}
                        </span>
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
                    {alert.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Alert Details
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Calendar className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div className="ml-2">
                            <p className="text-xs text-gray-500">Detected</p>
                            <p className="text-sm text-gray-900">
                              {formatDate(alert.detectedAt)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div className="ml-2">
                            <p className="text-xs text-gray-500">Source</p>
                            <p className="text-sm text-gray-900">
                              {alert.source}
                            </p>
                          </div>
                        </div>
                        {alert.assignedTo && <div className="flex items-start">
                            <User className="h-4 w-4 text-gray-400 mt-0.5" />
                            <div className="ml-2">
                              <p className="text-xs text-gray-500">
                                Assigned To
                              </p>
                              <p className="text-sm text-gray-900">
                                {alert.assignedTo}
                              </p>
                            </div>
                          </div>}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Affected Assets
                      </h5>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {alert.affectedAssets.map((asset, index) => <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded text-xs">
                            {asset}
                          </span>)}
                      </div>
                      {alert.resolution && <div className="mt-4">
                          <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                            Resolution
                          </h5>
                          <p className="text-sm text-gray-900">
                            {alert.resolution}
                          </p>
                          {alert.resolvedAt && <p className="text-xs text-gray-500 mt-1">
                              Resolved on {formatDate(alert.resolvedAt)}
                            </p>}
                        </div>}
                    </div>
                  </div>
                  {alert.actions && alert.actions.length > 0 && alert.status !== 'resolved' && <div className="mt-4 flex flex-wrap gap-2">
                        {alert.actions.map((action, index) => <button key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                            {action}
                          </button>)}
                      </div>}
                </div>
              </div>)}
          </div>
          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{' '}
                <span className="font-medium">5</span> of{' '}
                <span className="font-medium">12</span> alerts
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
        </div>
      </div>
      {/* Vulnerability Management */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-blue-500" />
            Vulnerability Management
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
            <Activity className="h-4 w-4 mr-2" />
            Run Scan
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Latest Vulnerability Scan
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Last scan completed on{' '}
                {formatDate(vulnerabilityScanResults.lastScan)}. Next scan
                scheduled for{' '}
                {formatDate(vulnerabilityScanResults.nextScheduledScan)}.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs text-gray-600">
                  Critical: {vulnerabilityScanResults.vulnerabilities.critical}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
                <span className="text-xs text-gray-600">
                  High: {vulnerabilityScanResults.vulnerabilities.high}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                <span className="text-xs text-gray-600">
                  Medium: {vulnerabilityScanResults.vulnerabilities.medium}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-gray-600">
                  Low: {vulnerabilityScanResults.vulnerabilities.low}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {vulnerabilityScanResults.topVulnerabilities.map(vuln => <div key={vuln.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex items-start">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 ${vuln.severity === 'critical' ? 'text-red-500' : vuln.severity === 'high' ? 'text-orange-500' : vuln.severity === 'medium' ? 'text-yellow-500' : 'text-green-500'}`} />
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">
                        {vuln.title}
                      </h4>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {getSeverityBadge(vuln.severity)}
                        {getStatusBadge(vuln.status)}
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          CVSS: {vuln.cvss}
                        </span>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Vulnerability Details
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Calendar className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div className="ml-2">
                            <p className="text-xs text-gray-500">Discovered</p>
                            <p className="text-sm text-gray-900">
                              {formatDate(vuln.discoveredAt)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-gray-400 mt-0.5" />
                          <div className="ml-2">
                            <p className="text-xs text-gray-500">Affected</p>
                            <p className="text-sm text-gray-900">
                              {vuln.affected}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        Remediation
                      </h5>
                      <p className="text-sm text-gray-900">
                        {vuln.remediation}
                      </p>
                      {vuln.status === 'in_progress' && <div className="mt-4">
                          <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                            Status
                          </h5>
                          <p className="text-sm text-blue-600">
                            Remediation in progress
                          </p>
                        </div>}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    {vuln.status !== 'resolved' && <>
                        <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                          Assign
                        </button>
                        <button className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md hover:bg-green-200">
                          Mark as Fixed
                        </button>
                      </>}
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center mx-auto">
              <ExternalLink className="h-4 w-4 mr-1" />
              View Full Vulnerability Report
            </button>
          </div>
        </div>
      </div>
    </div>;
};