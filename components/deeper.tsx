"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";

const DeeperBootcamp: React.FC = () => {
  // Initialize Google Analytics
  // useEffect(() => {
  //   ReactGA.initialize("YOUR_GA4_MEASUREMENT_ID"); // Replace with your GA4 Measurement ID
  // }, []);

  // const handleButtonClick = (buttonLabel: string) => {
  //   ReactGA.event({
  //     category: "Button",
  //     action: "Click",
  //     label: buttonLabel,
  //   });
  // };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content and sticky sidebar layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 w-full">
            {/* Hero Section */}
<div className="text-left mb-12">
  <h1 className="text-2xl md:text-5xl font-serif font-extrabold text-teal-900 mb-6 leading-tight tracking-wide">
    <span className="text-teal-900">
      Your connection with your spouse can be deeper… but it starts with you choosing to build it on purpose.
    </span>
  </h1>
  
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    You and your partner likely have 30, 40, maybe even 70 years ahead with each other. The decisions you make today shape the quality of those years.  
  </p>

  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl">
    Imagine this. 
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    It’s 20… 30… maybe even 50 years from now.
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    You’re sitting side by side not as strangers living under the same roof, but as best friends who have grown through seasons together.
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    There’s laughter in the room.
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    The conversations are still rich. 
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    The bond is still warm.
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    And there’s a quiet knowing between both of you that “we built this… intentionally”.
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    That kind of marriage doesn’t happen by chance.
  </p>
  <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
    It’s created, moment by moment, starting with how you evolve with the right mindset, emotional awareness, and shared vision.
  </p>
</div>

            {/* Introducing Deeper Bootcamp */}
            <div className="mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 text-center mb-6">
                Introducing: Deeper Bootcamp
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto text-center">
                A 4-week live group experience for spouses and couples who want to expand their self-awareness, deepen their connection, 
                and build systems that create an unshakable bond—not just for today, but for a lifetime ahead. </p>
                
                <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto text-center">This isn’t about “fixing what’s broken”; it’s about nurturing what’s already there, so it can flourish for decades to come.
              </p>
            </div>

            {/* Why This Bootcamp */}
            <div className="mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 text-center mb-6">
                This Bootcamp Is Perfect For You If You Want To:
              </h2>
              <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 mb-8 space-y-4 max-w-3xl mx-auto">
                <li>Reignite that easy, warm closeness that first brought you together.</li>
                <li>Communicate with honesty, calm, and mutual respect.</li>
                <li>Turn everyday moments into opportunities for deeper connection.</li>
                <li>Build a peaceful, purpose-driven partnership that thrives through every season.</li>
                <li>Create a marriage that stays strong and alive in your 50s, 60s, and beyond.</li>
              </ul>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto text-center">
                This isn’t about “fixing what’s broken”—it’s about nurturing what’s already there, so it can flourish for decades to come.
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 text-center mb-6">
                In Just 4 Weeks, You’ll Be Able To:
              </h2>
              <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 mb-8 space-y-4 max-w-3xl mx-auto">
                <li>Communicate with clarity so conversations stop feeling like battles.</li>
                <li>Reconnect with yourself and awaken a deeper sense of connection with your spouse.</li>
                <li>Build your emotional intelligence to respond with wisdom, not reactions.</li>
                <li>Turn unspoken expectations into clear agreements.</li>
                <li>Create systems and a shared vision so your marriage feels aligned and future-focused.</li>
              </ul>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto text-center">
                These are the skills that keep love alive—not just now, but through a lifetime together.
              </p>
              <div className="text-center">
                <a
                  href="https://selar.com/deeperbootcamp"
                  className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg text-lg md:text-xl font-medium hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  // onClick={() => handleButtonClick("Join the Deeper Bootcamp Now")}
                >
                  Join the Deeper Bootcamp Now
                </a>
              </div>
            </div>

            {/* You Are Probably Thinking */}
            <div className="mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 text-center mb-6">
                You Are Probably Thinking…
              </h2>
              <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 mb-8 space-y-4 max-w-3xl mx-auto">
                <li>“We’re not doing badly… maybe later.”</li>
                <li>“Four weeks? I don’t have time for this.”</li>
                <li>“Things will sort themselves out eventually.”</li>
                <li>“My clients have told me severally ‘I wish we learnt these sooner.’”</li>
              </ul>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto text-center">
                Time doesn’t make connections stronger with mere intentions. The couples who thrive decades from now are the ones who invest now, while things are still “good,” so they can become even better. You have the gift of time—don’t wait until disconnection quietly grows roots.
              </p>
              <div className="text-center">
                <a
                  href="https://selar.com/deeperbootcamp"
                  className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg text-lg md:text-xl font-medium hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  // onClick={() => handleButtonClick("Join the Deeper Bootcamp Now")}
                >
                  Join the Deeper Bootcamp Now
                </a>
              </div>
            </div>

            {/* Meet the Coach */}
            <div className="mt-16 mb-12 bg-teal-50 py-12 px-6 rounded-xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/sparkles3.png"
                  alt="Fejiro Adaka, Coach"
                  width={350}
                  height={400}
                  className="rounded-lg shadow-lg object-cover h-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900">
                  Meet Your <span className="text-teal-900">Coach</span>
                </h2>
                <p className="text-lg md:text-xl text-teal-800 leading-relaxed">
                  Hi, I’m <strong>Fejiro Adaka</strong> (aka <strong>MrzSparkles</strong>), a Certified Emotional Intelligence and Marriage Coach who has helped 100+ individuals and couples across the world transform how they think, feel, and show up in love—not by striving for perfection, but by learning how to grow together with awareness, empathy, and purpose.
                </p>
                <p className="text-lg md:text-xl text-teal-800 leading-relaxed">
                  I’ve been married for 11+ beautiful years, and every season has reinforced one lesson: <strong>“Your marriage is about you.”</strong> Through this bootcamp, you’ll get exposed to principles that empower you to show up with confidence and empathy.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-semibold text-teal-800 italic">
                  “Love alone isn’t enough to build a lasting marriage, but intentional growth is.”
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 text-center mb-6">
                What Past Participants Are Saying
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg md:text-xl text-gray-700 mb-4">
                    “We didn’t know her before and I’m usually not quick to open up to strangers, but we knew we needed to lay a strong foundation for our marriage. Church counselling hadn’t been enough, so we decided to involve a professional and that made all the difference. I learned to express my thoughts and feelings more intentionally…”
                  </p>
                  <p className="text-sm md:text-base font-semibold text-teal-600">A.C. Canada</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg md:text-xl text-gray-700 mb-4">
                    “I came into the program feeling hopeless, defeated, and scared, convinced my marriage was beyond redemption. I wasn’t sure what to expect, but I’m so glad I took the step. The sessions were practical, direct, and truly addressed the real issues…”
                  </p>
                  <p className="text-sm md:text-base font-semibold text-teal-600">C. Lagos</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg md:text-xl text-gray-700 mb-4">
                    “I was initially apprehensive and confused, but now I’m more self-aware and in touch with the issues in my marriage. Even my husband has noticed the ‘MrzSparkles effect’ on me and I see it too. I’m more patient, understanding, and intentional about my marriage…”
                  </p>
                  <p className="text-sm md:text-base font-semibold text-teal-600">P. Lagos</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg md:text-xl text-gray-700 mb-4">
                    “I wasn't sure if counselling would make a difference, but this program turned out to be a real blessing. It taught me so many valuable lessons as I started this new chapter. From financial responsibility to sex education in marriage, setting boundaries…”
                  </p>
                  <p className="text-sm md:text-base font-semibold text-teal-600">Goodness, Canada</p>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="mt-16 mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 mb-6">
                Your Future Selves Will Thank You
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                You and your partner likely have 30, 40, even 50 years ahead. Imagine looking back and knowing you made the choice—right here, right now—to invest in a connection that carried you through a lifetime.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                The couples who thrive decades from now are the ones who invest now, while things are still “good,” so they can become even better. Don’t wait until disconnection quietly grows roots.
              </p>
            </div>

            {/* Final CTA */}
            <div className="mt-16 mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 mb-6">
                Ready to Build a Deeper Connection?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                Don’t leave your future to chance. Join the <strong className="text-teal-700">Deeper Bootcamp</strong> and start building the marriage you envision—one that’s aligned, purposeful, and unshakable.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-teal-600 mt-4">
                Click below to secure your seat now.
              </p>
              <a
                href="https://selar.com/deeperbootcamp"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg text-lg md:text-xl font-medium hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
                
              >
                Join the Deeper Bootcamp Now
              </a>
            </div>
          </div>

          {/* Sticky Event Details Sidebar */}
          <div className="lg:w-1/3 w-full lg:sticky lg:top-16 self-start">
            <div className="bg-teal-50 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 mb-6 text-center">
                Event Details
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-teal-800">
                  <strong>Date:</strong> Starting Monday, 4th November, 2025
                </p>
                <p className="text-lg md:text-xl text-teal-800">
                  <strong>Time:</strong> 7:00 PM WAT (Weekly Sessions)
                </p>
                <p className="text-lg md:text-xl text-teal-800">
                  <strong>Location:</strong> Online (link shared upon registration)
                </p>
                <a
                  href="https://selar.com/deeperbootcamp"
                  className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg text-lg md:text-xl font-medium hover:bg-teal-700 transition-all duration-300 w-full text-center"
                  // onClick={() => handleButtonClick("Reserve Your Spot")}
                >
                  Reserve Your Spot
                </a>
                <p className="text-sm md:text-base text-red-600 mt-4 font-medium">
                  Early bird registration is now open — Limited spots available!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeeperBootcamp;