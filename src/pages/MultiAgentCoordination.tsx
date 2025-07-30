import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { TeamCreation } from '../components/multiagent/TeamCreation';
import { WorkflowBuilder } from '../components/multiagent/WorkflowBuilder';
import { HandoffRules } from '../components/multiagent/HandoffRules';
import { PerformanceAnalysis } from '../components/multiagent/PerformanceAnalysis';
import { TeamOptimization } from '../components/multiagent/TeamOptimization';
import { Users, GitBranch, GitMerge, BarChart2, Zap } from 'lucide-react';
export const MultiAgentCoordination = () => {
  const [activeTab, setActiveTab] = useState('teams');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'teams':
        return <TeamCreation />;
      case 'workflows':
        return <WorkflowBuilder />;
      case 'handoff':
        return <HandoffRules />;
      case 'performance':
        return <PerformanceAnalysis />;
      case 'optimization':
        return <TeamOptimization />;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Multi-Agent Coordination
          </h1>
          <div className="flex space-x-3">
            <button onClick={() => setActiveTab('teams')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Create Agent Team
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('teams')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'teams' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Users className="h-5 w-5 mr-2" />
              Agent Teams
            </button>
            <button onClick={() => setActiveTab('workflows')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'workflows' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <GitBranch className="h-5 w-5 mr-2" />
              Workflow Builder
            </button>
            <button onClick={() => setActiveTab('handoff')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'handoff' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <GitMerge className="h-5 w-5 mr-2" />
              Handoff Rules
            </button>
            <button onClick={() => setActiveTab('performance')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'performance' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BarChart2 className="h-5 w-5 mr-2" />
              Performance Analysis
            </button>
            <button onClick={() => setActiveTab('optimization')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'optimization' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Zap className="h-5 w-5 mr-2" />
              Team Optimization
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>;
};