'use client'
import Image from "next/image";

import {motion}  from "framer-motion";
import Rotate3D  from "lucide-react";
import React from "react";
import Hero from "../components/Hero";
const Home  = ()=> {
  return (
    <div className='h-screen'>
      {/* <motion.div className=" absolute h-[100%] w-full z-50 bg-primary" animate={{height:0}}/> */}
      <div className='bg-background h-full w-full -z-10 absolute top-0 left-0'></div>
    <Hero/>
    </div>
  );
}
export default Home