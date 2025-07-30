import React from 'react';
import { Star, CheckCircle, Award, Shield } from 'lucide-react';
export const AgentDetailHero = ({
  agent
}: {
  agent: any;
}) => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col md:flex-row">
          {/* Agent Avatar and Basic Info */}
          <div className="md:w-1/4 flex flex-col items-center text-center mb-6 md:mb-0">
            <img src={agent.avatar} alt={agent.name} className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-sm" />
            <h1 className="text-2xl font-bold text-gray-900 mt-4">
              {agent.name}
            </h1>
            <p className="text-gray-600 mt-1">{agent.tagline}</p>
            <div className="flex items-center mt-3">
              <Star size={20} className="text-yellow-500" />
              <span className="ml-1 font-medium text-lg">{agent.rating}</span>
              <span className="ml-1 text-gray-500">
                ({agent.reviews} reviews)
              </span>
            </div>
            <div className="mt-4 flex items-center text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded-full">
              <img src={agent.developerAvatar} alt={agent.developer} className="w-5 h-5 rounded-full mr-2" />
              <span>by {agent.developer}</span>
              {agent.developerVerified && <CheckCircle size={14} className="ml-1 text-blue-600" />}
            </div>
          </div>
          {/* Main Content */}
          <div className="md:w-2/4 md:px-8">
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                About This Agent
              </h2>
              <p className="text-gray-700">{agent.description}</p>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {agent.certifications.map((cert: string, index: number) => <div key={index} className="flex items-center bg-green-50 text-green-800 px-3 py-1 rounded-full text-xs">
                  <Shield size={12} className="mr-1" />
                  {cert}
                </div>)}
            </div>
            {/* Languages */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                Languages Supported
              </h3>
              <div className="flex flex-wrap gap-2">
                {agent.languages.map((language: string, index: number) => <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                    {language}
                  </span>)}
              </div>
            </div>
          </div>
          {/* Pricing and CTA */}
          <div className="md:w-1/4 bg-gray-50 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Setup Fee</span>
                  <span className="font-medium">{agent.price.setup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Fee</span>
                  <span className="font-medium">{agent.price.monthly}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Per Task</span>
                  <span className="font-medium">{agent.price.perTask}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Start Free Trial
              </button>
              <button className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
                Schedule Demo
              </button>
            </div>
            <div className="mt-6 text-xs text-gray-500 text-center">
              14-day free trial, no credit card required
            </div>
          </div>
        </div>
      </div>
    </div>;
};