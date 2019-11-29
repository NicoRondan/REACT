import React,{useState} from 'react';

import Error from './Error';

function Formulario ({getCrypto}) {

    const [error,setError] = useState (false);
    const [coin, setCoin] = useState ('');
    const [crypto, setCrypto] = useState ('');
   
    // Validar que el usuario llene ambos campos
    const cotizarMoneda = e => {
        e.preventDefault();
        
        if (coin === '' || crypto === ''){
            setError (true);
            return;
        }

        setError(false)

        getCrypto(crypto,coin)
       
    }

    // Mostrar el error en caso de que exista
    const componente = (error) ?  <Error mensaje="Ambos campos son obligatorios" /> : null; 
    
    return (
        <form onSubmit = {cotizarMoneda}>
            {componente}
            <div className="row">
                <label>Elige tu Moneda</label>
                <select className="u-full-width" onChange = {e => setCoin(e.target.value)} >
                    <option value="">- Elige tu Moneda -</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            
            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select className="u-full-width" onChange = {e => setCrypto(e.target.value)}>
                    <option value="">- Elige tu Criptomoneda -</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="EOS">EOS</option>
                    <option value="XRP">XRP</option>
                </select>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Calcular" />

        </form>
    )
}
export default Formulario;