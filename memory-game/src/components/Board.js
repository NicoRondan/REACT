import React from 'react';
import Card from './Card';

import './../css/Board.css';

const Board = ({baraja, parejaSeleccionada, seleccionarCarta}) => {

    return (
        <div className="tablero">
            {
                baraja.map((carta, index) => {
                    const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1;
                    return  <Card
                    key={index} 
                    icon={carta.icon}
                    estaSiendoComparada={estaSiendoComparada}
                    seleccionarCarta={() => seleccionarCarta(carta)}
                    fueAdivinada={carta.fueAdivinada}
                    />
                   
            
            })
            }
        </div>
    );
}

export default Board;
