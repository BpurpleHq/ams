"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/CustomButton';

import Link from 'next/link';
import BackgroundChanger from '@/components/background-changer';
import HeroSection from "@/components/mshero";
import TestimonialsSection from "@/components/mstestimonial";
import StatsSection from "@/components/msstat";
import ServicesSection from "@/components/msservices";
import SpecialistSection from "@/components/msspecialist";
import Books from "@/components/msbooks";
import Newsletter from "@/components/msnewsletter";
import Heromid from "@/components/msheromid";
// import HeroCarousel from "@/components/Carousel";

export default function Home() {
  

  return (
    <main className="font-Lato">

      <section className="bg-extra" data-aos="fade-up">
        <HeroSection />
      </section>
      <section className="bg-extra" data-aos="fade-up">
         <ServicesSection />
      </section>
     {/*<HeroCarousel />*/}
      <section className="bg-extra" data-aos="fade-up">
         <Heromid />
      </section>

      {/* Metrics Section (from both files) */}
     <section className="bg-extra" data-aos="fade-up">
        <TestimonialsSection />
      </section>

      <section className="bg-extra" data-aos="fade-up">
        <Books />
      </section>
      
    </main>
  );
}




// "use client"

// import { useEffect } from 'react';

// import { useRouter } from 'next/navigation'
// import { CTA, Metrics, Products } from '@/components';
// import CustomButton from '@/components/CustomButton';
// import Image from 'next/image';
// import 'aos/dist/aos.css';
// import Link from 'next/link';
// import BackgroundChanger from '@/components/background-changer';
// import { Footer,  Upcoming } from '@/components'
// import BlogCard, { AchievementsCard, Card, InfoCard, TestimonialCard } from '@/components/info-card';
// import Subheader from '@/components/sub-header';

// export default function Home() {

  
//   return (
//     <main className="">
//       <section className="relative h-[80vh] w-full overflow-hidden">
        
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white lg:items-start lg:pl-[108px]">
//           <h1 className="text-headline-2 text-center lg:text-start">
//             Welcome To bpurple Technology
//           </h1>
//           <p className="w-full lg:w-[750px] text-center lg:text-start text-headline-3 px-2 lg:px-0 mb-3">
//             We believe in the power of strategic guidance to transform
//             businesses and drive sustainable success. With a team of seasoned
//             professionals and a commitment to excellence, we partner with
//             organizations to navigate challenges, seize opportunities, and
//             achieve full potential.
//           </p>
//           <div className="flex gap-x-[17px]">
//             <CustomButton
//               title="Explore Services"
//               btnType="button"
//               containerStyles="bg-secondary p-2 rounded-lg"
//               textStyles="text-dark text-headline-3"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-extra" data-aos="fade-up">
//         <Metrics />
//       </section>

//       <section className="bg-white" data-aos="fade-up">
//         <Products />
//       </section>

//       <section className="bg-extra" data-aos="fade-up">
//         <CTA />
//       </section> 
//     </main>
//   );
// }

      {/*<section>
        <div>
          <Subheader
            iconSrc="/visionIcon.png"
           
            className="mt-6"
          />
          <div className="flex justify-center items-center border-b pb-[45px] border-secondary px-3 lg:0">
            <h1 className="text-center text-headline-3 w-full md:w-[800px]">
        
              <span className="text-primary">
                we&apos;re dedicated to helping businesses of all sizes to
                thrive in the digital age.

            
              Our team of experts leverages cutting edge-technology and
              innovative design principles to create digital products that not
              only meet but exceed user expectations. From initial research and
              strategy to final product, we are dedicated to crafting
              experiences that are seamless, enjoyable and impactful.
            
          
              </span>
            </h1>
          </div>
         
          <div className="bg-primary mt-3 px-[60px]">
            <div className="flex flex-col md:flex-row md:justify-around">
              <InfoCard
                className="md:border-r md:border-gray-500 md:border-opacity-50"
                icon="/thumbs-up.png"
                title="Why Choose Us"
                content="Because we focus on results. For us, it's all about what adds value for you and your business. Above all, we want our words to work for you."
              />
              <InfoCard
                className="md:border-r md:border-gray-500 md:border-opacity-50"
                icon="/clock.png"
                title="Save Your Time"
                content="Let us handle the complexities while you focus on what really matters. With our strategic guidance, you’ll have more time to grow your business and reach your goals."
              />
              <InfoCard
                className=""
                icon="/commission.png"
                title="Affordable Price For You"
                content="Great service doesn’t have to come with a hefty price tag. We offer top-notch solutions that fit your budget, ensuring you get the best value without breaking the bank."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white general-container">
        <Subheader
          iconSrc="/visionIcon.png"
          title="ABOUT BPURPLE"
          className="mt-6"
        />
        <div className="flex gap-8 flex-col lg:flex-row lg:justify-between md:items-center px-[54px] pb-4">
          <Image
            src="/aboutimg.png"
            height={350}
            width={550}
            alt="image"
            className="flex-1 mt-5 lg:mt-0"
          />
          <div className="flex-1">
            <h2 className="text-subtitle text-center lg:text-start">
              5 years of Experience in Digital & Technology Market
            </h2>
            <p className="text-body text-center lg:text-start pt-3">
              We believe in the power of strategic guidance to transform
              businesses and drive sustainable success. With a team of seasoned
              professionals and a commitment to excellence, we partner with
              organizations to navigate challenges ,seize opportunities, and
              achieve full potential.
            </p>
            <p className="text-body text-center lg:text-start py-6">
              We bring together a wealth of knowledge across arious industries,
              enabling us to offer comprehensie solutions tailored to the
              unqique needs of our clients
            </p>

            <div className="flex justify-center items-center lg:justify-start lg:items-start">
              <CustomButton
                title="Learn More"
                btnType="button"
                containerStyles="bg-secondary p-2 rounded-lg"
                textStyles="text-dark font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-0 lg:px-[78px]">
        <Subheader
          iconSrc="/visionIcon.png"
          title="OUR SERVICES"
          className="mt-6"
        />

        <div className="flex flex-col justify-center items-center text-white pt-3">
          <h2 className="text-subtitle1">
            We Provide The Best Service For You
          </h2>
          <div className="w-full lg:w-[552px]">
            <p className="text-body text-center">
              Lorem ipsum dolor sit amet consectetur. Quisque vestibulum
              pulvinar ullamcorper diam metus scelerisque eget.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-6 px-8 pt-6 pb-10 ">
          <Card
            imageSrc="/icon1.png"
            title="CONSULTING"
            content="We dive deep into your business challenges and craft strategies that drive real results."
            readMoreText="Read More"
            readMoreIcon="/read-more.png"
            className="w-full md:w-[calc(33.333%-16px)]"
          />
          <Card
            imageSrc="/icon2.png"
            title="COACHING"
            content="We empower your team and individuals with the skills and confidence they need to thrive."
            readMoreText="Read More"
            readMoreIcon="/read-more.png"
            className="w-full md:w-[calc(33.333%-16px)]"
          />
          <Card
            imageSrc="/icon1.png"
            title="TRAINING"
            content="Whether it's for your organization or individual growth, we provide the knowledge and tools you need to stay ahead of the curve."
            readMoreText="Read More"
            readMoreIcon="/read-more.png"
            className="w-full md:w-[calc(33.333%-16px)]"
          />
        </div>
      </section>

      <section className="general-container">
        <Subheader
          iconSrc="/visionIcon.png"
          title="WHO WE HELP"
          className="mt-6"
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-8 pt-6 pb-10 border-b border-secondary">
          <Card
            imageSrc="/icon3.png"
            title="ORGANIZATIONS & COMAPINES"
            content="Equipping business to lead and engage their teams effectively"
            className="w-[300px] md:w-[400px] md:h-[400px]"
          />
          <Card
            imageSrc="/icon3.png"
            title="INDIVIDUALS"
            content="Personalized coaching to help you reach your goals"
            className="w-[300px] md:w-[400px] md:h-[400px]"
          />
          <Card
            imageSrc="/icon3.png"
            title="COMMUNITIES"
            content="Equipping busPersonalized coaching to help you reach your goalsiness to lead and engage their teams effectively"
            className="w-[300px] md:w-[400px] md:h-[400px]"
          />
        </div>
      </section>

      <section className="general-container">
        <Subheader
          iconSrc="/visionIcon.png"
          title="ACHIEVEMENTS"
          className="mt-6"
        />
        <div className="px-[54px] my-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="flex-1 flex flex-col justify-center items-center md:justify-start md:items-start">
              <h2 className="text-subtitle1 text-center md:text-left">
                Some Number Of Our Achievements
              </h2>
              <p className="text-body text-center md:text-left mt-4">
                Lorem ipsum dolor sit amet consectetur. Quisque vestibulum
                pulvinar ullamcorper diam metus scelerisque eget. Arcu elit urna
                nunc eleifend id urna suspendisse.
              </p>

              <CustomButton
                title="Learn More"
                btnType="button"
                containerStyles="bg-secondary p-3 rounded-lg"
                textStyles="text-dark font-medium"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-8 flex-1">
              <AchievementsCard
                icon="/people.png"
                title="1500 +"
                content="Satisfied Clients"
                className="bg-primary"
              />
              <AchievementsCard
                icon="/check.png"
                title="1500 +"
                content="Successful Campaigns"
                className="bg-secondary"
              />
              <AchievementsCard
                icon="/handshake.png"
                title="180 +"
                content="Brands Joined"
                className="bg-secondary"
              />
              <AchievementsCard
                icon="/people.png"
                title="103 +"
                content="Experts"
                className="bg-primary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary general-container h-full border-b border-secondary">
        <Subheader
          iconSrc="/visionIcon.png"
          title="TESTIMONIALS"
          className="mt-6"
        />
        <div className="flex justify-center items-center mt-3">
          <h2 className="text-subtitle1 text-white">
            What Client Says About Bpurple
          </h2>
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center gap-12 md:flex-row py-7 px-7 lg:px-0">
          <TestimonialCard
            imageSrc="/frame4.png"
            quoteIconSrc="/quote.png"
            content="You want to succeed, surround yourself with the right kind people, who will support and encourage you all the way"
            fullName="Williams Peters"
          />
          <TestimonialCard
            imageSrc="/frame5.png"
            quoteIconSrc="/quote.png"
            content="You want to succeed, surround yourself with the right kind people, who will support and encourage you all the way"
            fullName="Williams Peters"
          />
          <TestimonialCard
            imageSrc="/frame6.png"
            quoteIconSrc="/quote.png"
            content="You want to succeed, surround yourself with the right kind people, who will support and encourage you all the way"
            fullName="Williams Peters"
          />
        </div>
      </section>

      <section className="general-container">
        <Subheader iconSrc="/visionIcon.png" title="UPDATES" className="mt-6" />
        <div className="flex justify-center items-center mt-3">
          <div className="w-full md:w-[625px]">
            <h2 className="text-subtitle1 text-center">
              Latest Blog & Articles
            </h2>
            <p className="text-center mt-3">
              Get the latest insights and tips from our experts. Dive into our
              recent posts on industry trends, business growth strategies, and
              inspiring success stories to keep you informed and ahead of the
              game.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-6 my-5">
          <BlogCard
            imageSrc="/frame1.png"
            title="Using Meta Adantage to simplify You Facebook Campaigns"
            date="August 16, 2024"
            content="Using Meta Advantage to Simplify your Facebook campaigns"
            readMoreText="Read More"
            readMoreIcon="/arrow.png"
          />
          <BlogCard
            imageSrc="/frame2.png"
            title="Using Meta Adantage to simplify You Facebook Campaigns"
            date="August 16, 2024"
            content="Using Meta Advantage to Simplify your Facebook campaigns"
            readMoreText="Read More"
            readMoreIcon="/arrow.png"
          />
          <BlogCard
            imageSrc="/frame3.png"
            title="Using Meta Adantage to simplify You Facebook Campaigns"
            date="August 16, 2024"
            content="Using Meta Advantage to Simplify your Facebook campaigns"
            readMoreText="Read More"
            readMoreIcon="/arrow.png"
          />
        </div>
      </section>

      <section className="bg-primary md:bg-transparent general-container">
        <Subheader
          iconSrc="/visionIcon.png"
          title="GET IN TOUCH"
          className="mt-6"
        />
        <div className="flex justify-center items-center">
          <h2 className="w-full md:w-[722px] px-4 md:px-0 text-subtitle1 text-center text-white md:text-black mt-3">
            We’d love to hear from you. Reach out with any questions or to
            schedule a consultation
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 px-[54px] mt-7">
          <Image
            src="/contact.png"
            width={500}
            height={500}
            alt="contact-us"
            className="flex-1 hidden md:block"
          />
          <div className="flex-1">
            <div className="input-container">
              <input
                type="text"
                placeholder="First Name"
                className="input-style"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-style"
              />
            </div>
            <div className="mt-4 input-container">
              <input type="email" placeholder="Email" className="input-style" />
              <input
                type="number"
                placeholder="Phone Number"
                className="input-style"
              />
            </div>
            <div className="mt-4">
              <textarea
                name="#"
                id=""
                placeholder="Your Message"
                className="w-full md:w-[576px] h-[200px] p-2 border rounded-md placeholder-black"
              ></textarea>
            </div>
            <div className="w-full md:w-[576px] flex justify-center items-center md:justify-end md:items-end mt-3 pb-7">
              <CustomButton
                title="Submit"
                btnType="button"
                containerStyles="bg-secondary p-3 rounded-lg"
                textStyles="text-dark font-medium"
              />
            </div>
          </div>
        </div>
      </section>

       <section className="bg-white flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 relative z-0 max-w-[1440px] mx-auto sm:px-16 px-3 pt-[10px] mb-[20px] lg:mb-0 pb-7 lg:pb-0 mt-5">
        <div className="flex flex-col lg:justify-start lg:items-start lg:mt-[50px] w-full lg:max-w-[70%] flex-1">
          <h1 className="text-headline-3 lg:text-headline-2 text-secondary text-center md:text-start lg:mb-10">
            #CyberAwarenessWorkshop
          </h1>
          <h1 className="text-headline-2 text-primary text-center md:text-start">
            Empowering individuals and organizations to stay ahead of{" "}
            <span className="text-secondary">Threats.</span>
          </h1>

          <p className="text-body lg:text-headline-4 text-primary mt-5 lg:w-[90%]">
            We are nurturing next-gen human capital in Information Technology,
            backed with leadership, character and building capacity to thrive in
            a dynamic tech ecosystem{" "}
          </p>
          <p className='hidden text-body lg:text-headline-4 text-primary mt-4 lg:w-[75%]'>We are part of the solution in building a <span className='text-secondary text-headline-3'>SKILLED</span> continent.</p>

          <div className="flex justify-center items-center lg:justify-items-start gap-3 mt-8 md:mt-8">
            <Link href="/courses" onClick={() => router.push("/courses")}>
              <CustomButton
                title="Explore Here"
                btnType="button"
                containerStyles="bg-secondary rounded-lg py-2 min-w-[130px] px-2"
                textStyles="text-dark text-body-1 font-medium z-index-90"
              />
            </Link>
            <Link href="/community" onClick={() => router.push("/community")}>
              <CustomButton
                title="Join Community"
                btnType="button"
                textStyles="text-dark"
                containerStyles="hidden bg-transparent rounded-lg py-1 min-w-[130px]"
              />
            </Link>
          </div>
        </div>

        <div className="hidden relative lg:w-[480px] lg:h-[510px] h-[320px] rounded-xl">
          <Image src="/avt.jpeg" alt="Hero Image" fill />

          <div className='flex relative lg:w-[480px] lg:h-[550px] h-[300px] rounded-xl'>
          <Image src='/heroImage.png' alt='Hero Image'fill  />
        </div>
        * <div className='hidden lg:block absolute bottom-[10%] left-[-1px]'>
          <Image src='/arrowIcon.svg' alt='arrow' width={130} height={700} />
          </div> 
          </div>
      </section>

      <section className="bg-extra" data-aos="fade-up">
        <Metrics />
      </section>

      <section className="bg-white" data-aos="fade-up">
        <Products />
      </section>

      <section className="bg-extra" data-aos="fade-up">
        <CTA />
      </section> 
    </main>
  );
}
*/}