import React, { useState, Component } from 'react'
import {
  Save,
  Play,
  Code,
  Layout,
  Package,
  Bug,
  Layers,
  Plus,
  Trash,
  Edit,
  Copy,
  ArrowRight,
  MessageSquare,
  Settings,
  FileText,
  RotateCw,
  X,
} from 'lucide-react'
export const AgentBuilder = () => {
  const [activeView, setActiveView] = useState('visual')
  const [activePanel, setActivePanel] = useState('components')
  const [showTestPanel, setShowTestPanel] = useState(false)
  const [showDebugPanel, setShowDebugPanel] = useState(false)
  const [isRunningTests, setIsRunningTests] = useState(false)
  const [testResults, setTestResults] = useState(null)
  const handleDebug = () => {
    setShowDebugPanel(true)
    // Simulate debugging process
    setTimeout(() => {
      setShowDebugPanel(false)
      alert('Debugging completed. See console for details.')
      console.log('Debug results: No critical issues found.')
    }, 2000)
  }
  const handleRunTests = () => {
    setIsRunningTests(true)
    // Simulate test running process
    setTimeout(() => {
      setIsRunningTests(false)
      setTestResults({
        passed: 3,
        failed: 1,
        skipped: 0,
        total: 4,
      })
      alert('Tests completed. 3 passed, 1 failed.')
    }, 3000)
  }
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200">
          <div className="flex-1 flex">
            <button
              onClick={() => setActiveView('visual')}
              className={`px-4 py-3 font-medium text-sm flex items-center ${activeView === 'visual' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-50 text-gray-600 hover:text-gray-800'}`}
            >
              <Layout className="h-4 w-4 mr-2" />
              Visual Editor
            </button>
            <button
              onClick={() => setActiveView('code')}
              className={`px-4 py-3 font-medium text-sm flex items-center ${activeView === 'code' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-50 text-gray-600 hover:text-gray-800'}`}
            >
              <Code className="h-4 w-4 mr-2" />
              Code Editor
            </button>
          </div>
          <div className="border-l border-gray-200 flex">
            <button
              onClick={() => setShowTestPanel(!showTestPanel)}
              className={`px-4 py-3 font-medium text-sm flex items-center ${showTestPanel ? 'bg-white text-blue-600' : 'bg-gray-50 text-gray-600 hover:text-gray-800'}`}
            >
              <Play className="h-4 w-4 mr-2" />
              Test Agent
            </button>
            <button className="px-4 py-3 font-medium text-sm flex items-center bg-gray-50 text-gray-600 hover:text-gray-800 border-l border-gray-200">
              <Save className="h-4 w-4 mr-2" />
              Save
            </button>
          </div>
        </div>
        <div className="flex h-[calc(100vh-280px)]">
          {/* Left Panel - Components/Templates */}
          <div className="w-64 border-r border-gray-200 bg-gray-50 flex flex-col">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActivePanel('components')}
                className={`flex-1 px-4 py-3 text-sm font-medium ${activePanel === 'components' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
              >
                Components
              </button>
              <button
                onClick={() => setActivePanel('templates')}
                className={`flex-1 px-4 py-3 text-sm font-medium ${activePanel === 'templates' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
              >
                Templates
              </button>
            </div>
            {activePanel === 'components' ? (
              <div className="overflow-y-auto flex-1 p-4 space-y-4">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Core Components
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-move flex items-center">
                    <MessageSquare className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm">Message Handler</span>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-move flex items-center">
                    <FileText className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm">Knowledge Base</span>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-move flex items-center">
                    <Settings className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm">Decision Logic</span>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-move flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm">Action Executor</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-6">
                  Integrations
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-move flex items-center">
                    <svg
                      className="h-4 w-4 text-blue-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm">API Connector</span>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-move flex items-center">
                    <svg
                      className="h-4 w-4 text-blue-500 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 21V9" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="text-sm">Database Access</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-y-auto flex-1 p-4 space-y-4">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent Templates
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-pointer">
                    <div className="font-medium text-sm mb-1">
                      Customer Support
                    </div>
                    <p className="text-xs text-gray-500">
                      Handles customer inquiries and troubleshooting
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-pointer">
                    <div className="font-medium text-sm mb-1">
                      Sales Assistant
                    </div>
                    <p className="text-xs text-gray-500">
                      Qualifies leads and schedules demos
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-pointer">
                    <div className="font-medium text-sm mb-1">Data Analyst</div>
                    <p className="text-xs text-gray-500">
                      Processes and analyzes data sets
                    </p>
                  </div>
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-6">
                  Your Templates
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-md border border-gray-200 shadow-sm hover:border-blue-300 cursor-pointer flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm mb-1">
                        Onboarding Assistant
                      </div>
                      <p className="text-xs text-gray-500">
                        Custom onboarding workflow
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="h-3 w-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Copy className="h-3 w-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Main Editor Area */}
          <div className="flex-1 overflow-auto">
            {activeView === 'visual' ? (
              <div className="p-6">
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <Layers className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Visual Workflow Designer
                    </h3>
                    <p className="text-gray-500 max-w-md mb-4">
                      Drag and drop components from the left panel to build your
                      agent's workflow.
                    </p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-flex items-center">
                      <Plus className="h-4 w-4 mr-2" />
                      Add First Component
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="border-b border-gray-200 p-2 bg-gray-50 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      agent.js
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      knowledge.js
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      actions.js
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>JavaScript</span>
                    <span className="mx-2">|</span>
                    <span>UTF-8</span>
                  </div>
                </div>
                <div className="flex-1 overflow-auto p-4 font-mono text-sm bg-gray-900 text-gray-200">
                  <pre className="whitespace-pre-wrap">
                    {`// Agent Configuration
const agentConfig = {
  name: "CustomerSupportAgent",
  description: "Handles customer support inquiries",
  version: "1.0.0",
  // Knowledge base configuration
  knowledgeBase: {
    sources: ["support_docs", "product_faq", "troubleshooting_guide"],
    retrievalStrategy: "semantic_search"
  },
  // Message handling configuration
  messageHandler: {
    greeting: "Hello! I'm your support assistant. How can I help you today?",
    farewell: "Thank you for contacting support. Is there anything else I can help with?",
    fallback: "I'm sorry, I don't have enough information to help with that. Would you like me to connect you with a human agent?"
  },
  // Decision logic
  decisionLogic: [
    {
      condition: "intent === 'technical_issue'",
      action: "troubleshootProblem"
    },
    {
      condition: "intent === 'billing_question'",
      action: "handleBillingInquiry"
    },
    {
      condition: "confidence < 0.7",
      action: "escalateToHuman"
    }
  ],
  // Actions
  actions: {
    troubleshootProblem: async (context) => {
      // Implementation details...
    },
    handleBillingInquiry: async (context) => {
      // Implementation details...
    },
    escalateToHuman: async (context) => {
      // Implementation details...
    }
  }
};
export default agentConfig;`}
                  </pre>
                </div>
              </div>
            )}
          </div>
          {/* Test Panel (conditionally shown) */}
          {showTestPanel && (
            <div className="w-80 border-l border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h3 className="font-medium text-sm text-gray-700">
                  Test Console
                </h3>
                <button
                  onClick={() => setShowTestPanel(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 overflow-auto flex flex-col">
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="ml-auto max-w-[80%] bg-blue-100 text-blue-800 p-3 rounded-lg rounded-tr-none">
                    Hi, I'm having trouble logging into my account.
                  </div>
                  <div className="max-w-[80%] bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    I'm sorry to hear you're having trouble logging in. Could
                    you tell me what error message you're seeing, if any? Also,
                    have you tried resetting your password?
                  </div>
                  <div className="ml-auto max-w-[80%] bg-blue-100 text-blue-800 p-3 rounded-lg rounded-tr-none">
                    It says "Invalid credentials" and yes, I tried resetting but
                    I'm not receiving the reset email.
                  </div>
                  <div className="max-w-[80%] bg-gray-100 p-3 rounded-lg rounded-tl-none">
                    Thank you for that information. It sounds like there might
                    be an issue with the email delivery or possibly with the
                    email address on file. Let me check a few things for you.
                    Could you please confirm the email address associated with
                    your account? Also, have you checked your spam or junk
                    folder for the reset email?
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2 mb-2">
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200">
                      Clear Chat
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200">
                      Export Log
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200">
                      <RotateCw className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type a test message..."
                      className="w-full p-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 2L11 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 2L15 22L11 13L2 9L22 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Debugging Tools */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-900">
            Debugging & Testing Tools
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={handleDebug}
              className="px-3 py-1 bg-red-100 text-red-800 rounded text-sm hover:bg-red-200 flex items-center"
              disabled={showDebugPanel}
            >
              {showDebugPanel ? (
                <>
                  <RotateCw className="h-4 w-4 mr-1 animate-spin" />
                  Debugging...
                </>
              ) : (
                <>
                  <Bug className="h-4 w-4 mr-1" />
                  Debug
                </>
              )}
            </button>
            <button
              onClick={handleRunTests}
              className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm hover:bg-green-200 flex items-center"
              disabled={isRunningTests}
            >
              {isRunningTests ? (
                <>
                  <RotateCw className="h-4 w-4 mr-1 animate-spin" />
                  Running Tests...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-1" />
                  Run Tests
                </>
              )}
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Performance Metrics
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Response Time</span>
                  <span className="text-xs font-medium">1.2s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-green-500 h-1.5 rounded-full"
                    style={{
                      width: '25%',
                    }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Memory Usage</span>
                  <span className="text-xs font-medium">64MB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-yellow-500 h-1.5 rounded-full"
                    style={{
                      width: '60%',
                    }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">API Calls</span>
                  <span className="text-xs font-medium">3 calls</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full"
                    style={{
                      width: '30%',
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Test Scenarios
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-xs text-gray-700">
                      Account Login Issues
                    </span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">
                    Passed
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-xs text-gray-700">
                      Billing Questions
                    </span>
                  </div>
                  <span className="text-xs text-green-600 font-medium">
                    Passed
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-xs text-gray-700">
                      Product Information
                    </span>
                  </div>
                  <span className="text-xs text-yellow-600 font-medium">
                    Partial
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-xs text-gray-700">
                      Technical Support
                    </span>
                  </div>
                  <span className="text-xs text-red-600 font-medium">
                    Failed
                  </span>
                </div>
                <button className="w-full mt-2 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 flex items-center justify-center">
                  <Plus className="h-3 w-3 mr-1" />
                  Add Test Case
                </button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md p-4">
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Error Logs
              </h4>
              <div className="overflow-y-auto h-28 text-xs font-mono">
                <div className="text-green-600">
                  [INFO] 10:45:23 - Agent initialized successfully
                </div>
                <div className="text-yellow-600">
                  [WARN] 10:45:24 - Knowledge base missing entry for "product
                  returns"
                </div>
                <div className="text-red-600">
                  [ERROR] 10:45:30 - Failed to connect to external API: timeout
                </div>
                <div className="text-green-600">
                  [INFO] 10:45:35 - Fallback response triggered
                </div>
                <div className="text-red-600">
                  [ERROR] 10:45:40 - Undefined variable in action handler
                  "processRefund"
                </div>
              </div>
            </div>
          </div>
          {/* Test Results Panel (shows when tests are run) */}
          {testResults && (
            <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
              <h4 className="font-medium text-sm text-gray-700 mb-3">
                Test Results
              </h4>
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">{testResults.passed} Passed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm">{testResults.failed} Failed</span>
                </div>
                {testResults.skipped > 0 && (
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm">
                      {testResults.skipped} Skipped
                    </span>
                  </div>
                )}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: `${(testResults.passed / testResults.total) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="space-y-2">
                <div className="p-2 bg-green-50 border border-green-100 rounded text-sm text-green-800">
                  ✓ Account Login Issues - Test passed successfully
                </div>
                <div className="p-2 bg-green-50 border border-green-100 rounded text-sm text-green-800">
                  ✓ Billing Questions - Test passed successfully
                </div>
                <div className="p-2 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800">
                  ⚠ Product Information - Test passed with warnings
                </div>
                <div className="p-2 bg-red-50 border border-red-100 rounded text-sm text-red-800">
                  ✗ Technical Support - Failed: Expected response not received
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setTestResults(null)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
                >
                  Close Results
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
const X = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)
