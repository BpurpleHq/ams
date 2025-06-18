

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CustomButton from "@/components/CustomButton";

export const metadata = {
  title: "AskMrzSparkles | Books",
};

const Page = () => {
  return (
    <main className="relative w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-900 text-center mb-8">
          Explore Our Books
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Discover resources to strengthen your relationships and personal growth with our
          carefully crafted books.
        </p>
      </section>

      {/* Book 1: In the Pursuit for Oneness */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/oneness.PNG"
              alt="In the Pursuit for Oneness"
              width={350}
              height={350}
              className="rounded-3xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              In Pursuit of Oneness
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have you ever asked, “How do I sustain the spark in my marriage?” <em>In Pursuit of Oneness</em> is your roadmap to deep connection and being truly seen by your partner.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With practical, heart-warming tips you can weave into your weekly routine, you’ll
              rekindle connection, revive communication, and become irresistible to your spouse.
              Perfect for couples ready to rediscover the magic of oneness.
            </p>
            <div className="items-center justify-center md:flex-row">
            <a href="https://rhbooks.com.ng/product/in-pursuit-of-oneness/?srsltid=AfmBOoqv1PXGcuyhF4oyP6iRThugKmlYCf7d6QooJR0S9R3BF46Ysw24" target="_blank" rel="noopener noreferrer">
              <CustomButton
                title="Order On Rovingheights"
                btnType="button"
                containerStyles="bg-teal-50 hover:bg-teal-200 px-6 py-3 items-center text-teal-900 font-semibold shadow-md mb-5 mr-5"
                textStyles="text-base"
              />
            </a>
            
            <a href="https://www.amazon.com/Pursuit-Oneness-Weekly-Affectionate-spouse/dp/B0CW17CH3M?ref_=ast_author_dp" target="_blank" rel="noopener noreferrer">
              <CustomButton
                title="On Amazon (Hard copy)"
                btnType="button"
                containerStyles="bg-teal-50 hover:bg-teal-200 px-6 py-3 items-center text-teal-900 font-semibold shadow-md mb-5"
                textStyles="text-base"
              />
            </a>
            <a href="https://selar.com/ipo2" target="_blank" rel="noopener noreferrer">
              <CustomButton
                title="On Selar (Delivery & Pick up options available)"
                btnType="button"
                containerStyles="bg-teal-50 hover:bg-teal-200 px-6 py-3 items-center text-teal-900 font-semibold shadow-md "
                textStyles="text-base"
              />
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book 2: Hey Wifey Stop */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/heywife.jpg"
              alt="Hey Wifey Stop"
              width={450}
              height={450}
              className="rounded-3xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              Hey Wifey Stop!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the 7 damaging mistakes every young wife must avoid to stay happily married.
              This 20-page eBook reveals simple but common errors newlyweds make in the early years
              of marriage.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Start your marriage right by learning how to avoid these pitfalls and build a strong
              foundation for lasting love.
            </p>
            <Link href="https://selar.com/wifey" target="_blank" rel="noopener noreferrer">
              <CustomButton
                title="Order Book"
                btnType="button"
                containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                textStyles="text-base"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Book 3: The Relationship Checklist */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/RelationshipChecklist.jpg"
              alt="The Relationship Checklist"
              width={450}
              height={450}
              className="rounded-3xl shadow-lg object-cover w-full h-auto transition-transform transform hover:scale-105"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              The Relationship Checklist
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Don’t date anyone until you’ve answered these 12 crucial questions! <em>The Relationship Checklist</em> guides sharp singles through vital reflections before dating to marry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This practical workbook sets you on a journey of clarity and confidence, ensuring you’re
              ready for a meaningful relationship.
            </p>
            <Link href="https://selar.com/trcbook" target="_blank" rel="noopener noreferrer">
              <CustomButton
                title="Order Book"
                btnType="button"
                containerStyles="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105"
                textStyles="text-base"
              />
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default Page;