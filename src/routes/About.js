import Hero from "../compouents/Hero";
import Navbar from "../compouents/Navbar"
import Footer from "../compouents/footer";
import AboutImg from "../asserts/download.jpg"
import AboutUs from "../compouents/AboutUs";
function About (){
    return(
        <>
          <Navbar/>
        <Hero
        cName="hero-mid"
        heroimg = {AboutImg}
        title = "About"
        btnClass ="hide" 
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}
export default About;