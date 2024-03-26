import React, { Component } from "react";
import DateTimePicker from "./date-time/DatePicker";


const Creatordate = () => {
    return(
    <>
    <div className="title-creator">
        <span>Publicación programada</span>
    </div>

    <div className="fecha-hora">
        
        <DateTimePicker label="Publicación programada" />

    </div>
        

    </>
    )
}

export default Creatordate