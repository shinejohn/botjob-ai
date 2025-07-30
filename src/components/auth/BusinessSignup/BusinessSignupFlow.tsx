import React, { useState } from 'react';
import { BasicInfo } from './BasicInfo';
import { NeedsAssessment } from './NeedsAssessment';
import { TrialSetup } from './TrialSetup';
import { Check, X } from 'lucide-react';
export const BusinessSignupFlow = () => {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const completeSignup = () => {
    setCompleted(true);
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
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <div className={`w-12 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                  <div className={`w-12 h-1 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    3
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="text-xs text-gray-500 w-32 text-center">
                  Basic Information
                </div>
                <div className="text-xs text-gray-500 w-32 text-center">
                  Needs Assessment
                </div>
                <div className="text-xs text-gray-500 w-32 text-center">
                  Trial Setup
                </div>
              </div>
            </div>
            {step === 1 && <BasicInfo onNext={nextStep} />}
            {step === 2 && <NeedsAssessment onNext={nextStep} onBack={prevStep} />}
            {step === 3 && <TrialSetup onComplete={completeSignup} onBack={prevStep} />}
          </> : <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to BotJob.ai!
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Your 14-day free trial has started. Let's get your AI agents set
              up.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition shadow-lg">
              Go to Dashboard
            </button>
          </div>}
      </div>
    </div>;
};