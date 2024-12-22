import React from 'react'
import Image from 'next/image'
import hand from '../public/images/overall hand.png'
import { ContactUs } from './contactUs'

function MainText() {
  return (
    <div className='h-[650px] mt-0 flex items-center relative justify-center flex-col z-0'>
       <h1 className='text-6xl text-primary'>Get More Clients With</h1>
       <h1 className='text-6xl text-primary'>The Help Of Our Platform</h1> 
       <ContactUs/>
    </div>
  )
}

export default MainText