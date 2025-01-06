import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import Navbar from './Navbar'
import { WhoIsItFor } from './whoisfor'

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#FFF5F5]">
      {/* Header */}
    
     <Navbar/>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 max-w-4xl mx-auto leading-tight">
          Get <span className="relative">
            More Clients
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-4">
              </div>
            </div>
          </span> With
          <br />
          The Help Of Our Platform
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

