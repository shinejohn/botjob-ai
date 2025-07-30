import React from 'react';
export const BasicInfo = ({
  onNext
}: {
  onNext: () => void;
}) => {
  return <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Tell us about your business
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
            Company name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="company-name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Acme Inc." required />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
            Industry <span className="text-red-500">*</span>
          </label>
          <select id="industry" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required>
            <option value="" disabled selected>
              Select your industry
            </option>
            <option value="healthcare">Healthcare</option>
            <option value="retail">Retail</option>
            <option value="finance">Finance & Banking</option>
            <option value="technology">Technology</option>
            <option value="education">Education</option>
            <option value="real-estate">Real Estate</option>
            <option value="hospitality">Hospitality</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="company-size" className="block text-sm font-medium text-gray-700 mb-1">
            Company size
          </label>
          <select id="company-size" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201+">201+ employees</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Primary use cases
          </label>
          <div className="space-y-2">
            {['Customer Service', 'Sales', 'Administrative', 'Scheduling', 'Payments', 'Other'].map(useCase => <div key={useCase} className="flex items-center">
                <input type="checkbox" id={`use-case-${useCase.toLowerCase()}`} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor={`use-case-${useCase.toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                  {useCase}
                </label>
              </div>)}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" required />
          <p className="text-xs text-gray-500 mt-1">
            Must be at least 8 characters
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <svg className="h-5 w-5 mr-2" fill="#00a1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7 13.5H5.2V2h6.5c2.2 0 3.9 1.7 3.9 3.9 0 2.1-1.7 3.8-3.9 3.8z" />
              <path d="M16.7 22H5.2v-7.5h11.5c2.2 0 3.9 1.7 3.9 3.8 0 2.1-1.7 3.7-3.9 3.7z" />
            </svg>
            Sign up with Microsoft
          </button>
        </div>
      </div>
      <div className="mt-8">
        <button onClick={onNext} className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Continue
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Log in
          </a>
        </p>
      </div>
    </div>;
};