
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '@/components/CustomButton'

export const metadata = {
  title: 'AskMrzSparkles | Books',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
       <div>
            <h2 className='text-primary text-headline-5 text-center lg:text-start lg:text-headline-5 mt-10 lg:mt-0'> </h2>
            
          </div>    
      </section>
      

      <section className="bg-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
       
       <div className="w-full md:w-1/2 ml-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Image
            src="/oneness.png"
            alt="Books Collection"
            width={450}
            height={450}
            className="rounded-3xl shadow-lg mx-auto md:mx-0"
            priority
          />
        </div> 

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">In the Pursuit for Oneness</h2>
          <p className="text-lg text-gray-600 mb-8 text-justify md:text-left leading-loose max-w-3xl mx-auto">
          Have you ever found yourself asking, “How do I sustain the spark in my marriage?” You're not alone, and the answer 
          lies within these pages. In Pursuit of Oneness is more than just a book; it’s your roadmap back to being deeply connected 
          and truly seen by your partner. </p>
          <p className="text-lg text-gray-600 mb-8 text-justify md:text-left leading-loose max-w-3xl mx-auto">
          With practical and heart-warming tips you can easily weave into your weekly routine, 
          you’ll discover how to rekindle your connection, revive meaningful communication, and become simply irresistible to your spouse.
          Whether you're longing to reignite the spark or seeking to elevate the love you already share, this book is your guide, 
          and the perfect gift for couples ready to reconnect and rediscover the magic of oneness.

          </p>

        <Link href='https://selar.co/intimacywbr'>  {/**changed the button name and url **/}
        <CustomButton
          title='Order Book..'
          btnType='button'
          containerStyles='bg-teal-400 py-2 px-5 rounded-lg hover:bg-teal-700'
          textStyles='text-white font-medium hover:text-white'
        />
      </Link>
  
        </div>
      
      </div>
    </section>

    <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
      <div className="w-full md:w-1/2 ml-7 mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Image
            src="/heywife.jpg"
            alt="Books Collection"
            width={450}
            height={450}
            className="rounded-3xl shadow-lg mx-auto md:mx-0"
            priority
          />
        </div> 
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Hey Wifey Stop- 7 damaging mistakes every young wives must avoid</h2>
          <p className="text-lg text-gray-600 mb-8 text-justify md:text-left leading-loose max-w-3xl mx-auto">
          There are 7 damaging mistakes you must stop making today as a Wife. If you want to kick-start your journey of staying 
          happily married, please stop making these mistakes now and start your marriage right. </p>
          <p className="text-lg text-gray-600 mb-8 text-justify md:text-left leading-loose max-w-3xl mx-auto">
          This 20page ebook is a short read that reveals the simple but very common and damaging mistakes newlyWeds and 
          Young Wives make in the early years of marriage.

          </p>
        
        <Link href='https://selar.co/intimacywbr'>  {/**changed the button name and url **/}
        <CustomButton
          title='Order Book..'
          btnType='button'
          containerStyles='bg-teal-400 py-2 px-5 rounded-lg hover:bg-teal-700'
          textStyles='text-white font-medium hover:text-white'
        />
      </Link>
           
        </div>
         
       
       
      </div>
    </section>

     <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
      <div className="w-full md:w-1/2 ml-7 mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Image
            src="/heywife.jpg"
            alt="Books Collection"
            width={450}
            height={450}
            className="rounded-3xl shadow-lg mx-auto md:mx-0"
            priority
          />
        </div> 
       
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">The Relationship Checklist</h2>
          <p className="text-lg text-gray-600 mb-8 text-justify md:text-left leading-loose max-w-3xl mx-auto">
          Nor allow love carry you go anywhere you nor know o.Don't date anyone until you have carefully answered these 12 crucial 
          questions!
          In this book, I share with you 12 vital questions every sharp single person must answer before dating to marry. 
          Some people think the foundation of marriage is the dating season, not really. It is actually what you do, who you are 
          and what you know before dating begins. </p>
          <p className="text-lg text-gray-600 mb-8 text-justify md:text-left leading-loose max-w-3xl mx-auto">
          This is a practical workbook that sets you on a journey of reflection and revelation which will ultimately launch you 
          into being a more confident lady backed with clarity on your destination for a relationship.

          </p>
           <Link href='https://selar.co/intimacywbr'>  {/**changed the button name and url **/}
        <CustomButton
          title='Order Book..'
          btnType='button'
          containerStyles='bg-teal-400 py-2 px-5 rounded-lg hover:bg-teal-700'
          textStyles='text-white font-medium hover:text-white'
        />
      </Link>
        </div>
        
       
      </div>
    </section>




    </div>
  )
}

export default page