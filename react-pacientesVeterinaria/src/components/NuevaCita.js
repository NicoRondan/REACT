import React, { useState } from 'react';
import uuid from "uuid";
import Formulario from './Formulario';

const CITA_INICIAL = {
    
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
};


const NuevaCita = ({crearNuevaCita}) => {
    const [error, setError] = useState(false);
    const [values, setValues] = useState(CITA_INICIAL);
    
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
        setError(false);
    }

    // Cuando el usuario envia el formulario
    const handleSubmit = e => {
        e.preventDefault();

        // extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas} = values;
        // Validar que todos los campos esten llenos
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' ||  sintomas === ''){
            setError(true);

            // detener la ejecución
            return;
        }
        // generar objeto con los datos
        const nuevaCita = {...values};
        nuevaCita.id = uuid();

        crearNuevaCita(nuevaCita);

        // Colocar en el state el stateInicial
        setValues(CITA_INICIAL);
        setError(false);
    }
        
    return (
        <div className="card mt-5 py-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">
                    Rellena el formulario para obtener una nueva cita.
                </h2>
                { (error) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                <Formulario 
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default NuevaCita;