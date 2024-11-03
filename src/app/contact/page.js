import React from 'react'
import Header1 from '../components/HomeComponent/Header1'
import Header2 from '../components/HomeComponent/Header2'
import { ContactHero } from '../components/Contact/ContactHero'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/HomeComponent/Footer'
import GoogleMapComponent from '../components/Contact/Maps'
import ScrollToTopButton from '../components/HomeComponent/ScrollComp'

const Contact = () => {
  return (
    <div>
      <Header1/>
      <Header2/>
      <ContactHero/>
      <ContactForm/>
      <GoogleMapComponent/>
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
}

export default Contact
