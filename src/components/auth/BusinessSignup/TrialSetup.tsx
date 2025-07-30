import React from 'react';
import { Check, Star } from 'lucide-react';
export const TrialSetup = ({
  onComplete,
  onBack
}: {
  onComplete: () => void;
  onBack: () => void;
}) => {
  const recommendedAgents = [{
    name: 'ReceptionistBot',
    description: 'Answers calls and schedules appointments',
    price: '$29/month',
    rating: 4.8,
    reviews: 124,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  }, {
    name: 'EmailManager',
    description: 'Handles customer inquiries via email',
    price: '$19/month',
    rating: 4.7,
    reviews: 98,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  }, {
    name: 'InvoiceProcessor',
    description: 'Processes invoices and payment reminders',
    price: '$39/month',
    rating: 4.9,
    reviews: 87,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }];
  return <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Start your free trial
      </h2>
      <p className="text-gray-600 mb-6">
        Based on your needs, we recommend these AI agents:
      </p>
      <div className="mb-8">
        <div className="space-y-4">
          {recommendedAgents.map((agent, index) => <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition">
              <div className="flex-shrink-0 mr-4">
                <img src={agent.image} alt={agent.name} className="w-12 h-12 rounded-full" />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-900">{agent.name}</h3>
                <p className="text-sm text-gray-600">{agent.description}</p>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-700">
                    {agent.rating} ({agent.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div className="text-blue-600 font-medium">{agent.price}</div>
                <div className="text-xs text-gray-500">Free during trial</div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="font-medium text-gray-900 mb-4">Payment Information</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
                Name on card
              </label>
              <input type="text" id="card-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="John Smith" />
            </div>
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                Card number
              </label>
              <input type="text" id="card-number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="1234 5678 9012 3456" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
                Expiration
              </label>
              <input type="text" id="expiration" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="MM/YY" />
            </div>
            <div className="col-span-1">
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <input type="text" id="cvc" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="123" />
            </div>
            <div className="col-span-1">
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <input type="text" id="zip" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="12345" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-start">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Check className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              No charge during your 14-day trial
            </h3>
            <p className="text-sm text-blue-600">
              You won't be charged until your trial ends on May 14, 2023. You
              can cancel anytime before then.
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={onBack} className="w-1/2 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">
          Back
        </button>
        <button onClick={onComplete} className="w-1/2 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Start Free Trial
        </button>
      </div>
    </div>;
};