"use clients"; // Fixed typo from "use clients"

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

// Metadata for the page
export const metadata = {
  title: "AskMrzSparkles | Services",
};

const Page = () => {
  return (
    <main className="relative w-full bg-gray-50 min-h-screen">
      <section className="container mx-auto px-6 py-16 md:py-24">
        {/* Flex container for responsive layout */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
        <h2>  </h2>
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight">
              Singles Coaching, Counseling & Therapy
            </h2>
            <p className="text-xl italic text-teal-600 font-medium">
              Become Whole, Choose Better, Build Longer
            </p>
            <p className="text-gray-700 leading-relaxed">
              Before building a life with someone else, you must first build a life within
              yourself. Whether you’re single and waiting, dating, or engaged, I’m here to guide
              you through this phase.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you’re a purpose-driven, ambitious single unwilling to settle for less, this is
              your space.
            </p>
            <ul className="text-gray-700 leading-relaxed list-disc list-inside">
              <li>Why do I keep attracting the wrong people?</li>
              <li>Am I really ready for the love I desire?</li>
              <li>Can I heal and still believe in something real?</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These aren’t random questions—they’re signs you’re ready to do love differently.
              Through Emotional Intelligence and Mind Mastery, I’ll help you heal, grow, and
              choose better to build a love that lasts. Let’s begin your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton
                  title="Book a Session"
                  btnType="button"
                  containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                  textStyles="text-base"
                />
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/SINGLESPIC1.png"
              alt="Singles Coaching, Counseling & Therapy"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-teal-100 container mx-auto px-6 py-16 md:py-24">
        {/* Flex container for responsive layout */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight">
              Couples Coaching, Counselling & Therapy
            </h2>
            <p className="text-xl italic text-teal-600 font-medium">
              Reconnect. Revive. Reinforce.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When two people say “I do,” no one hands them a manual for what comes next. Life happens—work, kids, pressure—and before you know it, the connection feels... off.
Maybe you're wondering:
            </p>
           
            <ul className="text-gray-700 leading-relaxed list-disc list-inside">
              <li>Why does it feel like we’re just coexisting?</li>
              <li>Can we ever get past the hurt?</li>
              <li>Why does every conversation turn into an argument?</li>
              <li>Is there more to this than just managing chaos?</li>
            </ul>
             <p className="text-gray-700 leading-relaxed">
              If these questions sound familiar, it’s time to pause—and pivot.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With tools rooted in Emotional Intelligence, Mind Mastery, and real-life relationship strategies, I help couples heal, communicate, and reconnect deeply—not perfectly, but honestly.
This isn’t about fixing anyone. It’s about rediscovering the love you both deserve.
Book your session today. Let’s rebuild from the inside out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton
                  title="Book a Session"
                  btnType="button"
                  containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                  textStyles="text-base"
                />
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/COUPLESPICS1.png"
              alt="Singles Coaching, Counseling & Therapy"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        {/* Flex container for responsive layout */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight">
              
              Premarital Coaching Program (PCP)
            </h2>
            <p className="text-xl italic text-teal-600 font-medium">
              Build a Strong Foundation Before Saying “I Do.”
            </p>
            <p className="text-gray-700 leading-relaxed">
              Premarital sessions with MrzSparkles aren’t just another box to tick, they’re a deep, transformative journey into who you are, who you’re choosing, and the kind of marriage you truly want to build.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In just 8 powerful sessions, we’ll uncover the hidden dynamics in your relationship, equip you with emotional intelligence tools, and walk through real conversations about values, healing, money, parenting, and purpose.
            </p>
            <p className="text-gray-700 leading-relaxed">
             This is for high-achieving couples ready to do marriage differently  with intention, clarity, and connection.
            </p>
            <p className="text-gray-700 leading-relaxed">
             Ready to build a marriage that lasts not just in love, but in peace, purpose, and partnership?
            </p>
            <p className="text-gray-700 leading-relaxed">
             Book your session now and begin your forever the right way
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton
                  title="Book a Session"
                  btnType="button"
                  containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                  textStyles="text-base"
                />
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/PMPCOACHINGPICS.png"
              alt="Singles Coaching, Counseling & Therapy"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="bg-teal-100 container mx-auto px-6 py-16 md:py-24 mb-10">
        {/* Flex container for responsive layout */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight">
             Marriage Health Check (MCH)
            </h2>
            <p className="text-xl italic text-teal-600 font-medium">
             Assess. Adjust. Elevate
            </p>
            <p className="text-gray-700 leading-relaxed">
              Is your marriage thriving… or just getting by?
            </p>
            <p className="text-gray-700 leading-relaxed">
              If the spark is fading, the connection feels off, or you’re stuck in the same unresolved patterns? 
            </p>
    
            <p className="text-gray-700 leading-relaxed">
              it’s time for a Marriage Health Check.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This isn’t therapy. It’s a proactive check-in to spot what’s working, what’s not, and what your relationship truly needs right now.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You’ll walk away with clarity, connection tools, and a fresh sense of direction.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ready to discover what’s really going on beneath the surface?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Book your Marriage Health Check today. Let’s strengthen what matters most. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton
                  title="Book a Session"
                  btnType="button"
                  containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                  textStyles="text-base"
                />
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/MHCHECKPICS.png"
              alt="Singles Coaching, Counseling & Therapy"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;