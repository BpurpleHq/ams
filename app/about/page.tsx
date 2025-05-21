

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { type Metadata } from "next";
import StatsSection from "@/components/msstat";

export const metadata: Metadata = {
  title: "AskMrzSparkles | About Us",
};

export default function AboutPage() {
  return (
    <main className="relative w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900">
              Master Your Mind. Deepen Your Connection. Build a Thriving Marriage.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At TAMA, we empower ambitious professionals and business owners to heal from within,
              master emotional patterns, and create lasting love. Our coaching blends Emotional
              Intelligence, Neuro-Linguistic Programming, and Family Systems Engineering to foster
              wholeness, clarity, and real connection. Start your journey to attract and sustain the
              love you desire.
            </p>
            <Link href="/services">
              <button
                className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
              >
                Explore Our Services
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/COUPLESPICS2.png"
              alt="Couples Coaching"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Founder Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/sparkles3.png"
              alt="Fejiro Adaka, Founder"
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              Meet the <span className="text-teal-600">Founder</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fejiro Adaka, fondly known as MrzSparkles, is a sought-after Relationship & Emotional Intelligence Coach, Master NLP Practitioner, 
              and an associate of the Institute of Family Engineering and Development (IFED). With over 100+ 
              Singles and Couples coached, she’s on a mission to help people become whole, choose wisely, and build relationships that thrive.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a dynamic blend of emotional intelligence, neuroscience-based tools, faith-based wisdom, and over 12 years of corporate experience, 
              Fejiro guides high achievers to transform their inner world and their most intimate connections.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              She’s the founder of The Ask MrzSparkles Academy (TAMA), a global movement transforming marriages and families, one heart at a time.
            </p>
             <p className="text-lg text-gray-600 leading-relaxed">
              Fejiro is a Chartered Accountant, devoted wife to her Sparkles, 
              and intentional mom of two boys. Her core belief: <em>"Fix the marriage, fix the world."</em>
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              Our <span className="text-teal-600">Story</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From my formative years, I didn’t realize that a successful marriage required strategic navigation. 
              I believed love alone could sustain us into our 50th anniversary. 
              But by year two, I was faced with a stark reality; marriage was far from the dreamy bliss I had imagined.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Life’s distractions, though genuine, 
              created distance in our bond and intimacy. I saw I had embraced a flawed belief system and needed a mindset shift.
            </p>
               <p className="text-lg text-gray-600 leading-relaxed">
            In the early years, I often cried, frustrated by unmet expectations and communication struggles with my husband. By 2014, though I was a self-proclaimed "lover girl," our dream of 
            harmony seemed unreachable. We talked often, yet lacked true connection, affecting both marriage and personal well-being.
            </p>
               <p className="text-lg text-gray-600 leading-relaxed">
             Through growth and wisdom, we embarked on a transformative journey and we’re still on this blissful path.
            </p>
               <p className="text-lg text-gray-600 leading-relaxed">
              Marriage can bring stress, fatigue, and disappointment, but your story can change. 
              That’s why I serve as The Young Wife’s Coach, to help build and sustain solid foundations for joy-filled marriages.
            </p>
             <p className="text-lg text-gray-600 leading-relaxed">
              For four years, I’ve supported high-achieving professionals and seasoned couples globally, using emotional intelligence, 
              scriptural wisdom, and science-backed methods rooted in empathy and respect. My work helps clients gain self-awareness, master themselves, understand their partners, 
              align with their values, and improve communication, building trust, resolving conflicts, and deepening intimacy.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/IMG_0443.JPEG"
              alt="Our Story"
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section with ConvertKit */}
      <section className="bg-teal-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with tips, insights, and exclusive content to strengthen your relationships.
          </p>
          <div id="convertkit-form" className="convertkit-form max-w-md mx-auto"></div>
          <Script
            src="https://app.convertkit.com/forms/1234567/subscriptions" // Replace with your actual ConvertKit form URL
            strategy="afterInteractive"
            data-uid="1234567" // Replace with your actual form ID
          />
        </div>
      </section>
    </main>
  );
}