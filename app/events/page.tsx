"use client";

import React from "react";
import Image from "next/image";

type ImageTile = {
  src: string;
  alt: string;
  title?: string;
};

const ImageGrid: React.FC<{ images: ImageTile[] }> = ({ images }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {images.map(({ src, alt, title }, idx) => (
      <div
        key={idx}
        className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        tabIndex={0}
        aria-label={title || alt}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="object-cover w-full h-48 sm:h-40 md:h-48"
          priority={idx === 0} // prioritize first image loading
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-sm sm:text-base px-3 py-2">
            {title}
          </div>
        )}
      </div>
    ))}
  </div>
);

const EventSection: React.FC<{ title: string; images: ImageTile[] }> = ({
  title,
  images,
}) => (
  <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
      {title}
    </h2>
    <ImageGrid images={images} />
  </section>
);

const EventPage = () => {
  // Replace these with your actual image URLs or Google Drive direct links
  const bookLaunchImages: ImageTile[] = [
    { src: "/IMG_1458.JPEG", alt: "Book Launch Image 1" },
    { src: "/IMG_1478.JPEG", alt: "Book Launch Image 2" },
    { src: "/IMG_1488.JPEG", alt: "Book Launch Image 3" },
    { src: "/IMG_1489.JPEG", alt: "Book Launch Image 1" },
    { src: "/IMG_1495.JPEG", alt: "Book Launch Image 2" },
    { src: "/IMG_1538.JPEG", alt: "Book Launch Image 3" },
   
  ];

  const refresh1Images: ImageTile[] = [
    { src: "/IMG_8789.JPEG", alt: "Refresh 1.0 Image 1" },
    { src: "/IMG_0754.JPEG", alt: "Refresh 1.0 Image 3" },
    { src: "/IMG_0755.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_0763.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_0800.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_0847.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_0868.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_0881.JPEG", alt: "Refresh 1.0 Image 4" },
  ];

  const refresh2Images: ImageTile[] = [
    { src: "/IMG_0443.JPEG", alt: "Refresh 1.0 Image 1" },
    { src: "/IMG_0546.JPEG", alt: "Refresh 1.0 Image 3" },
    { src: "/IMG_0691.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_0699.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_0672.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_2330.JPEG", alt: "Refresh 1.0 Image 4" },
    { src: "/IMG_2586.JPEG", alt: "Refresh 1.0 Image 4" },
   
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">-</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Explore our latest events and join the journey with MrzSparkles.
        </p>
      </header>

      <EventSection title="Book Launch" images={bookLaunchImages} />
      <EventSection title="Refresh with MrzSparkles 1.0" images={refresh1Images} />
      <EventSection title="Refresh with MrzSparkles 2.0" images={refresh2Images} />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
      `}</style>
    </main>
  );
};

export default EventPage;



// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// type CarouselProps = {
//   images: { src: string; alt: string }[];
// };

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       <div className="overflow-hidden rounded-xl shadow-lg">
//         <Image
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           width={800}
//           height={450}
//           className="object-cover w-full h-[280px] md:h-[450px]"
//           priority
//         />
//       </div>

//       {/* Controls */}
//       <button
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-teal-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={nextSlide}
//         aria-label="Next Slide"
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-teal-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             aria-label={`Go to slide ${idx + 1}`}
//             className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//               idx === currentIndex ? "bg-teal-600" : "bg-teal-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const EventSection: React.FC<{ title: string; images: { src: string; alt: string }[] }> = ({
//   title,
//   images,
// }) => (
//   <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto animate-fade-in">
//     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
//       {title}
//     </h2>
//     <Carousel images={images} />
//   </section>
// );

// const EventPage = () => {
//   // Sample images - replace with your actual images
//   const bookLaunchImages = [
//     { src: "/IMG_1458.JPEG", alt: "Book Launch Image 1" },
//     { src: "/IMG_1478.JPEG", alt: "Book Launch Image 2" },
//     { src: "/IMG_1488.JPEG", alt: "Book Launch Image 3" },
//   ];

//   const refresh1Images = [
//     { src: "/events/refresh1-1.jpg", alt: "Refresh with MrzSparkles 1.0 Image 1" },
//     { src: "/events/refresh1-2.jpg", alt: "Refresh with MrzSparkles 1.0 Image 2" },
//     { src: "/events/refresh1-3.jpg", alt: "Refresh with MrzSparkles 1.0 Image 3" },
//   ];

//   const refresh2Images = [
//     { src: "/events/refresh2-1.jpg", alt: "Refresh with MrzSparkles 2.0 Image 1" },
//     { src: "/events/refresh2-2.jpg", alt: "Refresh with MrzSparkles 2.0 Image 2" },
//     { src: "/events/refresh2-3.jpg", alt: "Refresh with MrzSparkles 2.0 Image 3" },
//   ];

//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//       <header className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
//         <h1 className="text-5xl font-extrabold mb-4">_____</h1>
//         <p className="max-w-2xl mx-auto text-lg text-gray-600">
//           Join us for inspiring and transformative events hosted by MrzSparkles.
//         </p>
//       </header>

//       <EventSection title="Book Launch" images={bookLaunchImages} />
//       <EventSection title="Refresh with MrzSparkles 1.0" images={refresh1Images} />
//       <EventSection title="Refresh with MrzSparkles 2.0" images={refresh2Images} />

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease forwards;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default EventPage;



// import CustomButton from '@/components/CustomButton'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import Carousel from '@/components/slickCar'

// export const metadata = {
//   title: 'AskMrzSparkles | Events',
// };

// const page = () => {
//   return (
//     <main className=" relative w-full">
//         <section className="bg-gray-50 pt-20 pb-6">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
//             {/* Text Content */}
//             <div className="lg:w-1/2 m-2 text-center lg:text-left">
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//                 Event Page

//               </h1>
//               <p className="mt-4 text-lg text-gray-800">
//                 Welcome home - this pages the about us</p>
//               {/*<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
//                 Details
//               </button>*/}
//             </div>
           
            
//           </div>
//         </section>
//         <Carousel />

      
//     </main>
//   )
// }

// export default page