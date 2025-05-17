import Image from "next/image";
import { services } from '@/constants'
import Link from 'next/link'
import CustomButton from './CustomButton';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight text-gray-900">
          Transform Your <span className="text-teal-600">Marriage Today</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 relative mb-6 mx-auto md:mx-0 rounded-full overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="italic text-teal-600 mb-6">{service.subtitle}</p>
              <p className="text-gray-700 mb-8 leading-relaxed">{service.description}</p>
              
           <Link href='/services'>  {/**changed the button name and url **/}
        <CustomButton
          title='Read More..'
          btnType='button'
          containerStyles='bg-teal-400 py-2 px-5 rounded-lg hover:bg-teal-700'
          textStyles='text-white font-medium hover:text-white'
        />
      </Link>
        
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default ServicesSection;


