import Mountain1 from "../asserts/images.jpg"
import Mountain2 from "../asserts/download (2).jpg"
import "./wordingStyle.css"
import Desdata from "./desdata"
const Wording = () => {
    return (
        <div className="Wording">
            {/* <h1> Heading</h1>
            <p>processing</p> */}
            
            <Desdata
            className="first-des custom-text-color"
            

            text = "A Leading Conglomerate in East and Central Africa and a major player in key business sectors covering manufacturing, agriculture, and logistics supply chain that drive the Ugandan economy."
            img1 ={Mountain1}
            img2 ={Mountain2}

            />
            <Desdata
             className="first-des2 custom-text-color2"
           

            text = "Kwoza Industries Uganda Limited is proud to have attained local and regional recognition for the production of a wide range of high-quality and affordable Fast Moving Consumer Goods (FMCGs) ranging from laundry, toilet soaps, edible oils, and fats, powder detergents, domestic and industrial plastics, packaged drinking water and proteins for animal feeds with state of art technology cutting across all sectors. Its origins date back to 1910 when members of the family first set foot in East Africa and established a trading company."
            img1 ={Mountain1}
            img2 ={Mountain2}

            />

        </div>
    );
};
export default Wording;