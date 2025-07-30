import React from 'react';
import { MarketplaceHeader } from '../components/marketplace/MarketplaceHeader';
import { AgentDetailHero } from '../components/marketplace/AgentDetailHero';
import { AgentCapabilities } from '../components/marketplace/AgentCapabilities';
import { AgentPerformance } from '../components/marketplace/AgentPerformance';
import { AgentReviews } from '../components/marketplace/AgentReviews';
import { AgentDemo } from '../components/marketplace/AgentDemo';
import { AgentTechnical } from '../components/marketplace/AgentTechnical';
import { ArrowLeftIcon } from 'lucide-react';
export const AgentDetail = ({
  agentId,
  onBack
}: {
  agentId: string;
  onBack: () => void;
}) => {
  // In a real app, you would fetch the agent details based on the ID
  // For now, we'll use hardcoded data
  const agent = {
    id: 'reception-bot-1',
    name: 'ReceptionistPro',
    tagline: 'Your virtual front desk that never sleeps',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developer: 'AI Solutions Inc.',
    developerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    developerVerified: true,
    rating: 4.9,
    reviews: 124,
    description: 'Professional phone answering and appointment scheduling for businesses of all sizes. ReceptionistPro handles incoming calls, schedules appointments, answers common questions, and ensures your customers always reach a friendly voice.',
    capabilities: ['Phone', 'Calendar', 'Email', 'SMS', 'CRM Integration'],
    price: {
      setup: '$99',
      monthly: '$29',
      perTask: '$0.05'
    },
    responseTime: '< 1 min',
    successRate: '98%',
    languages: ['English', 'Spanish', 'French'],
    featured: true,
    category: 'Customer Service',
    uptime: '99.9%',
    satisfaction: '4.8/5',
    tasksCompleted: '14,567',
    certifications: ['HIPAA Compliant', 'SOC 2', 'GDPR Ready'],
    integrations: ['Google Calendar', 'Outlook', 'Salesforce', 'HubSpot', 'Zoom']
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Marketplace
        </button>
        <AgentDetailHero agent={agent} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-12">
            <AgentCapabilities agent={agent} />
            <AgentPerformance agent={agent} />
            <AgentReviews agent={agent} />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <AgentDemo agent={agent} />
            <AgentTechnical agent={agent} />
          </div>
        </div>
      </main>
    </div>;
};