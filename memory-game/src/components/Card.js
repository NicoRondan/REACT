import React from 'react';
import './../css/Card.css';
import ReactCardFlip from 'react-card-flip';

const Card = ({icon, seleccionarCarta, estaSiendoComparada, fueAdivinada}) => {
    return (
        <div className="carta" onClick={seleccionarCarta}>
            <ReactCardFlip
              isFlipped={estaSiendoComparada || fueAdivinada }
            >
                <div className="portada" key="front"></div>
                <div className="contenido" key="back">
                    <i className={`fa ${icon} fa-5x`}></i>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default Card;
