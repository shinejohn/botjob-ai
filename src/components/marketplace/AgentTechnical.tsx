import React from 'react';
import { Server, Lock, Code, Settings, HelpCircle } from 'lucide-react';
export const AgentTechnical = ({
  agent
}: {
  agent: any;
}) => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="font-bold text-lg text-gray-900 mb-4">
          Technical Details
        </h2>
        <div className="space-y-5">
          {/* Integration Requirements */}
          <div>
            <div className="flex items-center mb-2">
              <Server className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium text-gray-900">
                Integration Requirements
              </h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1 ml-7">
              <li>• API access to your calendar system</li>
              <li>• Email forwarding setup</li>
              <li>• Call forwarding configuration</li>
            </ul>
          </div>
          {/* Setup Complexity */}
          <div>
            <div className="flex items-center mb-2">
              <Settings className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium text-gray-900">Setup Complexity</h3>
            </div>
            <div className="ml-7">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{
                  width: '40%'
                }}></div>
                </div>
                <span className="text-sm text-gray-600">Medium</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Typically takes 1-2 hours with guided setup assistance
              </p>
            </div>
          </div>
          {/* Customization */}
          <div>
            <div className="flex items-center mb-2">
              <Code className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium text-gray-900">
                Customization Options
              </h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1 ml-7">
              <li>• Custom greeting messages</li>
              <li>• Personalized response templates</li>
              <li>• Business hours configuration</li>
              <li>• Escalation rules and routing logic</li>
            </ul>
          </div>
          {/* Security */}
          <div>
            <div className="flex items-center mb-2">
              <Lock className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium text-gray-900">
                Security & Compliance
              </h3>
            </div>
            <div className="ml-7">
              <div className="flex flex-wrap gap-2 mb-2">
                {agent.certifications.map((cert: string, index: number) => <span key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                    {cert}
                  </span>)}
              </div>
              <p className="text-xs text-gray-500">
                End-to-end encryption for all communications
              </p>
            </div>
          </div>
          {/* Support */}
          <div>
            <div className="flex items-center mb-2">
              <HelpCircle className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="font-medium text-gray-900">Support Included</h3>
            </div>
            <div className="ml-7 text-sm text-gray-600">
              <p>• 24/7 email support</p>
              <p>• Live chat during business hours</p>
              <p>• Comprehensive documentation</p>
              <p>• Monthly check-in calls</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md font-medium transition">
            Download Technical Specifications
          </button>
        </div>
      </div>
    </div>;
};