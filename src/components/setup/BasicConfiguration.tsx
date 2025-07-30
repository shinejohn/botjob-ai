import React, { useEffect, useState } from 'react';
import { HelpCircle } from 'lucide-react';
interface BasicConfigProps {
  config: any;
  updateConfig: (data: any) => void;
}
export const BasicConfiguration: React.FC<BasicConfigProps> = ({
  config,
  updateConfig
}) => {
  const [name, setName] = useState(config.name || '');
  const [companyInfo, setCompanyInfo] = useState(config.companyInfo || '');
  const [tone, setTone] = useState(config.tone || 50);
  const [formality, setFormality] = useState(config.formality || 50);
  const [responseSpeed, setResponseSpeed] = useState(config.responseSpeed || 'normal');
  const [escalationTriggers, setEscalationTriggers] = useState(config.escalationTriggers || []);
  // Suggested agent names based on roles
  const suggestedNames = ['ReceptionistPro', 'SalesAssistant', 'CustomerSupportBot', 'BookingAgent', 'LeadQualifier', 'ITHelpdesk', 'MarketingCoordinator'];
  // Common escalation triggers
  const commonTriggers = ['Angry customer', 'Request for human agent', 'Payment processing', 'Refund request', 'Technical problem', 'Legal question', 'Complaint'];
  // Update parent component when form values change
  useEffect(() => {
    updateConfig({
      name,
      companyInfo,
      tone,
      formality,
      responseSpeed,
      escalationTriggers
    });
  }, [name, companyInfo, tone, formality, responseSpeed, escalationTriggers]);
  const handleTriggerToggle = (trigger: string) => {
    if (escalationTriggers.includes(trigger)) {
      setEscalationTriggers(escalationTriggers.filter(t => t !== trigger));
    } else {
      setEscalationTriggers([...escalationTriggers, trigger]);
    }
  };
  return <div className="space-y-8">
      {/* Agent Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Agent Name
        </label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter a name for your agent" />
        <div className="mt-3">
          <p className="text-sm text-gray-500 mb-2">Suggested names:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedNames.map((suggestedName, index) => <button key={index} onClick={() => setName(suggestedName)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700">
                {suggestedName}
              </button>)}
          </div>
        </div>
      </div>
      {/* Company Information */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Information
        </label>
        <textarea value={companyInfo} onChange={e => setCompanyInfo(e.target.value)} rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter information about your company that should be included in agent responses" />
        <p className="text-xs text-gray-500 mt-1">
          This information will help your agent accurately represent your
          business.
        </p>
      </div>
      {/* Tone Slider */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-medium text-gray-700">
            Tone
          </label>
          <button className="text-gray-400 hover:text-gray-600">
            <HelpCircle className="h-4 w-4" />
          </button>
        </div>
        <input type="range" min="0" max="100" value={tone} onChange={e => setTone(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Professional</span>
          <span>Friendly</span>
        </div>
      </div>
      {/* Formality Slider */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-sm font-medium text-gray-700">
            Formality
          </label>
          <button className="text-gray-400 hover:text-gray-600">
            <HelpCircle className="h-4 w-4" />
          </button>
        </div>
        <input type="range" min="0" max="100" value={formality} onChange={e => setFormality(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Formal</span>
          <span>Casual</span>
        </div>
      </div>
      {/* Response Speed */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Response Speed
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div onClick={() => setResponseSpeed('fast')} className={`border ${responseSpeed === 'fast' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-blue-500`}>
            <div className="font-medium mb-1">Fast</div>
            <div className="text-sm text-gray-500">
              Respond quickly, prioritizing speed over detail
            </div>
          </div>
          <div onClick={() => setResponseSpeed('normal')} className={`border ${responseSpeed === 'normal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-blue-500`}>
            <div className="font-medium mb-1">Balanced</div>
            <div className="text-sm text-gray-500">
              Balance between speed and thoroughness
            </div>
          </div>
          <div onClick={() => setResponseSpeed('thorough')} className={`border ${responseSpeed === 'thorough' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-blue-500`}>
            <div className="font-medium mb-1">Thorough</div>
            <div className="text-sm text-gray-500">
              Take time to provide detailed responses
            </div>
          </div>
        </div>
      </div>
      {/* Escalation Triggers */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Escalation Triggers
        </label>
        <p className="text-sm text-gray-500 mb-3">
          Select situations when your agent should escalate to a human:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonTriggers.map((trigger, index) => <div key={index} className="flex items-center">
              <input type="checkbox" id={`trigger-${index}`} checked={escalationTriggers.includes(trigger)} onChange={() => handleTriggerToggle(trigger)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor={`trigger-${index}`} className="ml-2 text-sm text-gray-700">
                {trigger}
              </label>
            </div>)}
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Custom Trigger
          </label>
          <div className="flex">
            <input type="text" className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter custom escalation trigger" id="custom-trigger" />
            <button onClick={() => {
            const customTrigger = (document.getElementById('custom-trigger') as HTMLInputElement).value;
            if (customTrigger && !escalationTriggers.includes(customTrigger)) {
              setEscalationTriggers([...escalationTriggers, customTrigger]);
              (document.getElementById('custom-trigger') as HTMLInputElement).value = '';
            }
          }} className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>;
};