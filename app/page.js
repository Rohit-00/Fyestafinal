import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className='h-screen'>
      <div className='bg-background h-full w-full -z-10 absolute top-0 left-0'></div>
      <Hero/>
    </div>
  );
}
