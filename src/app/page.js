// pages/index.js
import Head from 'next/head';
import Header1 from './components/HomeComponent/Header1';
import Header2 from './components/HomeComponent/Header2';
import Slides from './components/HomeComponent/Slides';
import AboutSection from './components/HomeComponent/AboutSection';
import Services from './components/HomeComponent/ChooseUsSection';
import TestimonialCard from './components/HomeComponent/TestmonialCard';
import Footer from './components/HomeComponent/Footer';
import ScrollToTopButton from './components/HomeComponent/ScrollComp';
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Responsive Web Design</title>
      </Head>
      <Header1 />
      <Header2/>
      <Slides/>
      <AboutSection/>
     <Services/>
     <TestimonialCard/>
     <ScrollToTopButton/>
     <Footer/>
    </div>
  );
}


