
import { services1, testimonials, values } from '@/constants';
import Image from 'next/image';
import { type Metadata } from 'next';
import StatsSection from "@/components/msstat";

export const metadata: Metadata = {
  title: 'AskMrzSparkles | About US',
};

interface ValueCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}



export default function AboutPage() {
  return (
    <main className=" relative w-full">
    <section className="bg-gray-50 pt-20 pb-6" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            {/* Text Content */}
            <div className="lg:w-1/2 m-2 text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight"> About us Page</h1>
              
              {/*<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Details
              </button>*/}
            </div>
           
            
          </div>
    </section>
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative" style={{ paddingTop: "56.25%"}}>
            <Image
              src="/ms3.jpeg"
              layout="fill"
              objectFit="cover"
              className="opacity-80 rounded"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left ml-6">
          <h1 className="text-4xl font-bold mb-4">
            About the <span className="text-teal-700">Company</span>
          </h1>
          <p className="text-gray-600 mb-6">
           No, invideo AI and invideo Studio function as separate products with individual pricing plans. 
           If you were an active lifetime deal holder of invideo Studio and had purchased it before August 15, 2023, 
           you'll qualify for free invideo AI credits. These will be phased in gradually, and you'll be notified via 
           email when they become available. As for other invideo Studio subscribers, e're actively exploring ways to 
           offer some benefits to help you get started on invideo AI. Stay tuned for more announcements.No, invideo AI 
           and invideo Studio function as separate products with ndividual pricing plans. If you were an active lifetime 
           deal holder of invideo Studio and had purchased it before August 15, 2023, you'll qualify for free invideo AI 
           credits. These will be phased in gradually, and you'll be notified via email when they become available. As for 
           other invideo Studio subscribers, we're actively exploring ways to offer some benefits to help you get started on 
           video AI. Stay tuned for more announcements. PS: This is available exclusively to users who have purchased their 
           nvideo accounts from invideo.PS: 
           This is available exclusively to users who have purchased their invideo accounts from invideo.
          </p>
         {/* <button className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            About Us
          </button>*/}
        </div>
      </div>
    </section>
    <StatsSection />

    <section className="h-screen bg-gray-50 pt-20 pb-6" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            {/* Text Content */}
            <div className="lg:w-1/2 m-2 text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                Meet the Founder

              </h1>
              <p className="mt-4 text-lg text-gray-800">
                No, invideo AI and invideo Studio function as separate products with individual pricing plans. 
                If you were an active lifetime deal holder of invideo Studio and had purchased it before August 
                15, 2023, you'll qualify for free invideo AI credits. These will be phased in gradually, and 
                you'll be notified via email when they become available. As for other invideo Studio subscribers, 
                e're actively exploring ways to offer some benefits to help you get started on invideo AI. Stay 
                tuned for more announcements.No, invideo AI and invideo Studio function as separate products with 
                ndividual pricing plans. If you were an active lifetime deal holder of invideo Studio and had 
                purchased it before August 15, 2023, you'll qualify for free invideo AI credits. These will be 
                phased in gradually, and you'll be notified via email when they become available. As for other 
                invideo Studio subscribers, we're actively exploring ways to offer some benefits to help you get 
                started on invideo AI. Stay tuned for more announcements. PS: This is available exclusively to users 
                who have purchased their invideo accounts from invideo.PS: This is available exclusively to 
                users who have purchased their invideo accounts from invideo.</p>
              {/*<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Details
              </button>*/}
            </div>
           
            
          </div>
        </section>


        






      
    </main>
  );
}

