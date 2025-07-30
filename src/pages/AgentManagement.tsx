import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { PerformanceOverview } from '../components/management/PerformanceOverview';
import { ActivityLog } from '../components/management/ActivityLog';
import { ConfigurationPanel } from '../components/management/ConfigurationPanel';
import { TrainingInterface } from '../components/management/TrainingInterface';
import { Settings, Activity, Sliders, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const AgentManagement = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const navigate = useNavigate();
  // Sample agent data
  const agent = {
    id: 'reception-bot-1',
    name: 'ReceptionistPro',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    status: 'active',
    lastActive: new Date().toISOString(),
    activeSince: '2023-05-15T00:00:00Z',
    totalInteractions: 1457,
    successRate: 0.97,
    responseTime: 0.8,
    customerSatisfaction: 4.8,
    capabilities: ['Phone', 'Email', 'Calendar', 'CRM']
  };
  const handleEditAgent = () => {
    navigate(`/agent-setup-wizard/${agent.id}`);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'performance':
        return <PerformanceOverview agent={agent} />;
      case 'activity':
        return <ActivityLog agent={agent} />;
      case 'configuration':
        return <ConfigurationPanel agent={agent} />;
      case 'training':
        return <TrainingInterface agent={agent} />;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Agent Header */}
        <div className="mb-8">
          <div className="flex items-center">
            <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                {agent.name}
                <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${agent.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {agent.status === 'active' ? 'Active' : 'Paused'}
                </span>
              </h1>
              <p className="text-gray-500 mt-1">
                Last active: {new Date(agent.lastActive).toLocaleString()}
              </p>
            </div>
            <div className="ml-auto">
              <button onClick={handleEditAgent} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm">
                Edit Agent
              </button>
            </div>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('performance')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'performance' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Activity className="h-5 w-5 mr-2" />
              Performance
            </button>
            <button onClick={() => setActiveTab('activity')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'activity' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Activity className="h-5 w-5 mr-2" />
              Activity Log
            </button>
            <button onClick={() => setActiveTab('configuration')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'configuration' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Sliders className="h-5 w-5 mr-2" />
              Configuration
            </button>
            <button onClick={() => setActiveTab('training')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'training' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BookOpen className="h-5 w-5 mr-2" />
              Training
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>;
};