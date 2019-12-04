import React, {useState} from 'react';
import Header from './components/Header';
import Board from './components/Board';
import cardConstructor from './utils/cardConstructor';
import './css/App.css';


function App() {
  //Estado inicial
  const [baraja, setBaraja] = useState(cardConstructor());
  const [parejaSeleccionada, setParejaSeleccionada] = useState([]);
  const [estaComparado, setEstacomparado] = useState(false);
  const [numeroDeIntentos, setNumeroDeIntentos] = useState(0);
  
  const seleccionarCarta = (carta) => {
    if( estaComparado || parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada) {
        return;
      }

    const parejaElegida = [...parejaSeleccionada, carta];
    
    setParejaSeleccionada(parejaElegida);

    if (parejaElegida.length === 2) {
      compararParejas(parejaElegida);
    }
  }

  const compararParejas = (parejaElegida) => {
    setEstacomparado(true);

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaElegida;
      let mazo = baraja;

      if (primeraCarta.icon === segundaCarta.icon) {
        mazo = mazo.map((carta) => {
          if (carta.icon !== primeraCarta.icon) {
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
      }

      verificarSiHayGanador(mazo);

      setParejaSeleccionada([]);
      setBaraja(mazo);
      setEstacomparado(false);
      setNumeroDeIntentos(numeroDeIntentos + 1);
    }, 1000)
  }

  const verificarSiHayGanador = (mazo) => {
    if ( mazo.filter((carta) => !carta.fueAdivinada).length === 0) {
      alert(`Ganaste en ${numeroDeIntentos} intentos!`);
      setNumeroDeIntentos(0);
    }
  }

  const resetearPartida = () => {
    setBaraja(cardConstructor());
  }

  return (
    <div className="App">
      <Header
      numeroDeIntentos={numeroDeIntentos}
      resetearPartida={() => resetearPartida()} />
      <Board 
      baraja={baraja}
      parejaSeleccionada={parejaSeleccionada}
      seleccionarCarta={(carta) => seleccionarCarta(carta)}
      />
    </div>
  );
}

export default App;
