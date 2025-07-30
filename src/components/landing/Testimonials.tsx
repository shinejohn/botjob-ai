import React from 'react';
export const Testimonials = () => {
  const testimonials = [{
    quote: "Our AI receptionist has transformed how we handle calls. It never misses a message and our clients can't tell they're talking to an AI.",
    author: 'Sarah Johnson',
    position: 'Office Manager',
    company: 'Westlake Dental',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  }, {
    quote: "We've cut our administrative costs by 60% while improving response times. The ROI is incredible compared to hiring additional staff.",
    author: 'Michael Chen',
    position: 'Operations Director',
    company: 'Brightway Properties',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
  }, {
    quote: 'I was skeptical at first, but our AI sales assistant has become our top performer, qualifying leads 24/7 and never taking a day off.',
    author: 'Jessica Miller',
    position: 'Sales Manager',
    company: 'TechAdvance Solutions',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg'
  }];
  return <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Businesses of all sizes are transforming their operations with
            BotJob.ai
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">
            Read more customer case studies →
          </a>
        </div>
      </div>
    </div>;
};