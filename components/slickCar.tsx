"use client"; // Fixed typo from "use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CustomButton from "./CustomButton";
import { slides } from "@/constants";

const Carousels: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goPrev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goNext = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section
        className="relative w-full overflow-hidden bg-gray-50"
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured Content Carousel"
      >
        {/* Slides */}
        <div className="relative h-[80vh] md:h-[90vh]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0} // Priority only for the first slide
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-teal-900/30"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 items-start text-left">
                {slide.prompt && (
                  <p className="text-lg md:text-xl text-teal-300 font-semibold mb-3 tracking-wide uppercase drop-shadow-lg">
                    {slide.prompt}
                  </p>
                )}
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl max-w-3xl leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl text-gray-100 max-w-2xl mb-8 drop-shadow-md">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <Link href={slide.link}>
                    <CustomButton
                      title={slide.cta}
                      btnType="button"
                      containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
                      textStyles="text-base"
                    />
                  </Link>
                  <Link href={slide.link2}>
                    <CustomButton
                      title={slide.cta2}
                      btnType="button"
                      containerStyles="bg-transparent border-2 border-white hover:bg-white hover:border-white px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-colors hover:text-teal-600"
                      textStyles="text-base"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-teal-500" : "bg-teal-300/50"
              }`}
            />
          ))}
        </div>
      </section>

      
    </>
  );
};

export default Carousels;