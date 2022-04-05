import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setInProgressRecipes, getInProgressRecipes } from '../service/localStorage';

export default function ButtonOfRecipesDetails({
  page,
  id,
  searchType,
  ingredientMeasure,
}) {
  const history = useHistory();
  const [buttonText, setButtonText] = useState('Start Recipe');

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

  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="startRecipe"
        onClick={ handleClickButton }
      >
        {buttonText}
      </button>
    </div>
  );
}

ButtonOfRecipesDetails.propTypes = {
  page: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
