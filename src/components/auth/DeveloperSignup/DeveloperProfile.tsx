import React from 'react';
export const DeveloperProfile = ({
  onNext
}: {
  onNext: () => void;
}) => {
  return <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Tell us about yourself
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name / Company Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="John Smith or Acme AI Inc." required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="••••••••" required />
          <p className="text-xs text-gray-500 mt-1">
            Must be at least 8 characters
          </p>
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Developer Experience Level <span className="text-red-500">*</span>
          </label>
          <select id="experience" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" required>
            <option value="" disabled selected>
              Select your experience level
            </option>
            <option value="beginner">Beginner (0-2 years)</option>
            <option value="intermediate">Intermediate (3-5 years)</option>
            <option value="expert">Expert (6+ years)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Technical Background <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['AI/ML', 'Web Development', 'API Development', 'NLP', 'Cloud Services', 'Mobile Development', 'Data Science', 'DevOps'].map(skill => <div key={skill} className="flex items-center">
                <input type="checkbox" id={`skill-${skill.toLowerCase().replace(/\//g, '-').replace(/ /g, '-')}`} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor={`skill-${skill.toLowerCase().replace(/\//g, '-').replace(/ /g, '-')}`} className="ml-2 text-sm text-gray-700">
                  {skill}
                </label>
              </div>)}
          </div>
        </div>
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
            GitHub Profile <span className="text-red-500">*</span>
          </label>
          <input type="url" id="github" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://github.com/yourusername" required />
        </div>
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn Profile
          </label>
          <input type="url" id="linkedin" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://linkedin.com/in/yourusername" />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
            Personal/Company Website
          </label>
          <input type="url" id="website" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://yourwebsite.com" />
        </div>
        <div>
          <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
            Why do you want to build AI agents?{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea id="motivation" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell us about your interest in AI agent development and what you hope to accomplish..." required></textarea>
        </div>
      </div>
      <div className="mt-8">
        <button onClick={onNext} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
          Continue
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Log in
          </a>
        </p>
      </div>
    </div>;
};