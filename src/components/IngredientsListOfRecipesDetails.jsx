import React, { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { deleteIngredientFromList, getInProgressRecipes } from '../service/localStorage';
import '../styles/IngredientsListOfRecipesDetails.css';

export default function IngredientsListOfRecipesDetails(
  { ingredientMeasure, inProgress, searchType, id },
) {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    const currentIngredients = getInProgressRecipes(searchType);
    if (currentIngredients) {
      setIngredientsList(currentIngredients[id]);
    }
  }, []);
  const addClassName = ({ target }) => {
    const label = target.parentNode;
    const text = label.innerText;
    console.log(text);
    if (target.checked) {
      label.className = 'ingredientCheckbox';
      deleteIngredientFromList(searchType, id, text);
    } else {
      label.className = '';
    }
  };

  return (
    <div>
      {ingredientMeasure.map((item, index) => (
        inProgress ? (
          <label
            key={ index }
            htmlFor={ `${index}` }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              id={ `${index}` }
              type="checkbox"
              onChange={ addClassName }
              checked={ ingredientsList
                && !ingredientsList.some((igredient) => igredient.includes(item)) }
            />
            {item}
          </label>)
          : (
            <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {item}
            </p>
          )
      ))}
    </div>
  );
}

IngredientsListOfRecipesDetails.propTypes = {
  recipe: PropTypes.object,
  ingredient: PropTypes.arrayOf(string),
  measure: PropTypes.arrayOf(string),
  inProgress: PropTypes.bool,
  searchType: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
