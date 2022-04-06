import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setInProgressRecipes, getInProgressRecipes } from '../service/localStorage';
import context from '../context/myContext';

export default function ButtonOfRecipesDetails({
  page,
  id,
  searchType,
  ingredientMeasure,
  finishRecipe,
}) {
  const history = useHistory();
  const [buttonText, setButtonText] = useState('Start Recipe');
  const { ingredientsChecked } = useContext(context);

  useEffect(() => {
    const inProgress = getInProgressRecipes(searchType);
    const inProgressIDs = Object.keys(inProgress);
    if (inProgressIDs.some((item) => item.includes(id))) {
      setButtonText('Continue Recipe');
    }
  }, []);

  const handleClickButton = () => {
    history.push(`/${page}/${id}/in-progress`);
    setInProgressRecipes(id, searchType, ingredientMeasure);
  };

  const handleClickButtonFinish = () => {
    history.push('/done-recipes');
  };

  return (
    <div>
      { finishRecipe ? (
        <button
          type="button"
          data-testid="finish-recipe-btn"
          className="startRecipe"
          onClick={ handleClickButtonFinish }
          disabled={ ingredientsChecked ? ingredientsChecked.length : true }
        >
          Finish Recipe
        </button>
      ) : (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="startRecipe"
          onClick={ handleClickButton }
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

ButtonOfRecipesDetails.propTypes = {
  page: PropTypes.string,
  id: PropTypes.string,
  finishRecipe: PropTypes.bool,
}.isRequired;
