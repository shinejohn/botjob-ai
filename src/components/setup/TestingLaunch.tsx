import React, { useState } from 'react';
import { CheckCircle, PhoneCall, Mail, FileText, AlertTriangle, MessageSquare, Play, Zap } from 'lucide-react';
interface TestingLaunchProps {
  config: any;
  updateConfig: (data: any) => void;
}
export const TestingLaunch: React.FC<TestingLaunchProps> = ({
  config,
  updateConfig
}) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [testMode, setTestMode] = useState('chat');
  const [testMessages, setTestMessages] = useState([{
    sender: 'user',
    text: 'Hello, I have a question about your services.'
  }, {
    sender: 'agent',
    text: `Hello! I'm ${config.name || 'your AI assistant'} from ${config.companyInfo?.split('\n')[0] || 'your company'}. I'd be happy to help answer any questions about our services. What would you like to know?`
  }]);
  const [newMessage, setNewMessage] = useState('');
  // Configuration checklist
  const configChecklist = [{
    id: 'basic',
    name: 'Basic Configuration',
    status: config.name && config.companyInfo ? 'complete' : 'incomplete',
    items: [{
      name: 'Agent Name',
      status: config.name ? 'complete' : 'incomplete'
    }, {
      name: 'Company Information',
      status: config.companyInfo ? 'complete' : 'incomplete'
    }, {
      name: 'Personality Settings',
      status: 'complete'
    }]
  }, {
    id: 'contact',
    name: 'Contact Information',
    status: config.phoneNumber && config.emailAddress ? 'complete' : 'incomplete',
    items: [{
      name: 'Phone Number',
      status: config.phoneNumber ? 'complete' : 'incomplete'
    }, {
      name: 'Email Address',
      status: config.emailAddress ? 'complete' : 'incomplete'
    }, {
      name: 'Business Hours',
      status: config.businessHours?.workDays?.length > 0 ? 'complete' : 'incomplete'
    }]
  }, {
    id: 'integrations',
    name: 'Integrations',
    status: config.connectedServices?.length > 0 ? 'complete' : 'warning',
    items: [{
      name: 'Connected Services',
      status: config.connectedServices?.length > 0 ? 'complete' : 'warning'
    }]
  }, {
    id: 'knowledge',
    name: 'Training & Knowledge',
    status: config.uploadedDocuments?.length > 0 || config.faqs?.length > 0 || config.responseTemplates?.length > 0 || config.procedures?.length > 0 ? 'complete' : 'warning',
    items: [{
      name: 'Documents',
      status: config.uploadedDocuments?.length > 0 ? 'complete' : 'warning'
    }, {
      name: 'FAQs',
      status: config.faqs?.length > 0 ? 'complete' : 'warning'
    }, {
      name: 'Response Templates',
      status: config.responseTemplates?.length > 0 ? 'complete' : 'warning'
    }, {
      name: 'Procedures',
      status: config.procedures?.length > 0 ? 'complete' : 'warning'
    }]
  }];
  const allRequiredComplete = configChecklist.filter(section => section.status === 'incomplete').length === 0;
  const sendTestMessage = () => {
    if (!newMessage.trim()) return;
    // Add user message
    setTestMessages([...testMessages, {
      sender: 'user',
      text: newMessage
    }]);
    // Simulate agent response
    setTimeout(() => {
      setTestMessages(prev => [...prev, {
        sender: 'agent',
        text: `I understand you're asking about "${newMessage}". As ${config.name || 'your AI assistant'}, I'm designed to help with these kinds of inquiries. Is there anything specific you'd like to know?`
      }]);
    }, 1000);
    setNewMessage('');
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'preview':
        return <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Agent Preview
              </h3>
              <p className="text-sm text-gray-500">
                Here's how your agent will appear and interact with users.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Agent Profile Card */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                      {config.name ? config.name.charAt(0) : 'A'}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        {config.name || 'Your AI Agent'}
                      </h3>
                      <p className="text-blue-100">
                        {config.phoneNumber || 'Phone number not set'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      About
                    </h4>
                    <p className="text-sm text-gray-800">
                      {config.companyInfo || 'No company information provided.'}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-sm text-gray-800">
                      {config.businessHours?.workDays?.length > 0 ? `${formatWorkDays(config.businessHours.workDays)}, ${config.businessHours.start} - ${config.businessHours.end}` : 'Business hours not set'}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {config.connectedServices?.length > 0 ? config.connectedServices.map((service: string) => <span key={service} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {formatServiceName(service)}
                          </span>) : <span className="text-xs text-gray-500">
                          No capabilities configured
                        </span>}
                    </div>
                  </div>
                </div>
              </div>
              {/* Test Conversation */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[400px]">
                <div className="bg-gray-100 p-3 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <button onClick={() => setTestMode('chat')} className={`px-3 py-1 rounded-md text-sm ${testMode === 'chat' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                      <span className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Chat
                      </span>
                    </button>
                    <button onClick={() => setTestMode('call')} className={`px-3 py-1 rounded-md text-sm ${testMode === 'call' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                      <span className="flex items-center">
                        <PhoneCall className="h-4 w-4 mr-1" />
                        Call
                      </span>
                    </button>
                    <button onClick={() => setTestMode('email')} className={`px-3 py-1 rounded-md text-sm ${testMode === 'email' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                      <span className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </span>
                    </button>
                  </div>
                </div>
                {testMode === 'chat' && <>
                    <div className="flex-1 p-4 overflow-y-auto">
                      {testMessages.map((message, index) => <div key={index} className={`mb-3 max-w-[80%] ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                          <div className={`rounded-lg p-3 ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                            {message.text}
                          </div>
                        </div>)}
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <div className="flex">
                        <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && sendTestMessage()} placeholder="Type a test message..." className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500" />
                        <button onClick={sendTestMessage} className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                          Send
                        </button>
                      </div>
                    </div>
                  </>}
                {testMode === 'call' && <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <PhoneCall className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Test Phone Call
                    </h3>
                    <p className="text-sm text-gray-500 text-center mb-4">
                      Call your agent to test its phone capabilities.
                    </p>
                    <p className="text-lg font-medium text-gray-900 mb-6">
                      {config.phoneNumber || 'No phone number configured'}
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                      <Play className="h-4 w-4 mr-2" />
                      Simulate Incoming Call
                    </button>
                  </div>}
                {testMode === 'email' && <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <Mail className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Test Email
                    </h3>
                    <p className="text-sm text-gray-500 text-center mb-4">
                      Send an email to your agent to test its email
                      capabilities.
                    </p>
                    <p className="text-lg font-medium text-gray-900 mb-6">
                      {config.emailAddress || 'No email address configured'}
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                      <Play className="h-4 w-4 mr-2" />
                      Simulate Email Request
                    </button>
                  </div>}
              </div>
            </div>
          </div>;
      case 'checklist':
        return <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Configuration Checklist
              </h3>
              <p className="text-sm text-gray-500">
                Review your agent setup before launching.
              </p>
            </div>
            <div className="space-y-6">
              {configChecklist.map(section => <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">
                      {section.name}
                    </h3>
                    {section.status === 'complete' ? <span className="text-green-600 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-1" />
                        Complete
                      </span> : section.status === 'warning' ? <span className="text-amber-600 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-1" />
                        Optional
                      </span> : <span className="text-red-600 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-1" />
                        Incomplete
                      </span>}
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      {section.items.map((item, index) => <li key={index} className="flex items-center justify-between">
                          <span className="text-gray-700">{item.name}</span>
                          {item.status === 'complete' ? <span className="text-green-600 flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Complete
                            </span> : item.status === 'warning' ? <span className="text-amber-600 flex items-center text-sm">
                              <AlertTriangle className="h-4 w-4 mr-1" />
                              Recommended
                            </span> : <span className="text-red-600 flex items-center text-sm">
                              <AlertTriangle className="h-4 w-4 mr-1" />
                              Required
                            </span>}
                        </li>)}
                    </ul>
                  </div>
                </div>)}
            </div>
            {!allRequiredComplete && <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-800">
                      Missing Required Configuration
                    </h4>
                    <p className="text-sm text-red-700 mt-1">
                      Please complete all required fields before launching your
                      agent.
                    </p>
                  </div>
                </div>
              </div>}
          </div>;
      case 'launch':
        return <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Launch Your Agent
              </h3>
              <p className="text-sm text-gray-500">
                Your agent is ready to go live and start handling tasks.
              </p>
            </div>
            {!allRequiredComplete ? <div className="p-6 bg-red-50 border border-red-200 rounded-lg mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-red-800 text-lg mb-2">
                      Cannot Launch Yet
                    </h4>
                    <p className="text-red-700 mb-4">
                      Your agent is missing required configuration. Please
                      complete all required fields before launching.
                    </p>
                    <button onClick={() => setActiveTab('checklist')} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                      View Checklist
                    </button>
                  </div>
                </div>
              </div> : <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {config.name || 'Your Agent'} is Ready!
                </h4>
                <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto">
                  All required configuration is complete. Your agent is ready to
                  launch and start handling tasks.
                </p>
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium text-lg hover:bg-green-700 shadow-lg flex items-center justify-center mx-auto">
                  <Zap className="h-5 w-5 mr-2" />
                  Launch Agent
                </button>
              </div>}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">After Launch</h4>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-medium mr-3">
                    1
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">
                      Monitor Performance
                    </h5>
                    <p className="text-sm text-gray-600">
                      Track your agent's performance and customer satisfaction
                      in the management dashboard.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-medium mr-3">
                    2
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">
                      Continuous Training
                    </h5>
                    <p className="text-sm text-gray-600">
                      Review conversations and continue training your agent to
                      improve its effectiveness.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-medium mr-3">
                    3
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800">
                      Adjust Settings
                    </h5>
                    <p className="text-sm text-gray-600">
                      Fine-tune your agent's configuration as needed based on
                      real-world performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  // Helper function to format work days
  const formatWorkDays = (workDays: number[]) => {
    if (!workDays || workDays.length === 0) return 'Not set';
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // Check if it's a continuous range (e.g., Mon-Fri)
    if (workDays.length > 2) {
      let isRange = true;
      for (let i = 1; i < workDays.length; i++) {
        if (workDays[i] !== workDays[i - 1] + 1) {
          isRange = false;
          break;
        }
      }
      if (isRange) {
        return `${dayNames[workDays[0]]}-${dayNames[workDays[workDays.length - 1]]}`;
      }
    }
    // Otherwise, list out the days
    return workDays.map(day => dayNames[day]).join(', ');
  };
  // Helper function to format service names
  const formatServiceName = (serviceId: string) => {
    return serviceId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  return <div>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-6">
          <button onClick={() => setActiveTab('preview')} className={`py-3 border-b-2 font-medium text-sm ${activeTab === 'preview' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Agent Preview
          </button>
          <button onClick={() => setActiveTab('checklist')} className={`py-3 border-b-2 font-medium text-sm ${activeTab === 'checklist' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Configuration Checklist
          </button>
          <button onClick={() => setActiveTab('launch')} className={`py-3 border-b-2 font-medium text-sm ${activeTab === 'launch' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Launch
          </button>
        </nav>
      </div>
      {/* Tab Content */}
      {renderTabContent()}
    </div>;
};