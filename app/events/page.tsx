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


