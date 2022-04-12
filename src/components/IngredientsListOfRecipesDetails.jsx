import React, { useContext, useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import {
  deleteIngredientFromList,
  getInProgressRecipes,
  addIngredientOnList,
  setInProgressRecipes,
} from '../service/localStorage';
import '../styles/RecipesDetails.css';
import context from '../context/myContext';

export default function IngredientsListOfRecipesDetails({
  ingredientMeasure,
  inProgress,
  searchType,
  id,
}) {
  const { ingredientsChecked, setIngredientsChecked } = useContext(context);

  const updateChecked = () => {
    const currentIngredients = getInProgressRecipes(searchType);
    if (!currentIngredients) {
      setInProgressRecipes(id, searchType, ingredientMeasure);
    }
    setIngredientsChecked(getInProgressRecipes(searchType)[id]);
  };

  useEffect(() => {
    updateChecked();
  }, []);

  const addClassName = ({ target }) => {
    const label = target.parentNode;
    const text = label.innerText;
    if (target.checked) {
      label.className = 'ingredientCheckbox details-ingredients-item';
      deleteIngredientFromList(searchType, id, text);
      updateChecked();
    } else {
      label.className = 'details-ingredients-item';
      const list = ingredientMeasure.filter(
        (item) => ingredientsChecked.includes(item) || item.includes(text),
      );
      addIngredientOnList(searchType, id, list);
      updateChecked();
    }
  };

  return (
    <div>
      <h3 className="subtitle">Ingredients</h3>
      <div className="details-ingredients-section">

        {ingredientMeasure.map((item, index) => (inProgress ? (
          <label
            key={ index }
            htmlFor={ `${index}` }
            data-testid={ `${index}-ingredient-step` }
            className={
              ingredientsChecked
              && !ingredientsChecked.some((ingredient) => ingredient.includes(item))
                ? 'ingredientCheckbox details-ingredients-item'
                : 'details-ingredients-item'
            }
          >
            <input
              className="details-input-checkbox"
              id={ `${index}` }
              type="checkbox"
              onChange={ addClassName }
              checked={
                ingredientsChecked
                && !ingredientsChecked.some((ingredient) => ingredient.includes(item))
              }
            />
            {item}
          </label>
        ) : (
          <p
            className="details-ingredients-item"
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {item}
          </p>
        )))}
      </div>

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
