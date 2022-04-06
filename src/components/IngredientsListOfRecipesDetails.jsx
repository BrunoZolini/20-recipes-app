import React, { useContext, useEffect } from 'react';
import PropTypes, { string } from 'prop-types';
import {
  deleteIngredientFromList,
  getInProgressRecipes,
  addIngredientOnList,
  setInProgressRecipes,
} from '../service/localStorage';
import '../styles/IngredientsListOfRecipesDetails.css';
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
    if (currentIngredients) {
      setIngredientsChecked(currentIngredients[id]);
    } else {
      setInProgressRecipes(id, searchType, ingredientMeasure);
      const currIngredients = getInProgressRecipes(searchType);
      if (currIngredients) {
        setIngredientsChecked(currentIngredients[id]);
      }
    }
  };

  useEffect(() => {
    // setInProgressRecipes(id, searchType, ingredientMeasure);
    updateChecked();
  }, []);

  const addClassName = ({ target }) => {
    const label = target.parentNode;
    const text = label.innerText;
    if (target.checked) {
      label.className = 'ingredientCheckbox';
      deleteIngredientFromList(searchType, id, text);
      updateChecked();
    } else {
      label.className = '';
      const list = ingredientMeasure.filter(
        (item) => ingredientsChecked.includes(item) || item.includes(text),
      );
      addIngredientOnList(searchType, id, list);
      updateChecked();
    }
  };

  return (
    <div>
      {ingredientMeasure.map((item, index) => (inProgress ? (
        <label
          key={ index }
          htmlFor={ `${index}` }
          data-testid={ `${index}-ingredient-step` }
          className={
            ingredientsChecked
              && !ingredientsChecked.some((ingredient) => ingredient.includes(item))
              ? 'ingredientCheckbox'
              : ''
          }
        >
          <input
            id={ `${index}` }
            type="checkbox"
            onChange={ addClassName }
            defaultChecked={
              ingredientsChecked
                && !ingredientsChecked.some((ingredient) => ingredient.includes(item))
            }
          />
          {item}
        </label>
      ) : (
        <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
          {item}
        </p>
      )))}
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
