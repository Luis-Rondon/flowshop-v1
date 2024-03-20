import React from "react";
import Sidebar from "./sidebar";
import Title from "./creator/title";
import Helpicon from "./icons-creator/help-icon"
import Networks from "./creator/networks";
import Description from "./creator/description";
import MyEditor from './creator/MyEditor'
import Cta from "./creator/cta";

const Maingrid = () => {
    return(
        <>
            <div id="card1" className="Titulo">   
                <Helpicon/>
                <Title/>
                </div>

            <div id="card1" className="redes">
                <Networks/>
                <Helpicon/>

            </div>
            <div id="card1" className="descripcion">
                <Description/>
            </div>
            <div id="card1" className="date">Fecha programada</div>
            <div id="card1" className="content-main"><MyEditor/></div>
            <div id="card1" className="cta"> <Cta/> </div>
        </>
    )
}

export default Maingrid