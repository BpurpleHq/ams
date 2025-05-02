import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';

const MenuAction = () => {''
  return (
    <div className='flex items-center justify-center py-2'>
     {/**  <Link href='/signIn'>
        <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='mt-3'
          textStyles='text-dark'
        /> 
      </Link> **/}

      <Link href='/about'>  {/**changed the button name and url **/}
        <CustomButton
          title='Contact Us'
          btnType='button'
          containerStyles='bg-teal-500 py-2 px-5 rounded-lg hover:bg-teal-700'
          textStyles='text-white font-medium hover:text-white'
        />
      </Link>
    </div>
  )
}

export default MenuAction