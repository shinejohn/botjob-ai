import React, { useState } from 'react';
import { MarketplaceHeader } from '../components/marketplace/MarketplaceHeader';
import { FilterSidebar } from '../components/marketplace/FilterSidebar';
import { AgentCard } from '../components/marketplace/AgentCard';
import { ArrowUpDownIcon, SlidersIcon } from 'lucide-react';
export const AgentMarketplace = ({
  onViewAgentDetail
}: {
  onViewAgentDetail: (agentId: string) => void;
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Most Popular');
  const [showFilters, setShowFilters] = useState(false);
  // Sample agent data
  const agents = [{
    id: 'reception-bot-1',
    name: 'ReceptionistPro',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developer: 'AI Solutions Inc.',
    developerVerified: true,
    rating: 4.9,
    reviews: 124,
    description: 'Professional phone answering and appointment scheduling',
    capabilities: ['Phone', 'Calendar', 'Email'],
    price: '$29',
    billing: 'monthly',
    responseTime: '< 1 min',
    successRate: '98%',
    featured: true,
    category: 'Customer Service'
  }, {
    id: 'sales-bot-1',
    name: 'SalesGenius',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developer: 'RevenueTech',
    developerVerified: true,
    rating: 4.8,
    reviews: 97,
    description: 'Lead qualification and follow-up communications',
    capabilities: ['Phone', 'Email', 'Payments'],
    price: '$49',
    billing: 'monthly',
    responseTime: '< 2 min',
    successRate: '95%',
    featured: false,
    category: 'Sales'
  }, {
    id: 'admin-bot-1',
    name: 'AdminAssist',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developer: 'WorkflowAI',
    developerVerified: true,
    rating: 4.7,
    reviews: 156,
    description: 'Invoice processing and document management',
    capabilities: ['Email', 'Calendar', 'Payments'],
    price: '$39',
    billing: 'monthly',
    responseTime: '< 3 min',
    successRate: '97%',
    featured: false,
    category: 'Admin'
  }, {
    id: 'marketing-bot-1',
    name: 'ContentCreator',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developer: 'MarketingAI Labs',
    developerVerified: true,
    rating: 4.6,
    reviews: 89,
    description: 'Social media management and content creation',
    capabilities: ['Email', 'Calendar'],
    price: '$45',
    billing: 'monthly',
    responseTime: '< 5 min',
    successRate: '94%',
    featured: false,
    category: 'Marketing'
  }, {
    id: 'ops-bot-1',
    name: 'InventoryMaster',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developer: 'SupplyChainTech',
    developerVerified: false,
    rating: 4.5,
    reviews: 62,
    description: 'Inventory tracking and supply chain management',
    capabilities: ['Email', 'Payments'],
    price: '$59',
    billing: 'monthly',
    responseTime: '< 10 min',
    successRate: '92%',
    featured: false,
    category: 'Operations'
  }, {
    id: 'cs-bot-2',
    name: 'SupportHero',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developer: 'CustomerCareAI',
    developerVerified: true,
    rating: 4.8,
    reviews: 113,
    description: '24/7 customer support and ticket management',
    capabilities: ['Phone', 'Email', 'Calendar'],
    price: '$35',
    billing: 'monthly',
    responseTime: '< 30 sec',
    successRate: '99%',
    featured: true,
    category: 'Customer Service'
  }];
  // Filter agents by category
  const filteredAgents = activeCategory === 'All' ? agents : agents.filter(agent => agent.category === activeCategory);
  const categories = ['All', 'Customer Service', 'Sales', 'Admin', 'Marketing', 'Operations'];
  const sortOptions = ['Most Popular', 'Highest Rated', 'Newest', 'Price Low-High', 'Best Match'];
  return <div className="w-full min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          AI Agent Marketplace
        </h1>
        {/* Search Bar */}
        <div className="relative mb-8">
          <input type="text" placeholder="What do you need help with?" className="w-full py-4 px-6 bg-white border border-gray-300 rounded-lg shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
        {/* Category Tabs - Desktop */}
        <div className="hidden md:flex space-x-2 mb-6 overflow-x-auto">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              {category}
            </button>)}
        </div>
        {/* Mobile Category Dropdown */}
        <div className="md:hidden mb-4">
          <select value={activeCategory} onChange={e => setActiveCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md">
            {categories.map(category => <option key={category} value={category}>
                {category}
              </option>)}
          </select>
        </div>
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button onClick={() => setShowFilters(!showFilters)} className="w-full flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-md text-gray-700">
            <SlidersIcon className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <FilterSidebar />
          </div>
          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">
                Showing {filteredAgents.length} agents
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-700 mr-2">Sort by:</span>
                <select value={sortOption} onChange={e => setSortOption(e.target.value)} className="p-2 border border-gray-300 rounded-md text-sm">
                  {sortOptions.map(option => <option key={option} value={option}>
                      {option}
                    </option>)}
                </select>
              </div>
            </div>
            {/* Agent Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map(agent => <AgentCard key={agent.id} agent={agent} onViewDetails={() => onViewAgentDetail(agent.id)} />)}
            </div>
          </div>
        </div>
      </main>
    </div>;
};