import React, { useState } from 'react';
import { SendIcon, PhoneIcon, VideoIcon } from 'lucide-react';
export const AgentDemo = ({
  agent
}: {
  agent: any;
}) => {
  const [message, setMessage] = useState('');
  // Sample conversation
  const conversation = [{
    sender: 'user',
    text: 'Hi, I need to schedule an appointment for next week.'
  }, {
    sender: 'agent',
    text: "Hello! I'd be happy to help you schedule an appointment. What day and time works best for you next week?"
  }, {
    sender: 'user',
    text: 'I was thinking Tuesday afternoon, maybe around 2pm?'
  }, {
    sender: 'agent',
    text: 'Let me check the availability for Tuesday at 2pm... Yes, that time slot is available! Would you like me to schedule you for Tuesday at 2:00 PM?'
  }];
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h2 className="font-bold text-lg">Try the Demo</h2>
        <p className="text-sm text-blue-100">
          See how this agent responds in real-time
        </p>
      </div>
      <div className="p-4">
        <div className="flex space-x-2 mb-4">
          <button className="flex-1 flex items-center justify-center py-2 bg-blue-50 text-blue-600 rounded-md font-medium text-sm">
            <MessageIcon className="h-4 w-4 mr-1" />
            <span>Chat</span>
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">
            <PhoneIcon className="h-4 w-4 mr-1" />
            <span>Voice</span>
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-100 text-gray-700 rounded-md font-medium text-sm">
            <VideoIcon className="h-4 w-4 mr-1" />
            <span>Video</span>
          </button>
        </div>
        {/* Chat Demo */}
        <div className="bg-gray-50 rounded-lg h-80 overflow-y-auto p-4 mb-4">
          {conversation.map((msg, index) => <div key={index} className={`mb-3 max-w-[80%] ${msg.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
              <div className={`rounded-lg p-3 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-700'}`}>
                {msg.text}
              </div>
            </div>)}
        </div>
        <div className="relative">
          <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message to test the agent..." className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800">
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-gray-900 mb-2">
            Try these examples:
          </h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700">
              "I need to reschedule my appointment"
            </button>
            <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700">
              "What are your business hours?"
            </button>
            <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700">
              "Can I get a price quote for your services?"
            </button>
          </div>
        </div>
      </div>
    </div>;
};
const MessageIcon = ({
  className
}: {
  className?: string;
}) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>;