import React from 'react'
import Header1 from '../components/HomeComponent/Header1'
import Header2 from '../components/HomeComponent/Header2'
import TraningHero from '../components/Training/TrainingHero'
import TrainingDetails from '../components/Training/TraningDetails'
import CardGrid from '../components/Training/TrainingCard'
import Footer from '../components/HomeComponent/Footer'
import ScrollToTopButton from '../components/HomeComponent/ScrollComp'
const Traning = () => {
  return (
    <div>
       <Header1/>
       <Header2/>
       <TraningHero/>
       <TrainingDetails/>
       <CardGrid/>
       <ScrollToTopButton/>
       <Footer/>

    </div>
  )
}

export default Traning
