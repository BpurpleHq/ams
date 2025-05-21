

import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Script from "next/script";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-12">
          {/* Video Section */}
          <div className="w-full md:w-1/2 aspect-[16/9] rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Wt6kfNDXN4g"
              title="Relationship Guidance Video"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 leading-tight">
              Navigate Your Relationships with{" "}
              <span className="text-teal-600">Confidence & Clarity</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every wife deserves to glow in marriage. The excitement of your wedding day can grow
              even deeper, more exciting, and blissful. Build a stronger, more connected
              relationship with your husband through our expert guidance.
            </p>
            <Link href="/about" passHref>
              <CustomButton
                title="About Us"
                btnType="button"
                containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                textStyles="text-base"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section with ConvertKit */}
     {/* <section className="bg-teal-100 py-16">
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
      </section>*/}
    </>
  );
};

export default HeroSection;