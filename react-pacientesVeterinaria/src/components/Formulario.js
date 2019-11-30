import React from 'react';

const Formulario = ({handleSubmit, handleChange, values}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Nombre Mascota
                </label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Nombre mascota"
                        name="mascota"
                        onChange={handleChange}
                        value={values.mascota}/>
                </div>
            </div>

            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Nombre dueño
                </label>
                <div className="col-sm-8 col-lg-10">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Nombre dueño mascota"
                        name="propietario"
                        onChange={handleChange}
                        value={values.propietario}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Fecha
                </label>
                <div className="col-sm-8 col-lg-4">
                    <input 
                        type="date" 
                        className="form-control"
                        name="fecha"
                        onChange={handleChange}
                        value={values.fecha}/>
                </div>

                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Hora
                </label>
                <div className="col-sm-8 col-lg-4">
                    <input 
                        type="time" 
                        className="form-control"
                        name="hora"
                        onChange={handleChange}
                        value={values.hora}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-4 col-lg-2 col-form-label">
                    Sintomas
                </label>
                <div className="col-sm-8 col-lg-10">
                    <textarea
                        className="form-control"
                        name="sintomas"
                        placeholder="Describe los sintomas"
                        onChange={handleChange}
                        value={values.sintomas}
                    ></textarea>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-12 text-right">
                    <input type="submit" value="Agregar nueva cita" className="py-2 mt-2 btn btn-success"/>
                </div>
            </div>
        </form>
    );
}

export default Formulario;
