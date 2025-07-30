import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, Menu, MessageSquare, Search, Settings, User, X } from 'lucide-react';
export const DashboardHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/profile-settings?tab=company');
    setIsUserMenuOpen(false);
  };
  const handleSettingsClick = () => {
    navigate('/profile-settings?tab=security');
    setIsUserMenuOpen(false);
  };
  const handleSignOut = () => {
    // In a real app, this would handle logout logic
    navigate('/landing-page');
    setIsUserMenuOpen(false);
  };
  return <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                AgentHub
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/dashboard" className={`${location.pathname === '/dashboard' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Dashboard
              </Link>
              <Link to="/agents" className={`${location.pathname === '/agents' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Agents
              </Link>
              <Link to="/analytics" className={`${location.pathname === '/analytics' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Analytics
              </Link>
              <Link to="/system-administration" className={`${location.pathname === '/system-administration' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Administration
              </Link>
              <Link to="/content-management" className={`${location.pathname === '/content-management' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                Content
              </Link>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative mx-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search" />
            </div>
            {/* Notifications */}
            <div className="ml-3 relative">
              <button type="button" className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              {isNotificationsOpen && <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900">
                      Notifications
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="px-4 py-3 hover:bg-gray-50">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            New policy violation reported
                          </p>
                          <p className="text-sm text-gray-500">
                            Security issue in CodeHelper agent
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 rounded-full p-1">
                          <User className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            New developer application
                          </p>
                          <p className="text-sm text-gray-500">
                            TechInnovators LLC submitted application
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            5 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-yellow-100 rounded-full p-1">
                          <Bell className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            System alert
                          </p>
                          <p className="text-sm text-gray-500">
                            Increased latency in Storage Services
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            1 day ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 text-center">
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      View all notifications
                    </a>
                  </div>
                </div>}
            </div>
            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="ml-2 text-gray-700">Admin User</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
              {isUserMenuOpen && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <button onClick={handleProfileClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </button>
                  <button onClick={handleSettingsClick} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </button>
                  <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </button>
                </div>}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Dashboard
            </a>
            <a href="#" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Agents
            </a>
            <a href="#" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Analytics
            </a>
            <a href="#" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Administration
            </a>
            <a href="#" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Content
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                  <User className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Admin User
                </div>
                <div className="text-sm font-medium text-gray-500">
                  admin@example.com
                </div>
              </div>
              <button className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1">
              <button onClick={handleProfileClick} className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Your Profile
              </button>
              <button onClick={handleSettingsClick} className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Settings
              </button>
              <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                Sign out
              </button>
            </div>
          </div>
        </div>}
    </header>;
};