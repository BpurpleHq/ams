
import Image from 'next/image';
import { type Metadata } from 'next';
import StatsSection from "@/components/msstat";

export const metadata: Metadata = {
  title: 'AskMrzSparkles | About US',
};

interface ValueCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}



export default function AboutPage() {
  return (
    <main className=" relative w-full">
    <section className="bg-teal-100 py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Master Your Mind. Deepen Your Connection. Build a Marriage That Thrives</h2>
          <p className="text-lg mb-6">
At TAMA, we help ambitious professionals and business owners heal from within, master emotional patterns, and create lasting love because a thriving marriage starts with a transformed mindset.
If you're seeking to prepare for marriage, navigating relationship challenges or simply want deeper connection and growth, you're in the right place.
Our coaching blends:
* Emotional Intelligence to respond wisely, 
* Neuro Linguistic Programming  tools to shift limiting beliefs, 
* and Family Systems Engineering to build relationships that last. 
This is your space for wholeness, clarity, and real connection and we’re glad you’re here.
Let’s begin your journey to becoming the one who attracts and sustains the love you desire..
          </p>
        
        </div>
        {/*<div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>*/}
      </div>
    </section>
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative" style={{ paddingTop: "56.25%"}}>
            <Image
              src="/ms3.jpeg"
              alt = "about image"
              layout="fill"
              objectFit="cover"
              className="opacity-80 rounded"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left ml-6">
          <h1 className="text-4xl font-bold mb-4">
            Meet the  <span className="text-teal-700">Founder</span>
          </h1>
          <p className="text-gray-600 mb-6">
           Fejiro Adaka, fondly known as MrzSparkles, is a sought-after Relationship & Emotional Intelligence Coach, Master NLP Practitioner, and an associate of the Institute of Family Engineering and Development (IFED). With over 100+ Singles and Couples coached, she’s on a mission to help people become whole, choose wisely, and build relationships that thrive.
With a dynamic blend of emotional intelligence, neuroscience-based tools, faith-based wisdom, and over 12 years of corporate experience, Fejiro guides high achievers to transform their inner world and their most intimate connections.
She’s the founder of The Ask MrzSparkles Academy (TAMA), a global movement transforming marriages and families, one heart at a time.
Fejiro is a Chartered Accountant, devoted wife to her Sparkles, and intentional mom of two boys. Her core belief: "Fix the marriage, fix the world."
          </p>
         {/* <button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            About Us
          </button>*/}
        </div>
      </div>
    </section>
    <StatsSection />

    <section className="h-full bg-gray-50 pt-20 pb-6" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            {/* Text Content */}
            <div className="lg:w-full m-2 text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                Meet the Founder

              </h1>
              <p className="mt-4 text-lg w-2/3 text-gray-800">
                My Story:
          From my formative years, the realization that a successful marriage requires strategic navigation eluded me. 
          Upon entering matrimony, I harbored the notion that love alone could sustain a lifelong union, extending well 
          into our 50th wedding anniversary. However, around our second-year milestone, a stark revelation unfolded—my 
          marital reality starkly diverged from the idyllic dreams of pre-wedded bliss.

          Life's distractions were encroaching upon our relationship, with genuine excuses obscuring our focus, creating 
          a gap in our bond and intimacy. It became evident that I had subscribed to a flawed belief system necessitating 
          a paradigm shift.

          Admitting vulnerability, the early years of my marriage saw tears as I grappled with unmet expectations, struggling 
          to communicate with my husband without conflicts. In 2014, a self-proclaimed "lover girl," my aspirations for constant 
          hand-holding and harmonious moments seemed distant. While both my spouse and I desired happiness, translating these dreams 
          into reality eluded us.

          Our conversations, though frequent, lacked true connection, impacting various facets of our marriage and personal lives. 
          Grateful for the wisdom gained, we've traversed a transformative journey and continue on this blissful path.

          Navigating the challenges of matrimony can induce stress, fatigue, disappointment, and frustration. The encouraging news 
          is that your narrative can evolve. This commitment drives me to serve as The Young Wife’s Coach, dedicated to helping build 
          and sustain solid foundations for an exhilarating, joy-filled marital journey.

          Over the past four years, I've had the privilege of assisting diverse clients, high-achieving professionals, and seasoned 
          couples across the globe. My methodology integrates emotional intelligence, scriptural wisdom, and scientific principles, 
          grounded in empathy and respect. This comprehensive approach addresses the intricate dynamics and potential misunderstandings 
          prevalent in modern relationships, yielding exceptional results.

          Our focus is on empowering clients to deepen self-awareness, gain self mastery, understand their partners, identify needs 
          and align their actions with their values, and goals. The ultimate aim is effective communication, complemented by practical 
          tools and strategies to enhance relationships—resolving conflicts, building trust, and fostering increased intimacy.</p>
              {/*<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Details
              </button>*/}
            </div>
           
            
          </div>
        </section>


      
    </main>
  );
}

