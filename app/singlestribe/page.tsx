import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Newsletter from '@/components/msnewsletter'

export const metadata = {
  title: 'AskMrzSparkles | Singlestribe',
};

const page = () => {
  return (
    <main className=" relative w-full">
    <section className="pt-20 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            
            <div className="lg:w-1/2 m-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-3xl font-light text-gray-800 leading-tight">Newsletter - Singles Tribe </h1>
              {/*<p className="text-lg mb-2">
            We’d love to hear from you! Fill out the form below.
          </p>*/}
              
            </div>
          </div>
        </section>

        <Newsletter />
        

      
    </main>
  )
}

export default page