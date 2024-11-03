import React from 'react'
import Header1 from '../components/HomeComponent/Header1'
import Header2 from '../components/HomeComponent/Header2'
import { GraphicHero } from '../components/GraphicDesigning/GraphicHero'
import GrahicDetails from '../components/GraphicDesigning/GraphicDetals'
import Footer from '../components/HomeComponent/Footer'
import ProjectsCard from '../components/Development/RecentProject'
import GraphicGrid from '../components/GraphicDesigning/GraphicsGrid'
import ScrollToTopButton from '../components/HomeComponent/ScrollComp'
const Graphic = () => {
  return (
    <div>
      <Header1/>
      <Header2/>
      <GraphicHero/>
      <GrahicDetails/>
      <GraphicGrid/>
      <ProjectsCard/>
      <Footer/>
      <ScrollToTopButton/>

    </div>
  )
}

export default Graphic
