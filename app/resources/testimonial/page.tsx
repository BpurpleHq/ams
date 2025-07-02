
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import React from 'react'
import { alltestimonial } from '@/constants';

export const metadata = {
  title: 'AskMrzSparkles | Testimonial',
};

const page = () => {
  return (
   <main className=" relative w-full">
   <section className="bg-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
        <div className="w-full md:w-full text-center md:text-left mt-10">
          <h2 className="text-4xl font-bold m-4">What our clients say about us</h2>
          <p className="text-lg mb-2 text-left">
          Don't take our word for it, hear what our esteemed clients are saying.
          </p>
        </div>
       
      </div>
    </section>
        <section className="py-16 bg-gray-50 bg-cover">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-full space-y-6 duration-600 animate-fade-in">
           {alltestimonial.map((testimonial, index) => {
              const isIndented =
                index === 0 || 
                index % 2 === 0; 

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center transform transition hover:bg-teal-50 duration-300 hover:shadow-lg hover:scale-105"
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
          {/*<button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            View More
          </button>*/}
        </div>
      </div>
    </section>

      
    </main>
  )
}

export default page