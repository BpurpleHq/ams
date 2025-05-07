import Image from "next/image";
import Link from "next/link"

const Tama: React.FC = () => {
  return (
    <section className="bg-teal-200 py-10 duration-600 animate-fade-in">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-full text-center md:text-center">
          <h2 className="text-3xl font-bold mb-4"> </h2>
          <p className="text-lg text-gray-600 mb-6 text-justify md:text-left">
              At TAMA, we help ambitious professionals and business owners heal from within, master emotional patterns, and 
              create lasting love because a thriving marriage starts with a transformed mindset.
              If you're seeking to prepare for marriage, navigating relationship challenges or simply.. 
              <span><Link href='/about' className="text-teal-500"> Read More.. </Link> </span> </p>
          
        </div>
        {/*<div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>*/}
      </div>
    </section>
  );
};

export default Tama;