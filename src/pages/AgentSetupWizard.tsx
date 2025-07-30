import React, { useEffect, useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { BasicConfiguration } from '../components/setup/BasicConfiguration';
import { ContactInformation } from '../components/setup/ContactInformation';
import { Integrations } from '../components/setup/Integrations';
import { TrainingKnowledge } from '../components/setup/TrainingKnowledge';
import { TestingLaunch } from '../components/setup/TestingLaunch';
import { Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
export const AgentSetupWizard = () => {
  const {
    agentId
  } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [agentConfig, setAgentConfig] = useState({
    // Basic Configuration
    name: '',
    companyInfo: '',
    tone: 50,
    formality: 50,
    responseSpeed: 'normal',
    escalationTriggers: [],
    // Contact Information
    phoneNumber: '',
    emailAddress: '',
    businessHours: {
      start: '09:00',
      end: '17:00',
      timezone: 'America/New_York',
      workDays: [1, 2, 3, 4, 5] // Monday to Friday
    },
    outOfOfficeMessage: '',
    // Integrations
    connectedServices: [],
    // Training & Knowledge
    uploadedDocuments: [],
    faqs: [],
    responseTemplates: [],
    procedures: [],
    // Testing & Launch
    isLive: false
  });
  useEffect(() => {
    // If agentId is provided, fetch agent data
    if (agentId) {
      // In a real app, this would be an API call to get agent data
      // For now, we'll simulate loading data for the sample agent
      if (agentId === 'reception-bot-1') {
        setAgentConfig({
          ...agentConfig,
          name: 'ReceptionistPro',
          companyInfo: 'AI Solutions Inc.',
          tone: 70,
          formality: 80,
          responseSpeed: 'fast',
          escalationTriggers: ['payment issues', 'technical problems'],
          phoneNumber: '+1 (555) 123-4567',
          emailAddress: 'receptionist@example.com',
          businessHours: {
            start: '08:00',
            end: '18:00',
            timezone: 'America/New_York',
            workDays: [1, 2, 3, 4, 5, 6] // Monday to Saturday
          },
          outOfOfficeMessage: 'Thank you for your message. Our office is currently closed. We will respond to your inquiry when we return.',
          connectedServices: ['Google Calendar', 'CRM System', 'Email Provider'],
          isLive: true
        });
      }
    }
  }, [agentId]);
  const updateAgentConfig = (step: number, data: any) => {
    setAgentConfig({
      ...agentConfig,
      ...data
    });
  };
  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    } else {
      // If on first step and user clicks back, return to the agent management page
      navigate('/agents');
    }
  };
  const steps = [{
    name: 'Basic Configuration',
    description: 'Set up agent personality and behavior'
  }, {
    name: 'Contact Information',
    description: 'Configure communication channels'
  }, {
    name: 'Integrations',
    description: 'Connect with your existing tools'
  }, {
    name: 'Training & Knowledge',
    description: 'Teach your agent about your business'
  }, {
    name: 'Testing & Launch',
    description: 'Review and activate your agent'
  }];
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicConfiguration config={agentConfig} updateConfig={data => updateAgentConfig(1, data)} />;
      case 2:
        return <ContactInformation config={agentConfig} updateConfig={data => updateAgentConfig(2, data)} />;
      case 3:
        return <Integrations config={agentConfig} updateConfig={data => updateAgentConfig(3, data)} />;
      case 4:
        return <TrainingKnowledge config={agentConfig} updateConfig={data => updateAgentConfig(4, data)} />;
      case 5:
        return <TestingLaunch config={agentConfig} updateConfig={data => updateAgentConfig(5, data)} />;
      default:
        return null;
    }
  };
  return <div className="w-full min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {agentId ? 'Edit Agent' : 'Create New Agent'}
          </h1>
          <p className="text-gray-600 mt-1">
            {agentId ? 'Update your agent settings' : 'Follow these steps to set up your AI agent'}
          </p>
        </div>
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => <div key={index} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep > index + 1 ? 'bg-green-500 text-white' : currentStep === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {currentStep > index + 1 ? <Check className="w-5 h-5" /> : <span>{index + 1}</span>}
                </div>
                <div className="text-xs font-medium text-gray-500 mt-2 text-center w-24">
                  {step.name}
                </div>
              </div>)}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-5 right-5 flex">
              {[...Array(4)].map((_, index) => <div key={index} className={`h-1 flex-1 ${currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />)}
            </div>
          </div>
        </div>
        {/* Current Step */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {steps[currentStep - 1].name}
          </h2>
          <p className="text-gray-600 mb-6">
            {steps[currentStep - 1].description}
          </p>
          <div className="py-4">{renderStep()}</div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button onClick={prevStep} className="flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <ArrowLeft className="w-5 h-5 mr-2" />
            {currentStep === 1 ? 'Cancel' : 'Previous Step'}
          </button>
          {currentStep < 5 ? <button onClick={nextStep} className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Next Step
              <ArrowRight className="w-5 h-5 ml-2" />
            </button> : <button onClick={() => {
          updateAgentConfig(5, {
            isLive: true
          });
          // Navigate back to agent management after saving
          navigate('/agents');
        }} className="flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
              {agentId ? 'Save Changes' : 'Launch Agent'}
              <Check className="w-5 h-5 ml-2" />
            </button>}
        </div>
      </main>
    </div>;
};