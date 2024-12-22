import React from 'react'
import Image from 'next/image';
import logo from '../public/images/logo-07.png'
import logoCircle from '../public/images/logoCircle.png'
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';


function Navbar() {
  return (
    <>
        <nav className='flex w-full items-center justify-between pt-3 pr-7 pl-7 fixed z-10'>
            <Image src={logoCircle} alt='Logo' className='h-18 w-16 xl:hidden md:hidden' />
            <Link href="/" ><Image src={logo} alt='Logo' className='w-36 h-14 max-md:hidden  max-sm:hidden'/></Link>
            <div className='flex flex-row gap-6 font-bold text-navButton'>
                <div className='text-primary'>Home</div>
                <div>About</div>
                <div>Socials</div>

            </div>

            <div className='border-4 rounded-full border-primary p-2 px-6 text-primary font-bold hover:bg-primary hover:text-white'>Contact Us</div>
        </nav>
        
    </>
  )
}

export default Navbar