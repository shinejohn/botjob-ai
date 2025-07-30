import React from 'react';
import { Phone, Mail, Calendar, CreditCard, Clock, CheckCircle, Star, Award } from 'lucide-react';
interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    avatar: string;
    developer: string;
    developerVerified: boolean;
    rating: number;
    reviews: number;
    description: string;
    capabilities: string[];
    price: string;
    billing: string;
    responseTime: string;
    successRate: string;
    featured: boolean;
    category: string;
  };
  onViewDetails: () => void;
}
export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  onViewDetails
}) => {
  const getCapabilityIcon = (capability: string) => {
    switch (capability) {
      case 'Phone':
        return <Phone size={16} />;
      case 'Email':
        return <Mail size={16} />;
      case 'Calendar':
        return <Calendar size={16} />;
      case 'Payments':
        return <CreditCard size={16} />;
      default:
        return null;
    }
  };
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Featured Badge */}
      {agent.featured && <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 text-center">
          FEATURED AGENT
        </div>}
      <div className="p-6">
        {/* Agent Header */}
        <div className="flex items-start">
          <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-100" />
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{agent.name}</h3>
            <div className="flex items-center mt-1">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full flex items-center">
                {agent.developerVerified && <CheckCircle size={12} className="mr-1" />}
                {agent.developer}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <Star size={16} className="text-yellow-500" />
              <span className="ml-1 text-sm font-medium">{agent.rating}</span>
              <span className="ml-1 text-xs text-gray-500">
                ({agent.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm mt-4 line-clamp-2">
          {agent.description}
        </p>
        {/* Capabilities */}
        <div className="flex flex-wrap gap-2 mt-4">
          {agent.capabilities.map((capability, index) => <div key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              {getCapabilityIcon(capability)}
              <span className="ml-1">{capability}</span>
            </div>)}
        </div>
        {/* Quick Stats */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{agent.responseTime}</span>
          </div>
          <div className="flex items-center">
            <CheckCircle size={14} className="mr-1 text-green-500" />
            <span>{agent.successRate} success</span>
          </div>
        </div>
        {/* Price & Actions */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="font-bold text-gray-900">{agent.price}</span>
            <span className="text-gray-500 text-sm">/{agent.billing}</span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition">
              Try Demo
            </button>
            <button onClick={onViewDetails} className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>;
};