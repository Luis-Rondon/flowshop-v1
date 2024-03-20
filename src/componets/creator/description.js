import React from "react";

const Description = () => {
    return(
        <>
        
        <div className="description-container">
            <span className="description-span">Descripcion de la publicacion</span>
        </div>

        <div className="input-container-description">
            <textarea className="input-description" type="text" placeholder="Descripcion"></textarea>
        </div>

    </>
    )
}

export default Description