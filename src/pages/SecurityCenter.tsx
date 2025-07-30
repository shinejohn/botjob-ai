import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DataEncryption } from '../components/security/DataEncryption';
import { Shield } from 'lucide-react';
export const SecurityCenter = () => {
  const [activeTab, setActiveTab] = useState('encryption');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'encryption':
        return <DataEncryption />;
      default:
        return <DataEncryption />;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Security Center</h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Security Assessment
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('encryption')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'encryption' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Shield className="h-5 w-5 mr-2" />
              Data Encryption
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>;
};