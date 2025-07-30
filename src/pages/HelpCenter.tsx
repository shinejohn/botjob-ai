import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Search, BookOpen, FileText, Video, Users, MessageCircle, Mail, ArrowRight, ChevronRight, ThumbsUp, Star, Clock, PlayCircle, Filter, X, ChevronDown } from 'lucide-react';
export const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('knowledge');
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Sample knowledge base articles
  const articles = [{
    id: 1,
    title: 'Getting started with compliance dashboard',
    category: 'Getting Started',
    views: 1243,
    rating: 4.8,
    date: '2023-04-15',
    snippet: 'Learn how to set up and navigate the compliance dashboard for your organization...'
  }, {
    id: 2,
    title: 'Configuring security policies',
    category: 'Security',
    views: 982,
    rating: 4.7,
    date: '2023-05-02',
    snippet: 'Step-by-step guide to configuring security policies that align with industry standards...'
  }, {
    id: 3,
    title: 'Setting up automated compliance checks',
    category: 'Automation',
    views: 756,
    rating: 4.5,
    date: '2023-05-10',
    snippet: 'Learn how to automate compliance checks to save time and reduce human error...'
  }, {
    id: 4,
    title: 'Generating compliance reports',
    category: 'Reporting',
    views: 1105,
    rating: 4.9,
    date: '2023-04-28',
    snippet: 'Detailed guide on generating comprehensive compliance reports for audits and reviews...'
  }, {
    id: 5,
    title: 'Integrating with third-party security tools',
    category: 'Integrations',
    views: 645,
    rating: 4.6,
    date: '2023-05-18',
    snippet: 'Instructions for connecting your compliance dashboard with popular security tools...'
  }];
  // Sample video tutorials
  const videos = [{
    id: 1,
    title: 'Complete Platform Walkthrough',
    thumbnail: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '15:24',
    instructor: 'Sarah Johnson',
    date: '2023-04-10',
    views: 3421
  }, {
    id: 2,
    title: 'Setting Up Your First Compliance Check',
    thumbnail: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '8:12',
    instructor: 'Michael Chen',
    date: '2023-04-18',
    views: 2156
  }, {
    id: 3,
    title: 'Advanced Security Configuration',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '22:45',
    instructor: 'David Wilson',
    date: '2023-05-05',
    views: 1876
  }, {
    id: 4,
    title: 'Generating and Interpreting Reports',
    thumbnail: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '11:38',
    instructor: 'Emily Rodriguez',
    date: '2023-05-12',
    views: 1542
  }];
  // Sample forum discussions
  const forumDiscussions = [{
    id: 1,
    title: 'Best practices for financial compliance?',
    author: {
      name: 'Robert Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    replies: 24,
    views: 342,
    lastActivity: '2 hours ago',
    tags: ['financial', 'best-practices', 'compliance']
  }, {
    id: 2,
    title: 'How to handle conflicting compliance requirements?',
    author: {
      name: 'Jessica Wong',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    replies: 18,
    views: 276,
    lastActivity: '5 hours ago',
    tags: ['regulations', 'compliance', 'strategy']
  }, {
    id: 3,
    title: 'Automating GDPR compliance checks - tips?',
    author: {
      name: 'Mark Johnson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    replies: 32,
    views: 415,
    lastActivity: '1 day ago',
    tags: ['gdpr', 'automation', 'privacy']
  }, {
    id: 4,
    title: 'Security dashboard not showing all assets',
    author: {
      name: 'Samantha Lee',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    replies: 7,
    views: 123,
    lastActivity: '2 days ago',
    tags: ['bug', 'assets', 'dashboard']
  }];
  // Filter articles based on search query and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  // Get unique categories
  const categories = ['all', ...new Set(articles.map(a => a.category))];
  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'knowledge':
        return <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="relative flex-1 max-w-2xl">
                <input type="text" placeholder="Search knowledge base..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  {categories.map(category => <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>)}
                </select>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </button>
              </div>
            </div>
            {/* Featured Articles */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Featured Articles
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredArticles.length > 0 ? filteredArticles.map(article => <div key={article.id} className="p-6 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 mb-1">
                            {article.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mr-2">
                              {article.category}
                            </span>
                            <span className="flex items-center mr-3">
                              <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                              {article.rating}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-600">{article.snippet}</p>
                        </div>
                        <button className="flex-shrink-0 text-blue-600 hover:text-blue-800">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>) : <div className="p-6 text-center">
                    <p className="text-gray-500">
                      No articles found matching your search criteria.
                    </p>
                  </div>}
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Showing {filteredArticles.length} of {articles.length}{' '}
                  articles
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                  View All Articles
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            {/* Popular Topics */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Popular Topics
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Getting Started', 'Security', 'Compliance', 'Reporting', 'Integrations', 'Automation'].map(topic => <div key={topic} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 cursor-pointer">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{topic}</h4>
                        <p className="text-sm text-gray-500">
                          {Math.floor(Math.random() * 20) + 5} articles
                        </p>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>;
      case 'videos':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                Video Tutorials
              </h2>
              <div className="flex space-x-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>All Categories</option>
                  <option>Getting Started</option>
                  <option>Advanced Features</option>
                  <option>Best Practices</option>
                  <option>Troubleshooting</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
            {/* Featured Video */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
                <img src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Featured Video Thumbnail" className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <PlayCircle className="h-10 w-10 text-blue-600" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">
                    Complete Platform Walkthrough 2023
                  </h3>
                  <p className="text-gray-200">
                    Learn all the essential features in 20 minutes
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Instructor" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">
                        Product Specialist
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="flex items-center mr-4">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      <span className="text-sm text-gray-500">20:15</span>
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      <span className="text-sm text-gray-500">4.9</span>
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  This comprehensive walkthrough covers everything you need to
                  know to get started with our platform. From initial setup to
                  advanced features, you'll learn how to maximize your
                  compliance and security operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    Getting Started
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    Walkthrough
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    Comprehensive
                  </span>
                </div>
              </div>
            </div>
            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map(video => <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
                    <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <button className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                        <PlayCircle className="h-8 w-8 text-blue-600" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">
                      {video.instructor} •{' '}
                      {new Date(video.date).toLocaleDateString()}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Eye className="h-3.5 w-3.5 mr-1" />
                      {video.views.toLocaleString()} views
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-flex items-center">
                View All Tutorials
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>;
      case 'forums':
        return <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h2 className="text-xl font-bold text-gray-900">
                Community Forums
              </h2>
              <div className="flex space-x-3">
                <div className="relative">
                  <input type="text" placeholder="Search discussions..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64" />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  New Discussion
                </button>
              </div>
            </div>
            {/* Forum Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['General Discussion', 'Technical Support', 'Best Practices', 'Feature Requests', 'Security & Compliance', 'Integrations'].map(category => <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-blue-300 cursor-pointer">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">{category}</h3>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      {Math.floor(Math.random() * 200) + 50} discussions
                    </span>
                    <span>{Math.floor(Math.random() * 1000) + 300} posts</span>
                  </div>
                </div>)}
            </div>
            {/* Recent Discussions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Recent Discussions
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {forumDiscussions.map(discussion => <div key={discussion.id} className="p-6 hover:bg-gray-50">
                    <div className="flex">
                      <img src={discussion.author.avatar} alt={discussion.author.name} className="w-10 h-10 rounded-full mr-4" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-medium text-gray-900 mb-1">
                            {discussion.title}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {discussion.lastActivity}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                          Started by{' '}
                          <span className="font-medium">
                            {discussion.author.name}
                          </span>
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map(tag => <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {tag}
                            </span>)}
                        </div>
                        <div className="flex text-sm text-gray-500">
                          <span className="flex items-center mr-4">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {discussion.replies} replies
                          </span>
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {discussion.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                  View All Discussions
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>;
      case 'contact':
        return <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Contact Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-4">
                  Chat with our support team for quick answers to your
                  questions.
                </p>
                <button onClick={() => setShowChatWidget(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full">
                  Start Chat
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 w-full">
                  Email Us
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Phone Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Call us directly for urgent matters and complex issues.
                </p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full">
                  Call Now
                </button>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Send Us a Message
                </h3>
              </div>
              <div className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                      <option>Technical Support</option>
                      <option>Account Issues</option>
                      <option>Billing Questions</option>
                      <option>Feature Requests</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Please describe your issue in detail..."></textarea>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to the privacy policy and terms of service
                      </span>
                    </label>
                  </div>
                  <div>
                    <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
          <p className="mt-1 text-gray-500">
            Find answers, tutorials, and support for all your questions
          </p>
        </div>
        {/* Main Search */}
        <div className="bg-blue-700 rounded-xl p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              How can we help you today?
            </h2>
            <p className="text-blue-100">
              Search our knowledge base for answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto relative">
            <input type="text" placeholder="Search for answers..." className="w-full pl-12 pr-4 py-4 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-300" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
            <button className="absolute right-3 top-3 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>
          <div className="flex flex-wrap justify-center mt-6 gap-2">
            <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-500 cursor-pointer">
              Getting Started
            </span>
            <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-500 cursor-pointer">
              Account Setup
            </span>
            <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-500 cursor-pointer">
              Security Settings
            </span>
            <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-500 cursor-pointer">
              Compliance Reports
            </span>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('knowledge')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'knowledge' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BookOpen className="h-5 w-5 mr-2" />
              Knowledge Base
            </button>
            <button onClick={() => setActiveTab('videos')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'videos' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Video className="h-5 w-5 mr-2" />
              Video Tutorials
            </button>
            <button onClick={() => setActiveTab('forums')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'forums' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Users className="h-5 w-5 mr-2" />
              Community Forums
            </button>
            <button onClick={() => setActiveTab('contact')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'contact' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
      {/* Live Chat Widget */}
      {showChatWidget && <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10">
          <div className="bg-blue-600 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                <MessageCircle className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-white font-medium">Live Support</h3>
            </div>
            <button onClick={() => setShowChatWidget(false)} className="text-white hover:text-blue-100">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-64 p-4 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Hi there! How can I help you today?</p>
                </div>
              </div>
              <div className="flex items-start justify-end">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-tr-none max-w-[80%]">
                  <p className="text-sm">
                    I'm having trouble setting up my compliance dashboard.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">
                    I'd be happy to help with that. Could you tell me what
                    specific issue you're encountering?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-gray-200">
            <div className="relative">
              <input type="text" placeholder="Type your message..." className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              <button className="absolute right-2 top-2 text-blue-600 hover:text-blue-800">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>}
      {/* Chat Button */}
      {!showChatWidget && <button onClick={() => setShowChatWidget(true)} className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 z-10">
          <MessageCircle className="h-6 w-6" />
        </button>}
    </div>;
};
function Eye(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>;
}
function Phone(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>;
}
function Send(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>;
}
function User(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>;
}