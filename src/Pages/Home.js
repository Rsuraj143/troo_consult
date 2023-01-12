import React from 'react'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import BannerComponent from '../Components/Banner/BannerComponent'
import Feture from '../Components/Fetures/Feture'
import HeaderComponent from '../Components/Header/HeaderComponent'
import Highlight from '../Components/Hightlight/Highlight'
import PortfolioComponent from '../Components/Portfolio/PortfolioComponent'
import ServiceComponent from '../Components/ServiceComponent/ServiceComponent'
import VideoSection from '../Components/VideoSection/VideoSection'

const Home = () => {
  return (
    <div>
        <HeaderComponent/>
        <BannerComponent/>
        <AboutComponent/>
        <Feture/>
        <VideoSection/>
        <ServiceComponent/>
        <Highlight/>
        <PortfolioComponent/>
    </div>
  )
}

export default Home