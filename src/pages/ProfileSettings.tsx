import React, { useEffect, useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { CompanyProfile } from '../components/profile/CompanyProfile';
import { UserPreferences } from '../components/profile/UserPreferences';
import { SecuritySettings } from '../components/profile/SecuritySettings';
import { IntegrationManagement } from '../components/profile/IntegrationManagement';
import { WebhookApiManagement } from '../components/profile/WebhookApiManagement';
import { Building, User, Shield, Link, Code } from 'lucide-react';
import { useLocation } from 'react-router-dom';
export const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('company');
  const location = useLocation();
  useEffect(() => {
    // Get the tab from the URL query parameter
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ['company', 'preferences', 'security', 'integrations', 'webhooks'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);
  const renderTabContent = () => {
    switch (activeTab) {
      case 'company':
        return <CompanyProfile />;
      case 'preferences':
        return <UserPreferences />;
      case 'security':
        return <SecuritySettings />;
      case 'integrations':
        return <IntegrationManagement />;
      case 'webhooks':
        return <WebhookApiManagement />;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Profile & Settings
          </h1>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            <button onClick={() => setActiveTab('company')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'company' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Building className="h-5 w-5 mr-2" />
              Company Profile
            </button>
            <button onClick={() => setActiveTab('preferences')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'preferences' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <User className="h-5 w-5 mr-2" />
              User Preferences
            </button>
            <button onClick={() => setActiveTab('security')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'security' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Shield className="h-5 w-5 mr-2" />
              Security Settings
            </button>
            <button onClick={() => setActiveTab('integrations')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'integrations' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Link className="h-5 w-5 mr-2" />
              Third-Party Integrations
            </button>
            <button onClick={() => setActiveTab('webhooks')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${activeTab === 'webhooks' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Code className="h-5 w-5 mr-2" />
              Webhooks & API
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>;
};