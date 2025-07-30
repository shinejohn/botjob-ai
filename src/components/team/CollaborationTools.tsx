import React, { useState } from 'react';
import { MessageSquare, FileText, Clock, Paperclip, Send, Smile, MoreHorizontal, Edit, Trash2, Calendar, CheckSquare, Search } from 'lucide-react';
export const CollaborationTools = () => {
  const [activeTab, setActiveTab] = useState('notes');
  const [noteContent, setNoteContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  // Sample notes data
  const notes = [{
    id: 'note-1',
    title: 'Customer Support Bot Improvements',
    content: 'We need to improve the response time for customer inquiries. Current average is 1.2 minutes, target should be under 1 minute.',
    createdBy: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    tags: ['improvement', 'support'],
    agentId: 'agent-1'
  }, {
    id: 'note-2',
    title: 'Sales Assistant Training Data',
    content: 'We need to add more training examples for handling objections. The agent is struggling with complex pricing questions.',
    createdBy: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    tags: ['training', 'sales'],
    agentId: 'agent-2'
  }, {
    id: 'note-3',
    title: 'Weekly Team Sync Notes',
    content: 'Discussed agent performance metrics. All agents showing improvement in response accuracy. Need to focus on reducing escalation rate for the Support Bot.',
    createdBy: {
      name: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    tags: ['meeting', 'team'],
    agentId: null
  }];
  // Sample tasks data
  const tasks = [{
    id: 'task-1',
    title: 'Update Support Bot knowledge base',
    description: 'Add new FAQ entries about the premium subscription plan',
    status: 'in-progress',
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString(),
    assignedTo: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    createdBy: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    agentId: 'agent-1'
  }, {
    id: 'task-2',
    title: 'Analyze Sales Assistant conversation data',
    description: 'Review last 100 conversations to identify improvement areas',
    status: 'to-do',
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    assignedTo: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    createdBy: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    agentId: 'agent-2'
  }, {
    id: 'task-3',
    title: 'Create new response templates',
    description: 'Develop templates for handling customer complaints',
    status: 'completed',
    dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
    assignedTo: {
      name: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    createdBy: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    agentId: 'agent-1'
  }];
  // Sample chat messages
  const chatMessages = [{
    id: 'msg-1',
    sender: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    content: 'I noticed the Support Bot is having trouble with product return questions. We should update its knowledge base.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
  }, {
    id: 'msg-2',
    sender: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    content: "Good catch! I've been seeing that too. Do you have examples of specific questions it's struggling with?",
    timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString() // 55 minutes ago
  }, {
    id: 'msg-3',
    sender: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    content: "I can help with updating the knowledge base. I'll create a task for this and get it done by the end of the week.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 minutes ago
  }, {
    id: 'msg-4',
    sender: {
      name: 'Lisa Thompson',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
    },
    content: "Great! While we're at it, let's also review the escalation criteria. I think we might be escalating too many conversations to human agents.",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    attachment: {
      name: 'escalation_metrics.pdf',
      size: '2.3 MB'
    }
  }];
  // Filter notes based on search query
  const filteredNotes = notes.filter(note => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return note.title.toLowerCase().includes(query) || note.content.toLowerCase().includes(query) || note.tags.some(tag => tag.toLowerCase().includes(query));
  });
  // Filter tasks based on search query
  const filteredTasks = tasks.filter(task => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return task.title.toLowerCase().includes(query) || task.description.toLowerCase().includes(query) || task.assignedTo.name.toLowerCase().includes(query);
  });
  // Format date to relative time
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
  };
  // Get due date status color
  const getDueDateColor = (dueDate: string, status: string) => {
    if (status === 'completed') return 'text-green-600';
    const date = new Date(dueDate);
    const now = new Date();
    if (date < now) return 'text-red-600';
    const diffMs = date.getTime() - now.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < 2) return 'text-yellow-600';
    return 'text-gray-600';
  };
  // Get task status badge color
  const getTaskStatusColor = (status: string) => {
    switch (status) {
      case 'to-do':
        return 'bg-gray-100 text-gray-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Handle new note submission
  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (noteContent.trim()) {
      // In a real app, this would add a new note to the database
      console.log('New note:', noteContent);
      // Clear the input
      setNoteContent('');
    }
  };
  return <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 md:mb-0">
          Collaboration Tools
        </h2>
        <div className="w-full md:w-auto">
          <div className="relative">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button onClick={() => setActiveTab('notes')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'notes' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <FileText className="h-5 w-5 mr-2" />
            Team Notes
          </button>
          <button onClick={() => setActiveTab('tasks')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'tasks' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <CheckSquare className="h-5 w-5 mr-2" />
            Tasks
          </button>
          <button onClick={() => setActiveTab('chat')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'chat' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <MessageSquare className="h-5 w-5 mr-2" />
            Team Chat
          </button>
          <button onClick={() => setActiveTab('calendar')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'calendar' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <Calendar className="h-5 w-5 mr-2" />
            Calendar
          </button>
        </nav>
      </div>
      {/* Tab Content */}
      {activeTab === 'notes' && <div>
          {/* Create Note */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <form onSubmit={handleNoteSubmit}>
              <div className="mb-4">
                <input type="text" placeholder="Note title" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <textarea value={noteContent} onChange={e => setNoteContent(e.target.value)} placeholder="Write a note for your team..." rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <div className="relative">
                    <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                      <option value="">Select Agent (Optional)</option>
                      <option value="agent-1">Customer Support Bot</option>
                      <option value="agent-2">Sales Assistant</option>
                      <option value="agent-3">Data Analyst Assistant</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Save Note
                </button>
              </div>
            </form>
          </div>
          {/* Notes List */}
          <div className="space-y-4">
            {filteredNotes.length > 0 ? filteredNotes.map(note => <div key={note.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{note.title}</h3>
                    <div className="relative">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                      {/* Dropdown menu would go here */}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{note.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        #{tag}
                      </span>)}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-200">
                    <div className="flex items-center">
                      <img src={note.createdBy.avatar} alt={note.createdBy.name} className="h-6 w-6 rounded-full object-cover mr-2" />
                      <span>{note.createdBy.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Updated {formatRelativeTime(note.updatedAt)}</span>
                    </div>
                  </div>
                </div>) : <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <p className="text-gray-500">
                  {searchQuery ? 'No notes found matching your search.' : 'No notes yet. Create your first note above.'}
                </p>
              </div>}
          </div>
        </div>}
      {activeTab === 'tasks' && <div>
          {/* Create Task Button */}
          <div className="mb-6 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Create Task
            </button>
          </div>
          {/* Tasks List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {filteredTasks.length > 0 ? <ul className="divide-y divide-gray-200">
                {filteredTasks.map(task => <li key={task.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <div className="flex-shrink-0 pt-1">
                          <input type="checkbox" checked={task.status === 'completed'} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className={`text-sm font-medium ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                              {task.title}
                            </p>
                            <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTaskStatusColor(task.status)}`}>
                              {task.status.replace('-', ' ')}
                            </span>
                          </div>
                          <p className={`text-sm ${task.status === 'completed' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {task.description}
                          </p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <img src={task.assignedTo.avatar} alt={task.assignedTo.name} className="h-6 w-6 rounded-full object-cover mr-2" />
                              <span className="text-xs text-gray-500">
                                Assigned to {task.assignedTo.name}
                              </span>
                            </div>
                            <div className={`flex items-center text-xs ${getDueDateColor(task.dueDate, task.status)}`}>
                              <Clock className="h-4 w-4 mr-1" />
                              <span>
                                {new Date(task.dueDate) > new Date() ? 'Due ' : 'Was due '}
                                {formatRelativeTime(task.dueDate)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex">
                        <button className="mr-2 text-gray-400 hover:text-blue-600">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-red-600">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>)}
              </ul> : <div className="p-8 text-center">
                <p className="text-gray-500">
                  {searchQuery ? 'No tasks found matching your search.' : 'No tasks yet. Create your first task.'}
                </p>
              </div>}
          </div>
        </div>}
      {activeTab === 'chat' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Team Chat</h3>
              <p className="text-sm text-gray-500">4 team members</p>
            </div>
            <div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map(message => <div key={message.id} className="flex items-start">
                <img src={message.sender.avatar} alt={message.sender.name} className="h-8 w-8 rounded-full object-cover mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-gray-900 mr-2">
                      {message.sender.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatRelativeTime(message.timestamp)}
                    </span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
                    <p>{message.content}</p>
                    {message.attachment && <div className="mt-2 flex items-center p-2 bg-white rounded border border-gray-200">
                        <Paperclip className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-700 mr-2">
                          {message.attachment.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {message.attachment.size}
                        </span>
                      </div>}
                  </div>
                </div>
              </div>)}
          </div>
          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-end">
              <div className="flex-1 relative">
                <textarea placeholder="Type a message..." rows={1} className="w-full p-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none" />
                <button className="absolute right-2 bottom-2 text-gray-400 hover:text-gray-600">
                  <Smile className="h-5 w-5" />
                </button>
              </div>
              <div className="ml-3 flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md">
                  <Paperclip className="h-5 w-5" />
                </button>
                <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>}
      {activeTab === 'calendar' && <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">Team Calendar</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                Today
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                + Add Event
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Calendar would go here - simplified placeholder */}
            <div className="grid grid-cols-7 text-center border-b border-gray-200">
              <div className="py-2 border-r border-gray-200 text-sm font-medium text-gray-500">
                Sun
              </div>
              <div className="py-2 border-r border-gray-200 text-sm font-medium text-gray-500">
                Mon
              </div>
              <div className="py-2 border-r border-gray-200 text-sm font-medium text-gray-500">
                Tue
              </div>
              <div className="py-2 border-r border-gray-200 text-sm font-medium text-gray-500">
                Wed
              </div>
              <div className="py-2 border-r border-gray-200 text-sm font-medium text-gray-500">
                Thu
              </div>
              <div className="py-2 border-r border-gray-200 text-sm font-medium text-gray-500">
                Fri
              </div>
              <div className="py-2 text-sm font-medium text-gray-500">Sat</div>
            </div>
            <div className="grid grid-cols-7 text-center h-96">
              {Array.from({
            length: 35
          }).map((_, index) => <div key={index} className={`p-2 border-r border-b border-gray-200 ${index % 7 === 6 ? 'border-r-0' : ''} ${index >= 28 ? 'border-b-0' : ''}`}>
                  <div className="text-sm text-gray-700">
                    {index % 30 + 1}
                  </div>
                  {/* Sample events */}
                  {index === 10 && <div className="mt-1 p-1 bg-blue-100 text-blue-800 text-xs rounded truncate">
                      Team Meeting
                    </div>}
                  {index === 15 && <div className="mt-1 p-1 bg-green-100 text-green-800 text-xs rounded truncate">
                      Agent Training
                    </div>}
                </div>)}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Upcoming Events
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Weekly Team Sync
                    </p>
                    <p className="text-xs text-gray-500">
                      Tomorrow, 10:00 AM - 11:00 AM
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">4 participants</div>
              </li>
              <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Agent Performance Review
                    </p>
                    <p className="text-xs text-gray-500">
                      Friday, 2:00 PM - 3:00 PM
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">3 participants</div>
              </li>
            </ul>
          </div>
        </div>}
    </div>;
};