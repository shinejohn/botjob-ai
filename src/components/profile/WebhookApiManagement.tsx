import React, { useState } from 'react';
import { Link, Code, AlertTriangle, Check, Copy, Save, PlusCircle, Trash, Edit, ExternalLink, RefreshCw, Play, Settings, Clock, BarChart, AlertCircle, ChevronDown, ChevronUp, Lock } from 'lucide-react';
export const WebhookApiManagement = () => {
  const [activeTab, setActiveTab] = useState('webhooks');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showNewWebhook, setShowNewWebhook] = useState(false);
  const [expandedWebhook, setExpandedWebhook] = useState<string | null>(null);
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>(null);
  // Sample webhook data
  const [webhooks, setWebhooks] = useState([{
    id: 'webhook-1',
    name: 'CRM Update Webhook',
    url: 'https://example.com/webhooks/crm-update',
    events: ['agent.conversation.completed', 'agent.task.completed'],
    status: 'active',
    created: '2023-04-15T10:30:00Z',
    lastTriggered: '2023-05-22T13:45:00Z',
    secret: 'whsec_8f7h3j2k1l0p9o8i7u6y5t4r3e2w1q',
    retryPolicy: {
      maxAttempts: 5,
      initialInterval: 30,
      backoffMultiplier: 2
    },
    deliveryStats: {
      success: 127,
      failed: 3,
      pending: 0
    }
  }, {
    id: 'webhook-2',
    name: 'Notification Webhook',
    url: 'https://example.com/webhooks/notifications',
    events: ['agent.error', 'system.alert'],
    status: 'active',
    created: '2023-04-20T14:15:00Z',
    lastTriggered: '2023-05-21T09:30:00Z',
    secret: 'whsec_7g6f5d4s3a2p1o0i9u8y7t6r5e4w3q',
    retryPolicy: {
      maxAttempts: 3,
      initialInterval: 60,
      backoffMultiplier: 1.5
    },
    deliveryStats: {
      success: 45,
      failed: 0,
      pending: 1
    }
  }, {
    id: 'webhook-3',
    name: 'Analytics Webhook',
    url: 'https://example.com/webhooks/analytics',
    events: ['agent.conversation.started', 'agent.conversation.completed'],
    status: 'inactive',
    created: '2023-03-10T11:20:00Z',
    lastTriggered: '2023-04-15T16:40:00Z',
    secret: 'whsec_6f5d4s3a2p1o0i9u8y7t6r5e4w3q2z',
    retryPolicy: {
      maxAttempts: 3,
      initialInterval: 30,
      backoffMultiplier: 2
    },
    deliveryStats: {
      success: 230,
      failed: 12,
      pending: 0
    }
  }]);
  // Sample API endpoints
  const [apiEndpoints, setApiEndpoints] = useState([{
    id: 'endpoint-1',
    name: 'Get Agent Status',
    path: '/api/v1/agents/:agentId/status',
    method: 'GET',
    rateLimits: {
      perSecond: 10,
      perMinute: 100,
      perHour: 1000
    },
    authentication: 'api_key',
    status: 'active',
    usage: {
      last24h: 450,
      last7d: 2800,
      last30d: 9500
    }
  }, {
    id: 'endpoint-2',
    name: 'Create Conversation',
    path: '/api/v1/conversations',
    method: 'POST',
    rateLimits: {
      perSecond: 5,
      perMinute: 50,
      perHour: 500
    },
    authentication: 'oauth2',
    status: 'active',
    usage: {
      last24h: 120,
      last7d: 800,
      last30d: 3200
    }
  }, {
    id: 'endpoint-3',
    name: 'Update Agent Configuration',
    path: '/api/v1/agents/:agentId/config',
    method: 'PATCH',
    rateLimits: {
      perSecond: 2,
      perMinute: 20,
      perHour: 100
    },
    authentication: 'api_key',
    status: 'active',
    usage: {
      last24h: 15,
      last7d: 45,
      last30d: 180
    }
  }]);
  // Sample webhook logs
  const [webhookLogs, setWebhookLogs] = useState([{
    id: 'log-1',
    webhookId: 'webhook-1',
    event: 'agent.conversation.completed',
    timestamp: '2023-05-22T13:45:00Z',
    status: 'success',
    responseCode: 200,
    responseTime: 230,
    payload: {
      event: 'agent.conversation.completed',
      data: {
        conversationId: 'conv-123456',
        agentId: 'agent-789012',
        duration: 125,
        outcome: 'resolved'
      }
    }
  }, {
    id: 'log-2',
    webhookId: 'webhook-1',
    event: 'agent.task.completed',
    timestamp: '2023-05-22T12:30:00Z',
    status: 'success',
    responseCode: 200,
    responseTime: 180,
    payload: {
      event: 'agent.task.completed',
      data: {
        taskId: 'task-345678',
        agentId: 'agent-789012',
        status: 'completed',
        result: 'appointment_scheduled'
      }
    }
  }, {
    id: 'log-3',
    webhookId: 'webhook-2',
    event: 'agent.error',
    timestamp: '2023-05-21T09:30:00Z',
    status: 'success',
    responseCode: 200,
    responseTime: 210,
    payload: {
      event: 'agent.error',
      data: {
        errorId: 'err-901234',
        agentId: 'agent-789012',
        errorType: 'integration_failure',
        message: 'Failed to connect to CRM service'
      }
    }
  }, {
    id: 'log-4',
    webhookId: 'webhook-1',
    event: 'agent.conversation.completed',
    timestamp: '2023-05-21T08:15:00Z',
    status: 'failed',
    responseCode: 500,
    responseTime: 3000,
    payload: {
      event: 'agent.conversation.completed',
      data: {
        conversationId: 'conv-567890',
        agentId: 'agent-789012',
        duration: 310,
        outcome: 'escalated'
      }
    },
    error: 'Internal Server Error',
    retryCount: 3
  }, {
    id: 'log-5',
    webhookId: 'webhook-3',
    event: 'agent.conversation.started',
    timestamp: '2023-04-15T16:40:00Z',
    status: 'success',
    responseCode: 200,
    responseTime: 150,
    payload: {
      event: 'agent.conversation.started',
      data: {
        conversationId: 'conv-123789',
        agentId: 'agent-456012',
        channel: 'web',
        timestamp: '2023-04-15T16:40:00Z'
      }
    }
  }]);
  const toggleWebhookDetails = (webhookId: string) => {
    if (expandedWebhook === webhookId) {
      setExpandedWebhook(null);
    } else {
      setExpandedWebhook(webhookId);
    }
  };
  const toggleEndpointDetails = (endpointId: string) => {
    if (expandedEndpoint === endpointId) {
      setExpandedEndpoint(null);
    } else {
      setExpandedEndpoint(endpointId);
    }
  };
  const handleSaveChanges = () => {
    // In a real app, this would save to the backend
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
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
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  const getMethodColor = method => {
    switch (method) {
      case 'GET':
        return 'bg-blue-100 text-blue-800';
      case 'POST':
        return 'bg-green-100 text-green-800';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-800';
      case 'PATCH':
        return 'bg-purple-100 text-purple-800';
      case 'DELETE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getStatusColor = status => {
    switch (status) {
      case 'success':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
      case 'pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };
  const getResponseTimeColor = time => {
    if (time < 300) return 'text-green-600';
    if (time < 1000) return 'text-yellow-600';
    return 'text-red-600';
  };
  const getDeliverySuccessRate = stats => {
    const total = stats.success + stats.failed + stats.pending;
    return total > 0 ? Math.round(stats.success / total * 100) : 100;
  };
  return <div className="space-y-8">
      {/* Success Message */}
      {saveSuccess && <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          <span>Webhook and API settings updated successfully!</span>
        </div>}
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button onClick={() => setActiveTab('webhooks')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'webhooks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Webhooks
        </button>
        <button onClick={() => setActiveTab('api')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'api' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          API Endpoints
        </button>
        <button onClick={() => setActiveTab('logs')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'logs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Delivery Logs
        </button>
        <button onClick={() => setActiveTab('testing')} className={`px-4 py-2 font-medium text-sm ${activeTab === 'testing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>
          Testing & Docs
        </button>
      </div>
      {activeTab === 'webhooks' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <Link className="h-5 w-5 mr-2 text-gray-500" />
              Webhook Configuration
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Configure webhooks to receive real-time notifications when events
              occur in your system. Webhooks allow your applications to be
              notified automatically when something happens.
            </p>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-md font-medium text-gray-700">
                  Your Webhooks
                </h3>
                <p className="text-xs text-gray-500">
                  You have {webhooks.length} webhook
                  {webhooks.length !== 1 ? 's' : ''} configured
                </p>
              </div>
              <button onClick={() => setShowNewWebhook(!showNewWebhook)} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Webhook
              </button>
            </div>
            {showNewWebhook && <div className="mb-6 p-4 border border-blue-200 bg-blue-50 rounded-md">
                <h4 className="text-sm font-medium text-blue-800 mb-3">
                  Create New Webhook
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Webhook Name
                    </label>
                    <input type="text" placeholder="e.g., Order Processing Webhook" className="w-full p-2 border border-gray-300 rounded-md text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Destination URL
                    </label>
                    <input type="url" placeholder="https://example.com/webhooks/endpoint" className="w-full p-2 border border-gray-300 rounded-md text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Events to Subscribe
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="event-conversation-started" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label htmlFor="event-conversation-started" className="ml-2 text-xs text-gray-700">
                          agent.conversation.started
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="event-conversation-completed" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label htmlFor="event-conversation-completed" className="ml-2 text-xs text-gray-700">
                          agent.conversation.completed
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="event-task-completed" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label htmlFor="event-task-completed" className="ml-2 text-xs text-gray-700">
                          agent.task.completed
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="event-error" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label htmlFor="event-error" className="ml-2 text-xs text-gray-700">
                          agent.error
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Retry Policy
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          Max Attempts
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                          <option>1</option>
                          <option>3</option>
                          <option selected>5</option>
                          <option>10</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          Initial Interval (s)
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                          <option>10</option>
                          <option selected>30</option>
                          <option>60</option>
                          <option>120</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          Backoff Multiplier
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                          <option>1</option>
                          <option>1.5</option>
                          <option selected>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 pt-2">
                    <button onClick={() => setShowNewWebhook(false)} className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50">
                      Cancel
                    </button>
                    <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                      Create Webhook
                    </button>
                  </div>
                </div>
              </div>}
            <div className="space-y-4">
              {webhooks.map(webhook => <div key={webhook.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`h-2 w-2 rounded-full mr-2 ${webhook.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                      <h3 className="font-medium text-gray-900">
                        {webhook.name}
                      </h3>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${webhook.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {webhook.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-gray-500 hover:text-red-600 rounded">
                        <Trash className="h-4 w-4" />
                      </button>
                      <button onClick={() => toggleWebhookDetails(webhook.id)} className="p-1.5 text-gray-500 hover:text-gray-700 rounded">
                        {expandedWebhook === webhook.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 mb-1">
                          Endpoint URL
                        </h4>
                        <div className="flex items-center">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded flex-1 truncate">
                            {webhook.url}
                          </code>
                          <button className="ml-2 p-1 text-gray-500 hover:text-gray-700">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 mb-1">
                          Events
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {webhook.events.map(event => <span key={event} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                              {event}
                            </span>)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 mb-1">
                          Created
                        </h4>
                        <p className="text-gray-900">
                          {formatDate(webhook.created)}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 mb-1">
                          Last Triggered
                        </h4>
                        <p className="text-gray-900">
                          {formatTimeAgo(webhook.lastTriggered)}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 mb-1">
                          Success Rate
                        </h4>
                        <div className="flex items-center">
                          <span className={`text-sm font-medium ${getDeliverySuccessRate(webhook.deliveryStats) > 95 ? 'text-green-600' : getDeliverySuccessRate(webhook.deliveryStats) > 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {getDeliverySuccessRate(webhook.deliveryStats)}%
                          </span>
                          <div className="ml-2 h-2 w-16 bg-gray-200 rounded-full">
                            <div className={`h-2 rounded-full ${getDeliverySuccessRate(webhook.deliveryStats) > 95 ? 'bg-green-500' : getDeliverySuccessRate(webhook.deliveryStats) > 80 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                        width: `${getDeliverySuccessRate(webhook.deliveryStats)}%`
                      }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Expanded details */}
                    {expandedWebhook === webhook.id && <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Webhook Secret
                          </h4>
                          <div className="flex items-center">
                            <code className="text-sm bg-gray-100 px-2 py-1 rounded flex-1 font-mono">
                              {webhook.secret.substring(0, 10)}
                              •••••••••••••••••••
                            </code>
                            <button className="ml-2 p-1 text-gray-500 hover:text-gray-700">
                              <Copy className="h-4 w-4" />
                            </button>
                            <button className="ml-1 p-1 text-gray-500 hover:text-gray-700">
                              <RefreshCw className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Use this secret to verify webhook signatures. Keep
                            this secret secure.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Retry Policy
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="text-xs text-gray-500">
                                Max Attempts
                              </p>
                              <p className="text-sm font-medium">
                                {webhook.retryPolicy.maxAttempts}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">
                                Initial Interval
                              </p>
                              <p className="text-sm font-medium">
                                {webhook.retryPolicy.initialInterval} seconds
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">
                                Backoff Multiplier
                              </p>
                              <p className="text-sm font-medium">
                                {webhook.retryPolicy.backoffMultiplier}x
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Delivery Statistics
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="p-3 bg-green-50 rounded-md border border-green-100">
                              <p className="text-xs text-green-600">
                                Successful
                              </p>
                              <p className="text-lg font-medium text-green-700">
                                {webhook.deliveryStats.success}
                              </p>
                            </div>
                            <div className="p-3 bg-red-50 rounded-md border border-red-100">
                              <p className="text-xs text-red-600">Failed</p>
                              <p className="text-lg font-medium text-red-700">
                                {webhook.deliveryStats.failed}
                              </p>
                            </div>
                            <div className="p-3 bg-yellow-50 rounded-md border border-yellow-100">
                              <p className="text-xs text-yellow-600">Pending</p>
                              <p className="text-lg font-medium text-yellow-700">
                                {webhook.deliveryStats.pending}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between pt-2">
                          <div className="flex space-x-3">
                            <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center">
                              <Play className="h-4 w-4 mr-2" />
                              Test Webhook
                            </button>
                            <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              View Delivery Logs
                            </button>
                          </div>
                          <div>
                            {webhook.status === 'active' ? <button className="px-3 py-1.5 bg-red-50 text-red-700 text-sm rounded-md hover:bg-red-100">
                                Disable Webhook
                              </button> : <button className="px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-md hover:bg-green-100">
                                Enable Webhook
                              </button>}
                          </div>
                        </div>
                      </div>}
                  </div>
                </div>)}
            </div>
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md">
              <div className="flex items-start">
                <Link className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-blue-800">
                    Webhook Best Practices
                  </h3>
                  <ul className="mt-2 text-xs text-blue-700 space-y-1 list-disc pl-5">
                    <li>
                      Implement signature verification to ensure webhook
                      requests are genuine
                    </li>
                    <li>
                      Respond to webhook requests quickly (within 3 seconds) to
                      avoid timeouts
                    </li>
                    <li>
                      Process webhook data asynchronously for better performance
                    </li>
                    <li>
                      Set up appropriate retry policies to handle temporary
                      failures
                    </li>
                    <li>
                      Monitor webhook delivery logs to identify and resolve
                      issues
                    </li>
                  </ul>
                  <button className="mt-3 text-xs text-blue-700 hover:text-blue-800 font-medium flex items-center">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Webhook Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'api' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <Code className="h-5 w-5 mr-2 text-gray-500" />
              API Endpoints
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Manage your API endpoints, rate limits, and authentication
              requirements. Monitor usage and configure access controls.
            </p>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-medium text-gray-700">
                  Available Endpoints
                </h3>
                <div className="flex space-x-2">
                  <select className="text-sm border border-gray-300 rounded p-1.5">
                    <option>All Methods</option>
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>PATCH</option>
                    <option>DELETE</option>
                  </select>
                  <select className="text-sm border border-gray-300 rounded p-1.5">
                    <option>All Authentication</option>
                    <option>API Key</option>
                    <option>OAuth 2.0</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                {apiEndpoints.map(endpoint => <div key={endpoint.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                      <div className="flex items-center">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getMethodColor(endpoint.method)}`}>
                          {endpoint.method}
                        </span>
                        <h3 className="font-medium text-gray-900 ml-2">
                          {endpoint.name}
                        </h3>
                      </div>
                      <div className="flex space-x-2">
                        <button onClick={() => toggleEndpointDetails(endpoint.id)} className="p-1.5 text-gray-500 hover:text-gray-700 rounded">
                          {expandedEndpoint === endpoint.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-3">
                        <h4 className="text-xs font-medium text-gray-500 mb-1">
                          Endpoint Path
                        </h4>
                        <div className="flex items-center">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded flex-1 font-mono">
                            {endpoint.path}
                          </code>
                          <button className="ml-2 p-1 text-gray-500 hover:text-gray-700">
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 mb-1">
                            Authentication
                          </h4>
                          <p className="text-gray-900 flex items-center">
                            <Lock className="h-4 w-4 mr-1 text-gray-400" />
                            {endpoint.authentication === 'api_key' ? 'API Key' : 'OAuth 2.0'}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 mb-1">
                            Rate Limit
                          </h4>
                          <p className="text-gray-900">
                            {endpoint.rateLimits.perMinute} requests/minute
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 mb-1">
                            Usage (24h)
                          </h4>
                          <p className="text-gray-900">
                            {endpoint.usage.last24h.toLocaleString()} requests
                          </p>
                        </div>
                      </div>
                      {/* Expanded details */}
                      {expandedEndpoint === endpoint.id && <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              Rate Limits
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                                <p className="text-xs text-gray-500">
                                  Per Second
                                </p>
                                <p className="text-lg font-medium text-gray-700">
                                  {endpoint.rateLimits.perSecond}
                                </p>
                              </div>
                              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                                <p className="text-xs text-gray-500">
                                  Per Minute
                                </p>
                                <p className="text-lg font-medium text-gray-700">
                                  {endpoint.rateLimits.perMinute}
                                </p>
                              </div>
                              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                                <p className="text-xs text-gray-500">
                                  Per Hour
                                </p>
                                <p className="text-lg font-medium text-gray-700">
                                  {endpoint.rateLimits.perHour}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              Usage Statistics
                            </h4>
                            <div className="h-40 bg-gray-50 rounded-md border border-gray-200 p-3 flex items-end justify-between">
                              {/* Simple chart visualization */}
                              <div className="flex-1 h-full flex items-end justify-around">
                                <div className="w-6 bg-blue-500 rounded-t" style={{
                          height: '30%'
                        }}></div>
                                <div className="w-6 bg-blue-500 rounded-t" style={{
                          height: '45%'
                        }}></div>
                                <div className="w-6 bg-blue-500 rounded-t" style={{
                          height: '60%'
                        }}></div>
                                <div className="w-6 bg-blue-500 rounded-t" style={{
                          height: '40%'
                        }}></div>
                                <div className="w-6 bg-blue-500 rounded-t" style={{
                          height: '75%'
                        }}></div>
                                <div className="w-6 bg-blue-500 rounded-t" style={{
                          height: '90%'
                        }}></div>
                                <div className="w-6 bg-blue-500 rounded-t" style={{
                          height: '65%'
                        }}></div>
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-3">
                              <div>
                                <p className="text-xs text-gray-500">
                                  Last 24 Hours
                                </p>
                                <p className="text-sm font-medium">
                                  {endpoint.usage.last24h.toLocaleString()}{' '}
                                  requests
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">
                                  Last 7 Days
                                </p>
                                <p className="text-sm font-medium">
                                  {endpoint.usage.last7d.toLocaleString()}{' '}
                                  requests
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">
                                  Last 30 Days
                                </p>
                                <p className="text-sm font-medium">
                                  {endpoint.usage.last30d.toLocaleString()}{' '}
                                  requests
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between pt-2">
                            <div className="flex space-x-3">
                              <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center">
                                <Play className="h-4 w-4 mr-2" />
                                Test Endpoint
                              </button>
                              <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 flex items-center">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Documentation
                              </button>
                            </div>
                            <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 flex items-center">
                              <Settings className="h-4 w-4 mr-2" />
                              Configure Rate Limits
                            </button>
                          </div>
                        </div>}
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <BarChart className="h-4 w-4 mr-2 text-blue-500" />
                  API Usage Overview
                </h3>
                <div className="h-40 bg-gray-50 rounded-md border border-gray-200 p-3 flex items-end justify-between">
                  {/* Simple chart visualization */}
                  <div className="flex-1 h-full flex items-end justify-around">
                    <div className="w-6 bg-blue-500 rounded-t" style={{
                  height: '40%'
                }}></div>
                    <div className="w-6 bg-blue-500 rounded-t" style={{
                  height: '55%'
                }}></div>
                    <div className="w-6 bg-blue-500 rounded-t" style={{
                  height: '70%'
                }}></div>
                    <div className="w-6 bg-blue-500 rounded-t" style={{
                  height: '50%'
                }}></div>
                    <div className="w-6 bg-blue-500 rounded-t" style={{
                  height: '85%'
                }}></div>
                    <div className="w-6 bg-blue-500 rounded-t" style={{
                  height: '60%'
                }}></div>
                    <div className="w-6 bg-blue-500 rounded-t" style={{
                  height: '75%'
                }}></div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  <p>
                    Total API Requests (Last 30 Days):{' '}
                    <span className="font-medium text-gray-900">12,880</span>
                  </p>
                  <p>
                    Average Requests per Day:{' '}
                    <span className="font-medium text-gray-900">429</span>
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />
                  Rate Limiting Settings
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Global Rate Limits
                      </p>
                      <p className="text-xs text-gray-500">
                        Applied to all API requests
                      </p>
                    </div>
                    <button className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                      Configure
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        IP-Based Limiting
                      </p>
                      <p className="text-xs text-gray-500">
                        Prevent abuse from single sources
                      </p>
                    </div>
                    <button className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                      Configure
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Burst Protection
                      </p>
                      <p className="text-xs text-gray-500">
                        Handle sudden traffic spikes
                      </p>
                    </div>
                    <button className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                      Configure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'logs' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-gray-500" />
              Webhook Delivery Logs
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Monitor webhook delivery status, inspect payloads, and
              troubleshoot delivery issues. Logs are retained for 30 days.
            </p>
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-md font-medium text-gray-700">
                  Recent Deliveries
                </h3>
              </div>
              <div className="flex space-x-2">
                <select className="text-sm border border-gray-300 rounded p-1.5">
                  <option>All Webhooks</option>
                  {webhooks.map(webhook => <option key={webhook.id} value={webhook.id}>
                      {webhook.name}
                    </option>)}
                </select>
                <select className="text-sm border border-gray-300 rounded p-1.5">
                  <option>All Events</option>
                  <option>agent.conversation.started</option>
                  <option>agent.conversation.completed</option>
                  <option>agent.task.completed</option>
                  <option>agent.error</option>
                </select>
                <select className="text-sm border border-gray-300 rounded p-1.5">
                  <option>All Status</option>
                  <option>Success</option>
                  <option>Failed</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Webhook
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Response
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {webhookLogs.map(log => {
                const webhook = webhooks.find(w => w.id === log.webhookId);
                return <tr key={log.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatTimeAgo(log.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {webhook?.name || log.webhookId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                            {log.event}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`flex items-center ${getStatusColor(log.status)}`}>
                            <span className={`h-2 w-2 rounded-full mr-2 ${log.status === 'success' ? 'bg-green-500' : log.status === 'failed' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                            {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm">{log.responseCode}</span>
                            <span className={`ml-2 text-xs ${getResponseTimeColor(log.responseTime)}`}>
                              {log.responseTime}ms
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-3">
                            <button className="text-blue-600 hover:text-blue-800">
                              View Details
                            </button>
                            {log.status === 'failed' && <button className="text-blue-600 hover:text-blue-800">
                                Retry
                              </button>}
                          </div>
                        </td>
                      </tr>;
              })}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Webhook Delivery Details
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                Select a delivery from the table above to view detailed
                information including request and response headers, payload, and
                error details.
              </p>
              <div className="p-6 border border-dashed border-gray-300 rounded-md flex items-center justify-center">
                <p className="text-sm text-gray-500">No delivery selected</p>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'testing' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900 flex items-center">
              <Play className="h-5 w-5 mr-2 text-gray-500" />
              Testing & Documentation
            </h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-6">
              Test your webhooks and API endpoints, and access comprehensive
              documentation for integration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Webhook Testing
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Select Webhook
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option value="">Choose a webhook...</option>
                      {webhooks.map(webhook => <option key={webhook.id} value={webhook.id}>
                          {webhook.name}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Event Type
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option value="">Select an event...</option>
                      <option>agent.conversation.started</option>
                      <option>agent.conversation.completed</option>
                      <option>agent.task.completed</option>
                      <option>agent.error</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Payload (JSON)
                    </label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm font-mono h-36" placeholder='{"event": "agent.conversation.completed", "data": { ... }}'></textarea>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    Send Test Event
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  API Endpoint Testing
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Select Endpoint
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                      <option value="">Choose an endpoint...</option>
                      {apiEndpoints.map(endpoint => <option key={endpoint.id} value={endpoint.id}>
                          {endpoint.method} {endpoint.name}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Path Parameters
                    </label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder='e.g., "agentId": "agent-123"' />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Request Body (JSON)
                    </label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm font-mono h-36" placeholder='{"name": "Test Agent", "status": "active"}'></textarea>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    Send Test Request
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Documentation & Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="#" className="p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    Webhook Integration Guide
                  </h4>
                  <p className="text-xs text-gray-500">
                    Learn how to securely receive and process webhooks
                  </p>
                </a>
                <a href="#" className="p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    API Reference
                  </h4>
                  <p className="text-xs text-gray-500">
                    Comprehensive documentation for all API endpoints
                  </p>
                </a>
                <a href="#" className="p-4 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    Code Samples
                  </h4>
                  <p className="text-xs text-gray-500">
                    Example code for common integration scenarios
                  </p>
                </a>
              </div>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">
                    Testing Environment
                  </h3>
                  <p className="mt-1 text-xs text-yellow-700">
                    All requests made through this testing interface are sent to
                    your actual webhook endpoints or API services. No sandbox
                    environment is currently available. Use with caution to
                    avoid affecting production data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* Save Button */}
      <div className="flex justify-end">
        <button onClick={handleSaveChanges} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>
    </div>;
};