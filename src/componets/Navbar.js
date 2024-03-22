import React from "react";
import FlowshopLogo from "./logo";
import '../app.css';
import Aspect from "../componets/icons-navbar/Aspect";
import Lang from "../componets/icons-navbar/Lang";
import Messages from "../componets/icons-navbar/Messages";
import Notify from "../componets/icons-navbar/Notify";


const Navbar = () => {
    return(
        <>
            <nav className="header">
            <div className="active-area">
                <div className="logo">
                    <FlowshopLogo/>
                </div>

                <span className="slogan">
                    Apunta a las estrellas, y llegarás a las montañas.
                </span>

                <div className="header-icons">

                    <div className="aspect">
                        <Aspect/>
                    </div>

                    <div className="lang">
                        <Lang/>
                    </div>

                    <div className="messages">
                        <Messages/>
                    </div>

                    <div className="notify">
                        <Notify/>
                    </div>
                    
                </div>

                <div className="profile">

                    <span className="username">Sioswel Medina</span>
                    <div className="profile-image"> </div>

                </div>
            </div>
            </nav>
        </>
    )
};




export default Navbar;