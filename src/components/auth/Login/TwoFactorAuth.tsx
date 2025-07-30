import React, { useEffect, useState } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';
interface TwoFactorAuthProps {
  email: string;
  onBack: () => void;
  onComplete: () => void;
}
export const TwoFactorAuth = ({
  email,
  onBack,
  onComplete
}: TwoFactorAuthProps) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [useAuthenticator, setUseAuthenticator] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  // Handle input changes for verification code
  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      // If pasting a full code
      const pastedCode = value.slice(0, 6).split('');
      const newCode = [...verificationCode];
      pastedCode.forEach((char, i) => {
        if (i < 6) newCode[i] = char;
      });
      setVerificationCode(newCode);
      return;
    }
    if (value.match(/^[0-9]$/) || value === '') {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      // Auto-focus next input
      if (value !== '' && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };
  // Handle verification
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would verify the code with a backend
    onComplete();
  };
  // Handle resend code
  const handleResendCode = () => {
    if (resendTimer > 0) return;
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setResendTimer(60);
    }, 1000);
  };
  // Countdown timer for resend code
  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setTimeout(() => {
      setResendTimer(resendTimer - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendTimer]);
  return <div>
      <button onClick={onBack} className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to login
      </button>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Two-Factor Authentication
        </h2>
        <p className="text-gray-600 mt-2">
          {useAuthenticator ? 'Enter the code from your authenticator app' : `We've sent a verification code to ${email}`}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center space-x-2">
          {verificationCode.map((digit, index) => <input key={index} id={`code-${index}`} type="text" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={digit} onChange={e => handleCodeChange(index, e.target.value)} className="w-12 h-14 text-center text-xl border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />)}
        </div>
        <div className="flex justify-center">
          <button type="button" onClick={handleResendCode} disabled={resendTimer > 0 || isResending} className="flex items-center text-sm text-blue-600 hover:text-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed">
            {isResending ? <>
                <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
                Resending code...
              </> : resendTimer > 0 ? `Resend code in ${resendTimer}s` : "Didn't receive code? Resend"}
          </button>
        </div>
        <div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Verify
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="flex items-center justify-center">
          <button onClick={() => setUseAuthenticator(!useAuthenticator)} className="text-sm text-blue-600 hover:text-blue-500">
            {useAuthenticator ? 'Use SMS verification instead' : 'Use authenticator app instead'}
          </button>
        </div>
      </div>
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-blue-800 mb-2">
          Why we use two-factor authentication
        </h3>
        <p className="text-sm text-blue-700">
          Two-factor authentication adds an extra layer of security to your
          account. In addition to your password, you'll need a code that only
          you can access, making it much harder for unauthorized users to gain
          access to your account.
        </p>
      </div>
    </div>;
};