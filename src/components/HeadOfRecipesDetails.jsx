import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  setFavoriteRecipes,
  getFavoriteRecipes,
  deleteFavoriteRecipe,
} from '../service/localStorage';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';

export default function HeadOfRecipesDetails({
  thumb,
  title,
  category,
  id,
  type,
  nationality,
  drinkCategory,
}) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const storageFavorites = getFavoriteRecipes();
    if (storageFavorites.some((item) => item.id === id)) {
      setFavorite(true);
    }
  }, []);

  const handleFavoriteButton = () => {
    if (!favorite) {
      const recipe = {
        id,
        type: type.substr(0, type.length - 1),
        nationality,
        category: type === 'foods' ? category : drinkCategory,
        alcoholicOrNot: type === 'drinks' ? category : '',
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

      <ShareButton type={ type } id={ id } datatest="share-btn" />

      <FavoriteButton
        favorite={ favorite }
        handleFavoriteButton={ handleFavoriteButton }
        datatest="favorite-btn"
      />

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
