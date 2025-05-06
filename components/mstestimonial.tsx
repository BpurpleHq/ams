import { testimonial } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Link from "next/link"

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="py-16 bg-gray-50 bg-cover bg-center"
      style={{
        backgroundImage: `url('/slideimg3.png')`, // Replace with actual background image URL or path
      }}
    >
      <div className="container mx-auto px-4">
       
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 text-center md:text-left ml-6">
          <h1 className="text-5xl text-white font-bold m-4">
            Don't take our word for it!!
          </h1>
          <p className="text-white text-3xl font-light m-4"> See what our clients are saying.. </p>
        </div>
          <div className="w-full md:w-2/3 space-y-6 duration-600 animate-fade-in">
           {testimonial.map((testimonial, index) => {
              const isIndented =
                index === 0 ||
                index % 2 === 0; 

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center transform transition duration-300 hover:shadow-lg hover:scale-105"
                  style={{
                    marginLeft: isIndented ? '80px' : '0px', 
                  }}
                >
                  
                  <div>
                    <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    <p className="text-teal-700 font-semibold mt-2">{testimonial.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-8">
        <Link href='/resources/testimonial'>
          <button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            View More..
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;