import React, { useEffect, useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { CurrentUsage } from '../components/billing/CurrentUsage';
import { PlanManagement } from '../components/billing/PlanManagement';
import { InvoiceHistory } from '../components/billing/InvoiceHistory';
import { CostOptimization } from '../components/billing/CostOptimization';
import { CreditCard, BarChart2, FileText, TrendingDown, Check, X } from 'lucide-react';
export const BillingDashboard = () => {
  const [activeTab, setActiveTab] = useState('usage');
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  // This useEffect will help ensure the component re-renders when the tab changes
  useEffect(() => {
    console.log('Active tab changed to:', activeTab);
  }, [activeTab]);
  const renderTabContent = () => {
    console.log('Rendering tab content for:', activeTab);
    switch (activeTab) {
      case 'usage':
        return <CurrentUsage />;
      case 'plans':
        return <PlanManagement />;
      case 'invoices':
        return <InvoiceHistory />;
      case 'optimization':
        return <CostOptimization />;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Billing & Account Management
          </h1>
          <div className="flex space-x-3">
            <button onClick={() => setShowPaymentMethodModal(true)} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Update Payment Method
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('usage')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'usage' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BarChart2 className="h-5 w-5 mr-2" />
              Current Usage
            </button>
            <button onClick={() => setActiveTab('plans')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'plans' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <CreditCard className="h-5 w-5 mr-2" />
              Plan Management
            </button>
            <button onClick={() => setActiveTab('invoices')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'invoices' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <FileText className="h-5 w-5 mr-2" />
              Invoice History
            </button>
            <button onClick={() => setActiveTab('optimization')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'optimization' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <TrendingDown className="h-5 w-5 mr-2" />
              Cost Optimization
            </button>
          </nav>
        </div>
        {/* Tab Content */}
        <div key={activeTab} className="tab-content">
          {renderTabContent()}
        </div>
      </main>
      {/* Payment Method Modal */}
      {showPaymentMethodModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Update Payment Method
                </h3>
                <button onClick={() => setShowPaymentMethodModal(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input type="text" id="card-number" placeholder="1234 5678 9012 3456" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  <CreditCard className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiration Date
                  </label>
                  <input type="text" id="expiry" placeholder="MM/YY" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input type="text" id="cvc" placeholder="123" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input type="text" id="name" placeholder="John Smith" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="flex items-center mb-4">
                <input id="default-card" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="default-card" className="ml-2 block text-sm text-gray-900">
                  Make this my default payment method
                </label>
              </div>
              <div className="p-4 bg-gray-50 rounded-md border border-gray-200 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="h-5 w-5 text-gray-400 mr-2" />
                  Your card information is secure and encrypted
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowPaymentMethodModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={() => {
            alert('Payment method updated successfully!');
            setShowPaymentMethodModal(false);
          }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Update Payment Method
              </button>
            </div>
          </div>
        </div>}
    </div>;
};