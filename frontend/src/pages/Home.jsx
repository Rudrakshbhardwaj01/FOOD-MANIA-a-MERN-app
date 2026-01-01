import About from "../components/About"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import Qualities from "../components/Qualities"
import AboutUs from "../components/AboutUs"
import Team from "../components/Team"
import Reservation from "../components/Reservation"
import Footer from "../components/Footer"

const Home = () => {
  return(
  <>
  <HeroSection/>
  <About/>
  <Qualities/>
  <Menu/>
  <AboutUs/>
  <Team/>
  <Reservation/>
  <Footer/>
  </>
  )
}

export default Home