import React from 'react'
import Image from 'next/image'
import hand from '../public/images/overall hand.png'

function MainText() {
  return (
    <div className='h-[650px] mt-0 flex items-center relative justify-center flex-col z-0'>
        <h2 className='text-[20px] md:text-[35px] xl:text-[40px] font-semibold mb-[-20px]'>WE ARE STILL</h2>
        <h1 className='text-[30px] md:text-[50px] mt-5 xl:text-[72px] font-semibold text-[#df5e5e] '>Cooking Our Website</h1>
        <h3 className='text-[#8c8c8c] text-[13px] md:text-[20px] xl:text-[24px] mt-2 tracking-in-expand'>We are going to Launch our Website Soon</h3>
        <Image src={hand} alt='hand-image' className='w-24 h-64 absolute bottom-[-80px] xl:bottom-[-60px] swing'/>
    </div>
  )
}

export default MainText