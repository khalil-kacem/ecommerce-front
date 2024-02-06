import React from 'react'
import Navbar from './components/Navbar'
import Anouncement from './components/Anouncement'
import Slider from './components/Slider'
import Popular from './components/Popular'
import Offers from './components/Offers'
import Newcollection from './components/Newcollection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { Fade } from 'react-reveal'
import Lottie from 'lottie-react';
import An from './assets/Animationdata.json';
function Home() {
  return (
    <div>
      <Fade bottom distance="5%">
      <Anouncement />
      <Navbar />
      <Slider />
      <Popular />
      <Offers />
      <Newcollection/>
      <Newsletter/>
      <Footer/>
      </Fade>
    </div>
  )
}

export default Home
