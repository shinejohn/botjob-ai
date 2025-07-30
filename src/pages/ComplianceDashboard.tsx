import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { RegulationCompliance } from '../components/compliance/RegulationCompliance';
import { AuditTrail } from '../components/compliance/AuditTrail';
import { CertificationStatus } from '../components/compliance/CertificationStatus';
import { TrainingCompletion } from '../components/compliance/TrainingCompletion';
import { IncidentReporting } from '../components/compliance/IncidentReporting';
import { ClipboardCheck, History, Award, BookOpen, AlertTriangle } from 'lucide-react';
export const ComplianceDashboard = () => {
  const [activeTab, setActiveTab] = useState('regulations');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'regulations':
        return <RegulationCompliance />;
      case 'audit':
        return <AuditTrail />;
      case 'certifications':
        return <CertificationStatus />;
      case 'training':
        return <TrainingCompletion />;
      case 'incidents':
        return <IncidentReporting />;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Compliance Dashboard
          </h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <ClipboardCheck className="h-5 w-5 mr-2" />
              Run Compliance Check
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('regulations')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'regulations' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <ClipboardCheck className="h-5 w-5 mr-2" />
              Regulation Compliance
            </button>
            <button onClick={() => setActiveTab('audit')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'audit' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <History className="h-5 w-5 mr-2" />
              Audit Trail
            </button>
            <button onClick={() => setActiveTab('certifications')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'certifications' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <Award className="h-5 w-5 mr-2" />
              Certification Status
            </button>
            <button onClick={() => setActiveTab('training')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'training' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BookOpen className="h-5 w-5 mr-2" />
              Training Completion
            </button>
            <button onClick={() => setActiveTab('incidents')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'incidents' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <AlertTriangle className="h-5 w-5 mr-2" />
              Incident Reporting
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>;
};