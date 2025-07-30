import React, { useState } from 'react';
import { Save, Image, DollarSign, Globe, Check, Edit, Trash, Upload, Plus, Tag, Info, AlertCircle, Eye } from 'lucide-react';
export const MarketplaceListing = () => {
  const [activePreview, setActivePreview] = useState('desktop');
  const [pricingModel, setPricingModel] = useState('subscription');
  return <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Listing Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Agent Information</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent Name*
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Customer Support Assistant" defaultValue="Customer Support Pro" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tagline*
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Brief description (max 80 characters)" defaultValue="24/7 customer support that never sleeps" />
                <p className="mt-1 text-xs text-gray-500">
                  80 characters max. This appears in search results.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Description*
                </label>
                <textarea rows={4} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Detailed description of your agent's capabilities" defaultValue="Customer Support Pro is a 24/7 AI assistant that handles customer inquiries, troubleshoots common issues, and ensures your customers always get quick and accurate responses. It integrates with your existing helpdesk systems and can escalate complex issues to your human team when necessary."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Customer Support</option>
                  <option>Sales & Marketing</option>
                  <option>Administrative</option>
                  <option>Technical Support</option>
                  <option>Data Analysis</option>
                  <option>Creative & Content</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center">
                    <span>customer service</span>
                    <button className="ml-1 text-blue-600 hover:text-blue-800">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center">
                    <span>support</span>
                    <button className="ml-1 text-blue-600 hover:text-blue-800">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center">
                    <span>help desk</span>
                    <button className="ml-1 text-blue-600 hover:text-blue-800">
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <input type="text" className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Add a tag" />
                  <button className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md hover:bg-gray-200">
                    <Tag className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Tags help customers find your agent in the marketplace.
                </p>
              </div>
            </div>
          </div>
          {/* Media Gallery */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Media Gallery</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Agent Avatar*
                </label>
                <div className="flex items-center space-x-4">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Agent avatar" className="h-16 w-16 rounded-full object-cover border border-gray-200" />
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Change Avatar
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Recommended: 400x400px JPG or PNG
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Screenshots*
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="aspect-video bg-gray-100 relative">
                      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Screenshot 1" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="flex space-x-2">
                          <button className="p-1 bg-white rounded-full text-gray-700 hover:text-blue-600">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 bg-white rounded-full text-gray-700 hover:text-red-600">
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 text-xs text-gray-500">
                      Customer chat interface
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="aspect-video bg-gray-100 relative">
                      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Screenshot 2" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="flex space-x-2">
                          <button className="p-1 bg-white rounded-full text-gray-700 hover:text-blue-600">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-1 bg-white rounded-full text-gray-700 hover:text-red-600">
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 text-xs text-gray-500">
                      Dashboard integration
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <button className="flex flex-col items-center text-gray-400 hover:text-gray-600">
                        <Plus className="h-8 w-8 mb-1" />
                        <span className="text-xs">Add Screenshot</span>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Recommended: 1280x720px JPG or PNG. Minimum 3 screenshots
                  required.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Demo Video (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">
                    Drag and drop a video file or click to browse
                  </p>
                  <button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-200">
                    Upload Video
                  </button>
                  <p className="mt-2 text-xs text-gray-500">
                    MP4 format, max 50MB, 2-3 minutes recommended
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing Configuration */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Pricing Model</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div onClick={() => setPricingModel('subscription')} className={`border rounded-lg p-4 cursor-pointer ${pricingModel === 'subscription' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Subscription</div>
                    {pricingModel === 'subscription' && <Check className="h-5 w-5 text-blue-500" />}
                  </div>
                  <p className="text-sm text-gray-500">Recurring monthly fee</p>
                </div>
                <div onClick={() => setPricingModel('usage')} className={`border rounded-lg p-4 cursor-pointer ${pricingModel === 'usage' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Usage-Based</div>
                    {pricingModel === 'usage' && <Check className="h-5 w-5 text-blue-500" />}
                  </div>
                  <p className="text-sm text-gray-500">
                    Pay per task or conversation
                  </p>
                </div>
                <div onClick={() => setPricingModel('hybrid')} className={`border rounded-lg p-4 cursor-pointer ${pricingModel === 'hybrid' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium">Hybrid</div>
                    {pricingModel === 'hybrid' && <Check className="h-5 w-5 text-blue-500" />}
                  </div>
                  <p className="text-sm text-gray-500">
                    Base fee + usage charges
                  </p>
                </div>
              </div>
              {pricingModel === 'subscription' && <div className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Price*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="text" className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="29.99" defaultValue="39.99" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Price (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="text" className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="299.99" defaultValue="399.99" />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        Offering an annual plan with a discount can increase
                        customer retention.
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What's Included
                    </label>
                    <textarea rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="List the features included in this pricing tier" defaultValue="- 24/7 customer support coverage
- Up to 1,000 conversations per month
- Email and chat integration
- Custom knowledge base
- Performance analytics dashboard"></textarea>
                    <p className="mt-1 text-xs text-gray-500">
                      Use bullet points (- item) to create a list
                    </p>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">
                        Offer 14-day free trial
                      </span>
                    </label>
                  </div>
                </div>}
              {pricingModel === 'usage' && <div className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Per Conversation Price*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="text" className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0.50" defaultValue="0.75" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Volume Discount Threshold
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 1000" defaultValue="500" />
                      <p className="mt-1 text-xs text-gray-500">
                        Number of conversations before discount applies
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Volume Discount (%)
                    </label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 10" defaultValue="15" />
                    <p className="mt-1 text-xs text-gray-500">
                      Percentage discount for volume usage
                    </p>
                  </div>
                </div>}
              {pricingModel === 'hybrid' && <div className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Base Monthly Fee*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="text" className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="19.99" defaultValue="24.99" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Included Conversations
                      </label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 200" defaultValue="250" />
                      <p className="mt-1 text-xs text-gray-500">
                        Number of conversations included in base fee
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Conversation Fee*
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                      </div>
                      <input type="text" className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0.10" defaultValue="0.15" />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Fee per conversation beyond the included amount
                    </p>
                  </div>
                </div>}
            </div>
          </div>
          {/* SEO Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">SEO Optimization</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SEO Title*
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Customer Support AI Agent | 24/7 Support" defaultValue="Customer Support Pro | 24/7 AI Support Agent" />
                <div className="flex justify-between mt-1">
                  <p className="text-xs text-gray-500">
                    Recommended length: 50-60 characters
                  </p>
                  <p className="text-xs text-gray-500">43/60</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description*
                </label>
                <textarea rows={3} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Brief description for search engine results" defaultValue="Enhance your customer support with our 24/7 AI agent. Handle inquiries, resolve issues, and delight customers with fast, accurate responses. Try free for 14 days."></textarea>
                <div className="flex justify-between mt-1">
                  <p className="text-xs text-gray-500">
                    Recommended length: 120-155 characters
                  </p>
                  <p className="text-xs text-gray-500">145/155</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Keywords
                </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., customer support, ai agent, support bot" defaultValue="customer support, ai agent, support bot, helpdesk, customer service, 24/7 support" />
                <p className="mt-1 text-xs text-gray-500">
                  Separate keywords with commas
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-md p-4">
                <div className="flex">
                  <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-800 mb-1">
                      SEO Tips
                    </h4>
                    <ul className="text-xs text-blue-700 space-y-1 list-disc list-inside">
                      <li>
                        Include your primary keywords in the title and
                        description
                      </li>
                      <li>Highlight your agent's unique selling points</li>
                      <li>Be specific about the problems your agent solves</li>
                      <li>Avoid keyword stuffing or misleading claims</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
              <Save className="h-5 w-5 mr-2" />
              Save Listing
            </button>
          </div>
        </div>
        {/* Right Column - Preview */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-6">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-medium text-gray-900">Listing Preview</h3>
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <button onClick={() => setActivePreview('desktop')} className={`px-2 py-1 text-xs ${activePreview === 'desktop' ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-600'}`}>
                  Desktop
                </button>
                <button onClick={() => setActivePreview('mobile')} className={`px-2 py-1 text-xs ${activePreview === 'mobile' ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-600'}`}>
                  Mobile
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className={`border border-gray-200 rounded-md overflow-hidden ${activePreview === 'mobile' ? 'max-w-[320px] mx-auto' : ''}`}>
                <div className="bg-gray-100 p-2 text-xs text-gray-500 flex justify-between items-center border-b border-gray-200">
                  <div>
                    {activePreview === 'desktop' ? 'Desktop View' : 'Mobile View'}
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>Full Preview</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-start mb-4">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Agent avatar" className="h-16 w-16 rounded-full object-cover border border-gray-200 mr-4" />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        Customer Support Pro
                      </h3>
                      <p className="text-sm text-gray-500">
                        24/7 customer support that never sleeps
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-500">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span className="text-gray-300">★</span>
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          (24 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      About this agent
                    </div>
                    <p className="text-sm text-gray-600">
                      Customer Support Pro is a 24/7 AI assistant that handles
                      customer inquiries, troubleshoots common issues, and
                      ensures your customers always get quick and accurate
                      responses...
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Pricing
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900">
                        $39.99
                      </span>
                      <span className="text-sm text-gray-500 ml-1">/month</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      14-day free trial
                    </div>
                    <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Get Started
                    </button>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Screenshots
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Screenshot 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Screenshot 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-video bg-gray-100 rounded-md overflow-hidden flex items-center justify-center text-gray-400">
                        <Plus className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-100 rounded-md">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800 mb-1">
                      Listing Checklist
                    </h4>
                    <ul className="text-xs space-y-1">
                      <li className="flex items-center text-green-700">
                        <Check className="h-3 w-3 mr-1 text-green-500" />
                        Agent name and description
                      </li>
                      <li className="flex items-center text-green-700">
                        <Check className="h-3 w-3 mr-1 text-green-500" />
                        Pricing information
                      </li>
                      <li className="flex items-center text-green-700">
                        <Check className="h-3 w-3 mr-1 text-green-500" />
                        Agent avatar
                      </li>
                      <li className="flex items-center text-yellow-700">
                        <AlertCircle className="h-3 w-3 mr-1 text-yellow-500" />
                        Need 1 more screenshot
                      </li>
                      <li className="flex items-center text-yellow-700">
                        <AlertCircle className="h-3 w-3 mr-1 text-yellow-500" />
                        Demo video recommended
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};