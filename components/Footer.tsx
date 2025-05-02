import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white">
  <div className="max-w-[1440px] mx-auto flex max-md:flex-col flex-wrap max-md:items-start justify-between gap-5 sm:px-16 px-6 py-10">
    {/* Logo */}
    <Link href="/">
      <Image src="/ms1.png" alt="logo" width={150} height={150} />
    </Link>

    {/* Footer Links Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {footerLinks.map((link) => (
        <div
          key={link.title}
          className="flex flex-col items-center gap-4 text-base max-md:items-start lg:justify-start lg:items-start"
        >
          <h3 className="text-headline-4 text-black">{link.title}</h3>
          {link.links.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="text-black text-body"
            >
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  </div>

  {/* Copyright Section */}
  <div className="sm:px-16 px-6 py-5 text-black">
    <div className="w-full border-t border-secondary flex flex-col justify-center max-md:items-start items-center">
      <div>
        <p className="text-body-2 text-center max-md:text-left">
          © 2025 AskMrzSparkles All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer

// flex justify-center items-center lg:justify-start lg:items-start flex-col gap-4 lg:gap-4 text-base min-w-[190px]