
import React from 'react'

export const metadata = {
  title: 'AskMrzSparkles | Books',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
       <div>
            <h2 className='text-primary text-headline-3 text-center lg:text-start lg:text-headline-2 m-5 lg:mt-0'>Books </h2>
            <p className='text-headline-4 lg:text-headline-3 lg:text-mid text-primary mt-2'>All you have to Know</p>
          </div>    
      </section>
      {/*<section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodyAI />
      </section>*/}
    </div>
  )
}

export default page