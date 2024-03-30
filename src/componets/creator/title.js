import React, { useState } from 'react';
import TooltipButtonTitle from '../icons-creator/tooltip-button-title';
import './creator-componets.css';

//Funcion que hace que cuando el estado este en true, se quede el input con el focoy desaparezca el placeholder
const Title = () => {
const [inputFocus, setInputFocus] = useState(false);

return(
    <>
        <div className="tooltip-button-container">
                    <TooltipButtonTitle />
                </div>
    <div className="title-container">
                
    <span className="title-span">Título de tu publicación</span>
    </div>

    <div className="input-container">
    <input 
    className="input-title" 
    type="text" 
    placeholder={inputFocus ? '' : 'Título de tu Proyecto'}
    onFocus={() => setInputFocus(true)}
    onBlur={() => setInputFocus(false)}
    />
    </div>
    </>
)
}

export default Title;
