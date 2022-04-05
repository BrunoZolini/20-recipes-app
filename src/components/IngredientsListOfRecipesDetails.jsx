import React from 'react';
import PropTypes, { string } from 'prop-types';

export default function IngredientsListOfRecipesDetails({ ingredientMeasure }) {
  return (
    <div>
      {ingredientMeasure.map((item, index) => (
        <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
          {item}
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
