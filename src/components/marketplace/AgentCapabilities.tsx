import React from 'react';
import { Phone, Mail, Calendar, CreditCard, MessageSquare, FileText, Globe } from 'lucide-react';
export const AgentCapabilities = ({
  agent
}: {
  agent: any;
}) => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Communication Channels */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Communication Channels
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Phone Calls</h4>
                <p className="text-sm text-gray-600">
                  Answers calls 24/7 with natural voice and intelligent routing
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email Management</h4>
                <p className="text-sm text-gray-600">
                  Reads, categorizes, and responds to emails using your brand
                  voice
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">SMS/Text</h4>
                <p className="text-sm text-gray-600">
                  Sends appointment reminders and handles customer inquiries via
                  text
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Real-world Actions */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Real-world Actions
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Scheduling</h4>
                <p className="text-sm text-gray-600">
                  Books appointments with intelligent calendar management
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  Document Processing
                </h4>
                <p className="text-sm text-gray-600">
                  Creates and manages forms, documents, and reports
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <CreditCard className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  Payment Processing
                </h4>
                <p className="text-sm text-gray-600">
                  Securely handles payments and billing inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Integrations */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Supported Integrations
        </h3>
        <div className="flex flex-wrap gap-4">
          {agent.integrations.map((integration: string, index: number) => <div key={index} className="flex items-center border border-gray-200 rounded-lg px-4 py-2">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                <Globe className="h-4 w-4 text-gray-600" />
              </div>
              <span className="text-sm font-medium">{integration}</span>
            </div>)}
        </div>
      </div>
    </div>;
};