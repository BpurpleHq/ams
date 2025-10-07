"use client";



import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const BeforeYouSayIDo = () => {
//   // Countdown Timer Logic
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date("2025-11-28T20:00:00").getTime();
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         return;
//       }

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(interval);
   // }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 mb-6 leading-tight">
            Before You Say “I Do” MasterClass: <br />
            <span className="text-teal-900">Prepare for Marriage Without Pressure</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto md:mx-0">
            Stop leaving your future to chance. The choices you make <strong>before marriage</strong> determine the quality of the life you’ll build after it.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto md:mx-0">
            In this <strong>90-minute MasterClass</strong>, gain the clarity, tools, and mindset to build lasting love with wisdom, not pressure.
          </p>
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://fierce-experimenter-6691.kit.com/424e8198ed"
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-500 transition duration-300"
            >
              Secure Your Spot Now
            </a>
            <p className="text-sm text-gray-500 mt-4">Early bird registration open — Limited spots available!</p>
          </div>
          {/* Countdown Timer */}
          {/*<div className="mt-8 bg-indigo-100 p-6 rounded-lg text-center max-w-md mx-auto md:mx-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hurry! Registration Closes Soon</h3>
            <div className="flex justify-center space-x-4">
              <div>
                <span className="block text-2xl font-bold text-indigo-600">{timeLeft.days}</span>
                <span className="text-sm text-gray-600">Days</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-indigo-600">{timeLeft.hours}</span>
                <span className="text-sm text-gray-600">Hours</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-indigo-600">{timeLeft.minutes}</span>
                <span className="text-sm text-gray-600">Minutes</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-indigo-600">{timeLeft.seconds}</span>
                <span className="text-sm text-gray-600">Seconds</span>
              </div>
            </div>
          </div>*/}
        </div>

        {/* Why This MasterClass */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 text-center mb-6">
            Why You Need This MasterClass
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto text-center">
            Marriage isn’t built on love alone—it’s built on clarity, emotional readiness, and truth. This MasterClass is for intentional singles and committed partners who want to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">✅</span> Align your values and vision for a strong foundation.
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">✅</span> Navigate tough conversations without fear or conflict.
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">✅</span> Manage cultural, religious, and personal expectations wisely.
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">✅</span> Build lasting love beyond romance with emotional intelligence.
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
              href="https://fierce-experimenter-6691.kit.com/424e8198ed"
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
            href="https://fierce-experimenter-6691.kit.com/424e8198ed"
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
              Fejiro Adaka (aka <strong>MrzSparkles</strong>) is a Certified Emotional Intelligence Coach, Marriage Coach, and Master Practitioner of NLP. With years of experience transforming over 100 relationships and marriages globally, she helps singles and couples:
            </p>
            <ul className="list-disc list-inside text-lg text-teal-900 space-y-2">
              <li>Heal limiting beliefs.</li>
              <li>Build strong emotional foundations.</li>
              <li>Navigate cultural pressures with wisdom.</li>
              <li>Prepare intentionally for marriage, not blindly.</li>
            </ul>
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
                “I wasn’t sure I’d get much value, but it was a great experience. I learned new things about my partner, especially the importance of understanding her love languages and cultural beliefs.”
              </p>
              <p className="text-sm font-semibold text-teal-500">E.N., Port Harcourt</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-4">
                “The sessions gave me clarity to articulate my thoughts and beliefs about relationships. I’m going back into dating with more confidence.”
              </p>
              <p className="text-sm font-semibold text-teal-500">S., Lagos, Nigeria</p>
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
            href="https://fierce-experimenter-6691.kit.com/424e8198ed"
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