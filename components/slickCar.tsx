"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

const slides = [
  {
    src: '/ms3.jpeg',
    alt: 'The Inter',
    prompt: '',
    title: 'Build Lasting Relationship and Marriage',
    description: 'Transform your inner world and build relationships you truly deserve using proven emotional and connection frameworks. No more chasing validation, sacrificing your peace, or losing your sense of worth.',
    //cta: 'Join the Course',
    // link: '/ai-champions',
    // cta2: 'Contact Us',
    // link2: '/contact',
    cta: 'Explore Services',
    link: '/services',
    cta2: 'Contact Us',
    link2: '/contact',

  },
  {
    src: '/sliderimage.jpeg',
    alt: 'LAB',
    prompt: 'Coming Soon',
    title: 'Love Accelerator Bootcamp (LAB)',
    description: 'The Love Accelerator Bootcamp (LAB) is a transformative 3-day virtual bootcamp designed to uncover the beliefs and patterns that may be limiting your ability to attract and maintain an ideal relationship. ',
    cta: 'Join the Waitlist',
    link: '#',
    cta2: 'Contact Us',
    link2: '/contact',
  },
  {
    src: '/sliderimage2.jpeg',
    alt: '3C Masterclass',
    prompt: 'Coming Soon',
    title: 'Couples Reconnect (3Cs Masterclass)',
    description: 'An in-depth program aimed at helping married couples overcome barriers to deep connection, effective communication, and peaceful conflict resolution.',
    cta: 'Join the Waitlist',
    link: '#',
    cta2: 'Contact Us',
    link2: '/contact',
  },
];

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
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-[85vh] md:h-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === currentSlide}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
          <div className="absolute inset-0 mt-10 flex flex-col justify-center px-6 md:px-20 items-start text-left animate-fade-in">
            {slide.prompt && (
              <p className="text-lg md:text-xl text-teal-300 font-semibold mb-2 tracking-wide uppercase drop-shadow-lg">
                {slide.prompt}
              </p>
            )}
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl max-w-2xl leading-tight">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mb-8 drop-shadow-md">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 max-w-md">
              <Link href={slide.link}>
                <CustomButton
                  title={slide.cta}
                  btnType="button"
                  containerStyles="bg-teal-500 py-3 px-7 rounded-full hover:bg-teal-700 shadow-lg transition"
                  textStyles="text-white font-semibold"
                />
              </Link>
              <Link href={slide.link2}>
                <CustomButton
                  title={slide.cta2}
                  btnType="button"
                  containerStyles="bg-white py-3 px-7 rounded-full hover:bg-teal-500 shadow-lg transition border border-teal-500"
                  textStyles="text-teal-500 font-semibold hover:text-white"
                />
              </Link>
            </div>
          </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows (hidden on small screens) */}
      <button
        onClick={goPrev}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full transition-colors shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full transition-colors shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-teal-600' : 'bg-teal-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousels;
