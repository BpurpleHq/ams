import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Script from "next/script";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">

      <div className="max-w-[1440px] mx-auto flex flex-wrap max-md:flex-col max-md:items-start justify-between gap-10 sm:px-16 px-6 py-12">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/ms1.png" alt="logo" width={150} height={150} priority />
        </Link>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-grow">
          {footerLinks.map((linkGroup) => (
            <div
              key={linkGroup.title}
              className="flex flex-col items-center max-md:items-start"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {linkGroup.title}
              </h3>
              <ul className="space-y-3">
                {linkGroup.links.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> 

       {/* Copyright Section */}
      <div className="sm:px-16 px-6 py-6 bg-gray-50">
        <div className="max-w-[1440px] mx-auto flex flex-col max-md:items-start items-center">
          <p className="text-gray-600 text-sm text-center max-md:text-left">
            © 2025 AskMrzSparkles All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

