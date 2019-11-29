import React, {useState, useEffect} from 'react';
import image from './cryptomonedas.png';

import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const App = () => {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    getCrypto();
  }, []);


  const getCrypto = async (crypto='BTC', coin='USD') => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

    setLoading(true);

    const response = await fetch (url);
    const jsonData = await response.json();
    console.log(jsonData);
    setLoading(false);

    const result = jsonData.DISPLAY[crypto][coin]

    setResult(result);
  }

  return (
      <div className="container">
          <div className="row">
              <div className="one-half column">
                  <img src={image} alt="imagen criptomonedas" className="logotipo" />
              </div>
              <div className="one-half column">
                  <h1>Cotiza Criptomonedas al Instante</h1>
                  {(loading) ? <Spinner /> : <Cotizacion result={result} />}  
             </div>
          </div>
          <Formulario getCrypto={getCrypto}/>
          
      </div>
    );
}
  
export default App;
