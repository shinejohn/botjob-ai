import React from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Info, ExternalLink, AlertTriangle } from 'lucide-react';
export const RegulationCompliance = () => {
  // Sample compliance data
  const complianceFrameworks = [{
    id: 'gdpr',
    name: 'GDPR',
    status: 'compliant',
    lastChecked: '2023-06-15T10:30:00Z',
    nextReview: '2023-09-15T10:30:00Z',
    requirements: 32,
    compliant: 32,
    inProgress: 0,
    nonCompliant: 0
  }, {
    id: 'hipaa',
    name: 'HIPAA',
    status: 'partial',
    lastChecked: '2023-06-10T14:45:00Z',
    nextReview: '2023-09-10T14:45:00Z',
    requirements: 28,
    compliant: 22,
    inProgress: 6,
    nonCompliant: 0
  }, {
    id: 'ccpa',
    name: 'CCPA',
    status: 'compliant',
    lastChecked: '2023-06-12T09:15:00Z',
    nextReview: '2023-09-12T09:15:00Z',
    requirements: 18,
    compliant: 18,
    inProgress: 0,
    nonCompliant: 0
  }, {
    id: 'pci',
    name: 'PCI DSS',
    status: 'non-compliant',
    lastChecked: '2023-06-08T16:20:00Z',
    nextReview: '2023-07-08T16:20:00Z',
    requirements: 24,
    compliant: 19,
    inProgress: 2,
    nonCompliant: 3
  }, {
    id: 'sox',
    name: 'SOX',
    status: 'compliant',
    lastChecked: '2023-06-14T11:00:00Z',
    nextReview: '2023-09-14T11:00:00Z',
    requirements: 15,
    compliant: 15,
    inProgress: 0,
    nonCompliant: 0
  }];
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'partial':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'non-compliant':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'compliant':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Compliant
          </span>;
      case 'partial':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Partially Compliant
          </span>;
      case 'non-compliant':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Non-Compliant
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  return <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Total Frameworks
            </h3>
            <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
              <Info className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">5</p>
          <p className="text-sm text-gray-500 mt-1">
            Regulatory frameworks monitored
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Compliant</h3>
            <div className="bg-green-100 text-green-800 p-2 rounded-full">
              <CheckCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-green-600">3</p>
          <p className="text-sm text-gray-500 mt-1">
            Fully compliant frameworks
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Partial</h3>
            <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full">
              <AlertCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-yellow-600">1</p>
          <p className="text-sm text-gray-500 mt-1">
            Partially compliant frameworks
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Non-Compliant</h3>
            <div className="bg-red-100 text-red-800 p-2 rounded-full">
              <XCircle className="h-5 w-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-red-600">1</p>
          <p className="text-sm text-gray-500 mt-1">Non-compliant frameworks</p>
        </div>
      </div>
      {/* Critical Alerts */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Critical Compliance Issues
            </h3>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  PCI DSS: 3 non-compliant requirements need immediate attention
                </li>
                <li>
                  HIPAA: 6 requirements need documentation updates by July 15
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Detailed Compliance Table */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">
            Regulatory Compliance Status
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Framework
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Checked
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Review
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Compliance
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {complianceFrameworks.map(framework => <tr key={framework.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(framework.status)}
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {framework.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(framework.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(framework.lastChecked)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      {formatDate(framework.nextReview)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span>
                          {framework.compliant} of {framework.requirements}{' '}
                          requirements
                        </span>
                        <span className="font-medium">
                          {Math.round(framework.compliant / framework.requirements * 100)}
                          %
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${framework.status === 'compliant' ? 'bg-green-500' : framework.status === 'partial' ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                      width: `${framework.compliant / framework.requirements * 100}%`
                    }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 flex items-center justify-end">
                      View Details
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Action Items */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Compliance Action Items
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="p-4 border border-red-200 rounded-md bg-red-50">
              <div className="flex">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-red-800">
                    PCI DSS: Implement Multi-Factor Authentication
                  </h4>
                  <p className="mt-1 text-sm text-red-700">
                    MFA must be implemented for all administrator accounts.
                    Currently 3 admin accounts without MFA.
                  </p>
                  <div className="mt-2">
                    <button className="text-sm text-red-800 font-medium hover:text-red-900">
                      Resolve Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-yellow-200 rounded-md bg-yellow-50">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-yellow-800">
                    HIPAA: Update Privacy Policy
                  </h4>
                  <p className="mt-1 text-sm text-yellow-700">
                    Privacy policy needs to be updated to include new HIPAA
                    requirements for AI agent data processing.
                  </p>
                  <div className="mt-2">
                    <button className="text-sm text-yellow-800 font-medium hover:text-yellow-900">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-yellow-200 rounded-md bg-yellow-50">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-yellow-800">
                    HIPAA: Document Data Retention Procedures
                  </h4>
                  <p className="mt-1 text-sm text-yellow-700">
                    Documentation for data retention procedures needs to be
                    updated and approved by compliance officer.
                  </p>
                  <div className="mt-2">
                    <button className="text-sm text-yellow-800 font-medium hover:text-yellow-900">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming Compliance Reviews */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Upcoming Compliance Reviews
          </h3>
        </div>
        <div className="p-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  PCI DSS Quarterly Assessment
                </p>
                <p className="text-sm text-gray-500">
                  Due July 8, 2023 (in 30 days)
                </p>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                  Prepare
                </button>
              </div>
            </li>
            <li className="py-4 flex">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  HIPAA Documentation Review
                </p>
                <p className="text-sm text-gray-500">
                  Due July 15, 2023 (in 37 days)
                </p>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                  Prepare
                </button>
              </div>
            </li>
            <li className="py-4 flex">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  GDPR Annual Review
                </p>
                <p className="text-sm text-gray-500">
                  Due September 15, 2023 (in 99 days)
                </p>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200">
                  Schedule
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};