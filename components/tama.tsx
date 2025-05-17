import Image from "next/image";
import Link from "next/link";

const Tama: React.FC = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-lg p-5 flex flex-col md:flex-row gap-10 animate-fade-in">
          <div className="flex-1 text-center md:text-center">
            <h2 className="text-4xl font-extrabold text-teal-700 mb-3 tracking-tight">
              at <span className="text-teal-900">TAMA</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We help ambitious professionals and business owners heal from within, master emotional patterns, and create lasting love because a thriving marriage starts with a transformed mindset.
              If you're seeking to prepare for marriage, navigating relationship challenges or simply..
            </p>
            {/*<Link
              href="/about"
              className="inline-block bg-teal-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-teal-800 transition-colors duration-300"
            >
              Read More
            </Link>*/}
          </div>

          {/* Optional image section - uncomment and update if needed */}
           {/*<div className="flex-1">
            <Image
              src="/sparkles3.png"
              alt="Books Collection"
              width={350}
              height={350}
              className="rounded-2xl shadow-md mx-auto"
              priority
            />
          </div> */}
        </div>
      </div>

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
          animation: fade-in 0.7s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Tama;
