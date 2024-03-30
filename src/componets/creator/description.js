import React from "react";
import TooltipButtonDescription from "../icons-creator/tooltip-button-description";

const Description = () => {
    return (
        <>
            <div className="description-container">
                <div className="tooltip-button-container">
                    <TooltipButtonDescription />
                </div>
                <span className="description-span">Descripción de la publicación</span>
                
            </div>

            <div className="input-container-description">
                <textarea
                    className="input-description"
                    placeholder="Descripción"
                    rows="4"
                ></textarea>
            </div>
        </>
    );
}

export default Description;
