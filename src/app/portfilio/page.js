import React from 'react'
import Header1 from '../components/HomeComponent/Header1'
import Header2 from '../components/HomeComponent/Header2'
import { PortfilioHero } from '../components/Portfilio/PortfilioHero'
import { CompletedProject } from '../components/Portfilio/Projects'
import Footer from '../components/HomeComponent/Footer'
import ScrollToTopButton from '../components/HomeComponent/ScrollComp'

const Portfilio = () => {
  return (
    <div>
        <Header1/>
        <Header2/>
        <PortfilioHero/>
        <CompletedProject/>
        <ScrollToTopButton/>
        <Footer/>
    </div>
  )
}

export default Portfilio
