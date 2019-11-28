import React, { useState } from 'react'
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';

function App() {
    const [movies, setMovies] = useState([{
        name: 'Harry Potter',
        price: '$10',
        id: 23124
    },
    {
        name: 'Game of Thrones',
        price: '$10',
        id: 256124
    },
    {
        name: 'Inception',
        price: '$10',
        id: 23524
    }
    ]);

    return ( 
        <div className = "App" >
            <Nav />
            <MovieList
            movies={movies}
            />
        </div>
    );
}

export default App;