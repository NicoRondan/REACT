import React from 'react';

const Ingredients = ({ingredients}) => {
    return ( 
        <ul className="collection">
        {ingredients.map(ingredient => (
        <li className="collection-item">{ingredient.text}</li>
        ))}
    </ul>
     );
}
 
export default Ingredients;