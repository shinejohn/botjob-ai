import React, { useState } from 'react';
import { Flag, CheckCircle, XCircle, ThumbsUp, ThumbsDown, Search, Filter, ArrowUp, ArrowDown, MessageSquare, Edit, Plus } from 'lucide-react';
export const TrainingInterface = ({
  agent
}: {
  agent: any;
}) => {
  const [activeTab, setActiveTab] = useState('flagged');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  // Sample flagged interactions
  const flaggedInteractions = [{
    id: 'flag-1',
    type: 'call',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    customer: 'John Smith',
    issue: 'Unclear request',
    status: 'pending',
    transcript: [{
      speaker: 'customer',
      text: 'Hi, I need some help with the thing I ordered last week.'
    }, {
      speaker: 'agent',
      text: "I'd be happy to help. Could you please provide more details about what you ordered?"
    }, {
      speaker: 'customer',
      text: 'You know, the thing. The one that was on sale.'
    }, {
      speaker: 'agent',
      text: "I'm sorry, but I don't have access to your specific order details without more information. Could you provide an order number or describe the product?"
    }, {
      speaker: 'customer',
      text: "I don't have the order number. It's the blue one."
    }, {
      speaker: 'agent',
      text: "I apologize, but I'm having trouble identifying your specific order with the information provided. Would you like me to transfer you to a human agent who can look up your order history?"
    }]
  }, {
    id: 'flag-2',
    type: 'email',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    customer: 'Sarah Johnson',
    issue: 'Incorrect information',
    status: 'pending',
    thread: [{
      sender: 'customer',
      content: "Hello, I'm inquiring about your premium service pricing. Your website mentions $49/month, but I was told $39/month by your sales team last week. Can you confirm the correct pricing?"
    }, {
      sender: 'agent',
      content: 'Hello Sarah, Thank you for your inquiry. Our premium service is priced at $49/month. This includes all the features listed on our website. Please let me know if you have any other questions. Best regards, ReceptionistPro'
    }, {
      sender: 'customer',
      content: 'But your sales representative specifically told me it would be $39/month. I have the email from them. Can you please check this discrepancy?'
    }]
  }, {
    id: 'flag-3',
    type: 'call',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    customer: 'Michael Brown',
    issue: 'Agent confusion',
    status: 'pending',
    transcript: [{
      speaker: 'customer',
      text: "Hi, I'm calling about scheduling a demo of your enterprise solution."
    }, {
      speaker: 'agent',
      text: "Hello! I'd be happy to help you schedule a demo. Our enterprise solution offers advanced features for large organizations."
    }, {
      speaker: 'customer',
      text: 'Great. We have about 250 employees. Is that considered enterprise level?'
    }, {
      speaker: 'agent',
      text: 'For our pricing tiers, companies with 100-500 employees fall under our business tier, not enterprise. However, depending on your specific needs, the enterprise solution might still be appropriate.'
    }, {
      speaker: 'customer',
      text: "OK, so what's the difference between business and enterprise tiers?"
    }, {
      speaker: 'agent',
      text: 'The business tier includes up to 100 user accounts and basic analytics, while enterprise includes unlimited users and advanced reporting features.'
    }, {
      speaker: 'customer',
      text: "Wait, you just said business tier is for 100-500 employees, but now you're saying it only includes 100 user accounts?"
    }, {
      speaker: 'agent',
      text: 'I apologize for the confusion. Let me clarify our pricing structure...'
    }]
  }];
  // Sample training examples
  const trainingExamples = [{
    id: 'train-1',
    category: 'Pricing Questions',
    question: 'How much does your service cost?',
    correctResponse: 'Our pricing starts at $29/month for the basic plan, $49/month for the professional plan, and $99/month for the enterprise plan. Each plan includes different features tailored to specific business needs. Would you like me to explain what each plan includes?',
    notes: 'Always mention all three pricing tiers and offer to explain the differences.'
  }, {
    id: 'train-2',
    category: 'Technical Support',
    question: "I can't log into my account.",
    correctResponse: "I'm sorry to hear you're having trouble logging in. Let's troubleshoot this together. First, please verify you're using the correct email address. If you're sure about your credentials, you can try resetting your password using the \"Forgot Password\" link on the login page. If that doesn't resolve the issue, I can connect you with our technical support team.",
    notes: 'Start with basic troubleshooting before escalating to technical support.'
  }, {
    id: 'train-3',
    category: 'Scheduling',
    question: 'I need to reschedule my appointment.',
    correctResponse: "I'd be happy to help you reschedule your appointment. To assist you properly, could you please provide your name and the date/time of your current appointment? Once I have that information, I can check our availability and help you find a new time that works for you.",
    notes: 'Always collect name and current appointment details before proceeding with rescheduling.'
  }];
  // Sample procedures
  const procedures = [{
    id: 'proc-1',
    name: 'Handling Refund Requests',
    steps: ["Verify the customer's purchase information (order number, date, product)", 'Ask for the reason for the refund request', 'Check if the request falls within the 30-day refund policy', 'If eligible, process the refund and inform the customer of the expected timeframe', 'If not eligible, explain the policy and offer alternative solutions', 'Document the interaction in the CRM system']
  }, {
    id: 'proc-2',
    name: 'Scheduling Appointments',
    steps: ["Collect the customer's name, email, and phone number", 'Ask about the purpose of the appointment to determine duration needed', 'Check calendar availability for the requested date/time', 'If available, confirm the appointment and send a calendar invitation', 'If not available, offer alternative times', 'Remind the customer about the 24-hour cancellation policy']
  }];
  // Filter interactions based on search and filter
  const filteredInteractions = flaggedInteractions.filter(interaction => {
    // Filter by type
    if (selectedFilter !== 'all' && interaction.type !== selectedFilter) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesCustomer = interaction.customer.toLowerCase().includes(query);
      const matchesIssue = interaction.issue.toLowerCase().includes(query);
      return matchesCustomer || matchesIssue;
    }
    return true;
  });
  // Toggle expanded item
  const toggleExpand = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'flagged':
        return <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 md:mb-0">
                Flagged Interactions
              </h3>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <div className="relative">
                  <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search interactions..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <div className="relative">
                  <select value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="all">All Types</option>
                    <option value="call">Calls</option>
                    <option value="email">Emails</option>
                  </select>
                  <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
            </div>
            {filteredInteractions.length === 0 ? <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <p className="text-gray-500">
                  No flagged interactions found matching your filters.
                </p>
              </div> : <div className="space-y-4">
                {filteredInteractions.map(interaction => <div key={interaction.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 cursor-pointer hover:bg-gray-50" onClick={() => toggleExpand(interaction.id)}>
                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3">
                            <Flag className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {interaction.customer}
                            </h4>
                            <div className="flex items-center mt-1">
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                                {interaction.issue}
                              </span>
                              <span className="text-xs text-gray-500 ml-2">
                                {interaction.type === 'call' ? 'Phone Call' : 'Email'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(interaction.timestamp).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    {expandedItem === interaction.id && <div className="px-4 pb-4 border-t border-gray-100">
                        {interaction.type === 'call' && interaction.transcript && <div className="mt-4">
                              <h5 className="text-sm font-medium text-gray-900 mb-3">
                                Call Transcript
                              </h5>
                              <div className="bg-gray-50 rounded-md p-4 max-h-80 overflow-y-auto">
                                {interaction.transcript.map((line, index) => <div key={index} className="mb-3 last:mb-0">
                                    <p className="text-xs font-medium text-gray-700">
                                      {line.speaker === 'agent' ? 'Agent' : 'Customer'}
                                      :
                                    </p>
                                    <p className="text-sm text-gray-800">
                                      {line.text}
                                    </p>
                                  </div>)}
                              </div>
                            </div>}
                        {interaction.type === 'email' && interaction.thread && <div className="mt-4">
                            <h5 className="text-sm font-medium text-gray-900 mb-3">
                              Email Thread
                            </h5>
                            <div className="space-y-4">
                              {interaction.thread.map((message, index) => <div key={index} className={`p-3 rounded-md ${message.sender === 'agent' ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50 border border-gray-200'}`}>
                                  <p className="text-xs font-medium text-gray-700 mb-1">
                                    {message.sender === 'agent' ? 'Agent' : 'Customer'}
                                  </p>
                                  <p className="text-sm text-gray-800">
                                    {message.content}
                                  </p>
                                </div>)}
                            </div>
                          </div>}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <h5 className="text-sm font-medium text-gray-900 mb-3">
                            Review & Feedback
                          </h5>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                What went wrong?
                              </label>
                              <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                                <option>Select issue type</option>
                                <option>Incorrect information provided</option>
                                <option>Misunderstood customer request</option>
                                <option>Failed to follow procedure</option>
                                <option>Inappropriate tone or language</option>
                                <option>Should have escalated sooner</option>
                                <option>Technical limitation</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Correction / Better Response
                              </label>
                              <textarea rows={3} className="w-full p-2 border border-gray-300 rounded-md text-sm" placeholder="Enter the correct response or how the agent should have handled this..." />
                            </div>
                          </div>
                          <div className="flex space-x-3 mt-4">
                            <button className="flex-1 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve & Train
                            </button>
                            <button className="flex-1 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center">
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject Response
                            </button>
                          </div>
                        </div>
                      </div>}
                  </div>)}
              </div>}
          </div>;
      case 'examples':
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Training Examples
              </h3>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Example
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingExamples.map(example => <div key={example.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">
                      {example.category}
                    </h4>
                    <button className="text-gray-400 hover:text-blue-600">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Customer Question
                    </p>
                    <p className="text-sm bg-gray-50 p-2 rounded-md border border-gray-200">
                      {example.question}
                    </p>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Correct Response
                    </p>
                    <p className="text-sm bg-green-50 p-2 rounded-md border border-green-200">
                      {example.correctResponse}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Notes
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      {example.notes}
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-4 pt-3 border-t border-gray-200">
                    <button className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Mark as Helpful
                    </button>
                    <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Add Comment
                    </button>
                  </div>
                </div>)}
            </div>
          </div>;
      case 'procedures':
        return <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Standard Operating Procedures
              </h3>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
                <Plus className="h-4 w-4 mr-1" />
                Add Procedure
              </button>
            </div>
            <div className="space-y-6">
              {procedures.map(procedure => <div key={procedure.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
                    <h4 className="font-medium text-gray-900">
                      {procedure.name}
                    </h4>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-blue-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600">
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <ol className="space-y-3 list-decimal pl-5">
                      {procedure.steps.map((step, index) => <li key={index} className="text-sm text-gray-700">
                          {step}
                        </li>)}
                    </ol>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex space-x-3">
                      <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        Move Up
                      </button>
                      <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
                        <ArrowDown className="h-3 w-3 mr-1" />
                        Move Down
                      </button>
                    </div>
                    <div>
                      <button className="text-xs text-blue-600 hover:text-blue-800">
                        Add Step
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>;
      case 'feedback':
        return <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              Customer Feedback
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h4 className="font-medium text-gray-900 mb-4">
                  Positive Feedback
                </h4>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <div className="flex items-start">
                      <ThumbsUp className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-800">
                          "The agent was very helpful and quickly resolved my
                          issue. I was impressed by how knowledgeable they
                          were."
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          - John D., 2 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <div className="flex items-start">
                      <ThumbsUp className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-800">
                          "I appreciated how quickly the agent responded to my
                          email. They provided exactly the information I
                          needed."
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          - Sarah M., 5 days ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h4 className="font-medium text-gray-900 mb-4">
                  Improvement Areas
                </h4>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex items-start">
                      <ThumbsDown className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-800">
                          "The agent didn't seem to understand my question. I
                          had to repeat myself several times."
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          - Michael B., 3 days ago
                        </p>
                        <div className="mt-2 pt-2 border-t border-red-200">
                          <p className="text-xs font-medium text-red-800">
                            Training Opportunity
                          </p>
                          <p className="text-xs text-red-700">
                            Improve comprehension of technical terms and active
                            listening skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <div className="flex items-start">
                      <ThumbsDown className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-800">
                          "The response was too generic. I needed specific
                          information about my account."
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          - Lisa K., 1 week ago
                        </p>
                        <div className="mt-2 pt-2 border-t border-red-200">
                          <p className="text-xs font-medium text-red-800">
                            Training Opportunity
                          </p>
                          <p className="text-xs text-red-700">
                            Train on asking clarifying questions and accessing
                            account-specific information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">
                Feedback Trends
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">
                    Top Strengths
                  </h5>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">
                          Response Speed
                        </span>
                        <span className="text-xs font-medium text-gray-800">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{
                        width: '92%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">
                          Politeness
                        </span>
                        <span className="text-xs font-medium text-gray-800">
                          88%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{
                        width: '88%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">
                          Clear Communication
                        </span>
                        <span className="text-xs font-medium text-gray-800">
                          85%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{
                        width: '85%'
                      }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">
                    Areas for Improvement
                  </h5>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">
                          Technical Knowledge
                        </span>
                        <span className="text-xs font-medium text-gray-800">
                          68%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{
                        width: '68%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">
                          Personalization
                        </span>
                        <span className="text-xs font-medium text-gray-800">
                          72%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{
                        width: '72%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600">
                          Problem Resolution
                        </span>
                        <span className="text-xs font-medium text-gray-800">
                          75%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-yellow-500 h-1.5 rounded-full" style={{
                        width: '75%'
                      }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">
                    Feedback Over Time
                  </h5>
                  <div className="h-32 flex items-end space-x-1">
                    {[65, 70, 75, 72, 78, 82, 85, 83, 87, 86, 89, 90].map((value, index) => <div key={index} className="flex-1 flex flex-col items-center">
                          <div className={`w-full ${value >= 80 ? 'bg-green-500' : value >= 70 ? 'bg-yellow-500' : 'bg-red-500'} rounded-t`} style={{
                      height: `${value}%`
                    }}></div>
                        </div>)}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Training Interface</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm flex items-center">
            <CheckCircle className="h-4 w-4 mr-1" />
            Apply All Changes
          </button>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-6">
          <button onClick={() => setActiveTab('flagged')} className={`py-3 border-b-2 font-medium text-sm flex items-center ${activeTab === 'flagged' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <Flag className="h-4 w-4 mr-2" />
            Flagged Interactions
          </button>
          <button onClick={() => setActiveTab('examples')} className={`py-3 border-b-2 font-medium text-sm flex items-center ${activeTab === 'examples' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <MessageSquare className="h-4 w-4 mr-2" />
            Training Examples
          </button>
          <button onClick={() => setActiveTab('procedures')} className={`py-3 border-b-2 font-medium text-sm flex items-center ${activeTab === 'procedures' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <CheckCircle className="h-4 w-4 mr-2" />
            Procedures
          </button>
          <button onClick={() => setActiveTab('feedback')} className={`py-3 border-b-2 font-medium text-sm flex items-center ${activeTab === 'feedback' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <ThumbsUp className="h-4 w-4 mr-2" />
            Customer Feedback
          </button>
        </nav>
      </div>
      {/* Tab Content */}
      {renderTabContent()}
    </div>;
};