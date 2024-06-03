import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = {clicked : false};
    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">KWOZA</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((items, index) => {
                        return (
                            <li key={index}>
                                <Link className={items.cName} to={items.url}>
                                    {items.title}
                                </Link>
                            </li>
                        )
                    })}
                    

                    {/* <button>SignUp</button> */}
                </ul>
                
            </nav>
        )
    }
}

export default Navbar;
