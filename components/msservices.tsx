

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CustomButton from "./CustomButton";
import { services } from "@/constants";

const ServicesSection: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight text-teal-900">
            Transform Your <span className="text-teal-600">Marriage Today</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="w-20 h-20 relative mb-6 mx-auto rounded-full overflow-hidden shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-teal-900 mb-2">
                  {service.title}
                </h3>
                <p className="italic text-teal-600 mb-4">{service.subtitle}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <Link href="/services" passHref>
                  <CustomButton
                    title="Read More"
                    btnType="button"
                    containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                    textStyles="text-base"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default ServicesSection;