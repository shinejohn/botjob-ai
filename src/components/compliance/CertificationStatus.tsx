import React from 'react';
import { Award, CheckCircle, Clock, AlertCircle, XCircle, Calendar, FileText, ExternalLink } from 'lucide-react';
export const CertificationStatus = () => {
  // Sample certification data
  const certifications = [{
    id: 'cert-1',
    name: 'SOC 2 Type II',
    status: 'active',
    issueDate: '2023-01-15T00:00:00Z',
    expiryDate: '2024-01-15T00:00:00Z',
    issuingBody: 'Deloitte',
    scope: 'Security, Availability, Processing Integrity, Confidentiality, Privacy',
    lastAudit: '2023-01-10T00:00:00Z',
    nextAudit: '2024-01-10T00:00:00Z',
    documentUrl: '#'
  }, {
    id: 'cert-2',
    name: 'ISO 27001',
    status: 'active',
    issueDate: '2022-11-20T00:00:00Z',
    expiryDate: '2025-11-20T00:00:00Z',
    issuingBody: 'BSI Group',
    scope: 'Information Security Management System',
    lastAudit: '2022-11-15T00:00:00Z',
    nextAudit: '2023-11-15T00:00:00Z',
    documentUrl: '#'
  }, {
    id: 'cert-3',
    name: 'HIPAA Compliance',
    status: 'active',
    issueDate: '2023-03-05T00:00:00Z',
    expiryDate: '2024-03-05T00:00:00Z',
    issuingBody: 'Compliancy Group',
    scope: 'Healthcare Data Processing',
    lastAudit: '2023-03-01T00:00:00Z',
    nextAudit: '2024-03-01T00:00:00Z',
    documentUrl: '#'
  }, {
    id: 'cert-4',
    name: 'PCI DSS',
    status: 'expiring',
    issueDate: '2022-07-10T00:00:00Z',
    expiryDate: '2023-07-10T00:00:00Z',
    issuingBody: 'Trustwave',
    scope: 'Payment Card Processing',
    lastAudit: '2022-07-05T00:00:00Z',
    nextAudit: '2023-07-05T00:00:00Z',
    documentUrl: '#'
  }, {
    id: 'cert-5',
    name: 'GDPR Compliance',
    status: 'renewal_in_progress',
    issueDate: '2022-05-25T00:00:00Z',
    expiryDate: '2023-05-25T00:00:00Z',
    issuingBody: 'EU Privacy Shield',
    scope: 'Data Protection and Privacy',
    lastAudit: '2022-05-20T00:00:00Z',
    nextAudit: '2023-05-20T00:00:00Z',
    documentUrl: '#'
  }];
  // Sample certification in progress
  const certificationsInProgress = [{
    id: 'in-prog-1',
    name: 'FedRAMP Moderate',
    stage: 'documentation',
    targetDate: '2023-12-15T00:00:00Z',
    progress: 35,
    assignedTo: 'Sarah Johnson',
    notes: 'Working on security documentation package'
  }, {
    id: 'in-prog-2',
    name: 'CCPA Compliance',
    stage: 'assessment',
    targetDate: '2023-09-30T00:00:00Z',
    progress: 60,
    assignedTo: 'Michael Wong',
    notes: 'Gap assessment completed, implementing remediation plan'
  }];
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Active
          </span>;
      case 'expiring':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Expiring Soon
          </span>;
      case 'renewal_in_progress':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Renewal in Progress
          </span>;
      case 'expired':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <XCircle className="h-3 w-3 mr-1" />
            Expired
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  const getProgressStage = (stage: string) => {
    switch (stage) {
      case 'planning':
        return 'Planning & Scoping';
      case 'documentation':
        return 'Documentation Preparation';
      case 'assessment':
        return 'Assessment & Gap Analysis';
      case 'remediation':
        return 'Remediation';
      case 'audit':
        return 'Audit';
      case 'certification':
        return 'Certification';
      default:
        return stage;
    }
  };
  return <div className="space-y-6">
      {/* Active Certifications */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Award className="h-5 w-5 mr-2 text-blue-500" />
            Active Certifications
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
            Add Certification
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Certification
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issued
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expires
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issuing Body
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Audit
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {certifications.map(cert => <tr key={cert.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {cert.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(cert.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(cert.issueDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(cert.expiryDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cert.issuingBody}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {formatDate(cert.nextAudit)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button className="text-blue-600 hover:text-blue-900 flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Renew
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Certifications In Progress */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-blue-500" />
            Certifications In Progress
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {certificationsInProgress.map(cert => <div key={cert.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Stage: {getProgressStage(cert.stage)} • Target:{' '}
                      {formatDate(cert.targetDate)}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {cert.progress}% Complete
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: `${cert.progress}%`
                }}></div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center text-sm">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Target: {formatDate(cert.targetDate)}</span>
                  </div>
                  <span className="hidden sm:inline mx-2 text-gray-300">|</span>
                  <div className="flex items-center text-gray-500 mt-1 sm:mt-0">
                    <Award className="h-4 w-4 mr-1" />
                    <span>Assigned to: {cert.assignedTo}</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>{cert.notes}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Certification Calendar */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
            Certification Calendar
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex-shrink-0 w-12 text-center">
                <div className="text-xs text-yellow-700">JUL</div>
                <div className="text-xl font-bold text-yellow-800">10</div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-yellow-800">
                  PCI DSS Certification Expiration
                </h4>
                <p className="text-xs text-yellow-600 mt-1">
                  Renewal process should begin 90 days before expiration
                </p>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-md hover:bg-yellow-200">
                  Start Renewal
                </button>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-md">
              <div className="flex-shrink-0 w-12 text-center">
                <div className="text-xs text-blue-700">SEP</div>
                <div className="text-xl font-bold text-blue-800">30</div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-blue-800">
                  CCPA Compliance Target Date
                </h4>
                <p className="text-xs text-blue-600 mt-1">
                  Complete implementation of privacy controls
                </p>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                  View Progress
                </button>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-md">
              <div className="flex-shrink-0 w-12 text-center">
                <div className="text-xs text-blue-700">NOV</div>
                <div className="text-xl font-bold text-blue-800">15</div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-blue-800">
                  ISO 27001 Annual Surveillance Audit
                </h4>
                <p className="text-xs text-blue-600 mt-1">
                  Prepare documentation for annual review
                </p>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                  Schedule Prep
                </button>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-md">
              <div className="flex-shrink-0 w-12 text-center">
                <div className="text-xs text-gray-500">DEC</div>
                <div className="text-xl font-bold text-gray-700">15</div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-700">
                  FedRAMP Moderate Target Completion
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Submit documentation package to 3PAO
                </p>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200">
                  View Timeline
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center mx-auto">
              <Calendar className="h-4 w-4 mr-1" />
              View Full Certification Calendar
            </button>
          </div>
        </div>
      </div>
      {/* Resources */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-500" />
            Certification Resources
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    SOC 2 Compliance Guide
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Complete guide to maintaining SOC 2 compliance
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Guide
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    ISO 27001 Documentation Templates
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Standard templates for ISO 27001 documentation
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    Download Templates
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    HIPAA Compliance Checklist
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Comprehensive checklist for HIPAA requirements
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Checklist
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>;
};