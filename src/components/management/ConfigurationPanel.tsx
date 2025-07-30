import React, { useState } from 'react';
import { Sliders, User, Clock, Link, MessageSquare, Save, PlayCircle, PauseCircle, AlertTriangle } from 'lucide-react';
export const ConfigurationPanel = ({
  agent
}: {
  agent: any;
}) => {
  const [isActive, setIsActive] = useState(agent.status === 'active');
  const [tone, setTone] = useState(70); // Professional (0) ↔ Friendly (100)
  const [formality, setFormality] = useState(40); // Formal (0) ↔ Casual (100)
  const [responseSpeed, setResponseSpeed] = useState('balanced');
  const [escalationThreshold, setEscalationThreshold] = useState(3);
  const [businessHours, setBusinessHours] = useState({
    start: '09:00',
    end: '17:00',
    timezone: 'America/New_York',
    workDays: [1, 2, 3, 4, 5] // Monday to Friday
  });
  const [connectedServices, setConnectedServices] = useState([{
    id: 'gmail',
    name: 'Gmail',
    status: 'connected',
    lastSync: new Date().toISOString()
  }, {
    id: 'google_calendar',
    name: 'Google Calendar',
    status: 'connected',
    lastSync: new Date().toISOString()
  }, {
    id: 'salesforce',
    name: 'Salesforce',
    status: 'error',
    lastSync: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  }]);
  const [customResponses, setCustomResponses] = useState([{
    id: 'greeting',
    name: 'Greeting',
    content: "Hello! I'm ReceptionistPro, how may I assist you today?"
  }, {
    id: 'busy',
    name: 'Busy Response',
    content: "I understand you're trying to reach someone at our company. Everyone is currently busy, but I can take a message or help you schedule a callback."
  }, {
    id: 'closing',
    name: 'Closing',
    content: 'Thank you for contacting us. Is there anything else I can help you with today?'
  }]);
  // Days of the week
  const daysOfWeek = [{
    value: 0,
    label: 'Sun'
  }, {
    value: 1,
    label: 'Mon'
  }, {
    value: 2,
    label: 'Tue'
  }, {
    value: 3,
    label: 'Wed'
  }, {
    value: 4,
    label: 'Thu'
  }, {
    value: 5,
    label: 'Fri'
  }, {
    value: 6,
    label: 'Sat'
  }];
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
  const toggleWorkDay = (day: number) => {
    const newWorkDays = businessHours.workDays.includes(day) ? businessHours.workDays.filter(d => d !== day) : [...businessHours.workDays, day].sort();
    setBusinessHours({
      ...businessHours,
      workDays: newWorkDays
    });
  };
  const updateCustomResponse = (id: string, content: string) => {
    setCustomResponses(customResponses.map(response => response.id === id ? {
      ...response,
      content
    } : response));
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Configuration Panel</h2>
        <div className="flex space-x-4">
          <button onClick={() => setIsActive(!isActive)} className={`flex items-center px-4 py-2 rounded-md ${isActive ? 'bg-red-100 text-red-700 hover:bg-red-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}>
            {isActive ? <>
                <PauseCircle className="h-5 w-5 mr-2" />
                Pause Agent
              </> : <>
                <PlayCircle className="h-5 w-5 mr-2" />
                Activate Agent
              </>}
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Save className="h-5 w-5 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personality Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <User className="h-5 w-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Personality</h3>
          </div>
          <div className="space-y-6">
            {/* Tone Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Tone
                </label>
                <span className="text-xs text-gray-500">
                  {tone < 30 ? 'Professional' : tone > 70 ? 'Friendly' : 'Balanced'}
                </span>
              </div>
              <input type="range" min="0" max="100" value={tone} onChange={e => setTone(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Professional</span>
                <span>Friendly</span>
              </div>
            </div>
            {/* Formality Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Formality
                </label>
                <span className="text-xs text-gray-500">
                  {formality < 30 ? 'Formal' : formality > 70 ? 'Casual' : 'Balanced'}
                </span>
              </div>
              <input type="range" min="0" max="100" value={formality} onChange={e => setFormality(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Formal</span>
                <span>Casual</span>
              </div>
            </div>
            {/* Response Speed */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Response Speed
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button onClick={() => setResponseSpeed('fast')} className={`p-2 text-center text-sm rounded-md ${responseSpeed === 'fast' ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}>
                  Fast
                </button>
                <button onClick={() => setResponseSpeed('balanced')} className={`p-2 text-center text-sm rounded-md ${responseSpeed === 'balanced' ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}>
                  Balanced
                </button>
                <button onClick={() => setResponseSpeed('thorough')} className={`p-2 text-center text-sm rounded-md ${responseSpeed === 'thorough' ? 'bg-blue-100 text-blue-700 border border-blue-300' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}>
                  Thorough
                </button>
              </div>
            </div>
            {/* Escalation Threshold */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Escalation Threshold
              </label>
              <select value={escalationThreshold} onChange={e => setEscalationThreshold(parseInt(e.target.value))} className="w-full p-2 border border-gray-300 rounded-md">
                <option value={1}>Low - Escalate quickly</option>
                <option value={2}>Medium-Low</option>
                <option value={3}>Medium</option>
                <option value={4}>Medium-High</option>
                <option value={5}>High - Try to resolve most issues</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Controls how many attempts the agent will make before escalating
                to a human.
              </p>
            </div>
          </div>
        </div>
        {/* Business Hours */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Business Hours
            </h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <input type="time" value={businessHours.start} onChange={e => setBusinessHours({
                ...businessHours,
                start: e.target.value
              })} className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <input type="time" value={businessHours.end} onChange={e => setBusinessHours({
                ...businessHours,
                end: e.target.value
              })} className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Timezone
              </label>
              <select value={businessHours.timezone} onChange={e => setBusinessHours({
              ...businessHours,
              timezone: e.target.value
            })} className="w-full p-2 border border-gray-300 rounded-md">
                {timezones.map(timezone => <option key={timezone.value} value={timezone.value}>
                    {timezone.label}
                  </option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Working Days
              </label>
              <div className="flex flex-wrap gap-2">
                {daysOfWeek.map(day => <button key={day.value} onClick={() => toggleWorkDay(day.value)} className={`px-3 py-1 rounded-md text-sm ${businessHours.workDays.includes(day.value) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {day.label}
                  </button>)}
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  After-Hours Behavior
                </label>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="voicemail" name="after-hours" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" defaultChecked />
                  <label htmlFor="voicemail" className="ml-2 text-sm text-gray-700">
                    Take voicemail/message
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="callback" name="after-hours" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <label htmlFor="callback" className="ml-2 text-sm text-gray-700">
                    Schedule callback during business hours
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="emergency" name="after-hours" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <label htmlFor="emergency" className="ml-2 text-sm text-gray-700">
                    Provide emergency contact option
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Integrations */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Link className="h-5 w-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Integrations</h3>
          </div>
          <div className="space-y-4">
            {connectedServices.map(service => <div key={service.id} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-md">
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full mr-2 ${service.status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="text-sm font-medium text-gray-800">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center">
                  {service.status === 'error' && <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />}
                  <span className="text-xs text-gray-500 mr-3">
                    {service.status === 'connected' ? `Synced ${new Date(service.lastSync).toLocaleDateString()}` : 'Connection error'}
                  </span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    {service.status === 'connected' ? 'Configure' : 'Reconnect'}
                  </button>
                </div>
              </div>)}
            <button className="w-full py-2 border border-dashed border-gray-300 rounded-md text-sm text-blue-600 hover:text-blue-800 hover:border-blue-300">
              + Connect New Service
            </button>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Permissions
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">Calendar Access</label>
                <select className="text-sm border border-gray-300 rounded-md p-1">
                  <option>Read & Write</option>
                  <option>Read Only</option>
                  <option>No Access</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">Email Access</label>
                <select className="text-sm border border-gray-300 rounded-md p-1">
                  <option>Read & Write</option>
                  <option>Read Only</option>
                  <option>No Access</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600">CRM Access</label>
                <select className="text-sm border border-gray-300 rounded-md p-1">
                  <option>Read & Write</option>
                  <option>Read Only</option>
                  <option>No Access</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Custom Responses */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 lg:col-span-3">
          <div className="flex items-center mb-4">
            <MessageSquare className="h-5 w-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Custom Responses
            </h3>
          </div>
          <div className="space-y-4">
            {customResponses.map(response => <div key={response.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-700">
                    {response.name}
                  </h4>
                  <div className="flex space-x-2">
                    <button className="text-xs text-blue-600 hover:text-blue-800">
                      Test
                    </button>
                    <button className="text-xs text-blue-600 hover:text-blue-800">
                      Reset to Default
                    </button>
                  </div>
                </div>
                <textarea value={response.content} onChange={e => updateCustomResponse(response.id, e.target.value)} rows={3} className="w-full p-2 border border-gray-300 rounded-md text-sm" />
                <p className="text-xs text-gray-500 mt-1">
                  Use variables like {'{customer_name}'}, {'{company_name}'},
                  etc. for personalization.
                </p>
              </div>)}
            <button className="w-full py-2 border border-dashed border-gray-300 rounded-md text-sm text-blue-600 hover:text-blue-800 hover:border-blue-300">
              + Add Custom Response
            </button>
          </div>
        </div>
      </div>
    </div>;
};