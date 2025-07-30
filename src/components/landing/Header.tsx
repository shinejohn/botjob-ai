import React from 'react';
import { Menu } from 'lucide-react';
export const Header = ({
  showSignup,
  showLogin
}: {
  showSignup?: () => void;
  showLogin?: () => void;
}) => {
  return <header className="w-full bg-white border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">BotJob.ai</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
              How it Works
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
              For Businesses
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
              For Developers
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
              Pricing
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={showLogin} className="px-4 py-2 rounded-md text-gray-700 font-medium">
              Login
            </button>
            <button onClick={showSignup} className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
              Start Free Trial
            </button>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>;
};