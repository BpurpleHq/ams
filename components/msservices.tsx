import Image from "next/image";
import { services } from '@/constants'
import Link from 'next/link'


const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Transform Your <span className="text-teal-700">Marriage Today</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 duration-600 animate-fade-in">
          {services.map((service, index) => (
            <div key={index} className="bg-teal-50 p-6 text-left">
              <Image
                src={service.image}
                alt={service.title}
                width={70}
                height={70}
                className="rounded-full mx-50 my-50 mb-4 "
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description} <span><Link href='/services' className="text-teal-500"> Read More.. </Link> </span> </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

