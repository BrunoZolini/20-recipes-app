import React from 'react';
import PropTypes, { string } from 'prop-types';
import '../styles/IngredientsListOfRecipesDetails.css';

export default function IngredientsListOfRecipesDetails(
  { ingredientMeasure, inProgress },
) {
  // const [className, setClassName] = useState('');

  const addClassName = ({ target }) => {
    const label = target.parentNode;
    if (target.checked) {
      label.className = 'ingredientCheckbox';
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
}.isRequired;
