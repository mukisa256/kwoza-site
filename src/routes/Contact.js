import Hero from "../compouents/Hero";
import Navbar from "../compouents/Navbar"
import AboutImg from "../asserts/images (1).jpg"
import Footer from "../compouents/footer";
import ContactFom from "../compouents/contactform";
function Contact (){
    return(
        <>
           <Navbar/>
        <Hero
        cName="hero-mid"
        heroimg = {AboutImg}
        title = "Contact"
        btnClass ="hide" 
        />
        <ContactFom/>
        <Footer/>
        </>
    )
}
export default Contact;