import React, { Component } from "react";
import TimePicker from './date-time/datesfechas';
import './creator-componets.css';
const Creatordate = () => {
    return(
    <>
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