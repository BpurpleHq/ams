
import Image from 'next/image';
import { type Metadata } from 'next';
import StatsSection from "@/components/msstat";

export const metadata: Metadata = {
  title: 'AskMrzSparkles | About US',
};


export default function AboutPage() {
  return (

     <main className="relative w-full">
      <section className="bg-gradient-to-r from-teal-100 to-teal-200 py-16 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Master Your Mind. Deepen Your Connection. Build a Marriage That
              Thrives
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-justify md:text-left">
              At TAMA, we help ambitious professionals and business owners heal
              from within, master emotional patterns, and create lasting love
              because a thriving marriage starts with a transformed mindset. Our
              coaching blends Emotional Intelligence, Neuro-Linguistic
              Programming, and Family Systems Engineering to foster wholeness,
              clarity, and real connection. Let’s begin your journey to becoming
              the one who attracts and sustains the love you desire.
            </p>
            <a
              href="/services"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors duration-300"
            >
              Explore Our Services
            </a>
          </div>
         {/* <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/books3.jpeg"
              alt="Books Collection"
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>*/}
        </div>
      </section>
      <section className="bg-gray-50 py-16">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <Image
        src="/sparkles3.png"
        alt="Founder Image"
        width={500}
        height={400}
        className="rounded-lg shadow-lg mx-auto"
      />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Meet the <span className="text-teal-600">Founder</span>
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-justify md:text-left">
        Fejiro Adaka, fondly known as MrzSparkles, is a sought-after Relationship
        & Emotional Intelligence Coach, Master NLP Practitioner, and an associate
        of the Institute of Family Engineering and Development (IFED). With over
        100+ Singles and Couples coached, she’s on a mission to help people become
        whole, choose wisely, and build relationships that thrive. With a dynamic
        blend of emotional intelligence, neuroscience-based tools, faith-based
        wisdom, and over 12 years of corporate experience, Fejiro guides high
        achievers to transform their inner world and their most intimate
        connections. She’s the founder of The Ask MrzSparkles Academy (TAMA), a
        global movement transforming marriages and families, one heart at a time.
        Fejiro is a Chartered Accountant, devoted wife to her Sparkles, and
        intentional mom of two boys. Her core belief: "Fix the marriage, fix the
        world."
      </p>
    </div>
  </div>
</section>

      <StatsSection />


      
    </main>
  );
}

