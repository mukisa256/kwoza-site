import Hero from "../compouents/Hero";
import Navbar from "../compouents/Navbar"
import Footer from "../compouents/footer";
import AboutImg from "../asserts/download (1).jpg"
import Folder from "../compouents/folder";

function Service (){
    return(
        <>
            <Navbar/>
        <Hero
        cName="hero-mid"
        heroimg = {AboutImg}
        title = "Service"
        btnClass ="hide" 
        />
        <Folder/>
         <Footer/>
        </>
    )
}
export default Service;