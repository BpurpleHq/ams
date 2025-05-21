

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CustomButton from "./CustomButton";

const BooksSection: React.FC = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900">
              Discover Our Latest <span className="text-teal-600">Books</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Take charge of your mind, emotions, and actions. Let us guide you to build the
              relationship and marriage you desire with our transformative books.
            </p>
            <Link href="/resources/books" passHref>
              <CustomButton
                title="See More Books"
                btnType="button"
                containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                textStyles="text-base"
              />
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src="/oneness.png"
              alt="Books Collection"
              width={350}
              height={350}
              className="rounded-3xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      
    </>
  );
};

export default BooksSection;