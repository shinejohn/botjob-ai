import React, { useState } from 'react';
import { Calendar, AlertTriangle, Download, HelpCircle, Phone, Mail, MessageSquare, Clock } from 'lucide-react';
export const CurrentUsage = () => {
  const [billingPeriod, setBillingPeriod] = useState('current');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [downloadType, setDownloadType] = useState('');
  // Sample usage data
  const usageData = {
    current: {
      startDate: 'May 1, 2023',
      endDate: 'May 31, 2023',
      daysRemaining: 12,
      totalEstimate: 382.5,
      baseSubscription: 149.99,
      agentUsage: {
        total: 232.51,
        breakdown: [{
          name: 'Customer Support Bot',
          usage: 98.75,
          metrics: {
            minutes: 412,
            maxMinutes: 600,
            messages: 1247,
            maxMessages: 2000
          }
        }, {
          name: 'Sales Assistant',
          usage: 76.32,
          metrics: {
            minutes: 287,
            maxMinutes: 400,
            messages: 843,
            maxMessages: 1500
          }
        }, {
          name: 'Data Analyst Assistant',
          usage: 57.44,
          metrics: {
            minutes: 104,
            maxMinutes: 300,
            messages: 526,
            maxMessages: 1000
          }
        }]
      },
      alerts: [{
        type: 'warning',
        message: 'Customer Support Bot approaching minutes limit (69% used)',
        date: 'May 19, 2023'
      }, {
        type: 'info',
        message: 'Sales Assistant usage increased 15% from last week',
        date: 'May 17, 2023'
      }]
    },
    previous: {
      startDate: 'April 1, 2023',
      endDate: 'April 30, 2023',
      totalAmount: 356.87,
      baseSubscription: 149.99,
      agentUsage: {
        total: 206.88,
        breakdown: [{
          name: 'Customer Support Bot',
          usage: 92.45,
          metrics: {
            minutes: 385,
            maxMinutes: 600,
            messages: 1198,
            maxMessages: 2000
          }
        }, {
          name: 'Sales Assistant',
          usage: 65.2,
          metrics: {
            minutes: 243,
            maxMinutes: 400,
            messages: 721,
            maxMessages: 1500
          }
        }, {
          name: 'Data Analyst Assistant',
          usage: 49.23,
          metrics: {
            minutes: 87,
            maxMinutes: 300,
            messages: 478,
            maxMessages: 1000
          }
        }]
      }
    }
  };
  const handleDownload = type => {
    setDownloadType(type);
    setShowDownloadModal(true);
  };
  const simulateDownload = () => {
    // In a real application, this would trigger an actual download
    setTimeout(() => {
      setShowDownloadModal(false);
      alert(`${downloadType} download completed successfully!`);
    }, 1500);
  };
  // Get current usage data based on selected period
  const currentData = usageData[billingPeriod === 'current' ? 'current' : 'previous'];
  // Calculate percentage for progress bars
  const getPercentage = (current, max) => {
    return Math.min(Math.round(current / max * 100), 100);
  };
  // Get color for progress bars based on usage percentage
  const getProgressColor = percentage => {
    if (percentage < 60) return 'bg-green-500';
    if (percentage < 85) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  return <div>
      {/* Period Selection and Download */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center mb-4 md:mb-0">
          <Calendar className="h-5 w-5 text-gray-400 mr-2" />
          <div>
            <label htmlFor="billing-period" className="block text-sm font-medium text-gray-700 mb-1">
              Billing Period
            </label>
            <select id="billing-period" value={billingPeriod} onChange={e => setBillingPeriod(e.target.value)} className="border border-gray-300 rounded-md py-1.5 pl-3 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="current">Current Period (May 1-31, 2023)</option>
              <option value="previous">Previous Period (Apr 1-30, 2023)</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-3">
          <button onClick={() => handleDownload('CSV')} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Download CSV
          </button>
          <button onClick={() => handleDownload('PDF')} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </button>
        </div>
      </div>
      {/* Current Period Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              {billingPeriod === 'current' ? 'Current Period' : 'Previous Period'}
            </h2>
            <p className="text-sm text-gray-500">
              {currentData.startDate} - {currentData.endDate}
              {billingPeriod === 'current' && ` (${currentData.daysRemaining} days remaining)`}
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-sm text-gray-500">Estimated Total</p>
            <p className="text-2xl font-bold text-gray-900">
              $
              {billingPeriod === 'current' ? currentData.totalEstimate.toFixed(2) : currentData.totalAmount.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Cost Breakdown
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">
                    Base Subscription
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    ${currentData.baseSubscription.toFixed(2)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{
                  width: `${currentData.baseSubscription / (billingPeriod === 'current' ? currentData.totalEstimate : currentData.totalAmount) * 100}%`
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Agent Usage</span>
                  <span className="text-sm font-medium text-gray-900">
                    ${currentData.agentUsage.total.toFixed(2)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{
                  width: `${currentData.agentUsage.total / (billingPeriod === 'current' ? currentData.totalEstimate : currentData.totalAmount) * 100}%`
                }}></div>
                </div>
              </div>
              {currentData.agentUsage.breakdown.map((agent, index) => <div key={index} className="pl-4 border-l-2 border-gray-200">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-gray-600">{agent.name}</span>
                    <span className="text-xs font-medium text-gray-900">
                      ${agent.usage.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-indigo-400 h-1.5 rounded-full" style={{
                  width: `${agent.usage / currentData.agentUsage.total * 100}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div>
            {billingPeriod === 'current' && <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Usage Alerts
                </h3>
                {currentData.alerts.length > 0 ? <div className="space-y-3">
                    {currentData.alerts.map((alert, index) => <div key={index} className={`p-3 rounded-md flex items-start ${alert.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' : 'bg-blue-50 border border-blue-200'}`}>
                        <AlertTriangle className={`h-5 w-5 ${alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'} mr-2 flex-shrink-0`} />
                        <div className="flex-1">
                          <p className={`text-sm ${alert.type === 'warning' ? 'text-yellow-800' : 'text-blue-800'}`}>
                            {alert.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {alert.date}
                          </p>
                        </div>
                      </div>)}
                  </div> : <p className="text-sm text-gray-500">
                    No alerts for this billing period.
                  </p>}
              </div>}
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Payment Method
            </h3>
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <div className="flex items-center">
                <div className="h-10 w-16 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold mr-3">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Visa ending in 4242
                  </p>
                  <p className="text-xs text-gray-500">Expires 05/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Usage Meters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Usage Meters</h2>
          <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <HelpCircle className="h-4 w-4 mr-1" />
            How are limits calculated?
          </button>
        </div>
        <div className="space-y-6">
          {currentData.agentUsage.breakdown.map((agent, index) => <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-md font-medium text-gray-900">
                  {agent.name}
                </h3>
                <span className="text-sm font-medium text-gray-900">
                  ${agent.usage.toFixed(2)}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        Minutes Used
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {agent.metrics.minutes} / {agent.metrics.maxMinutes}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${getProgressColor(getPercentage(agent.metrics.minutes, agent.metrics.maxMinutes))}`} style={{
                  width: `${getPercentage(agent.metrics.minutes, agent.metrics.maxMinutes)}%`
                }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">
                      {getPercentage(agent.metrics.minutes, agent.metrics.maxMinutes)}
                      % Used
                    </span>
                    <span className="text-xs text-gray-500">
                      {agent.metrics.maxMinutes - agent.metrics.minutes} minutes
                      remaining
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">Messages</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {agent.metrics.messages} / {agent.metrics.maxMessages}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${getProgressColor(getPercentage(agent.metrics.messages, agent.metrics.maxMessages))}`} style={{
                  width: `${getPercentage(agent.metrics.messages, agent.metrics.maxMessages)}%`
                }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">
                      {getPercentage(agent.metrics.messages, agent.metrics.maxMessages)}
                      % Used
                    </span>
                    <span className="text-xs text-gray-500">
                      {agent.metrics.maxMessages - agent.metrics.messages}{' '}
                      messages remaining
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">Calls: 47</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">Emails: 124</span>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View Detailed Usage
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Projected Usage */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Projected Usage</h2>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Projected through {currentData.endDate}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Estimated Total
            </h3>
            <div className="text-2xl font-bold text-gray-900">
              ${currentData.totalEstimate.toFixed(2)}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Based on current usage patterns
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Projected Overages
            </h3>
            <div className="text-2xl font-bold text-amber-600">$0.00</div>
            <div className="mt-2 text-sm text-gray-500">
              No projected overages at current usage
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Next Bill Date
            </h3>
            <div className="text-2xl font-bold text-gray-900">June 1, 2023</div>
            <div className="mt-2 text-sm text-gray-500">Auto-pay enabled</div>
          </div>
        </div>
      </div>
      {/* Download Modal */}
      {showDownloadModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="text-center mb-4">
              <Download className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                Downloading {downloadType} Report
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Your {billingPeriod === 'current' ? 'current' : 'previous'}{' '}
                billing period report is being prepared for download.
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
              <div className="bg-blue-600 h-2.5 rounded-full w-full animate-pulse"></div>
            </div>
            <div className="flex justify-end">
              <button onClick={simulateDownload} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Download Now
              </button>
            </div>
          </div>
        </div>}
    </div>;
};