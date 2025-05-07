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

      <section className="py-16 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
       
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Singles Coaching, Counseling & Therapy (Become Whole, Choose Better, Build Longer)</h2>
          <p className="text-lg text-gray-600 mb-6 text-justify md:text-left">
          Before building a life with someone else, you must first build a life within yourself. Whether you are single and waiting, dating or engaged to be married, 
          I’m here to hold your hand through this phase.
          If you're a purpose-driven single ambitious, growth-focused, and unwilling to settle for less, this is your space. If you find yourself wondering.
          Am I truly ready for the kind of love I desire?
          Why do I keep attracting relationships that drain instead of sustain me
          Can I heal from my past without losing hope for my future
          How do I stay true to myself while allowing love to find

          </p>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform'>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/singlepeeps.png" alt="Books Collection" width={700} height={500} />
        </div>
       
      </div>
    </section>



        <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/couple.png" alt="Books Collection" width={500} height={500} className="mx-auto" />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Couples Coaching, Counselling & Therapy (Reconnect. Revive. Reinforce).</h2>
          <p className="text-lg text-gray-600 mb-6 text-justify md:text-left">
          When two lives come together, the journey doesn’t stop at the "I do." It’s just the beginning. Even the best of us can lose sight of what brought us together when life, work, and responsibilities take over. 
          Whether you wish to apply alone or with your Spouse, I’m here to guide you through this phase. It’s possible you might be feeling:
          - Heal unresolved wounds that are preventing you from moving forward.
          - Gain Self Mastery and emotional intelligence to navigate your thoughts and actions in alignment with your goals.
          -Improve communication so you truly hear and understand each other.
          -Rekindle the emotional connection that was the foundation of your relationship.
          We don’t offer one-size-fits-all solutions. Instead, we walk with you, helping you navigate through the real-life issues modern couples face using a blend of Emotional Intelligence, NLP, and relationship coaching tools.
          This is not about fixing each other, it’s about rediscovering the best parts of YOU, aligning with your core values and reigniting the love you’ve built together. You deserve a relationship that flourishes through life’s challenges, not one that crumbles under pressure.
          Let’s journey together back to the love you both deserve.
          Book your session today, and start the process of healing, reconnecting, and thriving as a couple.

          </p>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform'>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
          </Link>
        </div>
        
      </div>
    </section>

        <section className="py-16 duration-600 animate-fade-in">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4"> Premarital Coaching Program (PCP) Build a Strong Foundation Before Saying “I Do.”</h2>
          <p className="text-lg text-gray-600 mb-6 text-justify md:text-left">
          Premarital sessions with MrzSparkles is not a program taken to tick a box that you have done the premarital classes, it is a life changing experience created to;
          •open you up to the reality of who you are, the partner you have chosen for marriage and the kind of relationship you currently have.
          •equip you with tools and proven techniques that will help you overcome every season of your marriage so that you can build a long lasting marriage.
          •set your marriage apart from those whose story goes from pleasure to pain so that you can enjoy peace, pleasure and purpose even as you manifest God’s agenda for marriage.
          For 2 months.

          </p>
         <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform'>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Book a Session
          </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/dating.png" alt="Books Collection" width={700} height={500} className="mx-auto" />
        </div>
      </div>
    </section>

      <section className="bg-teal-100  py-16 duration-600 animate-fade-in">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/family.png" alt="Books Collection" width={700} height={500} className="mx-auto" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 ml-6">Marriage Health Check (MCH)- (Assess. Adjust. Elevate)</h2>
          <p className="text-lg text-gray-600 mb-6 text-justify md:text-left ml-6">
         Is your marriage thriving or just surviving? A Sparkling marriage needs continuous care and attention to flourish and the best way to achieve growth in marriage is to learn to pause and reflect on where you are, where you want to go, and what needs to be adjusted for growth.
        These concerns are common but fixable with the right guidance.
        Through Emotional Intelligence and Mind Mastery, the Marriage Health Check will help you:
        Assess the current state of your marriage, identify areas of strength, and uncover hidden issues
        Adjust communication patterns to increase understanding and connection.
        Elevate your bond with practical tools to reinvigorate the love and passion in your relationship.
        
          </p>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform'>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 ml-6">
            Book a Session
          </button>
          </Link>
        </div>
        
      </div>
    </section>


     

      
    </main>
  )
}

export default page



// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { servicefull } from '@/constants';

// export const metadata = {
//   title: 'AskMrzSparkles | Services',
// };

// const ServicesPage = () => {
//   return (
//     <main className="relative w-full">
//       <section className="bg-teal-100 py-16 mt-10">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-500 animate-fade-in">
//           <div className="w-full md:w-1/3 mt-8 md:mt-0">
//             <Image
//               src="/books3.jpeg"
//               alt="Books Collection"
//               width={300}
//               height={300}
//               className="mx-auto"
//             />
//           </div>
//           <div className="w-full md:w-2/3 text-center md:text-left">
//             {servicefull.map((service) => (
//               <div key={service.id} className="mb-8">
//                 <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
//                 <p className="text-lg mb-6">{service.description}</p>
//                 <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdmBzywRmxTEcroxDynnG7hDMrP2wX9Flk6OvAjfn7C4QRO9w/viewform">
//                   <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
//                     Book a Session
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ServicesPage;
