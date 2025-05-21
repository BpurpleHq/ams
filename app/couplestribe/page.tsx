import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NewsletterCouple from '@/components/couplenewsletter'

export const metadata = {
  title: 'AskMrzSparkles | Couplestribe',
};

const page = () => {
  return (
    <main className=" relative w-full">
    <section className="pt-20 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
              <h1 className="text-4xl md:text-3xl font-light text-gray-800 leading-tight">Newsletter - Couples Tribe </h1>
           
          </div>
        </section>

        <NewsletterCouple />
        

      
    </main>
  )
}

export default page