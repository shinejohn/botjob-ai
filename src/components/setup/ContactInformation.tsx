import React, { useEffect, useState } from 'react';
import { Clock, Plus, Minus } from 'lucide-react';
interface ContactInfoProps {
  config: any;
  updateConfig: (data: any) => void;
}
export const ContactInformation: React.FC<ContactInfoProps> = ({
  config,
  updateConfig
}) => {
  const [phoneNumber, setPhoneNumber] = useState(config.phoneNumber || '');
  const [emailAddress, setEmailAddress] = useState(config.emailAddress || '');
  const [businessHours, setBusinessHours] = useState(config.businessHours || {
    start: '09:00',
    end: '17:00',
    timezone: 'America/New_York',
    workDays: [1, 2, 3, 4, 5] // Monday to Friday
  });
  const [outOfOfficeMessage, setOutOfOfficeMessage] = useState(config.outOfOfficeMessage || '');
  const [useExistingPhone, setUseExistingPhone] = useState(false);
  const [useExistingEmail, setUseExistingEmail] = useState(false);
  // Available phone numbers
  const availablePhoneNumbers = ['+1 (555) 123-4567', '+1 (555) 987-6543', '+1 (555) 456-7890'];
  // Available email domains
  const emailDomains = ['agent.botjob.ai', 'assistant.botjob.ai', 'support.botjob.ai'];
  // Timezones
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
  // Days of the week
  const daysOfWeek = [{
    value: 0,
    label: 'Sunday'
  }, {
    value: 1,
    label: 'Monday'
  }, {
    value: 2,
    label: 'Tuesday'
  }, {
    value: 3,
    label: 'Wednesday'
  }, {
    value: 4,
    label: 'Thursday'
  }, {
    value: 5,
    label: 'Friday'
  }, {
    value: 6,
    label: 'Saturday'
  }];
  // Update parent component when form values change
  useEffect(() => {
    updateConfig({
      phoneNumber,
      emailAddress,
      businessHours,
      outOfOfficeMessage
    });
  }, [phoneNumber, emailAddress, businessHours, outOfOfficeMessage]);
  const toggleWorkDay = (day: number) => {
    const newWorkDays = businessHours.workDays.includes(day) ? businessHours.workDays.filter((d: number) => d !== day) : [...businessHours.workDays, day].sort();
    setBusinessHours({
      ...businessHours,
      workDays: newWorkDays
    });
  };
  return <div className="space-y-8">
      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Phone Number
        </label>
        <div className="flex space-x-4 mb-4">
          <button onClick={() => setUseExistingPhone(false)} className={`flex-1 py-2 px-4 rounded-md ${!useExistingPhone ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
            Get a new number
          </button>
          <button onClick={() => setUseExistingPhone(true)} className={`flex-1 py-2 px-4 rounded-md ${useExistingPhone ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
            Use existing number
          </button>
        </div>
        {useExistingPhone ? <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your existing phone number" /> : <div>
            <p className="text-sm text-gray-500 mb-2">
              Select an available phone number:
            </p>
            <div className="space-y-2">
              {availablePhoneNumbers.map((number, index) => <div key={index} onClick={() => setPhoneNumber(number)} className={`p-3 border ${phoneNumber === number ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} rounded-md cursor-pointer hover:border-blue-500`}>
                  {number}
                </div>)}
            </div>
          </div>}
      </div>
      {/* Email Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Email Address
        </label>
        <div className="flex space-x-4 mb-4">
          <button onClick={() => setUseExistingEmail(false)} className={`flex-1 py-2 px-4 rounded-md ${!useExistingEmail ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
            Create a new email
          </button>
          <button onClick={() => setUseExistingEmail(true)} className={`flex-1 py-2 px-4 rounded-md ${useExistingEmail ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
            Use existing email
          </button>
        </div>
        {useExistingEmail ? <input type="email" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your existing email address" /> : <div className="flex">
            <input type="text" value={emailAddress.split('@')[0] || ''} onChange={e => setEmailAddress(`${e.target.value}@${emailAddress.split('@')[1] || emailDomains[0]}`)} className="flex-1 p-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter prefix" />
            <select value={`@${emailAddress.split('@')[1] || ''}`} onChange={e => {
          const prefix = emailAddress.split('@')[0] || '';
          setEmailAddress(`${prefix}${e.target.value}`);
        }} className="p-3 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500">
              {emailDomains.map((domain, index) => <option key={index} value={`@${domain}`}>
                  @{domain}
                </option>)}
            </select>
          </div>}
      </div>
      {/* Business Hours */}
      <div>
        <div className="flex items-center mb-3">
          <Clock className="h-5 w-5 text-gray-400 mr-2" />
          <label className="text-sm font-medium text-gray-700">
            Business Hours
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">
              Start Time
            </label>
            <input type="time" value={businessHours.start} onChange={e => setBusinessHours({
            ...businessHours,
            start: e.target.value
          })} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">End Time</label>
            <input type="time" value={businessHours.end} onChange={e => setBusinessHours({
            ...businessHours,
            end: e.target.value
          })} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Timezone</label>
          <select value={businessHours.timezone} onChange={e => setBusinessHours({
          ...businessHours,
          timezone: e.target.value
        })} className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            {timezones.map((timezone, index) => <option key={index} value={timezone.value}>
                {timezone.label}
              </option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-2">
            Working Days
          </label>
          <div className="flex flex-wrap gap-2">
            {daysOfWeek.map(day => <button key={day.value} onClick={() => toggleWorkDay(day.value)} className={`px-3 py-1 rounded-md text-sm ${businessHours.workDays.includes(day.value) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {day.label.substring(0, 3)}
              </button>)}
          </div>
        </div>
      </div>
      {/* Out of Office Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Out of Office Message
        </label>
        <textarea value={outOfOfficeMessage} onChange={e => setOutOfOfficeMessage(e.target.value)} rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter a message to be sent when your agent is outside of business hours" />
        <p className="text-xs text-gray-500 mt-1">
          This message will be used when someone contacts your agent outside of
          the specified business hours.
        </p>
        <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-sm font-medium text-gray-700 mb-1">
            Default message:
          </p>
          <p className="text-sm text-gray-600">
            Thank you for contacting us. Our office is currently closed. We'll
            respond to your message during our business hours: Monday-Friday,{' '}
            {businessHours.start} - {businessHours.end}{' '}
            {businessHours.timezone.replace('_', ' ')}.
          </p>
          <button onClick={() => setOutOfOfficeMessage(`Thank you for contacting us. Our office is currently closed. We'll respond to your message during our business hours: Monday-Friday, ${businessHours.start} - ${businessHours.end} ${businessHours.timezone.replace('_', ' ')}.`)} className="mt-2 text-sm text-blue-600 hover:text-blue-800">
            Use Default
          </button>
        </div>
      </div>
    </div>;
};