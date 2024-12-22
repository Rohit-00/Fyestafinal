import React from 'react'
import Navbar from './Navbar'
import MainText from './MainText'
import InputForm from './InputForm'

// import overlay from '../assests/images/overlay.jpg'

function Hero() {
  return (
    <div className='heroBackground'>
      <Navbar/>
    <MainText/>
    </div>
  )
}

export default Hero