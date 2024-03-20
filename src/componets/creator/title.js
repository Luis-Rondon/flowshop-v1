import React from "react";
import './creator-componets.css';
const Title = () => {

    return(
    <>
        
        <div className="title-container">
            <span className="title-span">Titulo de publicacion</span>
        </div>

        <div className="input-container">
            <input className="input-title" type="text" placeholder="Titulo del Proyecto"></input>
        </div>

    </>
    )
}



export default Title

