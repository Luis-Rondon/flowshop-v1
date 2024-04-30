import React, { useState,} from "react";
import ConfigIcon from './icons-sidebar/configIcon'
import LogoutIcon from './icons-sidebar/logoutIcon'
import TutorialIcon from './icons-sidebar/tutorialIcon'
import HoraIcon from "./icons-sidebar/horaIcon";
import Logo from "./sidebar/Logo.jsx";
import Slogan from "./sidebar/Slogan.jsx";
import Navigation from "./sidebar/Navigation.jsx";
const Sidebar = () => {
    return (
    <>
        <div className="navigation">
            <Logo/>
            <Slogan/>
            <Navigation/>
            
            

            <div className="hora-card">
                <div className="hora-container">
                    <HoraIcon/>
                    <span className="time">17:30</span>
                    <span className="date">04/15/2024</span>
                </div>
            </div>

            <div className="bottom-items">
                <div id="tutorial">
                    <TutorialIcon/>
                    <span>Tutoriales</span>
                </div>

                <div id="config">
                    <ConfigIcon/>
                    <span>Configuración</span>
                </div>

                <div id="logout">
                    <LogoutIcon/>
                    <span>Cerrar Sesion</span>
                </div>

            </div>
        </div>
        

    </>
    )
}

export default Sidebar

