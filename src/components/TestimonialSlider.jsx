import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Professional, and discreet ! They kept me updated and got results quickly. Highly recommended!",
      name: "Sarah L",
      rating: 5
    },
    {
      id: 2,
      text: "Super easy to deal with and got results fast. No nonsense, no time-wasting—just proper professionals",
      name: "Darrel",
      rating: 5
    },
    {
      id: 3,
      text: "I'd never done anything like this before, but the team were so considerate and easy to talk to. They really helped take the stress out of it. Thanks again guys!",
      name: "Rebecca W",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-8 bg-slate-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-8 top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 text-white hover:text-cyan-400 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-8 top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 text-white hover:text-cyan-400 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Testimonials Container */}
          <div className="text-center px-10">
            <div className="relative min-h-96 flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 transform translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                  }`}
                >
                  {/* Top Stars - Large Cyan Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 md:w-12 md:h-12 text-cyan-400 fill-current mx-2" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text - Larger and centered */}
                  <div className="mb-12 max-w-5xl px-4">
                    <p className="text-base md:text-xl  font-normal leading-relaxed text-center text-gray-100">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="text-center">
                    {/* Customer Name - Large Yellow Text */}
                    <h4 className="text-xl md:text-3xl text-yellow-500 mb-4">
                      {testimonial.name}
                    </h4>
                    
                    {/* Check A Review Badge */}
                    <div className="flex items-center justify-center mb-6">
                      <span className="text-gray-200 text-lg mr-3">Check A Review</span>
                      <div className="w-8 h-8 bg-pink-500 rounded-md flex items-center justify-center">
                        <Check className="w-5 h-5 text-white font-bold" />
                      </div>
                    </div>

                    {/* Bottom Stars - Medium Yellow Stars */}
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 md:w-8 md:h-8 text-yellow-400 fill-current mx-1" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;