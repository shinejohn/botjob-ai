import React, { useEffect, useState } from 'react';
import { Calendar, Mail, MessageSquare, FileText, CreditCard, Database, Users, Check, AlertCircle } from 'lucide-react';
interface IntegrationsProps {
  config: any;
  updateConfig: (data: any) => void;
}
export const Integrations: React.FC<IntegrationsProps> = ({
  config,
  updateConfig
}) => {
  const [connectedServices, setConnectedServices] = useState(config.connectedServices || []);
  const [activeTab, setActiveTab] = useState('all');
  // Available integrations
  const integrations = [{
    id: 'google_calendar',
    name: 'Google Calendar',
    description: 'Schedule appointments and manage availability',
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    category: 'calendar',
    popular: true
  }, {
    id: 'outlook_calendar',
    name: 'Outlook Calendar',
    description: 'Sync with Microsoft Outlook calendar',
    icon: <Calendar className="h-6 w-6 text-blue-600" />,
    category: 'calendar'
  }, {
    id: 'gmail',
    name: 'Gmail',
    description: 'Send and receive emails through Gmail',
    icon: <Mail className="h-6 w-6 text-red-500" />,
    category: 'email',
    popular: true
  }, {
    id: 'outlook_mail',
    name: 'Outlook Mail',
    description: 'Email integration with Microsoft Outlook',
    icon: <Mail className="h-6 w-6 text-blue-500" />,
    category: 'email'
  }, {
    id: 'slack',
    name: 'Slack',
    description: 'Communicate with your team on Slack',
    icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
    category: 'communication',
    popular: true
  }, {
    id: 'teams',
    name: 'Microsoft Teams',
    description: 'Integrate with Microsoft Teams messaging',
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    category: 'communication'
  }, {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'Sync with Salesforce CRM data',
    icon: <Database className="h-6 w-6 text-blue-700" />,
    category: 'crm',
    popular: true
  }, {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'Connect with HubSpot CRM platform',
    icon: <Database className="h-6 w-6 text-orange-500" />,
    category: 'crm'
  }, {
    id: 'zendesk',
    name: 'Zendesk',
    description: 'Manage support tickets and customer service',
    icon: <MessageSquare className="h-6 w-6 text-green-600" />,
    category: 'support',
    popular: true
  }, {
    id: 'stripe',
    name: 'Stripe',
    description: 'Process payments and manage subscriptions',
    icon: <CreditCard className="h-6 w-6 text-purple-700" />,
    category: 'payment'
  }, {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'Access and share files from Dropbox',
    icon: <FileText className="h-6 w-6 text-blue-400" />,
    category: 'storage'
  }, {
    id: 'google_drive',
    name: 'Google Drive',
    description: 'Manage documents in Google Drive',
    icon: <FileText className="h-6 w-6 text-green-500" />,
    category: 'storage',
    popular: true
  }];
  // Categories for filtering
  const categories = [{
    id: 'all',
    name: 'All Integrations'
  }, {
    id: 'calendar',
    name: 'Calendar'
  }, {
    id: 'email',
    name: 'Email'
  }, {
    id: 'communication',
    name: 'Communication'
  }, {
    id: 'crm',
    name: 'CRM'
  }, {
    id: 'support',
    name: 'Support'
  }, {
    id: 'payment',
    name: 'Payment'
  }, {
    id: 'storage',
    name: 'Storage'
  }];
  // Filter integrations based on active tab
  const filteredIntegrations = activeTab === 'all' ? integrations : integrations.filter(integration => integration.category === activeTab);
  // Update parent component when connected services change
  useEffect(() => {
    updateConfig({
      connectedServices
    });
  }, [connectedServices]);
  const toggleConnection = (integrationId: string) => {
    if (connectedServices.includes(integrationId)) {
      setConnectedServices(connectedServices.filter(id => id !== integrationId));
    } else {
      // In a real app, this would trigger an OAuth flow
      // For demo purposes, we'll just add it to the list
      setConnectedServices([...connectedServices, integrationId]);
    }
  };
  return <div>
      {/* Integration Categories */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => <button key={category.id} onClick={() => setActiveTab(category.id)} className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium ${activeTab === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {category.name}
            </button>)}
        </div>
      </div>
      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredIntegrations.map(integration => <div key={integration.id} className={`border rounded-lg p-4 ${connectedServices.includes(integration.id) ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'}`}>
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">{integration.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    {integration.name}
                    {integration.popular && <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Popular
                      </span>}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {integration.description}
                  </p>
                </div>
              </div>
              <button onClick={() => toggleConnection(integration.id)} className={`flex-shrink-0 ml-4 px-3 py-1 rounded-md text-sm font-medium ${connectedServices.includes(integration.id) ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                {connectedServices.includes(integration.id) ? <span className="flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    Connected
                  </span> : 'Connect'}
              </button>
            </div>
            {connectedServices.includes(integration.id) && <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600">
                    Connected on {new Date().toLocaleDateString()}
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Configure
                  </button>
                </div>
              </div>}
          </div>)}
      </div>
      {/* Connection Status */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-medium text-gray-900 mb-2">Connection Status</h3>
        {connectedServices.length > 0 ? <div>
            <p className="text-sm text-gray-600 mb-3">
              Your agent is connected to {connectedServices.length} service
              {connectedServices.length !== 1 ? 's' : ''}.
            </p>
            <div className="flex flex-wrap gap-2">
              {connectedServices.map(serviceId => {
            const service = integrations.find(i => i.id === serviceId);
            return service ? <div key={serviceId} className="flex items-center bg-white px-3 py-1 rounded-full border border-gray-200 text-sm">
                    <div className="mr-1 flex-shrink-0">{service.icon}</div>
                    <span>{service.name}</span>
                  </div> : null;
          })}
            </div>
          </div> : <div className="flex items-start text-sm text-amber-800">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>
              No integrations connected yet. Connect at least one service to
              enable your agent to perform tasks.
            </p>
          </div>}
      </div>
      {/* Permissions Info */}
      <div className="mt-4 text-xs text-gray-500">
        <p>
          By connecting these services, you grant your agent permission to
          access and modify data according to the scopes specified during the
          connection process. You can revoke access at any time.
        </p>
      </div>
    </div>;
};