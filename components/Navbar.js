'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/images/logo-07.png'
import { FaInstagram } from "react-icons/fa"
import Link from 'next/link'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-screen'>
      <header className="fixed w-screen mx-auto sm:px-11 px-4 py-6 bg-white/20 backdrop-blur-sm z-50 top-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[#FF6B6B] text-3xl font-bold relative z-50">
            <Image src={logo} height={50} width={120} alt="logo" />
          </Link>
          
          {/* Animated Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-full h-0.5 bg-gray-600 absolute transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
            }`}></span>
            <span className={`block w-full h-0.5 bg-gray-600 absolute top-3 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-full h-0.5 bg-gray-600 absolute transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
            }`}></span>
          </button>

          {/* Desktop Navigation */}
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

          {/* Contact Us Button - Desktop */}
          <Link 
            href="/contact"
            className="hidden md:block px-6 py-2 rounded-full border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white"
          >
            Contact us
          </Link>
        </div>

        {/* Animated Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col items-center gap-6 py-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-[#FF6B6B] text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-[#FF6B6B] text-lg"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="/socials" 
              className="text-gray-600 hover:text-[#FF6B6B] text-lg"
              onClick={() => setIsOpen(false)}
            >
              Socials
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-2 rounded-full border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar