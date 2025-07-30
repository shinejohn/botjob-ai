import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
interface PasswordResetProps {
  onBack: () => void;
  setEmail: (email: string) => void;
}
export const PasswordReset = ({
  onBack,
  setEmail
}: PasswordResetProps) => {
  const [emailValue, setEmailValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(emailValue);
    // In a real app, this would send a reset link to the email
    setIsSubmitted(true);
  };
  return <div>
      {!isSubmitted ? <>
          <button onClick={onBack} className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to login
          </button>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Reset your password
            </h2>
            <p className="text-gray-600 mt-2">
              Enter your email address and we'll send you a link to reset your
              password
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input id="reset-email" type="email" required value={emailValue} onChange={e => setEmailValue(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Send reset link
              </button>
            </div>
          </form>
        </> : <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Check your email
          </h2>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto">
            We've sent a password reset link to <strong>{emailValue}</strong>.
            The link will expire in 1 hour.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-left mb-6">
            <h3 className="text-sm font-medium text-blue-800 mb-2">
              Didn't receive the email?
            </h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Check your spam or junk folder</li>
              <li>• Make sure you entered the correct email address</li>
              <li>• Allow a few minutes for the email to arrive</li>
            </ul>
          </div>
          <div className="space-y-4">
            <button onClick={() => setIsSubmitted(false)} className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
              Resend reset link
            </button>
            <button onClick={onBack} className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              Back to login
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Need help?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Contact support
            </a>
          </p>
        </div>}
    </div>;
};