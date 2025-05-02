import Image from "next/image";
import Nav from "../components/msnav";

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
          className="opacity-90"
        />
      </div>


      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elevate your love life with {" "}
            <span className="text-teal-300">Clarity and Confidence</span>
          </h1>
          <p className="text-lg mb-6">
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-full border border-color white hover:bg-teal-600">
            Our Service
          </button> <span></span> <button className="bg-white text-black px-6 py-3 rounded-full border border-color white hover:bg-teal-600">
            Contact Us
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import Image from "next/image";

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative">
//       <div className="absolute inset-0">
//         <Image
//           src="/ms3.jpeg"
//           alt="Hero Background"
//           layout="fill"
//           objectFit="cover"
//           className="opacity-30"
//         />
//       </div>
//       <div className="relative container mx-auto px-4 py-24 text-center text-white">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           Elevate your love life with <br /> <span className="text-teal-300">Clarity and Confidence</span>
//         </h1>
//         <p className="text-lg mb-6">
//           Take charge of your mind, emotions and actions. <br />
//           Let us guide you to build the relationship and marriage you desire.
//         </p>
//         <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
//           Our Service
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;