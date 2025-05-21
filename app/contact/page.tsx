import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Contact from '@/components/contact'

export const metadata = {
  title: 'AskMrzSparkles | Contact',
};

const page = () => {
  return (
    <main className=" relative w-full">        
        <Contact />
    </main>
  )
}

export default page