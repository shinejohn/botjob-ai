import React, { useState } from 'react';
import { Link, RefreshCw, AlertTriangle, Check, Settings, ExternalLink, Save, Clock, PieChart, Activity, Key, Shield, Lock, HelpCircle, AlertCircle, ChevronDown, ChevronUp, Plus } from 'lucide-react';
export const IntegrationManagement = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('connections');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  // Sample connected services
  const [connectedServices, setConnectedServices] = useState([{
    id: 'google-calendar',
    name: 'Google Calendar',
    status: 'connected',
    lastSync: '2023-05-22T14:30:00Z',
    tokenExpiry: '2023-08-22T14:30:00Z',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
    usageQuota: {
      used: 1250,
      total: 10000,
      resetDate: '2023-06-01T00:00:00Z'
    },
    authType: 'oauth2',
    scopes: ['calendar.readonly', 'calendar.events'],
    permissions: {
      read: true,
      write: true,
      delete: false
    }
  }, {
    id: 'slack',
    name: 'Slack',
    status: 'connected',
    lastSync: '2023-05-22T15:45:00Z',
    tokenExpiry: '2023-09-22T15:45:00Z',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    usageQuota: {
      used: 3500,
      total: 5000,
      resetDate: '2023-06-01T00:00:00Z'
    },
    authType: 'oauth2',
    scopes: ['chat:write', 'channels:read', 'users:read'],
    permissions: {
      read: true,
      write: true,
      delete: false
    }
  }, {
    id: 'salesforce',
    name: 'Salesforce',
    status: 'error',
    lastSync: '2023-05-20T09:15:00Z',
    tokenExpiry: '2023-05-20T09:15:00Z',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    usageQuota: {
      used: 0,
      total: 15000,
      resetDate: '2023-06-01T00:00:00Z'
    },
    error: 'Authentication token expired',
    authType: 'oauth2',
    scopes: ['api', 'refresh_token'],
    permissions: {
      read: true,
      write: true,
      delete: false
    }
  }, {
    id: 'gmail',
    name: 'Gmail',
    status: 'connected',
    lastSync: '2023-05-22T16:20:00Z',
    tokenExpiry: '2023-08-22T16:20:00Z',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    usageQuota: {
      used: 7500,
      total: 10000,
      resetDate: '2023-06-01T00:00:00Z'
    },
    authType: 'oauth2',
    scopes: ['mail.read', 'mail.send'],
    permissions: {
      read: true,
      write: true,
      delete: false
    }
  }, {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    status: 'warning',
    lastSync: '2023-05-21T11:30:00Z',
    tokenExpiry: '2023-06-01T11:30:00Z',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
    usageQuota: {
      used: 4800,
      total: 5000,
      resetDate: '2023-06-01T00:00:00Z'
    },
    warning: 'API quota nearly reached (96%)',
    authType: 'oauth2',
    scopes: ['Team.ReadBasic.All', 'Channel.ReadBasic.All'],
    permissions: {
      read: true,
      write: false,
      delete: false
    }
  }, {
    id: 'stripe',
    name: 'Stripe',
    status: 'connected',
    lastSync: '2023-05-22T10:15:00Z',
    tokenExpiry: null,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    usageQuota: {
      used: 350,
      total: 1000,
      resetDate: '2023-06-01T00:00:00Z'
    },
    authType: 'apikey',
    apiKey: {
      keyId: 'sk_live_*********************',
      created: '2023-01-15T10:00:00Z'
    },
    permissions: {
      read: true,
      write: true,
      delete: true
    }
  }, {
    id: 'twilio',
    name: 'Twilio',
    status: 'connected',
    lastSync: '2023-05-21T14:20:00Z',
    tokenExpiry: null,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg',
    usageQuota: {
      used: 120,
      total: 500,
      resetDate: '2023-06-01T00:00:00Z'
    },
    authType: 'apikey',
    apiKey: {
      keyId: 'AC************************',
      created: '2023-02-10T09:30:00Z'
    },
    permissions: {
      read: true,
      write: true,
      delete: false
    }
  }]);
  // API key management
  const [showApiKey, setShowApiKey] = useState<string | null>(null);
  const [newApiKeyName, setNewApiKeyName] = useState('');
  const [showAddApiKey, setShowAddApiKey] = useState(false);
  // Service logs
  const [serviceLogs, setServiceLogs] = useState([{
    id: 'log-1',
    service: 'salesforce',
    timestamp: '2023-05-22T09:15:23Z',
    level: 'error',
    message: 'Failed to authenticate: OAuth token expired',
    details: 'HTTP 401 Unauthorized response from api.salesforce.com'
  }, {
    id: 'log-2',
    service: 'microsoft-teams',
    timestamp: '2023-05-22T10:30:45Z',
    level: 'warning',
    message: 'API rate limit threshold exceeded (95%)',
    details: 'Current usage: 4750/5000 requests'
  }, {
    id: 'log-3',
    service: 'google-calendar',
    timestamp: '2023-05-22T11:45:12Z',
    level: 'info',
    message: 'Successfully synchronized calendar events',
    details: '32 events synced, 2 events created, 1 event updated'
  }, {
    id: 'log-4',
    service: 'slack',
    timestamp: '2023-05-22T12:15:30Z',
    level: 'info',
    message: 'Message posted to #support channel',
    details: 'Message ID: 1684756530.123456'
  }, {
    id: 'log-5',
    service: 'salesforce',
    timestamp: '2023-05-21T15:20:10Z',
    level: 'error',
    message: 'Failed to create new contact',
    details: 'Required field "Email" is missing'
  }]);
  const handleSaveChanges = () => {
    // In a real app, this would save to the backend
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };
  const reconnectService = serviceId => {
    // In a real app, this would trigger the OAuth flow
    const updatedServices = connectedServices.map(service => {
      if (service.id === serviceId) {
        return {
          ...service,
          status: 'connected',
          lastSync: new Date().toISOString(),
          tokenExpiry: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
          error: undefined,
          warning: undefined
        };
      }
      return service;
    });
    setConnectedServices(updatedServices);
  };
  const disconnectService = serviceId => {
    // In a real app, this would revoke the OAuth token
    const updatedServices = connectedServices.map(service => {
      if (service.id === serviceId) {
        return {
          ...service,
          status: 'disconnected',
          lastSync: service.lastSync,
          tokenExpiry: service.tokenExpiry
        };
      }
      return service;
    });
    setConnectedServices(updatedServices);
  };
  const toggleServiceDetails = serviceId => {
    if (expandedService === serviceId) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceId);
    }
  };
  const formatTimeAgo = dateString => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      if (diffHours === 0) {
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
      }
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) !== 1 ? 's' : ''} ago`;
    } else {
      return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) !== 1 ? 's' : ''} ago`;
    }
  };
  const formatDate = dateString => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  const calculateDaysRemaining = dateString => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = date.getTime() - now.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  };
  const getUsagePercentage = (used, total) => {
    return Math.round(used / total * 100);
  };
  const getStatusColor = status => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'disconnected':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getLogLevelColor = level => {
    switch (level) {
      case 'error':
        return 'text-red-600';
      case 'warning':
        return 'text-yellow-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };
  return <div className="space-y-8">
      {/* Success Message */}
      {saveSuccess && <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          <span>Integration settings updated successfully!</span>
        </div>}
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button onClick={() => setActiveTab('connections')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'connections' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Third-Party Connections
        </button>
        <button onClick={() => setActiveTab('monitoring')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'monitoring' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Health & Monitoring
        </button>
        <button onClick={() => setActiveTab('apikeys')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'apikeys' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          API Keys
        </button>
        <button onClick={() => setActiveTab('troubleshooting')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'troubleshooting' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Troubleshooting
        </button>
      </div>
      {activeTab === 'connections' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <Link className="h-5 w-5 mr-2 text-gray-500" />
              Connected Services
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Manage the third-party services and APIs that your AI agents can
              access. Reconnect services if you encounter authentication errors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {connectedServices.map(service => <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-4 flex items-center justify-between bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center">
                      <img src={service.icon} alt={service.name} className="h-8 w-8 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {service.name}
                        </h3>
                        <div className="flex items-center">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(service.status)}`}>
                            {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">
                            {service.authType === 'oauth2' ? 'OAuth 2.0' : 'API Key'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => service.status === 'connected' ? disconnectService(service.id) : reconnectService(service.id)} className={`px-3 py-1 rounded-md text-xs font-medium ${service.status === 'connected' ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                        {service.status === 'connected' ? 'Disconnect' : 'Reconnect'}
                      </button>
                      <button onClick={() => toggleServiceDetails(service.id)} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-200 flex items-center">
                        {expandedService === service.id ? <>
                            <ChevronUp className="h-3 w-3 mr-1" />
                            Less
                          </> : <>
                            <ChevronDown className="h-3 w-3 mr-1" />
                            More
                          </>}
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    {(service.status === 'error' || service.status === 'warning') && <div className={`p-3 mb-3 rounded-md ${service.status === 'error' ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                        <div className="flex items-start">
                          <AlertTriangle className={`h-5 w-5 mr-2 flex-shrink-0 ${service.status === 'error' ? 'text-red-500' : 'text-yellow-500'}`} />
                          <div>
                            <h4 className={`text-sm font-medium ${service.status === 'error' ? 'text-red-800' : 'text-yellow-800'}`}>
                              {service.status === 'error' ? 'Connection Error' : 'Warning'}
                            </h4>
                            <p className={`text-xs ${service.status === 'error' ? 'text-red-700' : 'text-yellow-700'}`}>
                              {service.error || service.warning}
                            </p>
                            {service.status === 'error' && <button className="mt-2 text-xs text-red-700 font-medium hover:text-red-800 flex items-center">
                                <RefreshCw className="h-3 w-3 mr-1" />
                                Reconnect Service
                              </button>}
                          </div>
                        </div>
                      </div>}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-xs text-gray-500">Last Synced</p>
                        <p className="font-medium text-gray-900">
                          {formatTimeAgo(service.lastSync)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          {service.authType === 'oauth2' ? 'Token Expires' : 'API Key Created'}
                        </p>
                        <p className="font-medium text-gray-900">
                          {service.authType === 'oauth2' ? service.status === 'error' ? 'Expired' : service.tokenExpiry ? `${calculateDaysRemaining(service.tokenExpiry)} days` : 'Never' : formatDate(service.apiKey?.created)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-xs text-gray-500">
                          API Usage (
                          {getUsagePercentage(service.usageQuota.used, service.usageQuota.total)}
                          %)
                        </p>
                        <p className="text-xs text-gray-500">
                          {service.usageQuota.used.toLocaleString()} /{' '}
                          {service.usageQuota.total.toLocaleString()}
                        </p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${getUsagePercentage(service.usageQuota.used, service.usageQuota.total) > 90 ? 'bg-red-500' : getUsagePercentage(service.usageQuota.used, service.usageQuota.total) > 75 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{
                    width: `${getUsagePercentage(service.usageQuota.used, service.usageQuota.total)}%`
                  }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Resets on{' '}
                        {new Date(service.usageQuota.resetDate).toLocaleDateString()}
                      </p>
                    </div>
                    {/* Expanded details */}
                    {expandedService === service.id && <div className="mt-4 pt-4 border-t border-gray-200">
                        {service.authType === 'oauth2' && <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              OAuth Scopes
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.scopes.map(scope => <span key={scope} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                                  {scope}
                                </span>)}
                            </div>
                          </div>}
                        {service.authType === 'apikey' && <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              API Key
                            </h4>
                            <div className="flex items-center">
                              <div className="flex-1 bg-gray-100 rounded-md px-3 py-2 text-sm font-mono">
                                {showApiKey === service.id ? service.apiKey.keyId.replace('*', '•') : service.apiKey.keyId}
                              </div>
                              <button onClick={() => setShowApiKey(showApiKey === service.id ? null : service.id)} className="ml-2 text-xs text-gray-600 hover:text-gray-800">
                                {showApiKey === service.id ? 'Hide' : 'Show'}
                              </button>
                            </div>
                          </div>}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Permissions
                          </h4>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="flex items-center">
                              <input type="checkbox" checked={service.permissions.read} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label className="ml-2 text-xs text-gray-700">
                                Read
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" checked={service.permissions.write} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label className="ml-2 text-xs text-gray-700">
                                Write
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" checked={service.permissions.delete} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <label className="ml-2 text-xs text-gray-700">
                                Delete
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center">
                            <Settings className="h-3 w-3 mr-1" />
                            Advanced Settings
                          </button>
                          <button className="text-xs text-red-600 hover:text-red-800 flex items-center">
                            <RefreshCw className="h-3 w-3 mr-1" />
                            Force Sync
                          </button>
                        </div>
                      </div>}
                  </div>
                </div>)}
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
              <div className="flex items-start">
                <Link className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-blue-800">
                    Connect Additional Services
                  </h3>
                  <p className="text-xs text-blue-700 mt-1">
                    Expand your AI agents' capabilities by connecting more
                    services. Visit the Integrations Marketplace to browse
                    available integrations.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Browse Integration Marketplace
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'monitoring' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <Activity className="h-5 w-5 mr-2 text-gray-500" />
              Service Health & Monitoring
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Monitor the health and performance of your connected services. Set
              up alerts for potential issues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Activity className="h-4 w-4 mr-2 text-blue-500" />
                  Service Status
                </h3>
                <div className="space-y-3">
                  {connectedServices.map(service => <div key={service.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`h-2 w-2 rounded-full mr-2 ${service.status === 'connected' ? 'bg-green-500' : service.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                        <span className="text-sm text-gray-700">
                          {service.name}
                        </span>
                      </div>
                      <span className={`text-xs ${service.status === 'connected' ? 'text-green-600' : service.status === 'warning' ? 'text-yellow-600' : 'text-red-600'}`}>
                        {service.status === 'connected' ? 'Healthy' : service.status === 'warning' ? 'Warning' : 'Error'}
                      </span>
                    </div>)}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <PieChart className="h-4 w-4 mr-2 text-blue-500" />
                  API Usage
                </h3>
                <div className="space-y-3">
                  {connectedServices.filter(s => s.status === 'connected' || s.status === 'warning').slice(0, 5).map(service => <div key={service.id} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">
                            {service.name}
                          </span>
                          <span className="text-xs text-gray-600">
                            {getUsagePercentage(service.usageQuota.used, service.usageQuota.total)}
                            %
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full ${getUsagePercentage(service.usageQuota.used, service.usageQuota.total) > 90 ? 'bg-red-500' : getUsagePercentage(service.usageQuota.used, service.usageQuota.total) > 75 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{
                    width: `${getUsagePercentage(service.usageQuota.used, service.usageQuota.total)}%`
                  }}></div>
                        </div>
                      </div>)}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                  Token Expiration
                </h3>
                <div className="space-y-3">
                  {connectedServices.filter(s => s.authType === 'oauth2' && s.tokenExpiry && s.status !== 'error').sort((a, b) => new Date(a.tokenExpiry).getTime() - new Date(b.tokenExpiry).getTime()).slice(0, 5).map(service => {
                const daysLeft = calculateDaysRemaining(service.tokenExpiry);
                return <div key={service.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-sm text-gray-700">
                              {service.name}
                            </span>
                          </div>
                          <span className={`text-xs ${daysLeft < 7 ? 'text-red-600' : daysLeft < 30 ? 'text-yellow-600' : 'text-green-600'}`}>
                            {daysLeft} days
                          </span>
                        </div>;
              })}
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-700">
                  Recent Activity Logs
                </h3>
                <div className="flex space-x-2">
                  <select className="text-xs border border-gray-300 rounded p-1">
                    <option>All Services</option>
                    {connectedServices.map(service => <option key={service.id} value={service.id}>
                        {service.name}
                      </option>)}
                  </select>
                  <select className="text-xs border border-gray-300 rounded p-1">
                    <option>All Levels</option>
                    <option>Error</option>
                    <option>Warning</option>
                    <option>Info</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Level
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {serviceLogs.map(log => {
                  const service = connectedServices.find(s => s.id === log.service);
                  return <tr key={log.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatTimeAgo(log.timestamp)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {service && <img src={service.icon} alt={service.name} className="h-5 w-5 mr-2" />}
                              <span className="text-sm text-gray-900">
                                {service?.name || log.service}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${log.level === 'error' ? 'bg-red-100 text-red-800' : log.level === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                              {log.level}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {log.message}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-blue-600 hover:text-blue-800">
                              View Details
                            </button>
                          </td>
                        </tr>;
                })}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 p-3 border-t border-gray-200 flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  Showing 5 of 120 logs
                </span>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md">
                    Previous
                  </button>
                  <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Status
              </button>
              <button className="px-4 py-2 text-sm bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Configure Alerts
              </button>
            </div>
          </div>
        </div>}
      {activeTab === 'apikeys' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <Key className="h-5 w-5 mr-2 text-gray-500" />
              API Key Management
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Manage API keys for services that require authentication. Protect
              your keys and rotate them regularly for security.
            </p>
            <div className="mb-6 flex justify-between items-center">
              <h3 className="text-md font-medium text-gray-700">
                Your API Keys
              </h3>
              <button onClick={() => setShowAddApiKey(!showAddApiKey)} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add New Key
              </button>
            </div>
            {showAddApiKey && <div className="mb-6 p-4 border border-blue-200 bg-blue-50 rounded-md">
                <h4 className="text-sm font-medium text-blue-800 mb-3">
                  Create New API Key
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Key Name
                    </label>
                    <input type="text" value={newApiKeyName} onChange={e => setNewApiKeyName(e.target.value)} placeholder="e.g., Production Stripe Key" className="w-full p-2 border border-gray-300 rounded-md text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Service
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option>Stripe</option>
                      <option>Twilio</option>
                      <option>SendGrid</option>
                      <option>AWS</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Permissions
                    </label>
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label className="ml-2 text-xs text-gray-700">
                          Read
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label className="ml-2 text-xs text-gray-700">
                          Write
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label className="ml-2 text-xs text-gray-700">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 pt-2">
                    <button onClick={() => setShowAddApiKey(false)} className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50">
                      Cancel
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      Create Key
                    </button>
                  </div>
                </div>
              </div>}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Key
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Used
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {connectedServices.filter(s => s.authType === 'apikey').map(service => <tr key={service.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {service.name} API Key
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                              {showApiKey === service.id ? service.apiKey.keyId : service.apiKey.keyId.substring(0, 8) + '...'}
                            </code>
                            <button onClick={() => setShowApiKey(showApiKey === service.id ? null : service.id)} className="ml-2 text-xs text-gray-600 hover:text-gray-800">
                              {showApiKey === service.id ? 'Hide' : 'Show'}
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src={service.icon} alt={service.name} className="h-5 w-5 mr-2" />
                            <span className="text-sm text-gray-900">
                              {service.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(service.apiKey.created)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatTimeAgo(service.lastSync)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-3">
                            <button className="text-blue-600 hover:text-blue-800">
                              Copy
                            </button>
                            <button className="text-blue-600 hover:text-blue-800">
                              Rotate
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              Revoke
                            </button>
                          </div>
                        </td>
                      </tr>)}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">
                    API Key Security Best Practices
                  </h3>
                  <ul className="mt-2 text-xs text-yellow-700 space-y-1 list-disc pl-5">
                    <li>
                      Never share your API keys in public repositories or
                      client-side code
                    </li>
                    <li>
                      Rotate your API keys regularly (at least every 90 days)
                    </li>
                    <li>
                      Use different API keys for development and production
                      environments
                    </li>
                    <li>
                      Restrict API key permissions to only what's necessary
                    </li>
                    <li>Monitor API key usage for unusual patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'troubleshooting' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-gray-500" />
              Troubleshooting & Diagnostics
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Diagnose and resolve issues with your integrations. Review logs,
              run tests, and check service status.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Service Status
                </h3>
                <div className="space-y-4">
                  {connectedServices.filter(s => s.status === 'error' || s.status === 'warning').map(service => <div key={service.id} className="p-3 rounded-md border bg-gray-50">
                        <div className="flex items-start">
                          <div className={`p-1 rounded-full ${service.status === 'error' ? 'bg-red-100' : 'bg-yellow-100'} mr-3`}>
                            <AlertTriangle className={`h-5 w-5 ${service.status === 'error' ? 'text-red-500' : 'text-yellow-500'}`} />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h4 className="text-sm font-medium text-gray-900">
                                {service.name}
                              </h4>
                              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${service.status === 'error' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {service.status === 'error' ? 'Error' : 'Warning'}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {service.error || service.warning}
                            </p>
                            <div className="mt-3 flex space-x-3">
                              <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center">
                                <RefreshCw className="h-3 w-3 mr-1" />
                                Reconnect
                              </button>
                              <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center">
                                <HelpCircle className="h-3 w-3 mr-1" />
                                Troubleshoot
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>)}
                  {connectedServices.filter(s => s.status === 'error' || s.status === 'warning').length === 0 && <div className="p-3 rounded-md border border-green-200 bg-green-50 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-green-700">
                        All services are operating normally
                      </span>
                    </div>}
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Common Issues
                </h3>
                <div className="space-y-3">
                  <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900">
                      OAuth Token Expired
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      How to refresh and renew expired authentication tokens
                    </p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900">
                      API Rate Limits
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Managing and working around service rate limits
                    </p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900">
                      Permission Issues
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Resolving insufficient permission errors
                    </p>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                    <h4 className="text-sm font-medium text-gray-900">
                      Connection Timeout
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Fixing timeout issues with third-party services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">
                  Diagnostic Tools
                </h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                    <RefreshCw className="h-4 w-4 mr-2 text-blue-500" />
                    Connection Test
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    Test the connection to a service to verify credentials and
                    network connectivity.
                  </p>
                  <div className="flex space-x-3">
                    <select className="text-sm border border-gray-300 rounded-md p-2 flex-1">
                      <option value="">Select a service...</option>
                      {connectedServices.map(service => <option key={service.id} value={service.id}>
                          {service.name}
                        </option>)}
                    </select>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      Run Test
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-blue-500" />
                    Authentication Verification
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    Verify that your authentication credentials are valid and
                    have the required permissions.
                  </p>
                  <div className="flex space-x-3">
                    <select className="text-sm border border-gray-300 rounded-md p-2 flex-1">
                      <option value="">Select a service...</option>
                      {connectedServices.map(service => <option key={service.id} value={service.id}>
                          {service.name}
                        </option>)}
                    </select>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      Verify Auth
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                    <Activity className="h-4 w-4 mr-2 text-blue-500" />
                    API Request Simulator
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    Simulate API requests to test service functionality without
                    affecting production data.
                  </p>
                  <div className="flex space-x-3">
                    <select className="text-sm border border-gray-300 rounded-md p-2 flex-1">
                      <option value="">Select a service...</option>
                      {connectedServices.map(service => <option key={service.id} value={service.id}>
                          {service.name}
                        </option>)}
                    </select>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      Open Simulator
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center">
                <RefreshCw className="h-4 w-4 mr-2" />
                Run All Diagnostics
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 flex items-center">
                <HelpCircle className="h-4 w-4 mr-2" />
                Contact Support
              </button>
            </div>
          </div>
        </div>}
      {/* Save Button */}
      <div className="flex justify-end">
        <button onClick={handleSaveChanges} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <Save className="h-5 w-5 mr-2" />
          Save Integration Settings
        </button>
      </div>
    </div>;
};