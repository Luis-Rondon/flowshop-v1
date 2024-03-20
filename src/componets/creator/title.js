import React from "react";
import './creator-componets.css';
const Title = () => {

    return(
    <>
        
        <div className="title-container">
            <span className="title-span">Título de tu publicación</span>
        </div>

        <div className="input-container">
            <input className="input-title" type="text" placeholder="Título de tu Proyecto"></input>
        </div>

    </>
    )
}



export default Title

