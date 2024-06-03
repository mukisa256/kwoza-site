import Hero from "../compouents/Hero";
import Navbar from "../compouents/Navbar"
import AboutImg from "../asserts/yt.jpg"
import Footer from "../compouents/footer";
import Goods from "../compouents/Goods";
function Products(){
    return(
        <>
           <Navbar/>
        <Hero
        cName="hero-mid"
        heroimg = {AboutImg}
        title = "Products"
        btnClass ="hide" 
        />
        <Goods/>
        <Footer/>
        </>
    )
}
export default Products;