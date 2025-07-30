import React from 'react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold text-white mb-4">BotJob.ai</div>
            <p className="text-gray-400 mb-4">
              Find the perfect bot for the job. AI employees that actually work.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social, index) => <a key={index} href="#" className="text-gray-400 hover:text-white transition">
                    {social}
                  </a>)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">For Businesses</h3>
            <ul className="space-y-2">
              {['How It Works', 'Pricing', 'Case Studies', 'Industries', 'Enterprise'].map((link, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">For Developers</h3>
            <ul className="space-y-2">
              {['Join as Developer', 'Documentation', 'API Reference', 'Success Stories', 'Community'].map((link, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Blog', 'Careers', 'Press', 'Contact', 'Privacy Policy'].map((link, index) => <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BotJob.ai. All rights reserved.
        </div>
      </div>
    </footer>;
};