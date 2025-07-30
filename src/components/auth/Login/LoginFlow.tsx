import React, { useState } from 'react';
import { StandardLogin } from './StandardLogin';
import { TwoFactorAuth } from './TwoFactorAuth';
import { PasswordReset } from './PasswordReset';
import { X } from 'lucide-react';
export const LoginFlow = ({
  onClose,
  onShowSignup
}: {
  onClose: () => void;
  onShowSignup: () => void;
}) => {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'twoFactor' | 'passwordReset'>('login');
  const [email, setEmail] = useState('');
  // Navigation options
  const navigationOptions = [{
    id: 'login',
    label: 'Login'
  }, {
    id: 'twoFactor',
    label: '2FA Verification'
  }, {
    id: 'passwordReset',
    label: 'Password Reset'
  }];
  return <div className="py-12 bg-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900">Authentication</h1>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100" aria-label="Close login form">
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        {/* Navigation tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {navigationOptions.map(option => <button key={option.id} onClick={() => setCurrentScreen(option.id as any)} className={`py-2 px-4 text-sm font-medium ${currentScreen === option.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              {option.label}
            </button>)}
        </div>
        {/* Demo mode notice */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-md p-3 mb-6">
          <p className="text-sm text-yellow-800">
            <strong>Demo Mode:</strong> Use the tabs above to navigate between
            different authentication screens.
          </p>
        </div>
        {currentScreen === 'login' && <StandardLogin onTwoFactorRequired={() => setCurrentScreen('twoFactor')} onForgotPassword={() => setCurrentScreen('passwordReset')} onShowSignup={onShowSignup} setEmail={setEmail} />}
        {currentScreen === 'twoFactor' && <TwoFactorAuth email={email || 'demo@example.com'} onBack={() => setCurrentScreen('login')} onComplete={onClose} />}
        {currentScreen === 'passwordReset' && <PasswordReset onBack={() => setCurrentScreen('login')} setEmail={setEmail} />}
      </div>
    </div>;
};