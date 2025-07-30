import React, { useState } from 'react';
interface StandardLoginProps {
  onTwoFactorRequired: () => void;
  onForgotPassword: () => void;
  onShowSignup: () => void;
  setEmail: (email: string) => void;
}
export const StandardLogin = ({
  onTwoFactorRequired,
  onForgotPassword,
  onShowSignup,
  setEmail
}: StandardLoginProps) => {
  const [emailValue, setEmailValue] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(emailValue);
    
    // Test credentials - skip 2FA for demo accounts
    const testAccounts = [
      { email: 'business@example.com', password: 'demo123', type: 'business' },
      { email: 'developer@example.com', password: 'demo123', type: 'developer' },
      { email: 'admin@example.com', password: 'demo123', type: 'admin' }
    ];
    
    const matchedAccount = testAccounts.find(
      account => account.email === emailValue && account.password === password
    );
    
    if (matchedAccount) {
      // Skip 2FA for test accounts - go directly to dashboard
      localStorage.setItem('userType', matchedAccount.type);
      localStorage.setItem('userEmail', matchedAccount.email);
      window.location.href = '/dashboard';
    } else {
      // For other accounts, show 2FA (normal flow)
      onTwoFactorRequired();
    }
  };
  return <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-600 mt-2">Sign in to your BotJob.ai account</p>
      </div>
      
      {/* Test Account Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
        <p className="text-sm font-medium text-blue-900 mb-2">Test Accounts (No 2FA Required):</p>
        <div className="space-y-1 text-sm text-blue-800">
          <p>• Business: <code className="bg-blue-100 px-1 rounded">business@example.com</code> / <code className="bg-blue-100 px-1 rounded">demo123</code></p>
          <p>• Developer: <code className="bg-blue-100 px-1 rounded">developer@example.com</code> / <code className="bg-blue-100 px-1 rounded">demo123</code></p>
          <p>• Admin: <code className="bg-blue-100 px-1 rounded">admin@example.com</code> / <code className="bg-blue-100 px-1 rounded">demo123</code></p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input id="email" type="email" required value={emailValue} onChange={e => setEmailValue(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <button type="button" onClick={onForgotPassword} className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </button>
          </div>
          <input id="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" />
        </div>
        <div className="flex items-center">
          <input id="remember-me" type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <div>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Sign in
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            Google
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <svg className="h-5 w-5 mr-2" fill="#00a1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7 13.5H5.2V2h6.5c2.2 0 3.9 1.7 3.9 3.9 0 2.1-1.7 3.8-3.9 3.8z" />
              <path d="M16.7 22H5.2v-7.5h11.5c2.2 0 3.9 1.7 3.9 3.8 0 2.1-1.7 3.7-3.9 3.7z" />
            </svg>
            Microsoft
          </button>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button onClick={onShowSignup} className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </button>
        </p>
      </div>
    </div>;
};