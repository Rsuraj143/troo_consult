
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import BannerComponent from '../Components/Banner/BannerComponent'
import Feture from '../Components/Fetures/Feture'
import HeaderComponent from '../Components/Header/HeaderComponent'
import Highlight from '../Components/Hightlight/Highlight'
import PortfolioComponent from '../Components/Portfolio/PortfolioComponent'
import ServiceComponent from '../Components/ServiceComponent/ServiceComponent'
import VideoSection from '../Components/VideoSection/VideoSection'
import TeamComponent from '../Components/Team/TeamComponent'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import BlogsComponent from '../Components/BlogsComponent/BlogsComponent'
import FooterComponent from '../Components/FooterComponent/FooterComponent'


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
        <TeamComponent/>
        <ContactComponent/>
        <BlogsComponent/>
        <FooterComponent/>
        
    </div>
  )
}

export default Home