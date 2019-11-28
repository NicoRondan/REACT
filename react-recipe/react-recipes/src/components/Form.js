import React, {useState} from 'react';

const Form = ({setQuery}) => {

    const [search, setSearch] = useState('');

    //Se actualiza el state de la busqueda
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (  
        <div className="buscador row">
        <div className="col s12 m8 offset-2">
      <form onSubmit={getSearch}>
      <div className="form-group mb-2">
        <legend>Search recipes here:</legend>
        <div className="input-field col s12 m8" 
        type="text" 
        value={search}
        onChange={updateSearch} />
        <button className="btn btn-info" type="submit">
          Search
        </button>
      </div>
      </form>
      </div>
      </div> 
    );
}
 
export default Form;