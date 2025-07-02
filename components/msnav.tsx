

"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import Link from "next/link";
import MenuItems from "./MenuItems";
import MenuAction from "./MenuAction";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollTop();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-[108px] lg:py-[8px] transition-shadow duration-300",
          scrolled ? "border-b shadow-md" : "border-b border-transparent"
        )}
        role="navigation"
        aria-label="Primary Navigation"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Go to homepage">
            <Image src="/ms1.png" height={100} width={100} alt="logo" priority />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 lg:justify-end lg:flex-1">
          <MenuItems />
          <MenuAction />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-100 rounded-md"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <Image src="/hamburger.png" alt="Open Menu" width={24} height={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="fixed top-[64px] left-0 w-full bg-white shadow-lg z-50 p-6 space-y-6 flex flex-col"
          >
            <MenuItems onClickLink={() => setIsMenuOpen(false)} />

            <MenuAction />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
