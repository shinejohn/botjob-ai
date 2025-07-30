import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
export const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [ratingThreshold, setRatingThreshold] = useState(4);
  const industries = ['Healthcare', 'Real Estate', 'Restaurant', 'Retail', 'Legal', 'Finance', 'Education', 'Technology'];
  const features = ['Phone', 'Email', 'Payments', 'Scheduling', 'CRM Integration', 'Document Processing'];
  const responseTimes = ['Under 30 seconds', 'Under 1 minute', 'Under 5 minutes'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Portuguese'];
  return <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
      {/* Industry */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Industry</h4>
        <div className="space-y-2">
          {industries.map(industry => <label key={industry} className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">{industry}</span>
            </label>)}
        </div>
        <button className="text-sm text-blue-600 mt-2">Show more</button>
      </div>
      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="px-2">
          <input type="range" min="0" max="200" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">${priceRange[0]}</span>
            <span className="text-sm text-gray-600">${priceRange[1]}</span>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Features</h4>
        <div className="space-y-2">
          {features.map(feature => <label key={feature} className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">{feature}</span>
            </label>)}
        </div>
      </div>
      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
        <div className="flex items-center space-x-2">
          {[4, 3, 2, 1].map(rating => <button key={rating} onClick={() => setRatingThreshold(rating)} className={`px-3 py-1 rounded ${ratingThreshold === rating ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
              {rating}+ ★
            </button>)}
        </div>
      </div>
      {/* Response Time */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Response Time</h4>
        <div className="space-y-2">
          {responseTimes.map(time => <label key={time} className="flex items-center">
              <input type="radio" name="responseTime" className="h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm text-gray-700">{time}</span>
            </label>)}
        </div>
      </div>
      {/* Languages */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Languages</h4>
        <div className="space-y-2">
          {languages.map(language => <label key={language} className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
              <span className="ml-2 text-sm text-gray-700">{language}</span>
            </label>)}
        </div>
        <button className="text-sm text-blue-600 mt-2">Show more</button>
      </div>
      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button className="flex-1 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Apply Filters
        </button>
        <button className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition">
          Reset
        </button>
      </div>
    </div>;
};