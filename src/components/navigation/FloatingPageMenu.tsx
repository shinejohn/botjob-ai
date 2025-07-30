import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronUp } from 'lucide-react';
export const FloatingPageMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const pages = [{
    name: 'System Administration',
    path: '/system-administration'
  }, {
    name: 'Content Management',
    path: '/content-management'
  }, {
    name: 'Dashboard',
    path: '/dashboard'
  }, {
    name: 'Agents',
    path: '/agents'
  }, {
    name: 'Analytics',
    path: '/analytics'
  }, {
    name: 'Team Management',
    path: '/team-management'
  }, {
    name: 'Multi-Agent Coordination',
    path: '/multi-agent-coordination'
  }, {
    name: 'Billing Dashboard',
    path: '/billing-dashboard'
  }, {
    name: 'Agent Development',
    path: '/agent-development'
  }, {
    name: 'Compliance Dashboard',
    path: '/compliance-dashboard'
  }, {
    name: 'Security Center',
    path: '/security-center'
  }, {
    name: 'Landing Page',
    path: '/landing-page'
  }];
  const navigateToPage = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };
  return <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mb-4 w-64">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium text-gray-900">All Pages</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-1 max-h-96 overflow-y-auto">
            {pages.map(page => <button key={page.path} onClick={() => navigateToPage(page.path)} className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 text-gray-700">
                {page.name}
              </button>)}
          </div>
        </div> : null}
      <button onClick={() => setIsOpen(!isOpen)} className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors flex items-center">
        {isOpen ? <ChevronUp className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>;
};