import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export const ViewMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return <nav className="bg-white border-b border-gray-200 p-4">
      <div className="flex space-x-4">
        <button onClick={() => navigate('/system-administration')} className={`px-4 py-2 rounded-md text-sm font-medium ${location.pathname === '/system-administration' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}>
          System Administration
        </button>
        <button onClick={() => navigate('/content-management')} className={`px-4 py-2 rounded-md text-sm font-medium ${location.pathname === '/content-management' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}>
          Content Management
        </button>
      </div>
    </nav>;
};