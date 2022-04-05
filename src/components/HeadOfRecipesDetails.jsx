import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  setFavoriteRecipes,
  getFavoriteRecipes,
  deleteFavoriteRecipe,
} from '../service/localStorage';

export default function HeadOfRecipesDetails({
  thumb,
  title,
  category,
  id,
  type,
  nationality,
  drinkCategory,
}) {
  const history = useHistory();
  const [favorite, setFavorite] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const storageFavorites = getFavoriteRecipes();
    if (storageFavorites.some((item) => item.id === id)) {
      setFavorite(true);
    }
  }, []);

  const handleShareButton = () => {
    clipboardCopy(`http://localhost:3000${history.location.pathname}`);
    setIsCopied(true);
  };

  const handleFavoriteButton = () => {
    if (!favorite) {
      const recipe = {
        id,
        type,
        nationality,
        category: type === 'food' ? category : drinkCategory,
        alcoholicOrNot: type === 'drink' ? category : '',
        name: title,
        image: thumb,
      };
      setFavoriteRecipes(recipe);
    } else {
      deleteFavoriteRecipe(id);
    }
    setFavorite(!favorite);
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ thumb }
        alt=""
      />
      <h1 data-testid="recipe-title">{title}</h1>

      <div>
        <button
          type="button"
          onClick={ handleShareButton }
        >
          <img data-testid="share-btn" alt="shareIcon" src={ shareIcon } />
        </button>
        {isCopied && <p>Link copied!</p>}
      </div>

      <div>
        <button
          type="button"
          onClick={ handleFavoriteButton }
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
