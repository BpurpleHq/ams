import React from "react";
import CustomButton from './CustomButton';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-16">
        {/* Video Section */}
        <div className="w-full md:w-1/2 rounded-3xl shadow-lg overflow-hidden animate-fade-in" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Wt6kfNDXN4g"
            title="Relationship Guidance Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl font-extrabold mb-6 leading-tight text-gray-900">
            Navigate Relationships with{' '}
            <span className="text-teal-600">Confidence &amp; Clarity</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Every wife should glow in marriage and you should not be different. All that excitement before your wedding day doesn’t have to fly outside the window in marriage. Your relationship with your husband can grow even deeper, more exciting and blissful.
          </p>
            <Link href="/about" passHref>  {/**changed the button name and url **/}
        <CustomButton
          title='About Us'
          btnType='button'
          containerStyles='bg-teal-400 py-2 px-5 rounded-lg hover:bg-teal-700'
          textStyles='text-white font-medium hover:text-white'
        />
      </Link>
          
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

export default HeroSection;
