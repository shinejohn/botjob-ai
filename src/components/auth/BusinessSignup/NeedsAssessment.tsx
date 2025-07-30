import React from 'react';
export const NeedsAssessment = ({
  onNext,
  onBack
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  return <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        What kind of help do you need?
      </h2>
      <p className="text-gray-600 mb-6">
        Help us understand your needs so we can recommend the right AI agents.
      </p>
      <div className="space-y-6">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Describe in your own words what you need help with:
          </label>
          <textarea id="description" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="E.g., I need help managing customer inquiries via phone and email, scheduling appointments, and following up with clients..."></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quick selection:
          </label>
          <div className="flex flex-wrap gap-2">
            {['Answer phones', 'Manage calendar', 'Process invoices', 'Customer support', 'Lead qualification', 'Data entry', 'Email management', 'Social media', 'Content creation'].map(task => <button key={task} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition">
                {task}
              </button>)}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly budget:
          </label>
          <div className="px-2">
            <input type="range" min="0" max="500" step="50" defaultValue="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$0</span>
              <span>$100</span>
              <span>$200</span>
              <span>$300</span>
              <span>$400</span>
              <span>$500+</span>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            When do you need this?
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['Immediately', 'Within a week', 'This month'].map(timeframe => <button key={timeframe} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition">
                {timeframe}
              </button>)}
          </div>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <button onClick={onBack} className="w-1/2 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">
          Back
        </button>
        <button onClick={onNext} className="w-1/2 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Continue
        </button>
      </div>
    </div>;
};