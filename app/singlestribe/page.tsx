import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SingleNewsletter from '@/components/singlenewsletter'

export const metadata = {
  title: 'AskMrzSparkles | Singlestribe',
};

const page = () => {
  return (
    <main className=" relative w-full">
    <section className="pt-20 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
              <h1 className="text-4xl md:text-3xl font-light text-gray-800 leading-tight">Newsletter - Singles Tribe </h1>
           
              
            </div>
        
        </section>

        <SingleNewsletter />
        

      
    </main>
  )
}

export default page