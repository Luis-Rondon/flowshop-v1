import React, { useState } from "react";
import FlowshopLogo from "./logo";
import '../app.css';
import Aspect from "../componets/icons-navbar/Aspect";
import Lang from "../componets/icons-navbar/Lang";
import Messages from "../componets/icons-navbar/Messages";
import Notificationpopover from "./creator/Notificationpopover";
import Notify from "../componets/icons-navbar/Notify";


const Navbar = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopover = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return(
        <>
            <nav className="header-container">
                    <div className="logo">
                        <FlowshopLogo/>
                    </div>

                    <div className="container-navbar-right">
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

                            
                            <div className="notify" onClick={togglePopover}>
                                <Notify/>
                                {isPopoverOpen && <Notificationpopover />}
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