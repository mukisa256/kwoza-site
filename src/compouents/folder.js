import "./folderStyle.css"
import FolderData from "./folderDate"
import Manager1 from "../asserts/images.jpg"
import Manager2 from "../asserts/yt.jpg"
import Manager3 from "../asserts/gallery2.jpg"

function Folder(){
    return(
        <div className="founders">
            {/* <h1>Managers</h1>
            <p>SOAP is a messaging protocol for exchanging information</p> */}
            <div className="foldercard">
                <FolderData
                className = "text"
                image ={Manager1}
                heading = "MANUFACTURING"
                text = "Mukwano’s core strengths manifest in the production of plastics, packaged drinking water, soaps, powder detergents, liquid detergents, edible oils, and baking fats and proteins for animal feeds."
                />
                <FolderData
                image ={Manager2}
                heading = "AGRICULTURE"
                text = "Our agricultural operations cover over 30 districts with an emphasis on the production of oilseed crops mainly sunflower, soya, and maize grain in partnership with over 90,000 rural smallholder farmers. These have had a tremendous impact on improved community livelihoods."
                />
                <FolderData
                image ={Manager3}
                heading = "SUPPLY CHAIN"
                text = "Our extensive distribution network with a fleet of 200 heavy, medium, and light trucks alongside smaller commuter delivery pickups and vans enables us to avail our entire range of products in good condition to consumers at their designated destinations within the delivery times agreed."
                />
            </div>
        </div>
    )
}
export default Folder;