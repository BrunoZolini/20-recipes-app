import React from 'react';
import PropTypes from 'prop-types';

export default function RecipesDetails({ withVideo }) {
  return (
    <div>
      <img data-testid="recipe-photo" src="" alt="" />
      <h1 data-testid="recipe-title">title</h1>
      <button type="button" data-testid="share-btn">
        compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favorito
      </button>
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
