import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: 'AskMrzSparkles | WalkWithMe',
};

const page = () => {
  return (
    <div>
      
        <section className="bg-gray-50 pt-20 pb-6" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            {/* Text Content */}
            <div className="lg:w-1/2 m-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Walk with Me

              </h1>
              <p className="mt-4 text-lg text-gray-800">
                Welcome home -</p>
              {/*<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Details
              </button>*/}
            </div>
           
            
          </div>
        </section>

      
 
      
    </div>
  )
}

export default page