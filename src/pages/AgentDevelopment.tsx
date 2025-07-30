import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { AgentBuilder } from '../components/development/AgentBuilder';
import { MarketplaceListing } from '../components/development/MarketplaceListing';
import { CustomerSupport } from '../components/development/CustomerSupport';
import { Code, ShoppingBag, HeadphonesIcon } from 'lucide-react';
export const AgentDevelopment = () => {
  const [activeTab, setActiveTab] = useState('builder');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'builder':
        return <AgentBuilder />;
      case 'marketplace':
        return <MarketplaceListing />;
      case 'support':
        return <CustomerSupport />;
      default:
        return <AgentBuilder />;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Agent Development
          </h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              Save Draft
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
              Publish Agent
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('builder')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'builder' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Code className="h-5 w-5 mr-2" />
              Agent Builder
            </button>
            <button onClick={() => setActiveTab('marketplace')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'marketplace' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <ShoppingBag className="h-5 w-5 mr-2" />
              Marketplace Listing
            </button>
            <button onClick={() => setActiveTab('support')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'support' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <HeadphonesIcon className="h-5 w-5 mr-2" />
              Customer Support
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        <div key={activeTab}>{renderTabContent()}</div>
      </main>
    </div>;
};