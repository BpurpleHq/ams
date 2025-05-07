import Image from "next/image";
import Nav from "../components/msnav";
import Link from "next/link"

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen">
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
        <div className="text-white max-w-lg duration-600 animate-fade-in">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Master Your Emotions, {" "}
            <span className="text-teal-300">Deepen Your Connections,{" "}</span>
            Build Lasting Relationships & Marriage.
          </h1>
          <p className="text-lg mb-6">
            Transform your inner world and build relationships you truly deserve using proven emotional and connection frameworks. 
            <br /> No more chasing validation, sacrificing your peace, or losing your sense of worth.
          </p>
          <Link href='/services'>
          <button className="bg-teal-400 text-white px-6 py-3 rounded-full border border-color white hover:bg-teal-600">
            Our Services
          </button> 
          </Link>

          <span>  </span> 
          <Link href='/contact'>
          <button className="bg-white text-teal-400 px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white">
            Contact Us
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

