// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import { cn } from "@/lib/utils";
// import { useScrollTop } from "@/hooks/use-scroll-top";
// import Link from "next/link";
// import MenuItems from "./MenuItems";
// import MenuAction from "./MenuAction";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const scrolled = useScrollTop();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div
//       className={cn(
//         "z-50 w-full bg-white flex fixed top-0 items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-[108px] lg:py-[4px]",
//         scrolled && "border-b shadow-sm"
//       )}
//     >
//       <div className="flex-1">
//         <Link href="/">
//           <Image src="/logoColored.svg" height="100" width="100" alt="logo" />
//         </Link>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden lg:flex lg:flex-1 md:justify-center">
        
//       </div>

//       <div className="hidden lg:flex lg:flex-1 md:justify-end">
//         <MenuAction />
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="flex lg:hidden">
//         <button
//           className="text-gray-700 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <Image
//               src="/hamburger.png"
//               alt="Open Menu"
//               width={24}
//               height={24}
//             />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu (toggle visibility) */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 w-full bg-teal-100 shadow-md">
//           <MenuItems />
//           <MenuAction />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
