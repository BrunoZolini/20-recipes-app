import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function HeadOfRecipesDetails({ thumb, title, category }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ thumb }
        alt=""
      />
      <h1 data-testid="recipe-title">{title}</h1>
      <button type="button">
        <img data-testid="share-btn" alt="shareIcon" src={ shareIcon } />
      </button>
      <div>
        <button
          type="button"
          onClick={ () => {
            setFavorite(!favorite);
          } }
        >
          <img
            data-testid="favorite-btn"
            alt="favorite-btn"
            src={ favorite ? blackHeartIcon : whiteHeartIcon }
          />
        </button>
      </div>
      <p data-testid="recipe-category">
        { category }
      </p>

    </div>
  );
}

HeadOfRecipesDetails.propTypes = {
  thumb: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;
