import React, { Component } from "react";
import TimePicker from './date-time/datesfechas';
import './creator-componets.css';
import TooltipButtonDate from "../icons-creator/tooltip-button-date";
const Creatordate = () => {
    return(
    <>

    <div className="tooltip-button-container">
                    <TooltipButtonDate />
                </div>
    
    <div className="title-creator">
        <span>Publicación programada</span>
    </div>

    <div className="fecha-hora">
        <TimePicker/>

    </div>
        
    </>
    )
}

export default Creatordate