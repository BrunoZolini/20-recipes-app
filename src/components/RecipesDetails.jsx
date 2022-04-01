import React, { useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RecipesDetails({ withVideo }) {
  const [favorite, setFavorite] = useState(false);
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
      <p data-testid="0-ingredient-name-and-measure"> </p>
      <p data-testid="instructions">instructions</p>
      {withVideo && <p data-testid="video">video</p>}
      <p data-testid="0-recomendation-card">recomendation</p>
      <button type="button" data-testid="start-recipe-btn">
        iniciar receita
      </button>
    </div>
  );
}

RecipesDetails.propTypes = {
  withVideo: PropTypes.bool.isRequired,
};
