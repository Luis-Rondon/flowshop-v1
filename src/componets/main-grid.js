import React from "react";
import Title from "./creator/title";
import Helpicon from "./icons-creator/help-icon"
import Networks from "./creator/networks";
import Description from "./creator/description";
import MyEditor from './creator/MyEditor'
import Cta from "./creator/cta";
import Creatordate from "./creator/creator-date";

const Maingrid = () => {
    return(
        <>
        <section className="container-module">
            <div id="box-1" className="Titulo">   
                <Helpicon/>
                <Title/>
            </div>

            <div id="box-2" className="redes">
                <Networks/>
                <Helpicon/>
            </div>

            <div id="box-3" className="descripcion">
                <Description/>
                <Helpicon/>
            </div>

            <div id="box-4" className="date">
                <Creatordate/>
                <Helpicon/>
            </div>

            <div id="box-5" className="content-main">
                <MyEditor/>
            </div>

            <div id="box-6" className="cta"> 
                <Cta/> 
            </div>
        </section>
        </>
    )
}

export default Maingrid