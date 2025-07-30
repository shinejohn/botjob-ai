import React from 'react';
import { Phone, Mail, Calendar, Code, DollarSign, Store } from 'lucide-react';
export const UserTypeSelection = ({
  onBusinessSignup,
  onDeveloperSignup
}: {
  onBusinessSignup: () => void;
  onDeveloperSignup: () => void;
}) => {
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the option that best describes your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Business Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I Need AI Employees
              </h3>
              <div className="flex space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Find AI agents that can handle your business tasks including
                phone calls, emails, scheduling, and more.
              </p>
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Perfect for:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Small businesses needing administrative support</li>
                  <li>• Customer service teams handling high call volumes</li>
                  <li>• Sales teams looking to qualify leads 24/7</li>
                </ul>
              </div>
              <button onClick={onBusinessSignup} className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Get Started as a Business
              </button>
            </div>
          </div>
          {/* Developer Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-xl">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I Build AI Agents
              </h3>
              <div className="flex space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Store className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Build and sell your AI agents on our marketplace. Earn revenue
                while helping businesses automate tasks.
              </p>
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Perfect for:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI developers looking to monetize their skills</li>
                  <li>• Companies creating specialized AI solutions</li>
                  <li>• Entrepreneurs building AI-powered businesses</li>
                </ul>
              </div>
              <button onClick={onDeveloperSignup} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                Apply as a Developer
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">
            Not sure which to choose? Take our quick assessment quiz →
          </a>
        </div>
      </div>
    </div>;
};