import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function IngredientsListOfRecipesDetails({ recipe, ingredient, measure }) {
  return (
    <div>
      {ingredient.filter((value) => (recipe[value]))
        .map((item, index) => (
          <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${recipe[item]} - ${recipe[measure[index]] !== null
              ? recipe[measure[index]] : ''}`}
          </p>
        ))}
    </div>
  );
}

IngredientsListOfRecipesDetails.propTypes = {
  recipe: PropTypes.object,
  ingredient: PropTypes.arrayOf(string),
  measure: PropTypes.arrayOf(string),
}.isRequired;
