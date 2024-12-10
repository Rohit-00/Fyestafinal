import React from 'react'
import Image from 'next/image';
import logo from '../public/images/logo-07.png'
import logoCircle from '../public/images/logoCircle.png'
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';


function Navbar() {
  return (
    <>
        <nav className='flex w-full items-center justify-between pt-6 pr-3 pl-3 fixed z-10'>
            <Image src={logoCircle} alt='Logo' className='h-18 w-16 xl:hidden md:hidden' />
            <Link href="/" ><Image src={logo} alt='Logo' className='w-36 h-14 max-md:hidden  max-sm:hidden'/></Link>
            <div className='flex items-center md:justify-around xl:justify-around justify-end w-[400px] xl:w-[450px]max-sm:hidden'>
                <div className='bg-[#df5e5e] cursor-pointer flex items-center justify-center  w-40 h-10 text-lg xl:text-xl xl:w-44 xl:h-12 text-white rounded-full'>
                <FaInstagram className='text-2xl mr-1'/>
                    <a href='https://www.instagram.com/fyestaevents?igsh=MXMzdWZhdG5paDk2NA=='>fyestaevents</a>
                </div>
                <div className='bg-[#df5e5e] cursor-pointer flex items-center justify-center max-md:hidden w-40 h-10 text-lg xl:text-xl xl:w-44 xl:h-12 text-white rounded-full'>
                    <a href='#form'>Get in Touch</a>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar