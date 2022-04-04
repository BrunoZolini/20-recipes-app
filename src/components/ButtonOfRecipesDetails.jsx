import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ButtonOfRecipesDetails({ page, id }) {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="startRecipe"
        onClick={ () => {
          history.push(`/${page}/${id}/in-progress`);
        } }
      >
        Start Recipe
      </button>
    </div>
  );
}

ButtonOfRecipesDetails.propTypes = {
  page: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
