"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with tips, insights, and exclusive content to strengthen your relationships.
        </p>
        
        

        {/* CTA Buttons for Tribes */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/singletribe">
            <button
              className="bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-full text-lg md:text-xl text-white font-semibold shadow-md transition-transform transform hover:scale-105"
              aria-label="Join our newsletter for Tribe A"
            >
              Join Singles Tribe
            </button>
          </Link>
          <Link href="/couplestribe">
            <button
              className="bg-transparent border-2 border-teal-500 hover:bg-teal-500 px-8 py-4 rounded-full text-lg md:text-xl text-teal-500 hover:text-white font-semibold shadow-md transition-colors"
              aria-label="Join our newsletter for Tribe B"
            >
              Join Couples Tribe
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

