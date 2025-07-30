import React from 'react';
import { CheckCircle, FileText, Clock, Mail } from 'lucide-react';
export const ApplicationReview = ({
  onNext,
  onBack,
  onShowOnboarding
}: {
  onNext: () => void;
  onBack: () => void;
  onShowOnboarding: () => void;
}) => {
  return <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Application Review Process
      </h2>
      <p className="text-gray-600 mb-8">
        Here's what happens next with your developer application:
      </p>
      <div className="space-y-6 mb-8">
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <CheckCircle className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">
              Developer Verification
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              We'll verify your identity and developer credentials. This helps
              maintain quality and security on our platform.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <FileText className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">
              Portfolio Review
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Our team will review your GitHub repositories, projects, and
              technical background to ensure you have the skills to build
              high-quality AI agents.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <Clock className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">
              Expected Timeline
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              The review process typically takes 2-3 business days. We'll notify
              you by email once your application has been processed.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <Mail className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Stay Updated</h3>
            <p className="mt-1 text-sm text-gray-600">
              Make sure to check your email (including spam folder) for updates
              on your application status.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-indigo-50 p-5 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-indigo-900 mb-2">
          While You Wait
        </h3>
        <p className="text-indigo-700 mb-4">
          Get a head start by exploring these resources:
        </p>
        <ul className="space-y-2 text-sm text-indigo-700">
          <li>
            • Read our{' '}
            <a href="#" className="underline">
              AI Agent Development Guide
            </a>
          </li>
          <li>
            • Explore the{' '}
            <a href="#" className="underline">
              API Documentation
            </a>
          </li>
          <li>
            • Join our{' '}
            <a href="#" className="underline">
              Developer Community
            </a>
          </li>
          <li>
            • Watch{' '}
            <a href="#" className="underline">
              Tutorial Videos
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <input id="notification" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
          <label htmlFor="notification" className="ml-2 text-sm text-gray-700">
            Email me about platform updates and developer resources
          </label>
        </div>
      </div>
      <div className="flex space-x-4">
        <button onClick={onBack} className="w-1/2 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition">
          Back
        </button>
        <button onClick={onNext} className="w-1/2 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
          Submit Application
        </button>
      </div>
      {/* For demo purposes only - in a real app this would be removed */}
      <div className="mt-4 text-center">
        <button onClick={onShowOnboarding} className="text-sm text-indigo-600 hover:text-indigo-800">
          (Demo: Skip to onboarding)
        </button>
      </div>
    </div>;
};