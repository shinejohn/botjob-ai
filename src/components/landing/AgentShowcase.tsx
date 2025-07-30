import React from 'react';
import { Phone, Mail, Calendar, CreditCard } from 'lucide-react';
export const AgentShowcase = () => {
  const agents = [{
    name: 'ReceptionistBot',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4.9,
    reviews: 124,
    description: 'Professional phone answering and appointment scheduling',
    capabilities: ['Phone', 'Calendar', 'Email'],
    price: '$29/month'
  }, {
    name: 'SalesAssistant',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.8,
    reviews: 97,
    description: 'Lead qualification and follow-up communications',
    capabilities: ['Phone', 'Email', 'Payments'],
    price: '$49/month'
  }, {
    name: 'AdminHelper',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4.7,
    reviews: 156,
    description: 'Invoice processing and document management',
    capabilities: ['Email', 'Calendar', 'Payments'],
    price: '$39/month'
  }];
  const getIcon = (capability: string) => {
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
  return <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular AI Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most hired AI employees, ready to join your team today
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {agent.name}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      <span className="mr-1">★</span>
                      <span className="text-gray-700">
                        {agent.rating} ({agent.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{agent.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {agent.capabilities.map((capability, i) => <div key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      {getIcon(capability)}
                      <span className="ml-1">{capability}</span>
                    </div>)}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-gray-900">
                    {agent.price}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg font-medium hover:bg-blue-50 transition shadow-sm">
            View All Agents
          </button>
        </div>
      </div>
    </div>;
};