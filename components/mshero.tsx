import Image from "next/image";
import Nav from "../components/msnav";
import Link from "next/link"

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ms3.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-95"
        />
      </div>


      {/* Content */}
      <div className="relative container mx-auto px-12 h-full flex items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elevate your love life with {" "}
            <span className="text-teal-300">Clarity and Confidence</span>
          </h1>
          <p className="text-lg mb-6">
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <Link href='/services'>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full border border-color white hover:bg-teal-600">
            Our Services
          </button> 
          </Link>

          <span></span> 
          <Link href='/contact'>
          <button className="bg-white text-black px-6 py-3 rounded-full border border-color white hover:bg-teal-600">
            Contact Us
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

