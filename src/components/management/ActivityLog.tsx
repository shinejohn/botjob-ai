import React, { useState } from 'react';
import { Search, Filter, Phone, Mail, Calendar, FileText, CheckCircle, XCircle, AlertCircle, Play, Download, ChevronDown, ChevronRight } from 'lucide-react';
export const ActivityLog = ({
  agent
}: {
  agent: any;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  // Sample activity data
  const activities = [{
    id: 'act-1',
    type: 'call',
    status: 'completed',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    duration: 245,
    customer: {
      name: 'John Smith',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@example.com'
    },
    summary: 'Customer called to schedule an appointment for next Tuesday',
    recording: 'https://example.com/recordings/call-123.mp3',
    transcript: [{
      speaker: 'agent',
      text: 'Hello, thank you for calling ABC Company. This is ReceptionistPro. How may I help you today?'
    }, {
      speaker: 'customer',
      text: 'Hi, I need to schedule an appointment for a consultation next week.'
    }, {
      speaker: 'agent',
      text: "I'd be happy to help you with that. May I have your name, please?"
    }, {
      speaker: 'customer',
      text: 'John Smith.'
    }, {
      speaker: 'agent',
      text: 'Thank you, Mr. Smith. What day next week would work best for you?'
    }, {
      speaker: 'customer',
      text: 'Tuesday would be ideal if possible.'
    }]
  }, {
    id: 'act-2',
    type: 'email',
    status: 'completed',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    customer: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com'
    },
    subject: 'Question about your services',
    summary: 'Customer inquired about pricing for premium package',
    thread: [{
      sender: 'customer',
      timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
      content: "Hello, I'm interested in your premium package but couldn't find pricing information on your website. Could you please provide details? Thanks, Sarah"
    }, {
      sender: 'agent',
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      content: 'Hi Sarah, Thank you for your interest in our premium package. Our premium package starts at $199/month and includes all features listed on our website plus priority support. Would you like me to schedule a demo call to show you all the features? Best regards, ReceptionistPro'
    }]
  }, {
    id: 'act-3',
    type: 'calendar',
    status: 'completed',
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    customer: {
      name: 'Michael Brown',
      email: 'mbrown@example.com'
    },
    summary: 'Scheduled a consultation appointment for 2023-07-15 at 10:00 AM',
    details: {
      title: 'Consultation with Michael Brown',
      date: '2023-07-15',
      time: '10:00 AM',
      duration: 60,
      location: 'Video call (Zoom)',
      notes: 'Initial consultation to discuss project requirements'
    }
  }, {
    id: 'act-4',
    type: 'call',
    status: 'failed',
    timestamp: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    duration: 65,
    customer: {
      phone: '+1 (555) 987-6543'
    },
    summary: 'Call disconnected before completion, escalated to human agent',
    error: 'Unable to understand customer request after multiple attempts',
    escalation: {
      timestamp: new Date(Date.now() - 1000 * 60 * 295).toISOString(),
      assignedTo: 'Jessica Williams',
      status: 'resolved'
    }
  }, {
    id: 'act-5',
    type: 'email',
    status: 'completed',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    customer: {
      name: 'David Lee',
      email: 'david.lee@example.com'
    },
    subject: 'Rescheduling my appointment',
    summary: 'Customer requested to reschedule appointment from Monday to Wednesday',
    thread: [{
      sender: 'customer',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString(),
      content: "Hello, I need to reschedule my appointment that's currently set for Monday at 2 PM. Is there availability on Wednesday instead? Thanks, David"
    }, {
      sender: 'agent',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      content: "Hi David, I've checked our calendar and we have availability on Wednesday at 1 PM, 3 PM, or 4:30 PM. Would any of these times work for you? Best regards, ReceptionistPro"
    }]
  }];
  // Filter activities based on search and filter
  const filteredActivities = activities.filter(activity => {
    // Filter by type
    if (selectedFilter !== 'all' && activity.type !== selectedFilter) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSummary = activity.summary.toLowerCase().includes(query);
      const matchesCustomer = activity.customer.name?.toLowerCase().includes(query) || activity.customer.email?.toLowerCase().includes(query);
      return matchesSummary || matchesCustomer;
    }
    return true;
  });
  // Helper function to format duration
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  // Helper function to get activity icon
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'call':
        return <Phone className="h-5 w-5 text-blue-500" />;
      case 'email':
        return <Mail className="h-5 w-5 text-green-500" />;
      case 'calendar':
        return <Calendar className="h-5 w-5 text-purple-500" />;
      case 'document':
        return <FileText className="h-5 w-5 text-orange-500" />;
      default:
        return null;
    }
  };
  // Helper function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };
  // Toggle expanded item
  const toggleExpand = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Activity Log
        </h2>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search activities..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <div className="relative">
            <select value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="all">All Activities</option>
              <option value="call">Calls</option>
              <option value="email">Emails</option>
              <option value="calendar">Calendar</option>
              <option value="document">Documents</option>
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
      {/* Activity List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {filteredActivities.length === 0 ? <div className="p-6 text-center">
            <p className="text-gray-500">
              No activities found matching your filters.
            </p>
          </div> : <ul className="divide-y divide-gray-200">
            {filteredActivities.map(activity => <li key={activity.id} className="hover:bg-gray-50">
                <div className="p-4 cursor-pointer" onClick={() => toggleExpand(activity.id)}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.customer.name || activity.customer.email || activity.customer.phone || 'Unknown Customer'}
                        </p>
                        <div className="flex items-center">
                          {getStatusIcon(activity.status)}
                          <span className="ml-2 text-xs text-gray-500">
                            {new Date(activity.timestamp).toLocaleString()}
                          </span>
                          {expandedItem === activity.id ? <ChevronDown className="h-5 w-5 ml-2 text-gray-400" /> : <ChevronRight className="h-5 w-5 ml-2 text-gray-400" />}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {activity.summary}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Expanded Content */}
                {expandedItem === activity.id && <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
                    {activity.type === 'call' && <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Call Details
                          </h4>
                          <div className="flex space-x-2">
                            {activity.recording && <button className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                                <Play className="h-4 w-4 mr-1" />
                                Play Recording
                              </button>}
                            <button className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                              <Download className="h-4 w-4 mr-1" />
                              Download Transcript
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                          <div>
                            <p className="text-gray-500">Phone Number</p>
                            <p className="font-medium">
                              {activity.customer.phone}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Duration</p>
                            <p className="font-medium">
                              {formatDuration(activity.duration)}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className={`font-medium ${activity.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
                              {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                            </p>
                          </div>
                        </div>
                        {activity.transcript && <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                              Transcript
                            </h4>
                            <div className="bg-white rounded-md border border-gray-200 p-3 max-h-64 overflow-y-auto">
                              {activity.transcript.map((line, index) => <div key={index} className="mb-3 last:mb-0">
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
                        {activity.error && <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                            <h4 className="text-sm font-medium text-red-800 mb-1">
                              Error
                            </h4>
                            <p className="text-sm text-red-700">
                              {activity.error}
                            </p>
                          </div>}
                        {activity.escalation && <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                            <h4 className="text-sm font-medium text-yellow-800 mb-1">
                              Escalation
                            </h4>
                            <p className="text-sm text-yellow-700">
                              Escalated to {activity.escalation.assignedTo} at{' '}
                              {new Date(activity.escalation.timestamp).toLocaleTimeString()}
                            </p>
                            <p className="text-sm text-yellow-700 mt-1">
                              Status:{' '}
                              {activity.escalation.status.charAt(0).toUpperCase() + activity.escalation.status.slice(1)}
                            </p>
                          </div>}
                      </div>}
                    {activity.type === 'email' && <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-sm font-medium text-gray-900">
                            Email Thread
                          </h4>
                          <button className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                            <Download className="h-4 w-4 mr-1" />
                            Download Thread
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                          <div>
                            <p className="text-gray-500">From/To</p>
                            <p className="font-medium">
                              {activity.customer.email}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Subject</p>
                            <p className="font-medium">{activity.subject}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Status</p>
                            <p className="font-medium text-green-600">
                              {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                            </p>
                          </div>
                        </div>
                        {activity.thread && <div className="space-y-4 mt-4">
                            {activity.thread.map((message, index) => <div key={index} className={`p-3 rounded-md ${message.sender === 'agent' ? 'bg-blue-50 border border-blue-100' : 'bg-white border border-gray-200'}`}>
                                <div className="flex justify-between items-center mb-2">
                                  <p className="text-xs font-medium text-gray-700">
                                    {message.sender === 'agent' ? 'Agent' : 'Customer'}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {new Date(message.timestamp).toLocaleString()}
                                  </p>
                                </div>
                                <p className="text-sm text-gray-800 whitespace-pre-line">
                                  {message.content}
                                </p>
                              </div>)}
                          </div>}
                      </div>}
                    {activity.type === 'calendar' && <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-3">
                          Appointment Details
                        </h4>
                        <div className="bg-white rounded-md border border-gray-200 p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Title</p>
                              <p className="font-medium">
                                {activity.details.title}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">With</p>
                              <p className="font-medium">
                                {activity.customer.name}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Date & Time</p>
                              <p className="font-medium">
                                {activity.details.date} at{' '}
                                {activity.details.time}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Duration</p>
                              <p className="font-medium">
                                {activity.details.duration} minutes
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500">Location</p>
                              <p className="font-medium">
                                {activity.details.location}
                              </p>
                            </div>
                          </div>
                          {activity.details.notes && <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="text-gray-500 mb-1">Notes</p>
                              <p className="text-sm text-gray-800">
                                {activity.details.notes}
                              </p>
                            </div>}
                        </div>
                      </div>}
                  </div>}
              </li>)}
          </ul>}
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Showing{' '}
          <span className="font-medium">{filteredActivities.length}</span> of{' '}
          <span className="font-medium">{activities.length}</span> activities
        </p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>;
};