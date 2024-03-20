import React from "react";
import FlowshopLogo from "./logo";
import '../App.css';
import Aspect from "../componets/icons-navbar/Aspect";
import Lang from "../componets/icons-navbar/Lang";
import Messages from "../componets/icons-navbar/Messages";
import Notify from "../componets/icons-navbar/Notify";


const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="logo">
            <FlowshopLogo/>
            </div>

        <p className="text-nav">
            Apunta a las estrellas y llegaras a las montanas
        </p>

        <div className="icons-navbar">
            <div className="Aspecthover">
            <Aspect/>
            </div>

            <div className="Aspecthover">
            <Lang/>
            </div>

            <div className="messagehover">
            <Messages/>
            </div>

            <div className="Aspecthover">
            <Notify/>
            </div>
            
        </div>

        <div className="profile">
            <div className="profile-image">
                
            </div>
            
            <h2 className="profile-name">Sioswel Vegas</h2>

        </div>
        </nav>
    )
};




export default Navbar;