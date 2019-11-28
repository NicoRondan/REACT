import React, {useEffect, useState, Fragment} from 'react';
import Form from './components/Form';
import ListRecipe from './components/ListRecipe';
import Preloader from './components/Preloader';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(true);
  const [query, setQuery] = useState('chicken');

  const APP_ID = 'f403eda2';
  const APP_KEY = '4b7f03760604110384e9e4f8fd099bbc';


  useEffect( () => {
    getRecipes();
  }, [query]);

  //Se obtienen datos de la api
  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    setError(false);
    console.log(data.hits);
  }



  return(
      <Fragment>
      <div className="container white contenedor-noticias">
        <Form
        setQuery={setQuery}
        />
      </div>
        {(error) ? <Preloader />
        : <ListRecipe recipes={recipes} />
        }
        
      </Fragment>
  );
};

export default App;