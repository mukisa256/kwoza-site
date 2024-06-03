import Hero from "../compouents/Hero";
import Navbar from "../compouents/Navbar"
import Folder from "../compouents/folder";
import Footer from "../compouents/footer";
import Wording from "../compouents/wroding";
import AboutImg from "../asserts/download.jpg"
import ContactFom from "../compouents/contactform";
import AboutUs from "../compouents/AboutUs";
function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroimg = {AboutImg}
        title = "KWOZA INDUSTRIES UGANDA KAMPALA "
        text = ""   
        buttonText ="GET IN TOUCH"
        url ="/"
        btnClass ="show" 


      
    />
        <Wording/>
        <Folder/>
        <AboutUs/>
        <ContactFom/>
        <Footer/>
        </>
    );
}
export default Home;