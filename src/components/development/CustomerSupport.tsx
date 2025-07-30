import React, { useState } from 'react';
import { MessageSquare, User, Calendar, Clock, X, FileText, Send } from 'lucide-react';
export const CustomerSupport = () => {
  const [activeChat, setActiveChat] = useState(0);
  const supportChats = [{
    id: 1,
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    status: 'active',
    lastMessage: 'I need help configuring the agent for my team',
    timestamp: '10:45 AM',
    unread: true
  }, {
    id: 2,
    customer: {
      name: 'Michael Chen',
      email: 'mchen@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    status: 'active',
    lastMessage: 'When will the new integration features be available?',
    timestamp: 'Yesterday',
    unread: false
  }, {
    id: 3,
    customer: {
      name: 'Emily Rodriguez',
      email: 'emily.r@example.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    status: 'closed',
    lastMessage: 'Thanks for your help with the billing issue!',
    timestamp: 'Oct 12',
    unread: false
  }];
  const messages = [{
    id: 1,
    sender: 'customer',
    text: "Hi there, I need help configuring the agent for my team. We have a specific use case that I'm not sure how to handle.",
    timestamp: '10:30 AM'
  }, {
    id: 2,
    sender: 'support',
    text: "Hello Sarah! I'd be happy to help you with configuring your agent. Could you tell me more about your specific use case?",
    timestamp: '10:32 AM'
  }, {
    id: 3,
    sender: 'customer',
    text: "We're trying to set up the agent to handle both customer inquiries and internal knowledge base searches. Is that possible with one agent?",
    timestamp: '10:35 AM'
  }, {
    id: 4,
    sender: 'support',
    text: "Yes, that's definitely possible! You can configure a single agent to handle both customer inquiries and internal knowledge base searches. You'll need to set up two different knowledge sources and create decision logic to determine which one to use based on the context.",
    timestamp: '10:38 AM'
  }, {
    id: 5,
    sender: 'support',
    text: 'Would you like me to guide you through the setup process? I can also share some documentation that explains the process in detail.',
    timestamp: '10:39 AM'
  }, {
    id: 6,
    sender: 'customer',
    text: 'That would be great! Could you share the documentation and maybe schedule a quick call to walk me through it?',
    timestamp: '10:42 AM'
  }, {
    id: 7,
    sender: 'support',
    text: "Of course! I've attached our guide on multi-purpose agent configuration. As for the call, I have availability tomorrow between 10 AM and 2 PM EST. Would any time in that window work for you?",
    timestamp: '10:45 AM',
    attachment: {
      name: 'Multi-Purpose_Agent_Guide.pdf',
      size: '2.4 MB'
    }
  }];
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex h-[calc(100vh-280px)]">
        {/* Chat List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-900">Support Conversations</h3>
            <div className="mt-2 relative">
              <input type="text" placeholder="Search conversations..." className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <svg className="h-4 w-4 text-gray-400 absolute left-2.5 top-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          <div className="overflow-y-auto flex-1">
            {supportChats.map((chat, index) => <div key={chat.id} className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${activeChat === index ? 'bg-blue-50' : ''}`} onClick={() => setActiveChat(index)}>
                <div className="flex items-start">
                  <div className="relative flex-shrink-0">
                    <img src={chat.customer.avatar} alt={chat.customer.name} className="h-10 w-10 rounded-full object-cover" />
                    {chat.status === 'active' && <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>}
                  </div>
                  <div className="ml-3 flex-1 overflow-hidden">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-medium text-sm text-gray-900 truncate">
                        {chat.customer.name}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {chat.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {chat.customer.email}
                    </p>
                    <p className={`text-sm mt-1 truncate ${chat.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                      {chat.lastMessage}
                    </p>
                  </div>
                  {chat.unread && <div className="ml-2 h-2 w-2 bg-blue-600 rounded-full"></div>}
                </div>
              </div>)}
          </div>
        </div>
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center">
              <img src={supportChats[activeChat].customer.avatar} alt={supportChats[activeChat].customer.name} className="h-10 w-10 rounded-full object-cover mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">
                  {supportChats[activeChat].customer.name}
                </h3>
                <div className="flex items-center text-xs text-gray-500">
                  <span className={`h-2 w-2 rounded-full mr-1 ${supportChats[activeChat].status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  <span>
                    {supportChats[activeChat].status === 'active' ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <Calendar className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[75%] ${message.sender === 'customer' ? 'bg-gray-100' : 'bg-blue-100'} rounded-lg p-3`}>
                  <div className="text-sm text-gray-800">{message.text}</div>
                  {message.attachment && <div className="mt-2 p-2 bg-white rounded border border-gray-200 flex items-center">
                      <FileText className="h-4 w-4 text-blue-500 mr-2" />
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-900">
                          {message.attachment.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {message.attachment.size}
                        </div>
                      </div>
                      <button className="text-blue-600 text-xs font-medium">
                        Download
                      </button>
                    </div>}
                  <div className="mt-1 text-xs text-gray-500 text-right">
                    {message.timestamp}
                  </div>
                </div>
              </div>)}
          </div>
          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-1 relative">
                <input type="text" placeholder="Type your message..." className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                  </svg>
                </button>
              </div>
              <button className="px-4 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex space-x-2">
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Add template response
                </button>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  Schedule follow-up
                </button>
              </div>
              <div className="text-xs text-gray-500">
                <Clock className="h-3 w-3 inline mr-1" />
                <span>Sarah is typing...</span>
              </div>
            </div>
          </div>
        </div>
        {/* Customer Info Panel */}
        <div className="w-72 border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-900">Customer Details</h3>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="text-center mb-4">
              <img src={supportChats[activeChat].customer.avatar} alt={supportChats[activeChat].customer.name} className="h-20 w-20 rounded-full object-cover mx-auto" />
              <h4 className="font-medium text-gray-900 mt-2">
                {supportChats[activeChat].customer.name}
              </h4>
              <p className="text-sm text-gray-500">
                {supportChats[activeChat].customer.email}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Account Information
                </h5>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-500">Plan</div>
                    <div className="text-gray-900 font-medium">
                      Professional
                    </div>
                    <div className="text-gray-500">Status</div>
                    <div className="text-green-600 font-medium">Active</div>
                    <div className="text-gray-500">Customer Since</div>
                    <div className="text-gray-900">June 2023</div>
                    <div className="text-gray-500">Agents</div>
                    <div className="text-gray-900">3 deployed</div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Support History
                </h5>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="text-sm font-medium text-gray-900">
                      Agent Configuration Issue
                    </div>
                    <div className="text-xs text-gray-500">
                      Opened: Oct 15, 2023
                    </div>
                    <div className="text-xs text-gray-500">
                      Status: In Progress
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-md p-3">
                    <div className="text-sm font-medium text-gray-900">
                      Billing Question
                    </div>
                    <div className="text-xs text-gray-500">
                      Opened: Sep 28, 2023
                    </div>
                    <div className="text-xs text-gray-500">
                      Status: Resolved
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Notes
                </h5>
                <textarea className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Add customer notes..." rows={3}></textarea>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm">
                View History
              </button>
              <button className="flex-1 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                Escalate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};