import "./testmorialStlye.css";
import Manager1 from "../asserts/images.jpg";
import Manager2 from "../asserts/yt.jpg";
import Manager3 from "../asserts/gallery2.jpg";

function Testmoralial(){
    return(
        <div className="T-contanier">
            <h2 id="h2">Testimonials</h2>
            <div className="min-container">
                <div className="card">
                    <img src={Manager1} alt="Manager 1"/>
                    <h3>Name</h3>
                    <p>descriptions</p>
                </div>
                <div className="card">
                <img src={Manager2} alt="Manager 1"/>
                    <h3>Name</h3>
                    <p>descriptions</p>
                </div>
                <div className="card">
                <img src={Manager2} alt="Manager 1"/>
                    <h3>Name</h3>
                    <p>descriptions</p>
                </div>
                <div className="card">
                <img src={Manager3} alt="Manager 1"/>
                    <h3>Name</h3>
                    <p>descriptions</p>
                </div>
            </div>
        </div>
    )

}
export default Testmoralial;