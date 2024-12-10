"use client"
import React from 'react'
import Image from 'next/image'
import lifafa from '../public/images/envelopeBack1.png'
import envelopeFront from '../public/images/envelopeFront.png'
import Form from './Form'

function InputForm() {
  return (
    <div className='p-4 relative overflow-clip h-[750px]' id='form'>
        <div className='flex items-end justify-center w-full'>
          <Image src={lifafa} alt='Lifafa' className='w-11/12 h-72 xl:w-7/12 xl:h-[550px] absolute bottom-6 sm:h-[500px] sm:w-[640px]'/>
          <Form/>
          <Image src={envelopeFront} alt='Lifafa' className='w-11/12 h-44 xl:h-[345px] xl:w-7/12 absolute bottom-6 sm:h-[313px] sm:w-[640px]'/>
        </div>
    </div>
  )
}

export default InputForm