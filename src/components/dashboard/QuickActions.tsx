import React from 'react';
import { PlusIcon, MessageCircleIcon, CalendarIcon, ZapIcon } from 'lucide-react';
export const QuickActions = () => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      <div className="space-y-3">
        {/* Hire New Agent */}
        <button className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
          <PlusIcon className="h-5 w-5 mr-2" />
          <span>Hire New Agent</span>
        </button>
        {/* Need Help? */}
        <button className="w-full flex items-center justify-center py-3 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md font-medium transition-colors">
          <MessageCircleIcon className="h-5 w-5 mr-2 text-blue-600" />
          <span>Need Help?</span>
        </button>
        {/* Schedule Training */}
        <button className="w-full flex items-center justify-center py-3 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md font-medium transition-colors">
          <CalendarIcon className="h-5 w-5 mr-2 text-purple-600" />
          <span>Schedule Training Session</span>
        </button>
        {/* Upgrade Plan */}
        <button className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-md font-medium transition-colors">
          <ZapIcon className="h-5 w-5 mr-2" />
          <span>Upgrade Plan</span>
        </button>
      </div>
      <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
        <h3 className="font-medium text-blue-800 mb-2">Pro Tip</h3>
        <p className="text-sm text-blue-700">
          Train your agents with your company documentation to improve their
          accuracy and performance.
        </p>
        <button className="mt-2 text-sm font-medium text-blue-600">
          Learn how →
        </button>
      </div>
    </div>;
};