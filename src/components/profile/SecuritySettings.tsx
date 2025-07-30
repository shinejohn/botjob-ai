import React, { useState } from 'react';
import { Shield, Lock, Key, History, Clock, Save, Copy, Eye, EyeOff, Check, RefreshCw, AlertTriangle } from 'lucide-react';
export const SecuritySettings = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewAPIKey, setShowNewAPIKey] = useState(false);
  const [newAPIKeyValue, setNewAPIKeyValue] = useState('');
  const [dataRetention, setDataRetention] = useState({
    conversationHistory: '90',
    activityLogs: '180',
    userFeedback: '365',
    trainingData: 'forever'
  });
  // Sample API keys
  const [apiKeys, setApiKeys] = useState([{
    id: 'api-key-1',
    name: 'Production API Key',
    prefix: 'pk_live_',
    suffix: 'Kj8fX',
    created: '2023-04-15T10:30:00Z',
    lastUsed: '2023-05-22T14:45:00Z',
    permissions: ['read', 'write']
  }, {
    id: 'api-key-2',
    name: 'Development API Key',
    prefix: 'pk_test_',
    suffix: 'L9pQr',
    created: '2023-04-15T10:35:00Z',
    lastUsed: '2023-05-21T09:12:00Z',
    permissions: ['read']
  }]);
  // Sample access logs
  const accessLogs = [{
    id: 'log-1',
    event: 'Login',
    user: 'john.smith@acme.example.com',
    ip: '192.168.1.1',
    location: 'San Francisco, CA, USA',
    device: 'Chrome on Windows',
    timestamp: '2023-05-22T15:30:00Z',
    status: 'success'
  }, {
    id: 'log-2',
    event: 'API Key Created',
    user: 'john.smith@acme.example.com',
    ip: '192.168.1.1',
    location: 'San Francisco, CA, USA',
    device: 'Chrome on Windows',
    timestamp: '2023-05-22T14:45:00Z',
    status: 'success'
  }, {
    id: 'log-3',
    event: 'Login',
    user: 'john.smith@acme.example.com',
    ip: '209.85.220.41',
    location: 'New York, NY, USA',
    device: 'Firefox on MacOS',
    timestamp: '2023-05-21T10:15:00Z',
    status: 'success'
  }, {
    id: 'log-4',
    event: 'Password Change',
    user: 'john.smith@acme.example.com',
    ip: '192.168.1.1',
    location: 'San Francisco, CA, USA',
    device: 'Chrome on Windows',
    timestamp: '2023-05-20T11:30:00Z',
    status: 'success'
  }, {
    id: 'log-5',
    event: 'Login',
    user: 'john.smith@acme.example.com',
    ip: '87.65.43.21',
    location: 'London, UK',
    device: 'Safari on iOS',
    timestamp: '2023-05-19T08:45:00Z',
    status: 'failed'
  }];
  const handleSaveChanges = () => {
    // In a real app, this would save to the backend
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };
  const generateAPIKey = () => {
    // In a real app, this would call the backend to generate a new API key
    const newKey = 'pk_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setNewAPIKeyValue(newKey);
    setShowNewAPIKey(true);
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You might want to show a toast notification here
  };
  const deleteAPIKey = (keyId: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== keyId));
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)} weeks ago`;
    } else if (diffDays < 365) {
      return `${Math.floor(diffDays / 30)} months ago`;
    } else {
      return `${Math.floor(diffDays / 365)} years ago`;
    }
  };
  return <div className="space-y-8">
      {/* Success Message */}
      {saveSuccess && <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          <span>Security settings updated successfully!</span>
        </div>}
      {/* Password & 2FA */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Lock className="h-5 w-5 mr-2 text-gray-500" />
            Password & Two-Factor Authentication
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Password Change */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Change Password
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="current-password" className="block text-xs text-gray-500 mb-1">
                    Current Password
                  </label>
                  <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} id="current-password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your current password" />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="new-password" className="block text-xs text-gray-500 mb-1">
                    New Password
                  </label>
                  <input type="password" id="new-password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your new password" />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-xs text-gray-500 mb-1">
                    Confirm New Password
                  </label>
                  <input type="password" id="confirm-password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Confirm your new password" />
                </div>
                <div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Update Password
                  </button>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
                <h4 className="text-xs font-medium text-gray-700 mb-1">
                  Password Requirements
                </h4>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-1" />
                    At least 8 characters
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-1" />
                    At least one uppercase letter
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-1" />
                    At least one number
                  </li>
                  <li className="flex items-center">
                    <Check className="h-3 w-3 text-green-500 mr-1" />
                    At least one special character
                  </li>
                </ul>
              </div>
            </div>
            {/* Two-Factor Authentication */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Two-Factor Authentication (2FA)
              </h3>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md mb-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-0.5">
                    <input id="enable-2fa" type="checkbox" checked={twoFactorEnabled} onChange={() => {
                    if (!twoFactorEnabled) {
                      setShowQRCode(true);
                    }
                    setTwoFactorEnabled(!twoFactorEnabled);
                  }} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="enable-2fa" className="text-sm font-medium text-gray-700">
                      Enable Two-Factor Authentication
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      Add an extra layer of security to your account by
                      requiring a verification code in addition to your
                      password.
                    </p>
                  </div>
                </div>
              </div>
              {showQRCode && <div className="border border-gray-200 rounded-md p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Set Up Two-Factor Authentication
                  </h4>
                  <ol className="text-xs text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium mr-2 flex-shrink-0">
                        1
                      </span>
                      <div>
                        <p>
                          Download and install an authenticator app on your
                          mobile device.
                        </p>
                        <p className="text-gray-500 mt-1">
                          Recommended apps: Google Authenticator, Microsoft
                          Authenticator, Authy
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium mr-2 flex-shrink-0">
                        2
                      </span>
                      <div>
                        <p>Scan this QR code with your authenticator app:</p>
                        <div className="mt-2 bg-white p-3 inline-block rounded-md border border-gray-300">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="2FA QR Code" className="h-32 w-32" />
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium mr-2 flex-shrink-0">
                        3
                      </span>
                      <div>
                        <p>
                          Enter the 6-digit verification code from your
                          authenticator app:
                        </p>
                        <div className="mt-2 flex space-x-2">
                          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter 6-digit code" maxLength={6} />
                          <button className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Verify
                          </button>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <div>
                        <h5 className="text-xs font-medium text-yellow-800">
                          Important: Save Your Backup Codes
                        </h5>
                        <p className="text-xs text-yellow-700 mt-1">
                          If you lose access to your authenticator app, you'll
                          need these backup codes to sign in.
                        </p>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <div className="bg-white px-2 py-1 text-xs font-mono border border-yellow-200 rounded">
                            ABCD-EFGH-1234
                          </div>
                          <div className="bg-white px-2 py-1 text-xs font-mono border border-yellow-200 rounded">
                            IJKL-MNOP-5678
                          </div>
                          <div className="bg-white px-2 py-1 text-xs font-mono border border-yellow-200 rounded">
                            QRST-UVWX-9012
                          </div>
                          <div className="bg-white px-2 py-1 text-xs font-mono border border-yellow-200 rounded">
                            YZAB-CDEF-3456
                          </div>
                        </div>
                        <button className="mt-2 text-xs text-yellow-800 hover:text-yellow-900 flex items-center">
                          <Copy className="h-3 w-3 mr-1" />
                          Copy all codes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>}
              {twoFactorEnabled && !showQRCode && <div className="p-4 border border-green-200 bg-green-50 rounded-md">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-medium text-green-800">
                        Two-Factor Authentication is Enabled
                      </h4>
                      <p className="text-xs text-green-700 mt-1">
                        Your account is protected with two-factor
                        authentication. You'll need to enter a verification code
                        when signing in from a new device.
                      </p>
                      <div className="mt-3 flex space-x-3">
                        <button className="text-xs text-green-800 hover:text-green-900 flex items-center">
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Regenerate backup codes
                        </button>
                        <button className="text-xs text-green-800 hover:text-green-900 flex items-center">
                          <Lock className="h-3 w-3 mr-1" />
                          Change authenticator app
                        </button>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
      {/* API Key Management */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Key className="h-5 w-5 mr-2 text-gray-500" />
            API Key Management
          </h2>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">
              Create and manage API keys for integrating with our platform. Keep
              your API keys secure.
            </p>
            <button onClick={generateAPIKey} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <Key className="h-4 w-4 mr-2" />
              Generate New API Key
            </button>
          </div>
          {showNewAPIKey && <div className="mb-6 p-4 border border-yellow-200 bg-yellow-50 rounded-md">
              <h3 className="text-sm font-medium text-yellow-800 mb-2">
                Your New API Key
              </h3>
              <p className="text-xs text-yellow-700 mb-3">
                This is the only time your API key will be displayed. Please
                copy it now and keep it secure.
              </p>
              <div className="flex">
                <input type="text" value={newAPIKeyValue} readOnly className="flex-1 px-3 py-2 bg-white border border-yellow-300 rounded-l-md text-sm font-mono" />
                <button onClick={() => copyToClipboard(newAPIKeyValue)} className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded-r-md border border-yellow-300 border-l-0 hover:bg-yellow-200">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    API Key
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Used
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Permissions
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {apiKeys.map(key => <tr key={key.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {key.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                      {key.prefix}•••••••••••{key.suffix}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(key.created)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatTimeAgo(key.lastUsed)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-1">
                        {key.permissions.includes('read') && <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs">
                            Read
                          </span>}
                        {key.permissions.includes('write') && <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">
                            Write
                          </span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => deleteAPIKey(key.id)} className="text-red-600 hover:text-red-900">
                        Revoke
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              API Rate Limits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500">Requests per minute</p>
                <p className="text-lg font-medium text-gray-900">60</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Requests per hour</p>
                <p className="text-lg font-medium text-gray-900">3,600</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Requests per day</p>
                <p className="text-lg font-medium text-gray-900">86,400</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Need higher limits?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Contact us
              </a>{' '}
              to discuss custom rate limits for your enterprise needs.
            </p>
          </div>
        </div>
      </div>
      {/* Access Logs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <History className="h-5 w-5 mr-2 text-gray-500" />
            Access Logs & Audit Trail
          </h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6">
            Review recent account activity and security events. If you notice
            any suspicious activity, please change your password immediately.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IP Address
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Device
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {accessLogs.map(log => <tr key={log.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {log.event}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.ip}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.device}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatTimeAgo(log.timestamp)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${log.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View Full Audit Trail
            </button>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800">
                  Security Tip
                </h4>
                <p className="text-xs text-yellow-700 mt-1">
                  We recommend reviewing your access logs regularly to ensure no
                  unauthorized access to your account. If you see any suspicious
                  activity, change your password immediately and enable
                  two-factor authentication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Data Retention */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-gray-500" />
            Data Retention Preferences
          </h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6">
            Control how long we keep your data. These settings affect data
            privacy and AI agent performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="conversation-history" className="block text-sm font-medium text-gray-700 mb-1">
                Conversation History
              </label>
              <select id="conversation-history" value={dataRetention.conversationHistory} onChange={e => setDataRetention({
              ...dataRetention,
              conversationHistory: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="30">30 days</option>
                <option value="60">60 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">1 year</option>
                <option value="forever">Forever</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                How long to keep conversation history between users and AI
                agents.
              </p>
            </div>
            <div>
              <label htmlFor="activity-logs" className="block text-sm font-medium text-gray-700 mb-1">
                Activity Logs
              </label>
              <select id="activity-logs" value={dataRetention.activityLogs} onChange={e => setDataRetention({
              ...dataRetention,
              activityLogs: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="30">30 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">1 year</option>
                <option value="forever">Forever</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                How long to keep logs of user and agent activities.
              </p>
            </div>
            <div>
              <label htmlFor="user-feedback" className="block text-sm font-medium text-gray-700 mb-1">
                User Feedback & Ratings
              </label>
              <select id="user-feedback" value={dataRetention.userFeedback} onChange={e => setDataRetention({
              ...dataRetention,
              userFeedback: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">1 year</option>
                <option value="730">2 years</option>
                <option value="forever">Forever</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                How long to keep user feedback and ratings for AI agents.
              </p>
            </div>
            <div>
              <label htmlFor="training-data" className="block text-sm font-medium text-gray-700 mb-1">
                Agent Training Data
              </label>
              <select id="training-data" value={dataRetention.trainingData} onChange={e => setDataRetention({
              ...dataRetention,
              trainingData: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="365">1 year</option>
                <option value="730">2 years</option>
                <option value="1095">3 years</option>
                <option value="forever">Forever</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                How long to keep data used to train and improve your AI agents.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <div className="flex items-start">
              <Shield className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">
                  Data Retention Impact
                </h4>
                <p className="text-xs text-blue-700 mt-1">
                  Shorter retention periods enhance privacy but may reduce AI
                  agent performance over time. Longer periods improve agent
                  learning but require more storage.
                </p>
                <p className="text-xs text-blue-700 mt-2">
                  Note: Regulatory requirements may override these settings in
                  certain jurisdictions.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="data-deletion" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="data-deletion" className="font-medium text-gray-700">
                  Data Deletion Request
                </label>
                <p className="text-gray-500">
                  Request deletion of all your data from our platform. This
                  action cannot be undone and will result in the loss of all
                  your AI agents and their training data.
                </p>
                <button className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">
                  Request Data Deletion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex justify-end">
        <button onClick={handleSaveChanges} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <Save className="h-5 w-5 mr-2" />
          Save Security Settings
        </button>
      </div>
    </div>;
};