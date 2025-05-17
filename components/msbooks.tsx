import Image from "next/image";
import Link from "next/link";
import CustomButton from './CustomButton';

const BooksSection: React.FC = () => {
  return (
    <section className="bg-teal-50 py-20">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Get the newest collection of our books
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Take charge of your mind, emotions and actions. <br />
            Let us guide you to build the relationship and marriage you desire.
          </p>

           <Link href="/resources/books" passHref>  {/**changed the button name and url **/}
        <CustomButton
          title='See More Books'
          btnType='button'
          containerStyles='bg-teal-400 py-2 px-5 rounded-lg hover:bg-teal-700'
          textStyles='text-white font-medium hover:text-white'
        />
      </Link>
          
        </div>

        {/* Optional Image Section */}
         
        <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Image
            src="/oneness.png"
            alt="Books Collection"
            width={350}
            height={350}
            className="rounded-3xl shadow-lg mx-auto md:mx-0"
            priority
          />
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

export default BooksSection;
