'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'TechBusiness transformed our entire infrastructure. Their expertise and dedication to our success exceeded all expectations. We saw a 300% increase in efficiency within the first quarter.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateCorp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'The team\'s technical knowledge and ability to understand our business needs was impressive. They delivered a solution that not only solved our problems but anticipated future challenges.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Operations',
    company: 'GlobalTech Solutions',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'Working with TechBusiness has been a game-changer for our organization. Their cloud solutions have given us the scalability and security we needed to expand internationally.',
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'StartupHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote: 'From day one, TechBusiness understood our vision. They provided strategic guidance and technical expertise that helped us launch our platform ahead of schedule and under budget.',
  },
  {
    name: 'Lisa Martinez',
    role: 'VP of Technology',
    company: 'Enterprise Dynamics',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'The cybersecurity solutions implemented by TechBusiness have given us peace of mind. Their proactive approach to security has protected us from multiple threats and kept our data safe.',
  },
  {
    name: 'James Wilson',
    role: 'Managing Director',
    company: 'FutureVision Ltd',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Outstanding service and exceptional results. TechBusiness helped us navigate our digital transformation journey with confidence. Their team became an extension of ours.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-12 shadow-xl">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} />
                      ))}
                    </div>
                    <p className="text-2xl text-gray-800 leading-relaxed mb-8 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-4 shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-4 shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-3 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}