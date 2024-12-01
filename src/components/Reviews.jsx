import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.css'; // Import your custom styles
import Slide from "./Slide";
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';

// Helper function to calculate relative time
const timeAgo = (date) => {
  const now = new Date();
  const seconds = Math.floor((now - new Date(date)) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let interval in intervals) {
    const timePassed = Math.floor(seconds / intervals[interval]);
    if (timePassed >= 1) {
      return `${timePassed} ${interval}${timePassed > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
};

// Updated reviews with real-time comments and dates
const reviews = [
  {
    name: "NIRANJAN",
    profilePic: profile1,
    feedback: "Excellent service with attention to detail. The team made me feel confident in their abilities.",
    rating: 5,
    date: "2024-09-25",
  },
  {
    name: "Surya Kumar",
    profilePic: profile2,
    feedback: "Very professional and timely. Highly recommended for anyone looking for quality service.",
    rating: 4,
    date: "2023-09-30",
  },
  {
    name: "Kavin Raj",
    profilePic: profile4,
    feedback: "From start to finish, everything was seamless. I will definitely come back for more services!",
    rating: 5,
    date: "2023-09-28",
  },
  {
    name: "Arvind aru",
    profilePic: profile3,
    feedback: "The work was done with great precision, and I was impressed by their efficiency.",
    rating: 4,
    date: "2024-09-20",
  },
  {
    name: "Ramprasath M",
    profilePic: profile1,
    feedback: "Amazing staff and quality work. I’m beyond satisfied and will refer them to my friends.",
    rating: 5,
    date: "2024-09-15",
  },
  {
    name: "karuppu g",
    profilePic: profile2,
    feedback: "Fantastic results! I appreciate how they handled everything with such professionalism.",
    rating: 5,
    date: "2024-09-05",
  },
];

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <Slide delay={0.3}>
          <div className="flex flex-wrap -mx-2">
            {reviews.map((review, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    {/* Profile image aligned to the left */}
                    <img
                      src={review.profilePic}
                      alt={`${review.name}'s profile`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                      <p className="text-gray-700 flex-grow">{review.feedback}</p>
                      <div className="flex items-center mt-4">
                        {Array(review.rating)
                          .fill()
                          .map((_, i) => (
                            <FaStar key={i} className="text-yellow-500" />
                          ))}
                        <span className="ml-2 text-gray-500 text-sm">{timeAgo(review.date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Reviews;
