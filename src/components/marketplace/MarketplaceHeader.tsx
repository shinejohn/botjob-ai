import React, { useState } from 'react';
import { BellIcon, SearchIcon, ChevronDownIcon, HomeIcon, UsersIcon, ShoppingBagIcon, CreditCardIcon, LifeBuoyIcon } from 'lucide-react';
export const MarketplaceHeader = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  return <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">BotJob.ai</div>
          </div>
          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
              <HomeIcon className="h-5 w-5 mr-1" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
              <UsersIcon className="h-5 w-5 mr-1" />
              <span>Agents</span>
            </a>
            <a href="#" className="flex items-center text-blue-600 font-medium">
              <ShoppingBagIcon className="h-5 w-5 mr-1" />
              <span>Marketplace</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
              <CreditCardIcon className="h-5 w-5 mr-1" />
              <span>Billing</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 font-medium">
              <LifeBuoyIcon className="h-5 w-5 mr-1" />
              <span>Support</span>
            </a>
          </nav>
          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-5 w-5 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
                3
              </span>
            </button>
            {/* User Profile */}
            <div className="relative">
              <button className="flex items-center space-x-2" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  JD
                </div>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </button>
              {showProfileMenu && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </a>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </header>;
};