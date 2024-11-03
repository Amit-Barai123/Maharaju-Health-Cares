import React from 'react'
import Header1 from '../components/HomeComponent/Header1'
import Header2 from '../components/HomeComponent/Header2'
import DevHero from '../components/Development/DevHero'
import DevDetails from '../components/Development/DevDetail'
import GridSection from '../components/Development/GridSection'
import ProjectsCard from '../components/Development/RecentProject'
import Footer from '../components/HomeComponent/Footer'
import ScrollToTopButton from '../components/HomeComponent/ScrollComp'

const Development = () => {
  return (
    <div>
      <Header1/>
      <Header2/>
      <DevHero/>
      <DevDetails/>
      <GridSection/>
      <ScrollToTopButton/>
      <ProjectsCard/>
      <Footer/>


    </div>
  )
}

export default Development
