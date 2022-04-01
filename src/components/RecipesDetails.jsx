import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RecipesDetails({ withVideo, id, page }) {
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();
  return (
    <div>
      <img data-testid="recipe-photo" src="" alt="" />
      <h1 data-testid="recipe-title">title</h1>
      <button type="button" data-testid="share-btn">
        compartilhar
      </button>
      <div>
        <button
          type="button"
          onClick={ () => {
            setFavorite(!favorite);
          } }
        >
          {!favorite ? (
            <img
              data-testid="favorite-btn"
              alt="whiteHeartIcon"
              src={ whiteHeartIcon }
            />
          ) : (
            <img
              data-testid="favorite-btn"
              alt="blackHeartIcon"
              src={ blackHeartIcon }
            />
          )}
        </button>
      </div>
      <p data-testid="recipe-category">text</p>
      <p data-testid={ `${index}-ingredient-name-and-measure` }> </p>
      <p data-testid="instructions">instructions</p>
      {withVideo && <p data-testid="video">video</p>}
      <p data-testid="0-recomendation-card">recomendation</p>
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => { history.push(`/${page}/${id}/in-progress`); } }
      >
        Start Recipe
      </button>
    </div>
  );
}

RecipesDetails.propTypes = {
  withVideo: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
