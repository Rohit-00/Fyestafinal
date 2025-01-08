'use client'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import Navbar from './Navbar'
import { WhoIsItFor } from './whoisfor'
import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <div className="min-h-screen bg-background mt-8" >
      {/* Header */}
    
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-medium text-gray-800 max-w-4xl mx-auto leading-tight" style={{fontFamily:'Helvetica'}}>
        Celebrate Your Life's Moment's <span className='relative'> 
        With Us
          <svg className='absolute left-0 right-0 bottom-0 top-0 hidden sm:block' width="240" height="75" viewBox="0 0 350 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path 
initial={{pathLength:0}}
animate={{pathLength:1}}
transition={{
  duration:1,
  ease:'easeInOut'
}}
d="M112.5 9.99989C332.9 9.99989 339 49.6666 314.5 69.4999C301 76.8332 247.5 91.8999 141.5 93.4999C35.4999 95.0999 4.99992 59.1666 2.99992 40.9999C0.333252 27.8332 29.4999 1.69989 167.5 2.49989" stroke="#FF6B6B" strokeWidth="5"/>
</svg>
          <svg className='absolute left-0 right-0 bottom-0 top-0 block sm:hidden' width="150" height="45" viewBox="0 0 350 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path 
initial={{pathLength:0}}
animate={{pathLength:1}}
transition={{
  duration:1,
  ease:'easeInOut'
}}
d="M112.5 9.99989C332.9 9.99989 339 49.6666 314.5 69.4999C301 76.8332 247.5 91.8999 141.5 93.4999C35.4999 95.0999 4.99992 59.1666 2.99992 40.9999C0.333252 27.8332 29.4999 1.69989 167.5 2.49989" stroke="#FF6B6B" strokeWidth="6"/>
</svg>

 </span> 
        </h1>
        
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-[#FF6B6B] text-white rounded-full text-lg font-medium hover:bg-[#FF5555] transition-colors"
        >
          Contact Us
          <ArrowDown className="w-5 h-5" />
        </Link>
      </section>

      {/* Who is it for Section */}
     <WhoIsItFor/>
    </div>
  )
}

