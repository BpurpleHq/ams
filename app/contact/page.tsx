import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: 'AskMrzSparkles | Contact',
};

const page = () => {
  return (
    <main className=" relative w-full">
    <section className="pt-20 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            
            <div className="lg:w-1/2 m-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-3xl font-light text-gray-800 leading-tight"> Contact Page </h1>
              <p className="text-lg mb-2">
            We’d love to hear from you! Fill out the form below.
          </p>
              
            </div>
          </div>
        </section>
     {/* <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Contact />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>
      </div>
    </section>*/}
        

      
    </main>
  )
}

export default page