"use client";

import { useEffect } from 'react';
import HeroSection from "@/components/mshero";
import TestimonialsSection from "@/components/mstestimonial";
import StatsSection from "@/components/msstat";
import ServicesSection from "@/components/msservices";
import SpecialistSection from "@/components/msspecialist";
import Books from "@/components/msbooks";
import Heromid from "@/components/msheromid";
import Tama from "@/components/tama";
import AOS from 'aos';



// import HeroCarousel from "@/components/Carousel";

export default function Home() {

  useEffect(() => {
        AOS.init();
      }, [])
  

  return (
    <main className="font-Lato">
      
      <section className="bg-extra" data-aos="fade-up">
        <HeroSection />
      </section>


       <section className="bg-extra" data-aos="fade-up">
        <Tama />
      </section>

      <section className="bg-extra" data-aos="fade-up">
         <ServicesSection />
      </section>
     {/*<HeroCarousel />*/}
      <section className="bg-extra" data-aos="fade-up">
         <Heromid />
      </section>

      <section className="bg-extra" data-aos="fade-up">
         <StatsSection />
      </section>

     <section className="bg-extra" data-aos="fade-up">
        <TestimonialsSection />
      </section>

      <section className="bg-extra" data-aos="fade-up">
        <Books />
      </section>
      
    </main>
  );
}


