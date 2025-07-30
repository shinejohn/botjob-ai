import React, { useState } from 'react';
import { Download, Search, Filter, ChevronDown, CreditCard, Home, Clipboard, FileText, Check } from 'lucide-react';
export const InvoiceHistory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  const [showBillingAddressModal, setShowBillingAddressModal] = useState(false);
  const [showTaxInfoModal, setShowTaxInfoModal] = useState(false);
  // Sample invoice data
  const invoices = [{
    id: 'INV-2023-05',
    date: 'May 1, 2023',
    amount: 382.5,
    status: 'paid',
    paymentMethod: 'Visa ending in 4242',
    items: [{
      description: 'Business Starter Plan',
      amount: 149.99
    }, {
      description: 'Customer Support Bot Usage',
      amount: 98.75
    }, {
      description: 'Sales Assistant Usage',
      amount: 76.32
    }, {
      description: 'Data Analyst Assistant Usage',
      amount: 57.44
    }]
  }, {
    id: 'INV-2023-04',
    date: 'April 1, 2023',
    amount: 356.87,
    status: 'paid',
    paymentMethod: 'Visa ending in 4242',
    items: [{
      description: 'Business Starter Plan',
      amount: 149.99
    }, {
      description: 'Customer Support Bot Usage',
      amount: 92.45
    }, {
      description: 'Sales Assistant Usage',
      amount: 65.2
    }, {
      description: 'Data Analyst Assistant Usage',
      amount: 49.23
    }]
  }, {
    id: 'INV-2023-03',
    date: 'March 1, 2023',
    amount: 329.75,
    status: 'paid',
    paymentMethod: 'Visa ending in 4242',
    items: [{
      description: 'Business Starter Plan',
      amount: 149.99
    }, {
      description: 'Customer Support Bot Usage',
      amount: 85.32
    }, {
      description: 'Sales Assistant Usage',
      amount: 58.19
    }, {
      description: 'Data Analyst Assistant Usage',
      amount: 36.25
    }]
  }, {
    id: 'INV-2023-02',
    date: 'February 1, 2023',
    amount: 149.99,
    status: 'paid',
    paymentMethod: 'Visa ending in 4242',
    items: [{
      description: 'Business Starter Plan',
      amount: 149.99
    }]
  }, {
    id: 'INV-2023-01',
    date: 'January 1, 2023',
    amount: 149.99,
    status: 'paid',
    paymentMethod: 'Mastercard ending in 5678',
    items: [{
      description: 'Business Starter Plan',
      amount: 149.99
    }]
  }];
  // Payment methods
  const paymentMethods = [{
    id: 'card-1',
    type: 'visa',
    last4: '4242',
    expiry: '05/2025',
    isDefault: true
  }, {
    id: 'card-2',
    type: 'mastercard',
    last4: '5678',
    expiry: '12/2024',
    isDefault: false
  }];
  // Billing address
  const billingAddress = {
    name: 'Acme Inc.',
    street: '123 Business Ave',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
    country: 'United States'
  };
  // Tax information
  const taxInfo = {
    taxId: 'US123456789',
    vatNumber: '',
    companyName: 'Acme Inc.',
    taxExempt: false
  };
  // Filter invoices based on search and status
  const filteredInvoices = invoices.filter(invoice => {
    // Filter by status
    if (filterStatus !== 'all' && invoice.status !== filterStatus) {
      return false;
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return invoice.id.toLowerCase().includes(query) || invoice.date.toLowerCase().includes(query) || invoice.amount.toString().includes(query);
    }
    return true;
  });
  // Get status badge color
  const getStatusColor = status => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <div>
      {/* Invoice Filter Controls */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
            <div className="relative">
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search invoices..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="relative">
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="all">All Statuses</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Export All
          </button>
        </div>
      </div>
      {/* Invoice List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Invoice History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInvoices.map(invoice => <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {invoice.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{invoice.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ${invoice.amount.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {invoice.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">
                      View
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      Download
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        {filteredInvoices.length === 0 && <div className="p-6 text-center">
            <p className="text-gray-500">
              No invoices found matching your filters.
            </p>
          </div>}
      </div>
      {/* Payment & Billing Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">
              Payment Methods
            </h2>
            <button onClick={() => setShowPaymentMethodModal(true)} className="text-sm text-blue-600 hover:text-blue-800">
              + Add New
            </button>
          </div>
          <div className="p-6">
            {paymentMethods.map(method => <div key={method.id} className="flex items-center justify-between mb-4 last:mb-0">
                <div className="flex items-center">
                  <div className="h-10 w-16 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                    {method.type === 'visa' ? <div className="text-blue-600 font-bold">VISA</div> : <div className="text-red-600 font-bold">MC</div>}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {method.type.charAt(0).toUpperCase() + method.type.slice(1)}{' '}
                      ending in {method.last4}
                      {method.isDefault && <span className="ml-2 text-xs text-green-600">
                          Default
                        </span>}
                    </div>
                    <div className="text-xs text-gray-500">
                      Expires {method.expiry}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-sm text-gray-600 hover:text-gray-800">
                    Edit
                  </button>
                  {!method.isDefault && <button className="text-sm text-gray-600 hover:text-gray-800">
                      Remove
                    </button>}
                </div>
              </div>)}
          </div>
        </div>
        {/* Billing Address */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">
              Billing Address
            </h2>
            <button onClick={() => setShowBillingAddressModal(true)} className="text-sm text-blue-600 hover:text-blue-800">
              Edit
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-start">
              <Home className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {billingAddress.name}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {billingAddress.street}
                </div>
                <div className="text-sm text-gray-500">
                  {billingAddress.city}, {billingAddress.state}{' '}
                  {billingAddress.zip}
                </div>
                <div className="text-sm text-gray-500">
                  {billingAddress.country}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tax Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">
              Tax Information
            </h2>
            <button onClick={() => setShowTaxInfoModal(true)} className="text-sm text-blue-600 hover:text-blue-800">
              Edit
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-start">
              <Clipboard className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {taxInfo.companyName}
                </div>
                {taxInfo.taxId && <div className="text-sm text-gray-500 mt-1">
                    Tax ID: {taxInfo.taxId}
                  </div>}
                {taxInfo.vatNumber && <div className="text-sm text-gray-500">
                    VAT Number: {taxInfo.vatNumber}
                  </div>}
                <div className="text-sm text-gray-500 mt-1">
                  Tax Status: {taxInfo.taxExempt ? 'Tax Exempt' : 'Taxable'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Method Modal */}
      {showPaymentMethodModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Add Payment Method
                </h3>
                <button onClick={() => setShowPaymentMethodModal(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input type="text" id="card-number" placeholder="1234 5678 9012 3456" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  <CreditCard className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiration Date
                  </label>
                  <input type="text" id="expiry" placeholder="MM/YY" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input type="text" id="cvc" placeholder="123" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input type="text" id="name" placeholder="John Smith" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="flex items-center mb-4">
                <input id="default-card" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="default-card" className="ml-2 block text-sm text-gray-900">
                  Make this my default payment method
                </label>
              </div>
              <div className="p-4 bg-gray-50 rounded-md border border-gray-200 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="h-5 w-5 text-gray-400 mr-2" />
                  Your card information is secure and encrypted
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowPaymentMethodModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Add Payment Method
              </button>
            </div>
          </div>
        </div>}
      {/* Billing Address Modal */}
      {showBillingAddressModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Edit Billing Address
                </h3>
                <button onClick={() => setShowBillingAddressModal(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input type="text" id="company-name" defaultValue={billingAddress.name} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input type="text" id="street" defaultValue={billingAddress.street} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input type="text" id="city" defaultValue={billingAddress.city} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State / Province
                  </label>
                  <input type="text" id="state" defaultValue={billingAddress.state} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP / Postal Code
                  </label>
                  <input type="text" id="zip" defaultValue={billingAddress.zip} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select id="country" defaultValue={billingAddress.country} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowBillingAddressModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Address
              </button>
            </div>
          </div>
        </div>}
      {/* Tax Info Modal */}
      {showTaxInfoModal && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Edit Tax Information
                </h3>
                <button onClick={() => setShowTaxInfoModal(false)} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="company-name-tax" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input type="text" id="company-name-tax" defaultValue={taxInfo.companyName} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="tax-id" className="block text-sm font-medium text-gray-700 mb-1">
                  Tax ID / EIN
                </label>
                <input type="text" id="tax-id" defaultValue={taxInfo.taxId} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="vat-number" className="block text-sm font-medium text-gray-700 mb-1">
                  VAT Number (if applicable)
                </label>
                <input type="text" id="vat-number" defaultValue={taxInfo.vatNumber} className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="flex items-center mb-4">
                <input id="tax-exempt" type="checkbox" defaultChecked={taxInfo.taxExempt} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="tax-exempt" className="ml-2 block text-sm text-gray-900">
                  This organization is tax exempt
                </label>
              </div>
              <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      Tax Exemption Documentation
                    </h3>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>
                        If your organization is tax exempt, please email your
                        tax exemption certificate to{' '}
                        <a href="mailto:billing@botjob.ai" className="text-blue-600 hover:underline">
                          billing@botjob.ai
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button onClick={() => setShowTaxInfoModal(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Tax Information
              </button>
            </div>
          </div>
        </div>}
    </div>;
};