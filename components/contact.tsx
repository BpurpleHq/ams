"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@askmrzsparkles.com";
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50 mb-10">
      
      <div className="relative mt-10">
        <Image
          src="/SINGLESPIC1.png" 
          alt="Contact us illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Column: Contact Elements */}
      <div className="flex flex-col items-center justify-center gap-6 bg-teal-100 p-6">
        {/* Mail Icon */}
        <Mail
          className="w-16 h-16 md:w-10 md:h-10 text-black "
          aria-hidden="true"
        />

        {/* Contact Button */}
        <button
          onClick={handleEmailClick}
          className="bg-teal-500 hover:bg-teal-600 px-8 py-2 rounded-full text-lg md:text-xl text-white shadow-md transition-transform transform hover:scale-105"
          aria-label="Send us an email"
        >
          Send us e-mail:
        </button>
        
         

  {/* Contact Button */}
        <p
          className="px-8 py-2 mt-10 text-lg md:text-xl text-black"
          aria-label="Send us an email"
        >
          We are Social:
        </p>
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link
            href="https://web.facebook.com/fejiro.egbedi/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
          >
            <Facebook
              className="w-8 h-8 md:w-10 md:h-10 text-black hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://www.instagram.com/askmrzsparkles/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
          >
            <Instagram
              className="w-8 h-8 md:w-10 md:h-10 text-black hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/the-ask-mrzsparkles-academy" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn page"
          >
            <Linkedin
              className="w-8 h-8 md:w-10 md:h-10 text-black hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://x.com/askmrzsparkles?t=ZA0O8ECZYyGfgSuuO5MzuA&s=09" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
          >
            <Twitter
              className="w-8 h-8 md:w-10 md:h-10 text-black hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://www.youtube.com/results?search_query=askmrzsparkles" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
          >
            <Youtube
              className="w-8 h-8 md:w-10 md:h-10 text-black hover:text-teal-700 transition-colors"
              aria-hidden="true"
            />
          </Link>

        </div>
        <p
          className="px-8 py-2 mt-10 text-lg md:text-xl text-black"
          aria-label="Send us an email"
        >
          Call Us:
        </p>

        <a
          href="tel:+234 706 223 3111" 
          className="text-lg md:text-xl text-gray-900 hover:text-teal-600 transition-colors"
          aria-label="Call us"
        >
          +234 706 223 3111
        </a>

        
      </div>
    </div>
  );
};

export default Contact;

