import { testimonial } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";
import CustomButton from './CustomButton';

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="relative py-20 bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: `url('/ms3.jpeg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
          {/* Heading */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
              Don't take our word for it!!
            </h1>
            <p className="text-white text-2xl font-light">
              See what our clients are saying..
            </p>
          </div>

          {/* Testimonials */}
          <div className="w-full md:w-2/3 space-y-8">
            {testimonial.map((item, index) => {
              const isIndented = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg flex flex-col transition-transform duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in`}
                  style={{ marginLeft: isIndented ? '80px' : '0px' }}
                >
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{item.quote}"</p>
                  <p className="text-teal-600 font-semibold mt-4 text-right">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
         <Link href="/resources/testimonial" passHref>  {/**changed the button name and url **/}
        <CustomButton
          title="More Testimonials.."
          btnType="button"
          containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 mt-5 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
          textStyles="text-base"
        />
      </Link>
          
        </div>
      </div>

      
    </section>
  );
};

export default TestimonialsSection;
