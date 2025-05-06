
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
      

      <section className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
       <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">In the Pursuit for Oneness</h2>
          <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
           <Link href='https://selar.co/intimacywbr'> 
            <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Order Book
          </button>

       </Link> 
        </div>
      
      </div>
    </section>

    <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Hey Wifey Stop- 7 damaging mistakes every young wives must avoid</h2>
          <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
           <Link href='https://selar.co/intimacywbr'> 
            <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Order Book
          </button>

       </Link> 
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>
       
      </div>
    </section>

     <section className="bg-teal-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center duration-600 animate-fade-in">
       
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">The Relationship Checklist</h2>
          <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
           <Link href='https://selar.co/intimacywbr'> 
            <button className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">
            Order Book
          </button>

       </Link> 
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image src="/books3.jpeg" alt="Books Collection" width={300} height={300} className="mx-auto" />
        </div>
       
      </div>
    </section>




    </div>
  )
}

export default page