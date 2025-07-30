import React from 'react';
import { Check } from 'lucide-react';
export const Pricing = ({
  showSignup
}: {
  showSignup?: () => void;
}) => {
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Business Starter
            </h3>
            <div className="flex justify-center items-end mb-4">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-xl text-blue-100 ml-1">/month</span>
            </div>
            <p className="text-blue-100">
              Perfect for small businesses and startups
            </p>
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {['3 AI agents included', 'Unlimited phone minutes', 'Email integration', 'Calendar management', 'Basic payment processing', '8am-8pm support'].map((feature, index) => <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>)}
            </ul>
            <div className="mt-8">
              <button onClick={showSignup} className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Start Free Trial
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              No credit card required for trial
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">
            View all pricing plans →
          </a>
        </div>
      </div>
    </div>;
};