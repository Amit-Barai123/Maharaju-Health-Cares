import React from 'react'
import Header1 from '../components/HomeComponent/Header1'
import Header2 from '../components/HomeComponent/Header2'
import { MarketingHero } from '../components/Marketting/MarketingHero'
import MarketDetails from '../components/Marketting/Marketingdetails'
import MarkettingGrid from '../components/Marketting/MarkettingGrid'
import ProjectsCard from '../components/Development/RecentProject'
import Footer from '../components/HomeComponent/Footer'
import ScrollToTopButton from '../components/HomeComponent/ScrollComp'
const Marketting = () => {
  return (
    <div>
      <Header1/>
      <Header2/>
      <MarketingHero/>
      <MarketDetails/>
      <MarkettingGrid/>
      <ProjectsCard/>
      <ScrollToTopButton/>
      <Footer/>

    </div>
  )
}

export default Marketting
