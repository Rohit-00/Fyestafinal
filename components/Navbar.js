import React from 'react'
import Image from 'next/image';
import logo from '../public/images/logo-07.png'
import logoCircle from '../public/images/logoCircle.png'
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';


function Navbar() {
  return (
    <>
         <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-[#FF6B6B] text-3xl font-bold">
          fyesta
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-[#FF6B6B]">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-[#FF6B6B]">
            About us
          </Link>
          <Link href="/socials" className="text-gray-600 hover:text-[#FF6B6B]">
            Socials
          </Link>
        </nav>

        <Link 
          href="/contact"
          className="px-6 py-2 rounded-full border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-colors"
        >
          Contact us
        </Link>
      </header>
    </>
  )
}

export default Navbar