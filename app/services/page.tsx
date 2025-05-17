"use clients"


import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { fullservices } from '@/constants'

export const metadata = {
  title: 'AskMrzSparkles | Services',
};

const Page = () => {
  return (
    <main className="relative w-full">
      <section className="container mx-auto px-6 space-y-20">
      <h2 className="text-4xl font-extrabold text-teal-700 mb-3 tracking-tight">
              at <span className="text-teal-900">TAMA</span>
            </h2>
        {fullservices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 animate-fade-in ${
              index % 2 === 1 ? 'bg-teal-100 rounded-3xl p-10' : 'bg-white'
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="italic text-teal-600 mb-6">{service.subtitle}</p>
              <p className="text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
                Before building a life with someone else, you must first build a life within yourself. 
                Whether you are single and waiting, dating or engaged to be married, I’m here to hold your hand through this phase.
                If you're a purpose-driven single ambitious, growth-focused, and unwilling to settle for less, this is your space. 
                If you find yourself wondering. </p>
              <p className="text-gray-700"> "Am I truly ready for the kind of love I desire?"</p>
              <p className="text-gray-700"> "Why do I keep attracting relationships that drain instead of sustain me?"</p>
              <p className="text-gray-700"> "Can I heal from my past without losing hope for my future?"</p>
              <p className="text-gray-700"> "How do I stay true to myself while allowing love to find me?"</p>
              <p className="text-gray-700 mb-8"> “Am I making the right choice of a partner?”</p>
              <p className="text-gray-700 mb-8 leading-relaxed whitespace-pre-line">
                These are not small questions, they are signs that you are ready for deeper answers.
                Through the lens of Emotional Intelligence and Mind Mastery, I help growth focused Singles like you:
                Heal hidden emotional wounds that silently shape your relationship patterns.Grow into a grounded, self-mastered version 
                of yourself that naturally attracts healthy love. Choose partners aligned with your values, not just your emotions.
              Build relationships rooted in connection, clarity, and longevity, not just chemistry.
                This is not about rushing you into a relationship. It’s about preparing you for one that lasts because it’s built on the right foundation: YOU.
                You deserve a relationship that mirrors your growth, not magnifies your gaps.
                The journey to your best relationship begins with becoming your best self.
                Let's walk it together. Book a session with me and take your first bold step toward wholeness, wisdom, and love that thrives. </p>

              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
              
                  <CustomButton
                    title="Book a Session"
                    btnType="button"
                    containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition"
                    textStyles=""
                  />
               
              </Link>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={service.image}
                alt={service.alt || service.title}
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </section>

      
    </main>
  );
};

export default Page;

