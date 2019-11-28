import React from 'react';
import Recipe from './Recipe';


const ListRecipe = ({recipes}) => {
    return (
        <div className="row">  
        {recipes.map(recipe => (
            <Recipe 
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            />
          ))}
        </div>
    );
}
 
export default ListRecipe;