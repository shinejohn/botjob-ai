import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { BookOpen, CheckCircle, ChevronRight, Clock, Download, ExternalLink, FileText, Flag, GraduationCap, Info, Layers, Layout, List, MessageSquare, PlayCircle, Settings, Star, ThumbsUp, TrendingUp, User, Users, X } from 'lucide-react';
export const OnboardingTraining = () => {
  const [activeTab, setActiveTab] = useState('tours');
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [progress, setProgress] = useState(35); // User's overall progress percentage
  // Sample product tours
  const productTours = [{
    id: 1,
    title: 'Getting Started with Compliance Dashboard',
    description: 'Learn the basics of navigating and using the compliance dashboard',
    duration: '5 min',
    steps: 7,
    category: 'Beginner',
    completed: true
  }, {
    id: 2,
    title: 'Setting Up Security Policies',
    description: 'Configure security policies and compliance rules for your organization',
    duration: '8 min',
    steps: 10,
    category: 'Intermediate',
    completed: true
  }, {
    id: 3,
    title: 'Advanced Compliance Reporting',
    description: 'Generate and customize comprehensive compliance reports',
    duration: '12 min',
    steps: 14,
    category: 'Advanced',
    completed: false,
    progress: 60
  }, {
    id: 4,
    title: 'User Management & Permissions',
    description: 'Learn how to manage users, roles, and access permissions',
    duration: '10 min',
    steps: 12,
    category: 'Intermediate',
    completed: false,
    progress: 25
  }, {
    id: 5,
    title: 'Integrating Third-Party Tools',
    description: 'Connect your compliance dashboard with external security tools',
    duration: '15 min',
    steps: 18,
    category: 'Advanced',
    completed: false,
    progress: 0
  }, {
    id: 6,
    title: 'Automated Compliance Checks',
    description: 'Set up automated compliance checks and notifications',
    duration: '10 min',
    steps: 11,
    category: 'Advanced',
    completed: false,
    progress: 0
  }];
  // Sample setup guides
  const setupGuides = [{
    id: 1,
    title: 'First-Time Setup Guide',
    description: 'Complete initial configuration of your compliance dashboard',
    steps: 5,
    estimatedTime: '15 min',
    category: 'Essential',
    completed: true
  }, {
    id: 2,
    title: 'Security Baseline Configuration',
    description: 'Establish security baselines for your organization',
    steps: 8,
    estimatedTime: '25 min',
    category: 'Essential',
    completed: false,
    progress: 75
  }, {
    id: 3,
    title: 'Compliance Framework Implementation',
    description: 'Implement industry-standard compliance frameworks (GDPR, HIPAA, etc.)',
    steps: 12,
    estimatedTime: '45 min',
    category: 'Advanced',
    completed: false,
    progress: 30
  }, {
    id: 4,
    title: 'Custom Reporting Setup',
    description: 'Configure custom reports and dashboards for your needs',
    steps: 7,
    estimatedTime: '20 min',
    category: 'Intermediate',
    completed: false,
    progress: 0
  }];
  // Sample best practices
  const bestPractices = [{
    id: 1,
    title: 'Security Policy Management',
    description: 'Learn best practices for creating and maintaining security policies',
    category: 'Security',
    rating: 4.8,
    reads: 1245
  }, {
    id: 2,
    title: 'Effective Compliance Monitoring',
    description: 'Strategies for continuous compliance monitoring and maintenance',
    category: 'Compliance',
    rating: 4.7,
    reads: 987
  }, {
    id: 3,
    title: 'Risk Assessment Methodology',
    description: 'Systematic approaches to identifying and mitigating security risks',
    category: 'Risk Management',
    rating: 4.9,
    reads: 1532
  }, {
    id: 4,
    title: 'Incident Response Planning',
    description: 'Developing and testing effective incident response procedures',
    category: 'Security',
    rating: 4.6,
    reads: 876
  }, {
    id: 5,
    title: 'Audit Preparation Guide',
    description: 'How to prepare for and successfully navigate compliance audits',
    category: 'Compliance',
    rating: 4.8,
    reads: 1089
  }, {
    id: 6,
    title: 'Data Classification Framework',
    description: 'Best practices for classifying and protecting sensitive data',
    category: 'Data Management',
    rating: 4.7,
    reads: 743
  }];
  // Sample certification programs
  const certificationPrograms = [{
    id: 1,
    title: 'Compliance Management Fundamentals',
    level: 'Beginner',
    modules: 5,
    duration: '4 hours',
    description: 'Learn the basics of compliance management and security frameworks',
    enrolled: true,
    progress: 60
  }, {
    id: 2,
    title: 'Advanced Security Configuration',
    level: 'Intermediate',
    modules: 8,
    duration: '8 hours',
    description: 'Master advanced security configurations and policy implementation',
    enrolled: true,
    progress: 25
  }, {
    id: 3,
    title: 'Compliance Auditing Professional',
    level: 'Advanced',
    modules: 12,
    duration: '16 hours',
    description: 'Become an expert in conducting thorough compliance audits',
    enrolled: false
  }, {
    id: 4,
    title: 'Security Risk Management',
    level: 'Advanced',
    modules: 10,
    duration: '12 hours',
    description: 'Learn comprehensive approaches to security risk management',
    enrolled: false
  }];
  // Milestones data
  const milestones = [{
    id: 1,
    title: 'Account Setup',
    completed: true
  }, {
    id: 2,
    title: 'Complete First Tour',
    completed: true
  }, {
    id: 3,
    title: 'Security Baseline Configuration',
    completed: true
  }, {
    id: 4,
    title: 'First Compliance Report',
    completed: false
  }, {
    id: 5,
    title: 'Team Onboarding',
    completed: false
  }, {
    id: 6,
    title: 'First Certification',
    completed: false
  }, {
    id: 7,
    title: 'Advanced Configuration',
    completed: false
  }, {
    id: 8,
    title: 'Integration Setup',
    completed: false
  }];
  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'tours':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                Interactive Product Tours
              </h2>
              <div className="flex space-x-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>All Categories</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Not Started</option>
                </select>
              </div>
            </div>
            {/* Recommended Tour */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl overflow-hidden shadow-lg">
              <div className="p-6 md:p-8 md:flex items-center">
                <div className="md:flex-1 mb-6 md:mb-0 md:mr-8">
                  <div className="text-blue-100 font-medium mb-2">
                    RECOMMENDED TOUR
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Advanced Compliance Reporting
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Learn how to generate detailed compliance reports, customize
                    reporting templates, and set up automated report
                    distribution to stakeholders.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <Clock className="h-4 w-4 text-blue-200 mr-1" />
                      <span className="text-blue-100 text-sm">12 minutes</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Layers className="h-4 w-4 text-blue-200 mr-1" />
                      <span className="text-blue-100 text-sm">14 steps</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-200 mr-1" />
                      <span className="text-blue-100 text-sm">
                        1,234 completed
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap space-x-2">
                    <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
                      Continue Tour (60%)
                    </button>
                    <button className="px-4 py-2 bg-blue-500 bg-opacity-30 text-white rounded-lg hover:bg-opacity-40">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="md:flex-shrink-0">
                  <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg w-full md:w-64">
                    <div className="relative">
                      <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Report Dashboard" className="rounded-lg w-full h-40 object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="h-12 w-12 bg-blue-600 bg-opacity-90 rounded-full flex items-center justify-center">
                          <PlayCircle className="h-8 w-8 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tour Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productTours.map(tour => <div key={tour.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tour.category === 'Beginner' ? 'bg-green-100 text-green-800' : tour.category === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                        {tour.category}
                      </span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">
                          {tour.duration}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="mb-4">
                      {tour.completed ? <div className="flex items-center text-green-600">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          <span className="font-medium">Completed</span>
                        </div> : tour.progress > 0 ? <div className="space-y-1">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Progress</span>
                            <span className="font-medium text-gray-700">
                              {tour.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{
                        width: `${tour.progress}%`
                      }}></div>
                          </div>
                        </div> : <div className="flex items-center text-gray-500">
                          <Info className="h-5 w-5 mr-2" />
                          <span>Not started</span>
                        </div>}
                    </div>
                    <button className={`w-full py-2 rounded-lg text-center font-medium ${tour.completed ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : tour.progress > 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                      {tour.completed ? 'View Again' : tour.progress > 0 ? 'Continue Tour' : 'Start Tour'}
                    </button>
                  </div>
                </div>)}
            </div>
          </div>;
      case 'guides':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                Step-by-Step Setup Guides
              </h2>
              <div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>All Categories</option>
                  <option>Essential</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            {/* Guide Categories */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {['Getting Started', 'Security', 'Compliance', 'Integrations'].map(category => <div key={category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-blue-300 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{category}</h3>
                      <p className="text-sm text-gray-500">
                        {Math.floor(Math.random() * 5) + 2} guides
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
            {/* Setup Progress */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Your Setup Progress
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Overall Completion
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: `${progress}%`
                    }}></div>
                    </div>
                  </div>
                  <div className="md:ml-6 flex-shrink-0">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Continue Setup
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800">
                          Account Setup
                        </h4>
                        <p className="text-xs text-green-700">Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Settings className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">
                          Security Baseline
                        </h4>
                        <p className="text-xs text-blue-700">75% complete</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <FileText className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800">
                          Compliance
                        </h4>
                        <p className="text-xs text-yellow-700">30% complete</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        <ExternalLink className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Integrations
                        </h4>
                        <p className="text-xs text-gray-700">Not started</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Setup Guides */}
            <div className="space-y-4">
              {setupGuides.map(guide => <div key={guide.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${guide.category === 'Essential' ? 'bg-red-100 text-red-800' : guide.category === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                            {guide.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {guide.estimatedTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {guide.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {guide.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <List className="h-4 w-4 mr-1" />
                          <span>{guide.steps} steps to complete</span>
                        </div>
                        {guide.completed ? <div className="flex items-center text-green-600">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span className="font-medium">Completed</span>
                          </div> : guide.progress > 0 ? <div className="space-y-1 max-w-md">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-500">Progress</span>
                              <span className="font-medium text-gray-700">
                                {guide.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{
                          width: `${guide.progress}%`
                        }}></div>
                            </div>
                          </div> : <div className="flex items-center text-gray-500">
                            <Info className="h-5 w-5 mr-2" />
                            <span>Not started</span>
                          </div>}
                      </div>
                      <div className="md:ml-6 flex-shrink-0">
                        <button className={`px-4 py-2 rounded-lg ${guide.completed ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : guide.progress > 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>
                          {guide.completed ? 'View Again' : guide.progress > 0 ? 'Continue Setup' : 'Start Setup'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>;
      case 'bestpractices':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                Best Practices Library
              </h2>
              <div className="flex space-x-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>All Categories</option>
                  <option>Security</option>
                  <option>Compliance</option>
                  <option>Risk Management</option>
                  <option>Data Management</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
            {/* Featured Best Practice */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-1 p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-0.5 rounded-full mr-2">
                      Featured
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                      Risk Management
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Risk Assessment Methodology
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to identifying, assessing, and
                    mitigating security risks in your organization. Learn
                    systematic approaches that align with industry standards and
                    best practices.
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="ml-1 text-gray-700">4.9</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <BookOpen className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-500">1,532 reads</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-gray-500">243 found helpful</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Read Article
                  </button>
                </div>
                <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                  <img src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Risk Assessment" className="max-h-64 object-contain" />
                </div>
              </div>
            </div>
            {/* Best Practices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bestPractices.map(practice => <div key={practice.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${practice.category === 'Security' ? 'bg-red-100 text-red-800' : practice.category === 'Compliance' ? 'bg-green-100 text-green-800' : practice.category === 'Risk Management' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {practice.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{practice.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-gray-700">
                          {practice.rating}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {practice.reads} reads
                      </div>
                    </div>
                    <button className="w-full py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 font-medium">
                      Read Article
                    </button>
                  </div>
                </div>)}
            </div>
            {/* Additional Resources */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Additional Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                    <Download className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Compliance Checklists
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Downloadable checklists for various compliance frameworks
                    </p>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                      Download Resources
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-100 rounded-lg p-3 mr-4">
                    <Layout className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Policy Templates
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Customizable security policy templates for your
                      organization
                    </p>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                      View Templates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'certifications':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                Certification Programs
              </h2>
              <div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            {/* Your Progress */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Your Certification Progress
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">
                          Enrolled Programs
                        </h4>
                        <p className="text-sm text-blue-600">
                          2 certifications
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-blue-700">
                            Compliance Management Fundamentals
                          </span>
                          <span className="font-medium text-blue-800">60%</span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-1.5">
                          <div className="bg-blue-600 h-1.5 rounded-full" style={{
                          width: '60%'
                        }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-blue-700">
                            Advanced Security Configuration
                          </span>
                          <span className="font-medium text-blue-800">25%</span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-1.5">
                          <div className="bg-blue-600 h-1.5 rounded-full" style={{
                          width: '25%'
                        }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800">
                          Completed
                        </h4>
                        <p className="text-sm text-green-600">
                          0 certifications
                        </p>
                      </div>
                    </div>
                    <p className="text-green-700 text-sm">
                      You haven't completed any certifications yet. Continue
                      your enrolled programs to earn your first certification.
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-800">
                          Recommended
                        </h4>
                        <p className="text-sm text-purple-600">
                          2 certifications
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Compliance Auditing Professional
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Security Risk Management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Certification Programs */}
            <div className="space-y-4">
              {certificationPrograms.map(program => <div key={program.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${program.level === 'Beginner' ? 'bg-green-100 text-green-800' : program.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                            {program.level}
                          </span>
                          {program.enrolled && <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                              Enrolled
                            </span>}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {program.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                          <div className="flex items-center">
                            <Layers className="h-4 w-4 mr-1" />
                            <span>{program.modules} modules</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{program.duration}</span>
                          </div>
                        </div>
                        {program.enrolled && typeof program.progress === 'number' && <div className="space-y-1 max-w-md">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Progress</span>
                                <span className="font-medium text-gray-700">
                                  {program.progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{
                          width: `${program.progress}%`
                        }}></div>
                              </div>
                            </div>}
                      </div>
                      <div className="md:ml-6 flex-shrink-0 flex items-end">
                        <button className={`px-4 py-2 rounded-lg ${program.enrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                          {program.enrolled ? 'Continue Learning' : 'Enroll Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                  {program.enrolled && <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                        View Curriculum
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>}
                </div>)}
            </div>
            {/* Benefits of Certification */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Benefits of Certification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-2 mr-3">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Professional Growth</h4>
                    <p className="text-sm text-indigo-100">
                      Enhance your skills and advance your career in security
                      and compliance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-2 mr-3">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Industry Recognition</h4>
                    <p className="text-sm text-indigo-100">
                      Gain credentials recognized by industry professionals and
                      employers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-2 mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Expert Community</h4>
                    <p className="text-sm text-indigo-100">
                      Connect with a network of certified professionals and
                      industry experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'milestones':
        return <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                Success Milestone Tracking
              </h2>
              <div>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Customize Milestones
                </button>
              </div>
            </div>
            {/* Progress Overview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Your Journey Progress
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        Overall Progress
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {milestones.filter(m => m.completed).length} of{' '}
                        {milestones.length} milestones
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{
                      width: `${milestones.filter(m => m.completed).length / milestones.length * 100}%`
                    }}></div>
                    </div>
                  </div>
                  <div className="md:ml-6 flex-shrink-0">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      View Achievements
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800">
                          Completed
                        </h4>
                        <p className="text-xs text-green-700">
                          {milestones.filter(m => m.completed).length}{' '}
                          milestones
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <Flag className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-800">
                          Next Milestone
                        </h4>
                        <p className="text-xs text-yellow-700">
                          First Compliance Report
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Star className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">
                          Achievements
                        </h4>
                        <p className="text-xs text-blue-700">2 badges earned</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-800">Level</h4>
                        <p className="text-xs text-purple-700">
                          Beginner (Level 2)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Milestone Timeline */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Milestone Timeline
                </h3>
              </div>
              <div className="p-6">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute top-0 left-8 bottom-0 w-0.5 bg-gray-200"></div>
                  {/* Milestones */}
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => <div key={milestone.id} className="relative flex items-start">
                        <div className={`absolute top-0 left-8 h-full w-0.5 ${index === milestones.length - 1 ? 'bg-white' : 'bg-gray-200'}`}></div>
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${milestone.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                          {milestone.completed ? <CheckCircle className="h-8 w-8 text-green-600" /> : <div className={`w-4 h-4 rounded-full ${index === milestones.findIndex(m => !m.completed) ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>}
                        </div>
                        <div className="ml-6 pt-3">
                          <h4 className={`text-lg font-medium ${milestone.completed ? 'text-green-800' : index === milestones.findIndex(m => !m.completed) ? 'text-gray-900' : 'text-gray-500'}`}>
                            {milestone.title}
                          </h4>
                          {milestone.completed ? <p className="text-sm text-green-600 mt-1">
                              Completed
                            </p> : index === milestones.findIndex(m => !m.completed) ? <div className="mt-2">
                              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                                Start Now
                              </button>
                            </div> : <p className="text-sm text-gray-500 mt-1">
                              Upcoming
                            </p>}
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
            {/* Achievements & Badges */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Achievements & Badges
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900">First Steps</h4>
                    <p className="text-sm text-gray-500">
                      Completed account setup
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <Settings className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900">
                      Configuration Pro
                    </h4>
                    <p className="text-sm text-gray-500">
                      Set up security baseline
                    </p>
                  </div>
                  <div className="text-center opacity-40">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-400">Report Master</h4>
                    <p className="text-sm text-gray-400">
                      Generate 5 compliance reports
                    </p>
                  </div>
                  <div className="text-center opacity-40">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-400">
                      Certified Expert
                    </h4>
                    <p className="text-sm text-gray-400">
                      Complete your first certification
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                    View All Achievements
                  </button>
                </div>
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
          <h1 className="text-2xl font-bold text-gray-900">
            Onboarding & Training
          </h1>
          <p className="mt-1 text-gray-500">
            Learn how to use the platform effectively and achieve compliance
            success
          </p>
        </div>
        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Your Onboarding Progress
              </h2>
              <p className="text-gray-500">
                Complete all recommended steps to get the most out of the
                platform
              </p>
            </div>
            <div className="mt-3 md:mt-0">
              <span className="text-xl font-bold text-blue-600">
                {progress}%
              </span>
              <span className="text-gray-500 ml-2">Complete</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{
            width: `${progress}%`
          }}></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Completed</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">In Progress</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Not Started</span>
            </div>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            <button onClick={() => setActiveTab('tours')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'tours' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <PlayCircle className="h-5 w-5 mr-2" />
              Product Tours
            </button>
            <button onClick={() => setActiveTab('guides')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'guides' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <List className="h-5 w-5 mr-2" />
              Setup Guides
            </button>
            <button onClick={() => setActiveTab('bestpractices')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'bestpractices' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BookOpen className="h-5 w-5 mr-2" />
              Best Practices
            </button>
            <button onClick={() => setActiveTab('certifications')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'certifications' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <GraduationCap className="h-5 w-5 mr-2" />
              Certifications
            </button>
            <button onClick={() => setActiveTab('milestones')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'milestones' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Flag className="h-5 w-5 mr-2" />
              Milestones
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
      {/* Welcome Modal */}
      {showWelcomeModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="relative">
              <button onClick={() => setShowWelcomeModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Welcome to Your Training Portal
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Let's get you started with everything you need to know
                  </p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Account Setup
                      </h3>
                      <p className="text-sm text-gray-600">
                        You've successfully set up your account. Great job!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                      <PlayCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Complete Your First Tour
                      </h3>
                      <p className="text-sm text-gray-600">
                        Take the "Getting Started" tour to learn the basics of
                        the platform
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <Settings className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Configure Security Settings
                      </h3>
                      <p className="text-sm text-gray-600">
                        Set up your security baseline to ensure compliance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button onClick={() => {
                setShowWelcomeModal(false);
                setActiveTab('tours');
              }} className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                    Start First Tour
                  </button>
                  <button onClick={() => setShowWelcomeModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 font-medium">
                    Explore on My Own
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};