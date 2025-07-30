import React from 'react';
import { PlayCircle } from 'lucide-react';
export const Hero = () => {
  return <div className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI Assistants That{' '}
              <span className="text-blue-600">Enhance Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Connect your business with AI agents that can handle phone calls,
              emails, payments, scheduling, and real-world tasks.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium text-lg hover:bg-blue-50 transition shadow-sm">
                Browse AI Agents
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition">
                    <PlayCircle size={48} className="text-white" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="AI assistant demo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};