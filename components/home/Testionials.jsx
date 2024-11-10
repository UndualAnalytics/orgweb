"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star } from 'lucide-react';
import 'swiper/css';
import Image from 'next/image';



const testimonials = [
  {
    id: 1,
    name: "Akasha Panda",
    role: "MANAGER",
    content: "The team at Vdigtech was extremely knowledgeable and helpful in guiding me through the entire process. I am very pleased with their result, which helps me to get high compliments regarding my business.",
    rating: 5,
    avatar: "/api/placeholder/48/48"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO",
    content: "Outstanding service and incredible attention to detail. The team went above and beyond our expectations.",
    rating: 5,
    avatar: "/api/placeholder/48/48"
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (
    <div className="w-full bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-center mb-8">
            <div className="rounded-full border border-gray-700 p-8">
              <div className="text-primaryColor">
                <Star size={32} />
              </div>
            </div>
          </div>
        </div>
        
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl mb-12 leading-relaxed">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src="/images/home/avatar.png"
                    alt={`${testimonial.name}'s avatar`}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1 ml-4">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        className="fill-primaryColor text-primaryColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;