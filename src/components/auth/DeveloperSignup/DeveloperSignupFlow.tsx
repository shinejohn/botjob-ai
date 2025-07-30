import React, { useState } from 'react';
import { DeveloperProfile } from './DeveloperProfile';
import { ApplicationReview } from './ApplicationReview';
import { DeveloperOnboarding } from './DeveloperOnboarding';
import { Check, X } from 'lucide-react';
export const DeveloperSignupFlow = () => {
  const [step, setStep] = useState(1);
  const [approved, setApproved] = useState(false);
  const [completed, setCompleted] = useState(false);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const submitApplication = () => {
    setCompleted(true);
  };
  // This would be triggered after approval in a real app
  const showOnboarding = () => {
    setApproved(true);
    setStep(3);
  };
  return <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <button onClick={() => window.location.reload()} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close signup form">
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        {!completed ? <>
            <div className="mb-8">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <div className={`w-12 h-1 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                  <div className={`w-12 h-1 ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    3
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="text-xs text-gray-500 w-32 text-center">
                  Developer Profile
                </div>
                <div className="text-xs text-gray-500 w-32 text-center">
                  Application Review
                </div>
                <div className="text-xs text-gray-500 w-32 text-center">
                  Developer Onboarding
                </div>
              </div>
            </div>
            {step === 1 && <DeveloperProfile onNext={nextStep} />}
            {step === 2 && <ApplicationReview onNext={submitApplication} onBack={prevStep} onShowOnboarding={showOnboarding} />}
            {step === 3 && approved && <DeveloperOnboarding onComplete={() => setCompleted(true)} />}
          </> : <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted!
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              We'll review your application and get back to you within 2-3
              business days.
            </p>
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium text-lg hover:bg-indigo-700 transition shadow-lg">
              Explore Resources
            </button>
          </div>}
      </div>
    </div>;
};