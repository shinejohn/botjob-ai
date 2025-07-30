import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';
export const TrustIndicators = () => {
  return <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted by Businesses Worldwide
          </h2>
        </div>
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => <div key={index} className="h-12 flex items-center justify-center">
              <div className="text-xl font-bold text-gray-400">{company}</div>
            </div>)}
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-lg text-gray-600">Uptime Reliability</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-lg text-gray-600">AI Agent Availability</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
            <div className="text-lg text-gray-600">Tasks Completed Daily</div>
          </div>
        </div>
      </div>
    </div>;
};