import React, { useState, createElement, Component } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Activity, AlertTriangle, ArrowDown, ArrowUp, BarChart2, Bell, Check, CheckCircle, ChevronDown, ChevronRight, Clock, Database, Download, Edit, Eye, Filter, Flag, HardDrive, Info, Lock, MoreHorizontal, Percent, RefreshCw, Search, Server, Settings, Shield, Sliders, Tag, ToggleLeft, ToggleRight, Trash, User, UserPlus, Users, X, XCircle, Zap, Plus, Loader } from 'lucide-react';
import { AgentBuilder } from '../components/development/AgentBuilder';
import { BasicConfiguration } from '../components/setup/BasicConfiguration';
import { TrainingKnowledge } from '../components/setup/TrainingKnowledge';
export const SystemAdministration = () => {
  const [activeTab, setActiveTab] = useState('platform');
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [config, setConfig] = useState({});
  // New state variables for the action buttons functionality
  const [isRunningDiagnostics, setIsRunningDiagnostics] = useState(false);
  const [showScalingModal, setShowScalingModal] = useState(false);
  const [diagnosticsProgress, setDiagnosticsProgress] = useState(0);
  const [diagnosticsComplete, setDiagnosticsComplete] = useState(false);
  const [diagnosticsResults, setDiagnosticsResults] = useState<any>(null);
  const updateConfig = (newConfig: any) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      ...newConfig
    }));
  };
  // Handle running diagnostics
  const handleRunDiagnostics = () => {
    setIsRunningDiagnostics(true);
    setDiagnosticsProgress(0);
    setDiagnosticsComplete(false);
    // Simulate progress updates
    const interval = setInterval(() => {
      setDiagnosticsProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDiagnosticsComplete(true);
          // Simulate diagnostics results
          setDiagnosticsResults({
            status: 'healthy',
            componentsChecked: 5,
            issuesFound: 1,
            recommendations: ['Increase storage capacity in US-West region', 'Update API service dependencies']
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };
  // Handle exporting logs
  const handleExportLogs = () => {
    // Create a fake text content for the logs
    const logContent = `
      [INFO] ${new Date().toISOString()} - System log export initiated
      [INFO] ${new Date().toISOString()} - Collecting logs from all components
      [INFO] ${new Date().toISOString()} - API Services: 0 critical errors, 2 warnings
      [INFO] ${new Date().toISOString()} - Database Cluster: 0 critical errors, 0 warnings
      [INFO] ${new Date().toISOString()} - Authentication Services: 0 critical errors, 0 warnings
      [WARNING] ${new Date().toISOString()} - Storage Services: High latency detected in US-West region
      [INFO] ${new Date().toISOString()} - ML Processing: 0 critical errors, 1 warning
      [INFO] ${new Date().toISOString()} - Log export complete
    `;
    // Create a Blob with the log content
    const blob = new Blob([logContent], {
      type: 'text/plain'
    });
    // Create a download link and trigger the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `system_logs_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  // Platform health data
  const systemStatus = {
    overall: 'healthy',
    uptime: '99.98%',
    lastIncident: '15 days ago',
    activeUsers: 1243,
    apiCalls: '2.3M / day',
    responseTime: '120ms',
    components: [{
      id: 'api',
      name: 'API Services',
      status: 'healthy',
      uptime: '99.99%',
      latency: '65ms',
      load: 42
    }, {
      id: 'db',
      name: 'Database Cluster',
      status: 'healthy',
      uptime: '99.97%',
      latency: '18ms',
      load: 38
    }, {
      id: 'auth',
      name: 'Authentication Services',
      status: 'healthy',
      uptime: '100%',
      latency: '45ms',
      load: 25
    }, {
      id: 'storage',
      name: 'Storage Services',
      status: 'degraded',
      uptime: '99.85%',
      latency: '220ms',
      load: 78,
      issue: 'High latency in US-West region'
    }, {
      id: 'ml',
      name: 'ML Processing',
      status: 'healthy',
      uptime: '99.95%',
      latency: '320ms',
      load: 65
    }],
    metrics: [{
      name: 'CPU Usage',
      value: '42%',
      trend: 'stable'
    }, {
      name: 'Memory Usage',
      value: '68%',
      trend: 'increasing'
    }, {
      name: 'Disk I/O',
      value: '12.5 MB/s',
      trend: 'stable'
    }, {
      name: 'Network Traffic',
      value: '850 Mbps',
      trend: 'increasing'
    }, {
      name: 'Error Rate',
      value: '0.02%',
      trend: 'decreasing'
    }],
    alerts: [{
      id: 'alert1',
      severity: 'warning',
      component: 'Storage Services',
      message: 'Increased latency in US-West region',
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      acknowledged: true
    }, {
      id: 'alert2',
      severity: 'info',
      component: 'API Services',
      message: 'Scheduled maintenance in 2 days',
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      acknowledged: false
    }, {
      id: 'alert3',
      severity: 'critical',
      component: 'Database Cluster',
      message: 'High replication lag on replica DB-3',
      timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
      acknowledged: false
    }]
  };
  // User account data
  const users = [{
    id: 'user1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 120).toISOString(),
    subscription: 'Enterprise',
    twoFactorEnabled: true
  }, {
    id: 'user2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'Manager',
    status: 'active',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString(),
    subscription: 'Professional',
    twoFactorEnabled: true
  }, {
    id: 'user3',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Developer',
    status: 'inactive',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 180).toISOString(),
    subscription: 'Professional',
    twoFactorEnabled: false
  }, {
    id: 'user4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'Viewer',
    status: 'active',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    subscription: 'Basic',
    twoFactorEnabled: false
  }, {
    id: 'user5',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'Admin',
    status: 'suspended',
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45).toISOString(),
    created: new Date(Date.now() - 1000 * 60 * 60 * 24 * 200).toISOString(),
    subscription: 'Enterprise',
    twoFactorEnabled: true,
    suspensionReason: 'Security violation - Multiple unauthorized access attempts'
  }];
  // Agent performance data
  const agentPerformance = {
    summary: {
      totalAgents: 124,
      activeAgents: 98,
      averageSuccessRate: '94.2%',
      averageResponseTime: '1.8s',
      totalInteractions: '1.2M'
    },
    topPerforming: [{
      id: 'agent1',
      name: 'CustomerServicePro',
      category: 'Customer Support',
      successRate: '98.7%',
      responseTime: '0.8s',
      dailyInteractions: 1245,
      satisfaction: 4.9
    }, {
      id: 'agent2',
      name: 'SalesAssistant',
      category: 'Sales',
      successRate: '97.2%',
      responseTime: '1.2s',
      dailyInteractions: 876,
      satisfaction: 4.7
    }, {
      id: 'agent3',
      name: 'TechnicalSupportBot',
      category: 'Technical Support',
      successRate: '96.5%',
      responseTime: '1.5s',
      dailyInteractions: 932,
      satisfaction: 4.6
    }],
    underperforming: [{
      id: 'agent4',
      name: 'InventoryManager',
      category: 'Inventory',
      successRate: '82.3%',
      responseTime: '3.2s',
      dailyInteractions: 345,
      satisfaction: 3.2,
      issues: ['Slow response time', 'Incorrect inventory data']
    }, {
      id: 'agent5',
      name: 'AccountingAssistant',
      category: 'Finance',
      successRate: '85.1%',
      responseTime: '2.8s',
      dailyInteractions: 289,
      satisfaction: 3.4,
      issues: ['Calculation errors', 'Limited functionality']
    }],
    recentImprovements: [{
      id: 'improvement1',
      agentName: 'HR Assistant',
      metric: 'Response Time',
      improvement: '32%',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
    }, {
      id: 'improvement2',
      agentName: 'OrderProcessor',
      metric: 'Success Rate',
      improvement: '18%',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString()
    }]
  };
  // Security incidents data
  const securityIncidents = [{
    id: 'incident1',
    type: 'Unauthorized Access Attempt',
    severity: 'high',
    status: 'investigating',
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    source: 'IP: 203.0.113.45',
    target: 'Authentication API',
    description: 'Multiple failed login attempts from suspicious IP address',
    assignedTo: 'Security Team'
  }, {
    id: 'incident2',
    type: 'Data Access Anomaly',
    severity: 'medium',
    status: 'resolved',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    source: 'User: john.smith@example.com',
    target: 'Customer Database',
    description: 'Unusual pattern of data access detected - Verified as legitimate batch operation',
    assignedTo: 'David Chen',
    resolution: 'Confirmed legitimate activity after user verification',
    resolvedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString()
  }, {
    id: 'incident3',
    type: 'API Rate Limit Breach',
    severity: 'low',
    status: 'monitoring',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    source: 'API Key: XXXX-XXXX-XXXX-3956',
    target: 'Search API',
    description: 'Exceeded rate limit by 300% - Potential DoS or misconfigured client',
    assignedTo: 'API Team'
  }];
  // Feature flags data
  const featureFlags = [{
    id: 'feature1',
    name: 'New Dashboard UI',
    description: 'Updated dashboard interface with improved analytics',
    status: 'active',
    rolloutPercentage: 25,
    enabledFor: ['internal', 'beta'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    owner: 'UI Team'
  }, {
    id: 'feature2',
    name: 'Multi-factor Authentication',
    description: 'Additional security layer for user authentication',
    status: 'active',
    rolloutPercentage: 100,
    enabledFor: ['all'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    owner: 'Security Team'
  }, {
    id: 'feature3',
    name: 'AI-powered Recommendations',
    description: 'Machine learning based content recommendations',
    status: 'inactive',
    rolloutPercentage: 0,
    enabledFor: [],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    owner: 'Data Science Team'
  }, {
    id: 'feature4',
    name: 'Real-time Collaboration',
    description: 'Simultaneous editing and collaboration features',
    status: 'active',
    rolloutPercentage: 50,
    enabledFor: ['enterprise', 'internal'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
    owner: 'Platform Team'
  }];
  // Toggle expanded item
  const toggleExpand = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };
  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'active':
      case 'resolved':
        return 'text-green-600 bg-green-100';
      case 'degraded':
      case 'monitoring':
      case 'investigating':
        return 'text-yellow-600 bg-yellow-100';
      case 'critical':
      case 'inactive':
      case 'suspended':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-blue-600 bg-blue-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'high':
      case 'critical':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'platform':
        return <div className="space-y-6">
            {/* System Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">
                    System Status
                  </h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(systemStatus.overall)}`}>
                    {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {systemStatus.uptime}
                  </p>
                  <p className="ml-2 text-sm text-gray-500">uptime</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Last incident: {systemStatus.lastIncident}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Active Users
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {systemStatus.activeUsers.toLocaleString()}
                  </p>
                  <p className="ml-2 text-sm text-gray-500">users</p>
                </div>
                <div className="mt-1 flex items-center text-sm text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>12% from yesterday</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  API Calls
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {systemStatus.apiCalls}
                  </p>
                </div>
                <div className="mt-1 flex items-center text-sm text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>8% from last week</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Avg Response Time
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {systemStatus.responseTime}
                  </p>
                </div>
                <div className="mt-1 flex items-center text-sm text-green-600">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span>5% from last week</span>
                </div>
              </div>
            </div>
            {/* Component Status */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Component Status
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {systemStatus.components.map(component => <div key={component.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {component.status === 'healthy' ? <CheckCircle className="h-5 w-5 text-green-500 mr-3" /> : component.status === 'degraded' ? <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3" /> : <XCircle className="h-5 w-5 text-red-500 mr-3" />}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            {component.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            Uptime: {component.uptime} • Latency:{' '}
                            {component.latency}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="flex items-center mb-1">
                            <span className="text-xs text-gray-500 mr-2">
                              Load
                            </span>
                            <span className="text-xs font-medium text-gray-900">
                              {component.load}%
                            </span>
                          </div>
                          <div className="w-24 bg-gray-200 rounded-full h-1.5">
                            <div className={`h-1.5 rounded-full ${component.load < 50 ? 'bg-green-500' : component.load < 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                          width: `${component.load}%`
                        }}></div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(component.status)}`}>
                          {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                        </div>
                      </div>
                    </div>
                    {component.issue && <div className="mt-2 ml-8 p-2 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800">
                        <span className="font-medium">Issue: </span>
                        {component.issue}
                      </div>}
                  </div>)}
              </div>
            </div>
            {/* System Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">
                    System Metrics
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {systemStatus.metrics.map((metric, index) => <div key={index} className="px-6 py-4 flex justify-between items-center">
                      <span className="text-sm text-gray-900">
                        {metric.name}
                      </span>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 mr-2">
                          {metric.value}
                        </span>
                        {metric.trend === 'increasing' ? <ArrowUp className="h-4 w-4 text-yellow-500" /> : metric.trend === 'decreasing' ? <ArrowDown className="h-4 w-4 text-green-500" /> : <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>}
                      </div>
                    </div>)}
                </div>
              </div>
              {/* Recent Alerts */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    Recent Alerts
                  </h3>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View All
                  </button>
                </div>
                <div className="divide-y divide-gray-200">
                  {systemStatus.alerts.map(alert => <div key={alert.id} className="px-6 py-4">
                      <div className="flex items-start">
                        {alert.severity === 'critical' ? <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" /> : alert.severity === 'warning' ? <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" /> : <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />}
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="text-sm font-medium text-gray-900">
                              {alert.component}
                            </h4>
                            <span className="text-xs text-gray-500">
                              {new Date(alert.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {alert.message}
                          </p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                <RefreshCw className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Run System Diagnostics
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Perform a comprehensive check of all system components
                </p>
                <button onClick={handleRunDiagnostics} disabled={isRunningDiagnostics} className={`px-4 py-2 ${isRunningDiagnostics ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md mt-auto flex items-center justify-center`}>
                  {isRunningDiagnostics ? <>
                      <Loader className="h-4 w-4 mr-2 animate-spin" />
                      Running...
                    </> : 'Run Diagnostics'}
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                <HardDrive className="h-8 w-8 text-purple-500 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Scale Resources
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Adjust compute resources based on current demand
                </p>
                <button onClick={() => setShowScalingModal(true)} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 mt-auto">
                  Manage Scaling
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                <Download className="h-8 w-8 text-green-500 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Export System Logs
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Download detailed logs for all system components
                </p>
                <button onClick={handleExportLogs} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mt-auto">
                  Export Logs
                </button>
              </div>
            </div>
          </div>;
      case 'users':
        return <div className="space-y-6">
            {/* User Management Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h2 className="text-xl font-bold text-gray-900">
                User Account Management
              </h2>
              <div className="flex space-x-3">
                <button onClick={() => setShowUserModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Add User
                </button>
              </div>
            </div>
            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="relative flex-grow">
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search users by name or email..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <div className="flex space-x-3">
                <select value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)} className="pl-3 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="all">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                  <option value="developer">Developer</option>
                  <option value="viewer">Viewer</option>
                </select>
                <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Suspended</option>
                </select>
              </div>
            </div>
            {/* User Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
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
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Login
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subscription
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        2FA
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map(user => <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="h-6 w-6 text-gray-500" />
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
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.lastLogin).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.subscription}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.twoFactorEnabled ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Edit className="h-5 w-5" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Lock className="h-5 w-5" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium">1</span> to{' '}
                  <span className="font-medium">5</span> of{' '}
                  <span className="font-medium">42</span> users
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/* User Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  User Growth
                </h3>
                <div className="h-48 flex items-end space-x-2">
                  {[28, 35, 42, 38, 45, 56, 63, 75, 82, 90, 95, 110].map((value, index) => <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-blue-500 rounded-t" style={{
                    height: `${value / 110 * 100}%`
                  }}></div>
                      </div>)}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  User Distribution
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Admin</span>
                      <span className="text-sm font-medium text-gray-900">
                        15%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{
                      width: '15%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Manager</span>
                      <span className="text-sm font-medium text-gray-900">
                        22%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{
                      width: '22%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Developer</span>
                      <span className="text-sm font-medium text-gray-900">
                        38%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{
                      width: '38%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Viewer</span>
                      <span className="text-sm font-medium text-gray-900">
                        25%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '25%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Subscription Tiers
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Enterprise</span>
                      <span className="text-sm font-medium text-gray-900">
                        30%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{
                      width: '30%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">
                        Professional
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        45%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{
                      width: '45%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Basic</span>
                      <span className="text-sm font-medium text-gray-900">
                        25%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '25%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'analytics':
        return <div className="space-y-6">
            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Total Agents
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {agentPerformance.summary.totalAgents}
                  </p>
                  <p className="ml-2 text-sm text-gray-500">
                    ({agentPerformance.summary.activeAgents} active)
                  </p>
                </div>
                <div className="mt-1 flex items-center text-sm text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>5 new this month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Success Rate
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {agentPerformance.summary.averageSuccessRate}
                  </p>
                </div>
                <div className="mt-1 flex items-center text-sm text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>2.3% from last month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Response Time
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {agentPerformance.summary.averageResponseTime}
                  </p>
                </div>
                <div className="mt-1 flex items-center text-sm text-green-600">
                  <ArrowDown className="h-4 w-4 mr-1" />
                  <span>0.3s improvement</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Total Interactions
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">
                    {agentPerformance.summary.totalInteractions}
                  </p>
                </div>
                <div className="mt-1 flex items-center text-sm text-green-600">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>18% from last month</span>
                </div>
              </div>
            </div>
            {/* Top Performing Agents */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Top Performing Agents
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Agent
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Success Rate
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Response Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Daily Interactions
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Satisfaction
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {agentPerformance.topPerforming.map(agent => <tr key={agent.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {agent.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {agent.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-green-600 font-medium">
                            {agent.successRate}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {agent.responseTime}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {agent.dailyInteractions.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className={`h-4 w-4 ${star <= Math.round(agent.satisfaction) ? 'text-yellow-400' : 'text-gray-300'}`} />)}
                            </div>
                            <span className="ml-2 text-sm text-gray-900">
                              {agent.satisfaction}
                            </span>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Underperforming Agents */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Agents Needing Attention
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {agentPerformance.underperforming.map(agent => <div key={agent.id} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-medium text-gray-900">
                          {agent.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {agent.category} • Success Rate: {agent.successRate} •
                          Response Time: {agent.responseTime}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm hover:bg-blue-200">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md text-sm hover:bg-yellow-200">
                          Optimize
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 bg-red-50 rounded-md p-3 border border-red-100">
                      <h5 className="text-sm font-medium text-red-800 mb-2">
                        Issues Identified
                      </h5>
                      <ul className="list-disc pl-5 text-sm text-red-700 space-y-1">
                        {agent.issues.map((issue, index) => <li key={index}>{issue}</li>)}
                      </ul>
                    </div>
                  </div>)}
              </div>
            </div>
            {/* Recent Improvements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Recent Improvements
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {agentPerformance.recentImprovements.map(improvement => <div key={improvement.id} className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        {improvement.agentName}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {improvement.metric} improved by{' '}
                        {improvement.improvement}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(improvement.date).toLocaleDateString()}
                    </div>
                  </div>)}
              </div>
            </div>
            {/* Performance Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Success Rate by Category
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">
                        Customer Support
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        96.5%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '96.5%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Sales</span>
                      <span className="text-sm font-medium text-gray-900">
                        94.2%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{
                      width: '94.2%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">
                        Technical Support
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        92.8%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{
                      width: '92.8%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Inventory</span>
                      <span className="text-sm font-medium text-gray-900">
                        85.6%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{
                      width: '85.6%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Finance</span>
                      <span className="text-sm font-medium text-gray-900">
                        88.3%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{
                      width: '88.3%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Daily Interactions Trend
                </h3>
                <div className="h-64 flex items-end space-x-2">
                  {[18500, 19200, 21000, 20500, 22800, 24500, 23800, 25200, 27500, 28800, 30200, 31500].map((value, index) => <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-blue-500 rounded-t" style={{
                    height: `${value / 31500 * 100}%`
                  }}></div>
                    </div>)}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          </div>;
      case 'security':
        return <div className="space-y-6">
            {/* Security Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h2 className="text-xl font-bold text-gray-900">
                Security Incident Response
              </h2>
              <div className="flex space-x-3">
                <button onClick={() => setShowIncidentModal(true)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Report Incident
                </button>
              </div>
            </div>
            {/* Security Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 mr-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Security Status
                    </h3>
                    <p className="text-green-600">No active threats</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last scan completed</span>
                    <span className="text-gray-900">Today, 08:45 AM</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Active Incidents
                </h3>
                <div className="flex items-center justify-center h-24">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">2</p>
                    <p className="text-sm text-gray-500">
                      Open incidents requiring attention
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Avg. resolution time</span>
                    <span className="text-gray-900">4.2 hours</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Activity className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-gray-600">
                      Security scan completed
                    </span>
                    <span className="ml-auto text-gray-500">1h ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Lock className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-600">
                      Firewall rules updated
                    </span>
                    <span className="ml-auto text-gray-500">3h ago</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-600">New incident reported</span>
                    <span className="ml-auto text-gray-500">5h ago</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Incident List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Security Incidents
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {securityIncidents.map(incident => <div key={incident.id} className="p-6 hover:bg-gray-50 cursor-pointer" onClick={() => toggleExpand(incident.id)}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start mb-4 md:mb-0">
                        <div className={`flex-shrink-0 p-2 rounded-full mr-4 ${incident.severity === 'high' ? 'bg-red-100' : incident.severity === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                          <AlertTriangle className={`h-5 w-5 ${incident.severity === 'high' ? 'text-red-600' : incident.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">
                            {incident.type}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {new Date(incident.timestamp).toLocaleString()} •{' '}
                            {incident.source}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium mr-3 ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${incident.status === 'resolved' ? 'bg-green-100 text-green-800' : incident.status === 'investigating' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                          {incident.status.toUpperCase()}
                        </span>
                        {expandedItem === incident.id ? <ChevronDown className="h-5 w-5 ml-2 text-gray-400" /> : <ChevronRight className="h-5 w-5 ml-2 text-gray-400" />}
                      </div>
                    </div>
                    {expandedItem === incident.id && <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">
                              Target
                            </p>
                            <p className="text-sm text-gray-900">
                              {incident.target}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">
                              Assigned To
                            </p>
                            <p className="text-sm text-gray-900">
                              {incident.assignedTo}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">
                              Status
                            </p>
                            <p className={`text-sm ${incident.status === 'resolved' ? 'text-green-600' : incident.status === 'investigating' ? 'text-yellow-600' : 'text-blue-600'}`}>
                              {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                            </p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-500 mb-1">
                            Description
                          </p>
                          <p className="text-sm text-gray-900">
                            {incident.description}
                          </p>
                        </div>
                        {incident.resolution && <div className="mb-4 p-3 bg-green-50 rounded-md border border-green-100">
                            <p className="text-sm font-medium text-green-800 mb-1">
                              Resolution
                            </p>
                            <p className="text-sm text-green-700">
                              {incident.resolution}
                            </p>
                            <p className="text-xs text-green-600 mt-2">
                              Resolved at:{' '}
                              {new Date(incident.resolvedAt!).toLocaleString()}
                            </p>
                          </div>}
                        <div className="flex space-x-3">
                          {incident.status !== 'resolved' && <>
                              <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                                Update Status
                              </button>
                              <button className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700">
                                Mark as Resolved
                              </button>
                            </>}
                          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                            View Full Details
                          </button>
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>
            {/* Security Tools */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-100 mb-4">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Security Audit
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Run a comprehensive security audit across all systems
                </p>
                <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full">
                  Run Audit
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-purple-100 mb-4">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Access Review
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Review and manage user access permissions
                </p>
                <button className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 w-full">
                  Review Access
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-green-100 mb-4">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Security Reports
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Download detailed security reports and logs
                </p>
                <button className="mt-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full">
                  Generate Report
                </button>
              </div>
            </div>
          </div>;
      case 'features':
        return <div className="space-y-6">
            {/* Feature Flags Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h2 className="text-xl font-bold text-gray-900">
                Feature Flag Management
              </h2>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  New Feature Flag
                </button>
              </div>
            </div>
            {/* Feature Flags */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rollout
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Enabled For
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Owner
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {featureFlags.map(feature => <tr key={feature.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {feature.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {feature.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {feature.status === 'active' ? <ToggleRight className="h-5 w-5 text-green-500 mr-1.5" /> : <ToggleLeft className="h-5 w-5 text-gray-400 mr-1.5" />}
                            <span className={`text-sm ${feature.status === 'active' ? 'text-green-600' : 'text-gray-500'}`}>
                              {feature.status === 'active' ? 'Enabled' : 'Disabled'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{
                            width: `${feature.rolloutPercentage}%`
                          }}></div>
                            </div>
                            <span className="text-sm text-gray-900">
                              {feature.rolloutPercentage}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {feature.enabledFor.length > 0 ? feature.enabledFor.map((group, index) => <span key={index} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                                  {group}
                                </span>) : <span className="text-sm text-gray-500">
                                None
                              </span>}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feature.owner}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(feature.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Edit className="h-5 w-5" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <MoreHorizontal className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Feature Flag Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    New Dashboard UI
                  </h3>
                  <p className="text-sm text-gray-500">
                    Updated dashboard interface with improved analytics
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <span className="mr-3 text-sm text-gray-700">Status:</span>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200">
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transform translate-x-6 transition-transform duration-200 ease-in-out"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Rollout Configuration
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Percentage Rollout
                      </label>
                      <div className="flex items-center">
                        <input type="range" min="0" max="100" value="25" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          25%
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Enable For
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="internal" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                          <label htmlFor="internal" className="ml-2 text-sm text-gray-700">
                            Internal Users
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="beta" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                          <label htmlFor="beta" className="ml-2 text-sm text-gray-700">
                            Beta Testers
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="enterprise" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <label htmlFor="enterprise" className="ml-2 text-sm text-gray-700">
                            Enterprise Customers
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="all" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <label htmlFor="all" className="ml-2 text-sm text-gray-700">
                            All Users
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Additional Settings
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Owner
                      </label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>UI Team</option>
                        <option>Platform Team</option>
                        <option>Security Team</option>
                        <option>Data Science Team</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Description
                      </label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={3} defaultValue="Updated dashboard interface with improved analytics"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between">
                <div>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                    Delete Flag
                  </button>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            {/* Feature Flag Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Feature Usage
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">
                        New Dashboard UI
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        12,458 users
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{
                      width: '65%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">
                        Multi-factor Authentication
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        38,921 users
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: '92%'
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">
                        Real-time Collaboration
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        8,745 users
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{
                      width: '45%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ToggleRight className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">
                          Real-time Collaboration
                        </span>{' '}
                        was enabled
                      </p>
                      <p className="text-xs text-gray-500">
                        Today at 10:32 AM by John Smith
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Percent className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">New Dashboard UI</span>{' '}
                        rollout increased to 25%
                      </p>
                      <p className="text-xs text-gray-500">
                        Yesterday at 2:15 PM by Sarah Johnson
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Tag className="h-5 w-5 text-purple-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">
                          AI-powered Recommendations
                        </span>{' '}
                        flag created
                      </p>
                      <p className="text-xs text-gray-500">
                        2 days ago at 11:45 AM by David Chen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            System Administration
          </h1>
          <p className="mt-1 text-gray-500">
            Monitor platform health, manage users, and control system settings
          </p>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            <button onClick={() => setActiveTab('platform')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'platform' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Server className="h-5 w-5 mr-2" />
              Platform Health
            </button>
            <button onClick={() => setActiveTab('users')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'users' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Users className="h-5 w-5 mr-2" />
              User Management
            </button>
            <button onClick={() => setActiveTab('analytics')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'analytics' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BarChart2 className="h-5 w-5 mr-2" />
              Agent Analytics
            </button>
            <button onClick={() => setActiveTab('security')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'security' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Shield className="h-5 w-5 mr-2" />
              Security Incidents
            </button>
            <button onClick={() => setActiveTab('features')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'features' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Sliders className="h-5 w-5 mr-2" />
              Feature Flags
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
      {/* Diagnostics Results Modal */}
      {isRunningDiagnostics && diagnosticsComplete && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                System Diagnostics Results
              </h3>
              <button onClick={() => {
            setIsRunningDiagnostics(false);
            setDiagnosticsComplete(false);
          }} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    Diagnostics Complete
                  </h3>
                  <p className="text-green-600">
                    System is {diagnosticsResults.status}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Summary
                </h4>
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Components Checked:
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {diagnosticsResults.componentsChecked}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Issues Found:</span>
                    <span className="text-sm font-medium text-red-600">
                      {diagnosticsResults.issuesFound}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Recommendations
                </h4>
                <ul className="bg-blue-50 rounded-md p-4 border border-blue-100 space-y-2">
                  {diagnosticsResults.recommendations.map((rec, index) => <li key={index} className="text-sm text-blue-800 flex items-start">
                      <Info className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                      {rec}
                    </li>)}
                </ul>
              </div>
              <div className="flex justify-end space-x-3">
                <button onClick={() => {
              setIsRunningDiagnostics(false);
              setDiagnosticsComplete(false);
            }} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        </div>}
      {/* Resource Scaling Modal */}
      {showScalingModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Manage Resource Scaling
              </h3>
              <button onClick={() => setShowScalingModal(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* API Services Scaling */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      API Services
                    </h4>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">
                      Instances:
                    </span>
                    <div className="flex-1">
                      <input type="range" min="1" max="10" defaultValue="4" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900 w-8">
                      4
                    </span>
                  </div>
                </div>
                {/* Database Cluster Scaling */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      Database Cluster
                    </h4>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">Nodes:</span>
                    <div className="flex-1">
                      <input type="range" min="3" max="12" defaultValue="6" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900 w-8">
                      6
                    </span>
                  </div>
                </div>
                {/* Storage Services Scaling */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      Storage Services
                    </h4>
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      Degraded
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">
                      Capacity:
                    </span>
                    <div className="flex-1">
                      <input type="range" min="100" max="1000" defaultValue="500" step="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900 w-8">
                      500GB
                    </span>
                  </div>
                  <div className="mt-2 p-2 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800">
                    <span className="font-medium">Recommended: </span>
                    Increase capacity to at least 800GB to address latency
                    issues
                  </div>
                </div>
                {/* ML Processing Scaling */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-900">
                      ML Processing
                    </h4>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 w-24">Compute:</span>
                    <div className="flex-1">
                      <input type="range" min="2" max="16" defaultValue="8" step="2" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-900 w-8">
                      8
                    </span>
                  </div>
                </div>
                {/* Auto-scaling Settings */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    Auto-scaling Settings
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" id="enableAutoScaling" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      <label htmlFor="enableAutoScaling" className="ml-2 text-sm text-gray-700">
                        Enable auto-scaling based on load
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="scheduleScaling" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="scheduleScaling" className="ml-2 text-sm text-gray-700">
                        Schedule scaling based on time of day
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="predictiveScaling" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="predictiveScaling" className="ml-2 text-sm text-gray-700">
                        Enable predictive scaling (AI-based)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowScalingModal(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                Cancel
              </button>
              <button onClick={() => setShowScalingModal(false)} className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Apply Changes
              </button>
            </div>
          </div>
        </div>}
      {/* Security Incident Modal */}
      {showIncidentModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Report Security Incident
              </h3>
              <button onClick={() => setShowIncidentModal(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Incident Type
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Unauthorized Access Attempt</option>
                    <option>Data Breach</option>
                    <option>API Abuse</option>
                    <option>Suspicious Activity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Severity
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input type="radio" id="low" name="severity" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                      <label htmlFor="low" className="ml-2 text-sm text-gray-700">
                        Low
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="medium" name="severity" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300" defaultChecked />
                      <label htmlFor="medium" className="ml-2 text-sm text-gray-700">
                        Medium
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="high" name="severity" className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                      <label htmlFor="high" className="ml-2 text-sm text-gray-700">
                        High
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Source
                  </label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="IP address, user ID, or other identifier" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target
                  </label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Affected system, API, or resource" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-md" rows={4} placeholder="Detailed description of the incident"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assign To
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Security Team</option>
                    <option>John Smith</option>
                    <option>Sarah Johnson</option>
                    <option>David Chen</option>
                    <option>API Team</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowIncidentModal(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                Cancel
              </button>
              <button onClick={() => setShowIncidentModal(false)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                Report Incident
              </button>
            </div>
          </div>
        </div>}
      {/* Add User Modal */}
      {showUserModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Add New User
              </h3>
              <button onClick={() => setShowUserModal(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Developer</option>
                    <option>Viewer</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subscription
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Enterprise</option>
                  <option>Professional</option>
                  <option>Basic</option>
                </select>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <input type="checkbox" id="twoFactor" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="twoFactor" className="ml-2 text-sm text-gray-700">
                    Require two-factor authentication
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <input type="checkbox" id="sendInvite" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="sendInvite" className="ml-2 text-sm text-gray-700">
                    Send invitation email
                  </label>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowUserModal(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                Cancel
              </button>
              <button onClick={() => setShowUserModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add User
              </button>
            </div>
          </div>
        </div>}
    </div>;
};
const StarIcon = ({
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>;
};