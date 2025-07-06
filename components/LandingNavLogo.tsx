"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const LandingNavLogo = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-[108px] lg:py-[8px]"
      )}
      role="navigation"
      aria-label="Primary Navigation"
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" aria-label="Go to homepage">
          <Image src="/ms1.png" height={100} width={100} alt="Logo" priority />
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavLogo;