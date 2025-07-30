import React from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
export const AgentReviews = ({
  agent
}: {
  agent: any;
}) => {
  // Sample review data
  const reviews = [{
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      company: 'Acme Inc.',
      position: 'Office Manager'
    },
    rating: 5,
    date: '2 weeks ago',
    title: 'Transformed our front desk operations',
    content: "ReceptionistPro has completely changed how we manage incoming calls. Our clients love the professional greeting and quick responses. It's like having a full-time receptionist at a fraction of the cost.",
    helpful: 24,
    developerResponse: "Thank you for your kind words, Sarah! We're thrilled that ReceptionistPro is working so well for your team at Acme Inc."
  }, {
    id: 2,
    user: {
      name: 'Michael Torres',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      company: 'Torres Dental',
      position: 'Dentist'
    },
    rating: 4,
    date: '1 month ago',
    title: 'Great for appointment management',
    content: "We've been using ReceptionistPro for about a month now and it's been excellent for managing our patient appointments. The only reason for 4 stars instead of 5 is that we had some initial setup challenges with our specific calendar system.",
    helpful: 18,
    developerResponse: "Thanks for the feedback, Michael! We've noted your concerns about calendar integration and our team is working on making this process smoother."
  }, {
    id: 3,
    user: {
      name: 'Jennifer Lee',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      company: 'Lee Legal Services',
      position: 'Attorney'
    },
    rating: 5,
    date: '2 months ago',
    title: 'Client intake has never been easier',
    content: "As a solo attorney, managing client calls while in court was impossible. ReceptionistPro now handles all my incoming calls, schedules consultations, and even does basic client intake. It's been a game-changer for my practice.",
    helpful: 31,
    developerResponse: null
  }];
  // Rating distribution
  const ratingDistribution = [{
    stars: 5,
    percentage: 78
  }, {
    stars: 4,
    percentage: 15
  }, {
    stars: 3,
    percentage: 5
  }, {
    stars: 2,
    percentage: 1
  }, {
    stars: 1,
    percentage: 1
  }];
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
        <button className="mt-2 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Write a Review
        </button>
      </div>
      {/* Rating Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Rating Summary */}
        <div>
          <div className="flex items-center mb-4">
            <div className="text-5xl font-bold text-gray-900 mr-4">
              {agent.rating}
            </div>
            <div>
              <div className="flex text-yellow-500 mb-1">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill={star <= Math.round(agent.rating) ? 'currentColor' : 'none'} />)}
              </div>
              <div className="text-sm text-gray-500">
                {agent.reviews} reviews
              </div>
            </div>
          </div>
          {/* Rating Distribution */}
          <div className="space-y-2">
            {ratingDistribution.map(item => <div key={item.stars} className="flex items-center">
                <div className="w-16 text-sm text-gray-600">
                  {item.stars} stars
                </div>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{
                  width: `${item.percentage}%`
                }}></div>
                  </div>
                </div>
                <div className="w-10 text-sm text-gray-600">
                  {item.percentage}%
                </div>
              </div>)}
          </div>
        </div>
        {/* Highlighted Stats */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">
            What Customers Are Saying
          </h3>
          <div className="space-y-4">
            <div className="flex">
              <div className="w-40 text-sm text-gray-600">Response Time</div>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
            </div>
            <div className="flex">
              <div className="w-40 text-sm text-gray-600">Ease of Use</div>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
            </div>
            <div className="flex">
              <div className="w-40 text-sm text-gray-600">Value for Money</div>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill={star <= 4 ? 'currentColor' : 'none'} />)}
              </div>
            </div>
            <div className="flex">
              <div className="w-40 text-sm text-gray-600">Customer Support</div>
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill={star <= 4 ? 'currentColor' : 'none'} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map(review => <div key={review.id} className="border-b border-gray-200 pb-8 last:border-0">
            <div className="flex items-start">
              <img src={review.user.avatar} alt={review.user.name} className="w-12 h-12 rounded-full object-cover mr-4" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {review.user.name}
                    </h4>
                    <div className="text-sm text-gray-500">
                      {review.user.company} • {review.user.position}
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0 flex items-center">
                    <div className="flex text-yellow-500 mr-2">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill={star <= review.rating ? 'currentColor' : 'none'} />)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                <h5 className="font-medium text-gray-900 mt-3">
                  {review.title}
                </h5>
                <p className="text-gray-700 mt-2">{review.content}</p>
                <div className="mt-3 flex items-center">
                  <button className="flex items-center text-gray-500 hover:text-gray-700">
                    <ThumbsUp size={16} className="mr-1" />
                    <span className="text-sm">Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-gray-700 ml-4">
                    <MessageCircle size={16} className="mr-1" />
                    <span className="text-sm">Comment</span>
                  </button>
                </div>
                {review.developerResponse && <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-gray-900 mb-1">
                      Response from developer
                    </div>
                    <p className="text-gray-700 text-sm">
                      {review.developerResponse}
                    </p>
                  </div>}
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-6 text-center">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition">
          Load More Reviews
        </button>
      </div>
    </div>;
};