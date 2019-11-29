import React, {useState, useEffect} from 'react';
import './bootstrap.min.css'

import Header from './components/Header'
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


const App = () => {

  const [citas, setCitas] = useState([]);
  
  // Cuando la aplicacion se carga
  useEffect(() => {
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      setCitas(JSON.parse(citasLS));
    }
  }, [])
  
  //Cuando eliminamos o agregamos una cita
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  })


  const crearNuevaCita = (datos) => {
    //copiar el state actual
    const copiaCitas = [...citas, datos]

    // agregar el nuevo state
    setCitas(copiaCitas);
  }

  // elimina las citas del state
  const eliminarCita = (id) => {
    // tomar una copia del state
    const citasActuales = [...citas]
    const copiaCitas = citasActuales.filter(cita =>  cita.id !== id)  
     
    setCitas(copiaCitas);
  }

  return (

    <div className="container">
      <Header 
        titulo="Administrador de Pacientes Veterinaria"
      />
      <div className="row">
					<div className="col-7 mx-auto">
						<NuevaCita 
							crearNuevaCita={crearNuevaCita}
						/>
					</div>
					<div className="mt-5 col-5 mx-auto">
						<ListaCitas 
							citas ={citas}
							eliminarCita = {eliminarCita}
						/>
					</div>
      </div>
    </div>
  );
}

export default App;
