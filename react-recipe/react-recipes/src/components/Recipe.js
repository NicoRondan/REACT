import React from 'react';
import Ingredients from './Ingredients';

const Recipe = ({title, image, calories, ingredients, url}) => {
    return ( 
        <div className="col s12 m7">
            <div className="card hoverable small card-small">
            <span className="card-title">{title}</span>
                <div className="card-image">
                    <img src={image} alt={title} />
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>Calories: {calories}</p>
                    <Ingredients ingredients={ingredients} />
                </div>
                <div className="card-action">
                <a href={url} target="_blank"  rel="noopener noreferrer" className= "waves-effect waves-light btn">View Recipe</a>
                </div>
            
            </div>
        </div>

     );
}
 

export default Recipe;