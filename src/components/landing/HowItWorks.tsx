import React from 'react';
import { Search, TestTube, UserCheck } from 'lucide-react';
export const HowItWorks = () => {
  const steps = [{
    icon: <Search className="h-10 w-10 text-blue-600" />,
    title: 'Browse',
    description: 'Search our marketplace of AI agents by industry, skills, or specific tasks you need help with.'
  }, {
    icon: <TestTube className="h-10 w-10 text-blue-600" />,
    title: 'Test',
    description: 'Try before you buy with our interactive demos and free trial period for all AI agents.'
  }, {
    icon: <UserCheck className="h-10 w-10 text-blue-600" />,
    title: 'Hire',
    description: 'Onboard your AI employee with a few clicks and start delegating tasks immediately.'
  }];
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with AI employees is simple and risk-free
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                {index + 1}. {step.title}
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition shadow-lg">
            See Demo
          </button>
        </div>
      </div>
    </div>;
};