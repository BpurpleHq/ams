import { testimonial } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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
          <h1 className="text-4xl text-white font-bold mb-4">
            What Our Clients are Saying 
          </h1>
          <p className="text-white mb-6"> All that excitement before your wedding day doesn’t have to fly outside the window in marriage. Your relationship with your husband can grow even deeper, more exciting and blissful.
          </p>
          {/*<button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            About Us
          </button>*/}
        </div>
          <div className="w-full md:w-2/3 space-y-6">
           {testimonial.map((testimonial, index, arr) => {
              // Determine if the card should be indented (first, last, and every other card)
              const isIndented =
                index === 0 || // First card
                index === arr.length - 1 || // Last card
                index % 2 === 0; // Every other card (0, 2, 4, etc.)

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center transform transition duration-300 hover:shadow-lg hover:scale-105"
                  style={{
                    marginLeft: isIndented ? '80px' : '0px', // Indent first, last, and alternate cards
                  }}
                >
                  <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
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
          {/*<button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            View More
          </button>*/}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;