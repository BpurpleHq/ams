"use client";



import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const BeforeYouSayIDo = () => {


  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 mb-6 leading-tight">
            Before You Say I Do MasterClass: <br />
            <span className="text-teal-900 md:text-3xl">How to Prepare for Marriage Without Pressure, Confusion or Regret</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Stop leaving your future to chance. The choices you make <strong>before marriage</strong> determine the quality of the life you’ll build after it.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            If you’re serious about love, but want to build it with  <strong>wisdom, not pressure</strong>, this is your moment to prepare intentionally.
             <strong> 90-minute MasterClass</strong>
            session for intentional singles and committed partners who want to build lasting love the right way.
            
          </p>
          <div className="flex flex-col items-center">
            <a
              href="https://selar.com/singlesmasterclass"
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-500 transition duration-300"
            >
              Secure Your Spot Now
            </a>
            <p className="text-sm text-red-500 mt-4">Early bird registration is now open — Limited spots available!</p>
          </div>
          
        </div>

        {/* Why This MasterClass */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 text-center mb-6">
            Why You Need This MasterClass
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto text-center">
            Marriage isn’t built on love alone—it’s built on clarity, emotional readiness, and truth. This MasterClass is for intentional singles and committed partners who want to:
          </p>

          <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-3 max-w-3xl mx-auto">
            <li>
               In a dating relationship and seriously considering marriage.
            </li>
            <li>
               Single but preparing and want to get it right before saying “I do.”
            </li>
            <li>
               Tired of cultural pressure, confusion, or fear of choosing wrong.
            </li>
            <li>Ready to build with intention from a place of clarity,not just guesswork and vibes.
            </li>
          </ul>
        </div>

        {/* What You'll Learn */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 text-center mb-6">
            What You’ll Learn in 90 Minutes
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto text-center">
            In just one session, you’ll walk away with actionable tools to prepare for marriage with confidence:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-3 max-w-3xl mx-auto">
            <li>Uncover hidden beliefs shaping your expectations about marriage.</li>
            <li>Understand the real demands of marriage beyond culture and romance.</li>
            <li>Learn powerful communication tools to deepen intimacy and connection.</li>
            <li>Gain clarity on roles and expectations to prevent future conflict.</li>
            <li>Discover the BOND framework to navigate differences with emotional intelligence.</li>
          </ul>
          <div className="text-center">
            <a
              href="https://selar.com/singlesmasterclass"
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold"
            >
              Join the MasterClass Now
            </a>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-16 bg-teal-100 py-12 px-6 rounded-lg flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-3/3">
            <Image
              src="/bysid.jpg"
              alt="bysid"
              width={800}
              height={900}
              className="rounded-xl shadow-lg object-fill h-auto transition-transform transform hover:scale-105"
            />
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
            Event Details
          </h2>
          <p className="text-lg text-teal-900 mb-4"><strong>Date:</strong> Friday, 28th November 2025</p>
          <p className="text-lg text-teal-900 mb-4"><strong>Time:</strong> 8:00 PM WAT</p>
          <p className="text-lg text-teal-900 mb-8"><strong>Location:</strong> Online (link shared upon registration)</p>
          <a
            href="https://selar.com/singlesmasterclass"
            className="inline-block bg-teal-500 text-teal-100 px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
          >
            Reserve Your Spot
          </a>

          </div>
          
        </div>

        {/* Meet the Coach */}
        <div className="mt-16 bg-teal-100 py-12 px-6 rounded-lg flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <Image
              src="/sparkles3.png"
              alt="Fejiro Adaka, Coach"
              width={350}
              height={400}
              className="rounded-xl shadow-lg object-cover h-auto transition-transform transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              Meet Your <span className="text-teal-900">Coach</span>
            </h2>
            <p className="text-lg text-teal-900 leading-relaxed">
              Fejiro Adaka (aka <strong>MrzSparkles</strong>)has helped hundreds of individuals 
              globally to transform their minds and become better partners in their relationships and marriage.
              <p className="text-lg text-teal-900 leading-relaxed"> She is a certified Emotional Intelligence and Marriage Coach who is deeply passionate about helping career professionals and 
business owners heal from past trauma, build self awareness and position themselves to start and remain married without tears.</p>

<p className="text-lg text-teal-900 leading-relaxed"> She has been happily married for 11 years and her goal is to see strong and healthy relationships emerge with purpose and passion. </p>


            </p>
           {/* <ul className="list-disc list-inside text-lg text-teal-900 space-y-2">
              <li>Heal limiting beliefs.</li>
              <li>Build strong emotional foundations.</li>
              <li>Navigate cultural pressures with wisdom.</li>
              <li>Prepare intentionally for marriage, not blindly.</li>
            </ul>*/}
            <p className="text-lg leading-relaxed font-semibold">
              “Love is not enough to build a lasting marriage but preparation is.”
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 text-center mb-6">
            What Others Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-4">
                “I’m glad I joined the masterclass, the lessons were truly impactful. I now feel more at ease and clear about navigating relationships. 
                I’ve started applying what I learned, and I’m grateful for the transformation journey that began with MrzSparkles.”
              </p>
              <p className="text-sm font-semibold text-teal-500">Anonymous</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-4">
               “Working with MrzSparkles was truly eye-opening. The thoughtful questions she asked made me reflect deeply on 
               my “why,” and the post-test conversations were the real game changer. I now feel more confident re-entering the 
               dating scene and validated in my thoughts, beliefs, and actions toward relationships and marriage.”

              </p>
              <p className="text-sm font-semibold text-teal-500">Anonymous</p>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
            Why This Matters
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Many enter marriage with unexamined beliefs or avoid crucial conversations about money, roles, or family boundaries. This MasterClass helps you confront those blind spots <strong>before</strong> they become struggles.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
            Ready to Prepare Intentionally?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Don’t leave your future to chance, culture, or confusion. Secure your seat now and start building a marriage that’s joyful, safe, and lasting.
          </p>
          <a
            href="https://selar.com/singlesmasterclass"
            className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-500 transition duration-300"
          >
            Register Now
          </a>
          <p className="text-xl font-semibold text-teal-500 mt-8">
            Prepare wisely. Love intentionally. Build a marriage that lasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeYouSayIDo;