import React from 'react'
import { FaArrowDown } from "react-icons/fa";

export const ContactUs = () =>  {
  return (
    <div className='mt-8 items-center jusitfy-center flex flex-col w-full'>
   <div className='bg-primary flex flex-row items-center p-2 text-white rounded-full gap-2'>
    <div className='ml-4'>
    Contact Us
    </div>
    <div className='bg-white p-2 rounded-full cursor-pointer'>
    <FaArrowDown className='text-black hover:-rotate-90 transition-transform'/>
    </div>
   </div>
    </div>
  )
}
