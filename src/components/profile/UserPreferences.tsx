import React, { useState } from 'react';
import { Bell, Globe, Monitor, Sliders, Save, Check } from 'lucide-react';
export const UserPreferences = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  // Notification Settings
  const [notifications, setNotifications] = useState({
    email: {
      agentActivity: true,
      weeklyReports: true,
      productUpdates: false,
      billingAlerts: true,
      securityAlerts: true
    },
    sms: {
      agentActivity: false,
      billingAlerts: true,
      securityAlerts: true
    },
    inApp: {
      agentActivity: true,
      weeklyReports: true,
      productUpdates: true,
      billingAlerts: true,
      securityAlerts: true
    }
  });
  // Timezone & Language
  const [timezone, setTimezone] = useState('America/New_York');
  const [language, setLanguage] = useState('en-US');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [timeFormat, setTimeFormat] = useState('12h');
  // Accessibility
  const [accessibility, setAccessibility] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false
  });
  // Default Agent Config
  const [defaultAgentConfig, setDefaultAgentConfig] = useState({
    tone: 70,
    responseSpeed: 'balanced',
    loggingLevel: 'standard',
    autoSave: true
  });
  const handleNotificationChange = (channel: 'email' | 'sms' | 'inApp', setting: string, value: boolean) => {
    setNotifications({
      ...notifications,
      [channel]: {
        ...notifications[channel],
        [setting]: value
      }
    });
  };
  const handleAccessibilityChange = (setting: string, value: boolean) => {
    setAccessibility({
      ...accessibility,
      [setting]: value
    });
  };
  const handleSaveChanges = () => {
    // In a real app, this would save to the backend
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };
  // Sample timezone options
  const timezones = [{
    value: 'America/New_York',
    label: 'Eastern Time (ET)'
  }, {
    value: 'America/Chicago',
    label: 'Central Time (CT)'
  }, {
    value: 'America/Denver',
    label: 'Mountain Time (MT)'
  }, {
    value: 'America/Los_Angeles',
    label: 'Pacific Time (PT)'
  }, {
    value: 'Europe/London',
    label: 'Greenwich Mean Time (GMT)'
  }, {
    value: 'Europe/Paris',
    label: 'Central European Time (CET)'
  }, {
    value: 'Asia/Tokyo',
    label: 'Japan Standard Time (JST)'
  }, {
    value: 'Australia/Sydney',
    label: 'Australian Eastern Time (AET)'
  }];
  // Sample language options
  const languages = [{
    value: 'en-US',
    label: 'English (US)'
  }, {
    value: 'en-GB',
    label: 'English (UK)'
  }, {
    value: 'es-ES',
    label: 'Spanish'
  }, {
    value: 'fr-FR',
    label: 'French'
  }, {
    value: 'de-DE',
    label: 'German'
  }, {
    value: 'ja-JP',
    label: 'Japanese'
  }, {
    value: 'zh-CN',
    label: 'Chinese (Simplified)'
  }];
  return <div className="space-y-8">
      {/* Success Message */}
      {saveSuccess && <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          <span>User preferences updated successfully!</span>
        </div>}
      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Bell className="h-5 w-5 mr-2 text-gray-500" />
            Notification Settings
          </h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6">
            Configure how and when you'd like to receive notifications about
            your AI agents and account.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notification Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SMS
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    In-App
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Agent Activity & Alerts
                    <p className="text-xs text-gray-500">
                      Notifications about your agents' performance and issues
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.email.agentActivity} onChange={e => handleNotificationChange('email', 'agentActivity', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.sms.agentActivity} onChange={e => handleNotificationChange('sms', 'agentActivity', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.inApp.agentActivity} onChange={e => handleNotificationChange('inApp', 'agentActivity', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Weekly Reports
                    <p className="text-xs text-gray-500">
                      Weekly summary of your agents' performance and usage
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.email.weeklyReports} onChange={e => handleNotificationChange('email', 'weeklyReports', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <span className="text-gray-400">N/A</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.inApp.weeklyReports} onChange={e => handleNotificationChange('inApp', 'weeklyReports', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Product Updates
                    <p className="text-xs text-gray-500">
                      New features, improvements, and platform updates
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.email.productUpdates} onChange={e => handleNotificationChange('email', 'productUpdates', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <span className="text-gray-400">N/A</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.inApp.productUpdates} onChange={e => handleNotificationChange('inApp', 'productUpdates', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Billing Alerts
                    <p className="text-xs text-gray-500">
                      Payment confirmations, usage limits, and billing issues
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.email.billingAlerts} onChange={e => handleNotificationChange('email', 'billingAlerts', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.sms.billingAlerts} onChange={e => handleNotificationChange('sms', 'billingAlerts', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.inApp.billingAlerts} onChange={e => handleNotificationChange('inApp', 'billingAlerts', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Security Alerts
                    <p className="text-xs text-gray-500">
                      Login attempts, password changes, and security issues
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.email.securityAlerts} onChange={e => handleNotificationChange('email', 'securityAlerts', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.sms.securityAlerts} onChange={e => handleNotificationChange('sms', 'securityAlerts', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    <input type="checkbox" checked={notifications.inApp.securityAlerts} onChange={e => handleNotificationChange('inApp', 'securityAlerts', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Contact Information for Notifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="notification-email" className="block text-xs text-gray-500 mb-1">
                  Email Address
                </label>
                <input type="email" id="notification-email" defaultValue="admin@acme.example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="notification-phone" className="block text-xs text-gray-500 mb-1">
                  Phone Number (for SMS)
                </label>
                <input type="tel" id="notification-phone" defaultValue="+1 (555) 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Timezone & Language */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Globe className="h-5 w-5 mr-2 text-gray-500" />
            Timezone & Language
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                Timezone
              </label>
              <select id="timezone" value={timezone} onChange={e => setTimezone(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                {timezones.map(tz => <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>)}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                This affects how dates and times are displayed throughout the
                application.
              </p>
            </div>
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select id="language" value={language} onChange={e => setLanguage(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                {languages.map(lang => <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>)}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                This sets the language for the user interface. Agent languages
                are configured separately.
              </p>
            </div>
            <div>
              <label htmlFor="date-format" className="block text-sm font-medium text-gray-700 mb-1">
                Date Format
              </label>
              <select id="date-format" value={dateFormat} onChange={e => setDateFormat(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="MM/DD/YYYY">MM/DD/YYYY (e.g. 05/23/2023)</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY (e.g. 23/05/2023)</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD (e.g. 2023-05-23)</option>
              </select>
            </div>
            <div>
              <label htmlFor="time-format" className="block text-sm font-medium text-gray-700 mb-1">
                Time Format
              </label>
              <select id="time-format" value={timeFormat} onChange={e => setTimeFormat(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="12h">12-hour (e.g. 2:30 PM)</option>
                <option value="24h">24-hour (e.g. 14:30)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Accessibility */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-gray-500" />
            Accessibility Options
          </h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6">
            Customize your experience to make the platform more accessible for
            your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="high-contrast" type="checkbox" checked={accessibility.highContrast} onChange={e => handleAccessibilityChange('highContrast', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="high-contrast" className="font-medium text-gray-700">
                  High Contrast Mode
                </label>
                <p className="text-gray-500">
                  Increases contrast between text and background for better
                  readability.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="large-text" type="checkbox" checked={accessibility.largeText} onChange={e => handleAccessibilityChange('largeText', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="large-text" className="font-medium text-gray-700">
                  Larger Text
                </label>
                <p className="text-gray-500">
                  Increases the font size throughout the application.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="reduced-motion" type="checkbox" checked={accessibility.reducedMotion} onChange={e => handleAccessibilityChange('reducedMotion', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="reduced-motion" className="font-medium text-gray-700">
                  Reduced Motion
                </label>
                <p className="text-gray-500">
                  Minimizes animations and transitions throughout the interface.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="screen-reader" type="checkbox" checked={accessibility.screenReader} onChange={e => handleAccessibilityChange('screenReader', e.target.checked)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="screen-reader" className="font-medium text-gray-700">
                  Screen Reader Optimized
                </label>
                <p className="text-gray-500">
                  Enhances compatibility with screen readers and assistive
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="text-size" className="block text-sm font-medium text-gray-700 mb-2">
              Text Size Adjustment
            </label>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-3">A</span>
              <input type="range" id="text-size" min="100" max="200" step="10" defaultValue="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              <span className="text-lg text-gray-500 ml-3">A</span>
            </div>
          </div>
        </div>
      </div>
      {/* Default Agent Configuration */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Sliders className="h-5 w-5 mr-2 text-gray-500" />
            Default Agent Configuration
          </h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6">
            Set default values for new AI agents. These settings can be
            overridden for individual agents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tone Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="default-tone" className="text-sm font-medium text-gray-700">
                  Default Tone
                </label>
                <span className="text-xs text-gray-500">
                  {defaultAgentConfig.tone < 30 ? 'Professional' : defaultAgentConfig.tone > 70 ? 'Friendly' : 'Balanced'}
                </span>
              </div>
              <input type="range" id="default-tone" min="0" max="100" value={defaultAgentConfig.tone} onChange={e => setDefaultAgentConfig({
              ...defaultAgentConfig,
              tone: parseInt(e.target.value)
            })} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Professional</span>
                <span>Friendly</span>
              </div>
            </div>
            {/* Response Speed */}
            <div>
              <label htmlFor="default-response-speed" className="block text-sm font-medium text-gray-700 mb-2">
                Default Response Speed
              </label>
              <select id="default-response-speed" value={defaultAgentConfig.responseSpeed} onChange={e => setDefaultAgentConfig({
              ...defaultAgentConfig,
              responseSpeed: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="fast">
                  Fast - Prioritize speed over detail
                </option>
                <option value="balanced">
                  Balanced - Equal priority to speed and detail
                </option>
                <option value="thorough">
                  Thorough - Prioritize comprehensive responses
                </option>
              </select>
            </div>
            {/* Logging Level */}
            <div>
              <label htmlFor="default-logging" className="block text-sm font-medium text-gray-700 mb-2">
                Default Logging Level
              </label>
              <select id="default-logging" value={defaultAgentConfig.loggingLevel} onChange={e => setDefaultAgentConfig({
              ...defaultAgentConfig,
              loggingLevel: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                <option value="minimal">
                  Minimal - Essential information only
                </option>
                <option value="standard">Standard - Balanced logging</option>
                <option value="verbose">
                  Verbose - Detailed logs for debugging
                </option>
              </select>
            </div>
            {/* Auto-Save */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="auto-save" type="checkbox" checked={defaultAgentConfig.autoSave} onChange={e => setDefaultAgentConfig({
                ...defaultAgentConfig,
                autoSave: e.target.checked
              })} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="auto-save" className="font-medium text-gray-700">
                  Auto-Save Agent Configurations
                </label>
                <p className="text-gray-500">
                  Automatically save changes to agent configurations.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Default Knowledge Base Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="default-max-tokens" className="block text-xs text-gray-500 mb-1">
                  Default Max Tokens
                </label>
                <input type="number" id="default-max-tokens" defaultValue="1024" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="default-temperature" className="block text-xs text-gray-500 mb-1">
                  Default Temperature
                </label>
                <input type="number" id="default-temperature" defaultValue="0.7" min="0" max="1" step="0.1" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex justify-end">
        <button onClick={handleSaveChanges} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <Save className="h-5 w-5 mr-2" />
          Save Preferences
        </button>
      </div>
    </div>;
};