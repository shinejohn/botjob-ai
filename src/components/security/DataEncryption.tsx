import React, { useState } from 'react';
import { Lock, Shield, CheckCircle, AlertTriangle, RefreshCw, Key, FileText, Database, Server, HardDrive } from 'lucide-react';
export const DataEncryption = () => {
  const [showRotateKeyModal, setShowRotateKeyModal] = useState(false);
  // Sample encryption status data
  const encryptionStatus = {
    dataAtRest: {
      status: 'enabled',
      algorithm: 'AES-256',
      lastKeyRotation: '2023-03-15T00:00:00Z',
      nextScheduledRotation: '2023-09-15T00:00:00Z',
      coverage: 100
    },
    dataInTransit: {
      status: 'enabled',
      protocols: ['TLS 1.3', 'TLS 1.2'],
      certificateExpiry: '2024-01-10T00:00:00Z',
      vulnerabilities: 0
    },
    dataInUse: {
      status: 'partial',
      technologies: ['Secure Enclaves', 'Memory Encryption'],
      coverage: 85
    }
  };
  // Sample key management data
  const keyManagement = {
    provider: 'AWS KMS',
    totalKeys: 12,
    activeKeys: 10,
    pendingDeletion: 0,
    autoRotation: true,
    rotationPeriod: 180,
    lastAudit: '2023-05-20T00:00:00Z'
  };
  // Sample encrypted data stores
  const encryptedDataStores = [{
    id: 'store-1',
    name: 'Customer Database',
    type: 'PostgreSQL',
    location: 'AWS RDS',
    encryptionStatus: 'enabled',
    encryptionType: 'Server-Side',
    keyId: 'key-1234',
    lastVerified: '2023-06-15T00:00:00Z',
    sensitiveDataTypes: ['PII', 'Payment Information'],
    complianceRequirements: ['GDPR', 'PCI DSS']
  }, {
    id: 'store-2',
    name: 'Document Storage',
    type: 'Object Storage',
    location: 'AWS S3',
    encryptionStatus: 'enabled',
    encryptionType: 'Server-Side',
    keyId: 'key-5678',
    lastVerified: '2023-06-10T00:00:00Z',
    sensitiveDataTypes: ['Business Documents', 'Customer Contracts'],
    complianceRequirements: ['SOC 2', 'GDPR']
  }, {
    id: 'store-3',
    name: 'Application Logs',
    type: 'Log Storage',
    location: 'Elasticsearch',
    encryptionStatus: 'enabled',
    encryptionType: 'Index-Level',
    keyId: 'key-9012',
    lastVerified: '2023-06-12T00:00:00Z',
    sensitiveDataTypes: ['System Logs', 'Audit Trails'],
    complianceRequirements: ['SOC 2', 'ISO 27001']
  }, {
    id: 'store-4',
    name: 'Analytics Data',
    type: 'Data Warehouse',
    location: 'Snowflake',
    encryptionStatus: 'enabled',
    encryptionType: 'Column-Level',
    keyId: 'key-3456',
    lastVerified: '2023-06-08T00:00:00Z',
    sensitiveDataTypes: ['Aggregated User Data', 'Business Metrics'],
    complianceRequirements: ['GDPR', 'CCPA']
  }, {
    id: 'store-5',
    name: 'Backup Storage',
    type: 'Backup System',
    location: 'AWS Backup',
    encryptionStatus: 'enabled',
    encryptionType: 'Server-Side',
    keyId: 'key-7890',
    lastVerified: '2023-06-05T00:00:00Z',
    sensitiveDataTypes: ['Full System Backups', 'Database Dumps'],
    complianceRequirements: ['SOC 2', 'ISO 27001', 'GDPR']
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
      case 'enabled':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            Enabled
          </span>;
      case 'partial':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Partial
          </span>;
      case 'disabled':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Disabled
          </span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  // Calculate days until next key rotation
  const getDaysUntil = (dateString: string) => {
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  return <div className="space-y-6">
      {/* Encryption Status Overview */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-blue-500" />
            Encryption Status Overview
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Data at Rest */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Data at Rest</h4>
                {getStatusBadge(encryptionStatus.dataAtRest.status)}
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Encryption Algorithm</p>
                  <p className="text-sm font-medium text-gray-900">
                    {encryptionStatus.dataAtRest.algorithm}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Key Rotation</p>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(encryptionStatus.dataAtRest.lastKeyRotation)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Next Scheduled Rotation
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(encryptionStatus.dataAtRest.nextScheduledRotation)}
                    <span className="text-xs text-gray-500 ml-2">
                      (in{' '}
                      {getDaysUntil(encryptionStatus.dataAtRest.nextScheduledRotation)}{' '}
                      days)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Coverage</p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{
                      width: `${encryptionStatus.dataAtRest.coverage}%`
                    }} />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {encryptionStatus.dataAtRest.coverage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Data in Transit */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Data in Transit</h4>
                {getStatusBadge(encryptionStatus.dataInTransit.status)}
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Secure Protocols</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {encryptionStatus.dataInTransit.protocols.map((protocol, index) => <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                          {protocol}
                        </span>)}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Certificate Expiry</p>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(encryptionStatus.dataInTransit.certificateExpiry)}
                    <span className="text-xs text-gray-500 ml-2">
                      (in{' '}
                      {getDaysUntil(encryptionStatus.dataInTransit.certificateExpiry)}{' '}
                      days)
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vulnerabilities</p>
                  <p className="text-sm font-medium text-green-600">
                    {encryptionStatus.dataInTransit.vulnerabilities} detected
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Security Scan</p>
                  <p className="text-sm font-medium text-gray-900">
                    June 20, 2023
                  </p>
                </div>
              </div>
            </div>
            {/* Data in Use */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">Data in Use</h4>
                {getStatusBadge(encryptionStatus.dataInUse.status)}
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Technologies</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {encryptionStatus.dataInUse.technologies.map((tech, index) => <span key={index} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                          {tech}
                        </span>)}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Coverage</p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{
                      width: `${encryptionStatus.dataInUse.coverage}%`
                    }} />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {encryptionStatus.dataInUse.coverage}%
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Implementation Status</p>
                  <p className="text-sm font-medium text-yellow-600">
                    Partially implemented
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Improvement Plan</p>
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      View roadmap
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Management */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Key className="h-5 w-5 mr-2 text-blue-500" />
            Key Management
          </h3>
          <button onClick={() => setShowRotateKeyModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center">
            <RefreshCw className="h-4 w-4 mr-2" />
            Rotate Keys
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4">
                Key Management System
              </h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Provider</p>
                    <p className="text-sm font-medium text-gray-900">
                      {keyManagement.provider}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Keys</p>
                    <p className="text-sm font-medium text-gray-900">
                      {keyManagement.totalKeys}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Active Keys</p>
                    <p className="text-sm font-medium text-gray-900">
                      {keyManagement.activeKeys}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pending Deletion</p>
                    <p className="text-sm font-medium text-gray-900">
                      {keyManagement.pendingDeletion}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Auto-Rotation</p>
                    <p className="text-sm font-medium text-gray-900">
                      {keyManagement.autoRotation ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Rotation Period</p>
                    <p className="text-sm font-medium text-gray-900">
                      {keyManagement.rotationPeriod} days
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Key Audit</p>
                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(keyManagement.lastAudit)}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4">
                Key Rotation Schedule
              </h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-xs text-yellow-700">SEP</div>
                    <div className="text-xl font-bold text-yellow-800">15</div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-sm font-medium text-yellow-800">
                      Data at Rest Key Rotation
                    </h5>
                    <p className="text-xs text-yellow-600 mt-1">
                      Scheduled automatic rotation of data-at-rest encryption
                      keys
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-md hover:bg-yellow-200">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-xs text-blue-700">OCT</div>
                    <div className="text-xl font-bold text-blue-800">10</div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-sm font-medium text-blue-800">
                      Application Secrets Rotation
                    </h5>
                    <p className="text-xs text-blue-600 mt-1">
                      Scheduled rotation of application secrets and API keys
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-xs text-blue-700">JAN</div>
                    <div className="text-xl font-bold text-blue-800">10</div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-sm font-medium text-blue-800">
                      SSL Certificate Renewal
                    </h5>
                    <p className="text-xs text-blue-600 mt-1">
                      Renewal of SSL certificates for secure communications
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Encrypted Data Stores */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <Database className="h-5 w-5 mr-2 text-blue-500" />
            Encrypted Data Stores
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data Store
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Encryption
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Verified
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sensitive Data
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {encryptedDataStores.map(store => <tr key={store.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {store.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {store.type === 'PostgreSQL' ? <Database className="h-5 w-5 text-blue-500" /> : store.type === 'Object Storage' ? <HardDrive className="h-5 w-5 text-green-500" /> : store.type === 'Log Storage' ? <FileText className="h-5 w-5 text-yellow-500" /> : store.type === 'Data Warehouse' ? <Database className="h-5 w-5 text-purple-500" /> : <Server className="h-5 w-5 text-gray-500" />}
                      </div>
                      <div className="ml-2 text-sm text-gray-500">
                        {store.type}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {store.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      {getStatusBadge(store.encryptionStatus)}
                      <span className="text-xs text-gray-500 mt-1">
                        {store.encryptionType}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(store.lastVerified)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {store.sensitiveDataTypes.map((type, index) => <span key={index} className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">
                          {type}
                        </span>)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      View Details
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Compliance Documentation */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-500" />
            Encryption Compliance Documentation
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Encryption Policy
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Official company encryption policy and standards
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
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
                    Key Management Procedures
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Procedures for managing encryption keys
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
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
                    Encryption Audit Reports
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Latest encryption implementation audit reports
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Reports
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
                    Compliance Certificates
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Encryption-related compliance certificates
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Certificates
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
                    Incident Response Plan
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Procedures for responding to encryption-related incidents
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Document
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
                    Encryption Implementation Guide
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    Technical guide for implementing encryption
                  </p>
                  <div className="mt-2 flex items-center text-xs text-blue-600">
                    View Guide
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Key Rotation Modal */}
      {showRotateKeyModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Rotate Encryption Keys
              </h3>
              <button onClick={() => setShowRotateKeyModal(false)} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-yellow-800">
                      Important
                    </h4>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        Key rotation is a critical operation that will
                        re-encrypt data with new keys. This process:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>May take several hours depending on data volume</li>
                        <li>
                          Will be performed in the background with no service
                          disruption
                        </li>
                        <li>Cannot be easily reversed once started</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="key-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Key Type to Rotate
                  </label>
                  <select id="key-type" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="all">All Encryption Keys</option>
                    <option value="data-at-rest">Data at Rest Keys Only</option>
                    <option value="specific">Specific Data Store Keys</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="rotation-reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Rotation
                  </label>
                  <select id="rotation-reason" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="scheduled">Scheduled Rotation</option>
                    <option value="compliance">Compliance Requirement</option>
                    <option value="security">Security Best Practice</option>
                    <option value="incident">Security Incident Response</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="rotation-notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea id="rotation-notes" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter any additional information about this key rotation"></textarea>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="confirm-rotation" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="confirm-rotation" className="font-medium text-gray-700">
                      I confirm this key rotation operation
                    </label>
                    <p className="text-gray-500">
                      I understand this is a critical operation that will be
                      logged and audited.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
              <button onClick={() => setShowRotateKeyModal(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={() => setShowRotateKeyModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Start Key Rotation
              </button>
            </div>
          </div>
        </div>}
    </div>;
};