


"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import Link from "next/link";
import MenuItems from "./MenuItems";
import MenuAction from "./MenuAction";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollTop();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={cn(
        "bg-white absolute top-0 left-0 py-4 z-30 w-full flex fixed top-0 items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-[108px] lg:py-[4px]",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex-1">
        <Link href="/">
          <Image src="/ms1.png" height="100" width="100" alt="logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:items-center lg:gap-4 lg:justify-end lg:flex-1">
        <MenuItems />
      
        <MenuAction />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <Image
              src="/hamburger.png"
              alt="Open Menu"
              width={24}
              height={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu (toggle visibility) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md">
          <MenuItems />
          <MenuAction />
        </div>
      )}
    </div>
  );
};

export default Navbar;
