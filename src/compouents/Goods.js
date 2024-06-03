import "./GoodsStyle.css"
import GoodsData from "./GoodsData"
import Manager1 from "../asserts/images.jpg"
import Manager2 from "../asserts/yt.jpg"
import Manager3 from "../asserts/gallery2.jpg"


function Goods (){
    return(
        <div className="founders">
        <h1>Products</h1>
        {/* <p>This is the display of our products</p> */}
        <div className="foldercard">
            <GoodsData
            image ={Manager1}
            heading = "independent"
            text = "SOAP is a messaging protocol for exchanging information between two computers based on XML over the internet. SOAP messages are purely written in XML which is why they are platform and language independent. A SOAP message contains: An Envelope that indicates the start and end of the message"
            />
            <GoodsData
            image ={Manager2}
            heading = "independent"
            text = "SOAP is a messaging protocol for exchanging information between two computers based on XML over the internet. SOAP messages are purely written in XML which is why they are platform and language independent. A SOAP message contains: An Envelope that indicates the start and end of the message"
            />
            <GoodsData
            image ={Manager3}
            heading = "independent"
            text = "SOAP is a messaging protocol for exchanging information between two computers based on XML over the internet. SOAP messages are purely written in XML which is why they are platform and language independent. A SOAP message contains: An Envelope that indicates the start and end of the message"
            />
            <GoodsData
            image ={Manager3}
            heading = "independent"
            text = "SOAP is a messaging protocol for exchanging information between two computers based on XML over the internet. SOAP messages are purely written in XML which is why they are platform and language independent. A SOAP message contains: An Envelope that indicates the start and end of the message"
            />
            <GoodsData
            image ={Manager3}
            heading = "independent"
            text = "SOAP is a messaging protocol for exchanging information between two computers based on XML over the internet. SOAP messages are purely written in XML which is why they are platform and language independent. A SOAP message contains: An Envelope that indicates the start and end of the message"
            />
            <GoodsData
            image ={Manager3}
            heading = "independent"
            text = "SOAP is a messaging protocol for exchanging information between two computers based on XML over the internet. SOAP messages are purely written in XML which is why they are platform and language independent. A SOAP message contains: An Envelope that indicates the start and end of the message"
            />
        </div>
    </div>
    )
}
export default Goods