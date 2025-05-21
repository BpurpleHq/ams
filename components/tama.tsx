

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CustomButton from "./CustomButton";

const Tama: React.FC = () => {
  return (
    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tight">
                At <span className="text-teal-600">TAMA</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We empower ambitious professionals and business owners to heal from within, master
                emotional patterns, and create lasting love. A thriving marriage starts with a
                transformed mindset. Whether you’re preparing for marriage, navigating relationship
                challenges, or seeking deeper connection, our coaching blends Emotional Intelligence,
                Neuro-Linguistic Programming, and Family Systems Engineering to guide you toward
                wholeness and love that lasts.
              </p>
              <Link href="/services" passHref>
                <CustomButton
                  title="Explore Our Services"
                  btnType="button"
                  containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                  textStyles="text-base"
                />
              </Link>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <Image
                src="/IMG_0443.JPEG" 
                alt="TAMA Coaching"
                width={400}
                height={400}
                className="rounded-3xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Tama;