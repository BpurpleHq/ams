import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'AskMrzSparkles | Services',
};

const page = () => {
  return (
    <main className=" relative w-full">
        <section className="bg-gray-50 pt-20 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            {/* Text Content */}
            <div className="lg:w-1/2 m-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"> Service Page </h1>
            </div>
          </div>
        </section>

      <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
       <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Singles</h2>
          <p className="text-lg mb-6">
          Elevate your personal growth and attain clarity with dedicated coaching tailored for singles, as seasoned relationship coach...
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
        </div>
       
      </div>
    </section>



        <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Individual Coaching</h2>
          <p className="text-lg mb-6">
          Our tailored one-on-one coaching sessions help you identify and overcome personal barriers, empowering you to evolve into the best version of...
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>
      </div>
    </section>

        <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Dating Clarity for Relationships</h2>
          <p className="text-lg mb-6">
          Are you ready to attract and build meaningful relationships? Our Clarity sessions are designed to help you understand your patterns...
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
        </div>
        {/*<div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>*/}
      </div>
    </section>

      <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Premarital Counseling (Marriage Preparatory)</h2>
          <p className="text-lg mb-6">
          Preparing for marriage is a significant step, our premarital counseling program offers comprehensive guidance to ensure you and...
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
        </div>
        {/*<div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>*/}
      </div>
    </section>

      <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Married Coaching</h2>
          <p className="text-lg mb-6">
          Marriage is a continuous journey of growth and connection. Our dedicated coaching focuses on enhancing...
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
        </div>
        {/*<div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>*/}
      </div>
    </section>

      <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Couple Coaching</h2>
          <p className="text-lg mb-6">
          Couples Coaching is designed to help partners navigate challenges together to strengthen their relationships and...
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
        </div>
        {/*<div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>*/}
      </div>
    </section>

      
    </main>
  )
}

export default page