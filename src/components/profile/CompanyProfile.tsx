import React, { useState } from 'react';
import { Upload, Save, Globe, Building, Mail, Phone, MapPin, Tag, Eye, EyeOff, Info, X, Check } from 'lucide-react';
export const CompanyProfile = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>('https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80');
  const [publicProfile, setPublicProfile] = useState(true);
  const [industryTags, setIndustryTags] = useState(['Technology', 'SaaS']);
  const [useCaseTags, setUseCaseTags] = useState(['Customer Service', 'Sales']);
  const [newTag, setNewTag] = useState('');
  // Sample company data
  const [companyData, setCompanyData] = useState({
    name: 'Acme Corporation',
    website: 'https://acme.example.com',
    description: 'Leading provider of innovative AI solutions for businesses of all sizes. We help companies automate routine tasks and improve customer experiences.',
    email: 'contact@acme.example.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Tech Boulevard',
      city: 'San Francisco',
      state: 'CA',
      zip: '94107',
      country: 'United States'
    },
    socialMedia: {
      linkedin: 'https://linkedin.com/company/acme',
      twitter: 'https://twitter.com/acme',
      facebook: 'https://facebook.com/acme'
    }
  });
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string, nestedField?: string) => {
    if (nestedField) {
      setCompanyData({
        ...companyData,
        [field]: {
          ...companyData[field as keyof typeof companyData],
          [nestedField]: e.target.value
        }
      });
    } else {
      setCompanyData({
        ...companyData,
        [field]: e.target.value
      });
    }
  };
  const handleSaveChanges = () => {
    // In a real app, this would save to the backend
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };
  const addTag = (type: 'industry' | 'useCase') => {
    if (!newTag.trim()) return;
    if (type === 'industry') {
      setIndustryTags([...industryTags, newTag]);
    } else {
      setUseCaseTags([...useCaseTags, newTag]);
    }
    setNewTag('');
  };
  const removeTag = (tag: string, type: 'industry' | 'useCase') => {
    if (type === 'industry') {
      setIndustryTags(industryTags.filter(t => t !== tag));
    } else {
      setUseCaseTags(useCaseTags.filter(t => t !== tag));
    }
  };
  return <div className="space-y-8">
      {/* Success Message */}
      {saveSuccess && <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          <span>Company profile updated successfully!</span>
        </div>}
      {/* Company Information */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Building className="h-5 w-5 mr-2 text-gray-500" />
            Company Information
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo Upload */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Logo
              </label>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 rounded-md border border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
                  {logoPreview ? <img src={logoPreview} alt="Company logo" className="h-full w-full object-contain" /> : <Building className="h-16 w-16 text-gray-300" />}
                </div>
                <label className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer flex items-center">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Logo
                  <input type="file" className="hidden" onChange={handleLogoChange} accept="image/*" />
                </label>
                <p className="text-xs text-gray-500">
                  Recommended size: 512x512px. Max 2MB.
                </p>
              </div>
            </div>
            {/* Basic Info */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input type="text" id="company-name" value={companyData.name} onChange={e => handleInputChange(e, 'name')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    <Globe className="h-4 w-4" />
                  </span>
                  <input type="url" id="website" value={companyData.website} onChange={e => handleInputChange(e, 'website')} className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500" placeholder="https://example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Description
                </label>
                <textarea id="description" rows={4} value={companyData.description} onChange={e => handleInputChange(e, 'description')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Describe your company and its primary focus..." />
                <p className="text-xs text-gray-500 mt-1">
                  This description will be visible to users viewing your public
                  profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Phone className="h-5 w-5 mr-2 text-gray-500" />
            Contact Details
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <Mail className="h-4 w-4" />
                </span>
                <input type="email" id="email" value={companyData.email} onChange={e => handleInputChange(e, 'email')} className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <Phone className="h-4 w-4" />
                </span>
                <input type="tel" id="phone" value={companyData.phone} onChange={e => handleInputChange(e, 'phone')} className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Business Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-4">
                <label htmlFor="street" className="block text-xs text-gray-500 mb-1">
                  Street Address
                </label>
                <input type="text" id="street" value={companyData.address.street} onChange={e => handleInputChange(e, 'address', 'street')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="city" className="block text-xs text-gray-500 mb-1">
                  City
                </label>
                <input type="text" id="city" value={companyData.address.city} onChange={e => handleInputChange(e, 'address', 'city')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="state" className="block text-xs text-gray-500 mb-1">
                  State / Province
                </label>
                <input type="text" id="state" value={companyData.address.state} onChange={e => handleInputChange(e, 'address', 'state')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="zip" className="block text-xs text-gray-500 mb-1">
                  ZIP / Postal Code
                </label>
                <input type="text" id="zip" value={companyData.address.zip} onChange={e => handleInputChange(e, 'address', 'zip')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="country" className="block text-xs text-gray-500 mb-1">
                  Country
                </label>
                <select id="country" value={companyData.address.country} onChange={(e: any) => handleInputChange(e, 'address', 'country')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Social Media
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="linkedin" className="block text-xs text-gray-500 mb-1">
                  LinkedIn
                </label>
                <input type="url" id="linkedin" value={companyData.socialMedia.linkedin} onChange={e => handleInputChange(e, 'socialMedia', 'linkedin')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="https://linkedin.com/company/..." />
              </div>
              <div>
                <label htmlFor="twitter" className="block text-xs text-gray-500 mb-1">
                  Twitter
                </label>
                <input type="url" id="twitter" value={companyData.socialMedia.twitter} onChange={e => handleInputChange(e, 'socialMedia', 'twitter')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="https://twitter.com/..." />
              </div>
              <div>
                <label htmlFor="facebook" className="block text-xs text-gray-500 mb-1">
                  Facebook
                </label>
                <input type="url" id="facebook" value={companyData.socialMedia.facebook} onChange={e => handleInputChange(e, 'socialMedia', 'facebook')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="https://facebook.com/..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Industry & Use Case Tags */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Tag className="h-5 w-5 mr-2 text-gray-500" />
            Industry & Use Case Tags
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Industry Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry Tags
              </label>
              <p className="text-xs text-gray-500 mb-3">
                Select industries that best describe your company. These tags
                help improve agent recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {industryTags.map(tag => <div key={tag} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                    {tag}
                    <button onClick={() => removeTag(tag, 'industry')} className="ml-1 text-blue-500 hover:text-blue-700">
                      <X className="h-3 w-3" />
                    </button>
                  </div>)}
              </div>
              <div className="flex">
                <input type="text" value={newTag} onChange={e => setNewTag(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500" placeholder="Add industry tag..." />
                <button onClick={() => addTag('industry')} className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                  Add
                </button>
              </div>
              <div className="mt-3">
                <p className="text-xs font-medium text-gray-700 mb-2">
                  Suggested industries:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Transportation'].map(tag => !industryTags.includes(tag) && <button key={tag} onClick={() => setIndustryTags([...industryTags, tag])} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-gray-200">
                          {tag}
                        </button>)}
                </div>
              </div>
            </div>
            {/* Use Case Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Use Case Tags
              </label>
              <p className="text-xs text-gray-500 mb-3">
                Select use cases that describe how you're using AI agents. This
                helps us provide relevant features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {useCaseTags.map(tag => <div key={tag} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center">
                    {tag}
                    <button onClick={() => removeTag(tag, 'useCase')} className="ml-1 text-purple-500 hover:text-purple-700">
                      <X className="h-3 w-3" />
                    </button>
                  </div>)}
              </div>
              <div className="flex">
                <input type="text" value={newTag} onChange={e => setNewTag(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500" placeholder="Add use case tag..." />
                <button onClick={() => addTag('useCase')} className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700">
                  Add
                </button>
              </div>
              <div className="mt-3">
                <p className="text-xs font-medium text-gray-700 mb-2">
                  Suggested use cases:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Lead Generation', 'Support Automation', 'Data Analysis', 'Scheduling', 'Content Creation', 'Onboarding'].map(tag => !useCaseTags.includes(tag) && <button key={tag} onClick={() => setUseCaseTags([...useCaseTags, tag])} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-gray-200">
                          {tag}
                        </button>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Profile Visibility */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-bold text-lg text-gray-900 flex items-center">
            <Eye className="h-5 w-5 mr-2 text-gray-500" />
            Profile Visibility
          </h2>
        </div>
        <div className="p-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="public-profile" type="checkbox" checked={publicProfile} onChange={() => setPublicProfile(!publicProfile)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="public-profile" className="font-medium text-gray-700">
                Public Company Profile
              </label>
              <p className="text-gray-500">
                Make your company profile visible in our public directory. This
                helps others discover your AI agents and integrations.
              </p>
            </div>
          </div>
          {publicProfile && <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-blue-800">
                    Public Profile Information
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    The following information will be visible on your public
                    profile: company name, logo, description, website, industry
                    tags, and public AI agents.
                  </p>
                  <p className="text-sm text-blue-700 mt-2">
                    Your contact details (email, phone, address) will only be
                    shared with users you explicitly connect with.
                  </p>
                </div>
              </div>
            </div>}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Profile Preview
            </h3>
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <div className="flex items-center">
                {logoPreview ? <img src={logoPreview} alt="Company logo" className="h-12 w-12 rounded-md object-contain mr-4" /> : <div className="h-12 w-12 bg-gray-200 rounded-md flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-gray-400" />
                  </div>}
                <div>
                  <h4 className="font-medium text-gray-900">
                    {companyData.name}
                  </h4>
                  <p className="text-sm text-gray-500">{companyData.website}</p>
                </div>
                <div className="ml-auto">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${publicProfile ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {publicProfile ? 'Public' : 'Private'}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                {companyData.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {industryTags.slice(0, 3).map(tag => <span key={tag} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                    {tag}
                  </span>)}
                {industryTags.length > 3 && <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                    +{industryTags.length - 3} more
                  </span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex justify-end">
        <button onClick={handleSaveChanges} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>
    </div>;
};