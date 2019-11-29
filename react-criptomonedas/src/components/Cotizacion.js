import React from 'react';

const Cotizacion = ({result}) => {

    return ( 
        <div className="resultado">
            <h2>Resultado </h2>
    <p className="precio">El precio es <span>{result.PRICE}</span> </p>

            <p>Precio más alto del día: <span>{result.HIGHDAY}</span> </p>
            <p>Precio más bajo del día: <span>{result.LOWDAY}</span> </p>
            <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR} %</span> </p>
            <p>Última Actualización: <span>{result.LASTUPDATE}</span> </p>
        </div>
     );
}
 
export default Cotizacion;