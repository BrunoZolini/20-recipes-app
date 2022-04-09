import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import context from '../context/myContext';
import ShareButton from './ShareButton';
import '../styles/RecipesCards.css';
import FavoriteButton from './FavoriteButton';
import { deleteFavoriteRecipe, getFavoriteRecipes } from '../service/localStorage';

export default function FilterRecipesCards({ isFavorite }) {
  const { filterRecipes, setFilterRecipes } = useContext(context);
  const handleFavoriteButton = (id) => {
    console.log(id);
    deleteFavoriteRecipe(id);
    setFilterRecipes(getFavoriteRecipes());
  };

  return (
    <div>
      {filterRecipes && filterRecipes.map((item, index) => (
        <div className="cards-container" key={ item.id }>
          <Link
            className="card-display"
            to={ `/${item.type}s/${item.id}` }
          >
            <img
              className="card-img"
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
              alt={ item.name }
            />
            <p data-testid={ `${index}-horizontal-name` }>{ item.name }</p>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { item.type === 'food'
              ? `${item.nationality} - ${item.category}` : item.alcoholicOrNot }
          </p>
          <p data-testid={ `${index}-horizontal-done-date` }>{ item.doneDate }</p>
          { !isFavorite && item.tags.map((tag, i) => (
            <p
              key={ i }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
            </p>
          ))}
          <ShareButton
            type={ `${item.type}s` }
            id={ item.id }
            datatest={ `${index}-horizontal-share-btn` }
          />
          { isFavorite && <FavoriteButton
            favorite
            handleFavoriteButton={ () => handleFavoriteButton(item.id) }
            datatest={ `${index}-horizontal-favorite-btn` }
          /> }
        </div>
      ))}
    </div>
  );
}

FilterRecipesCards.propTypes = {
  isFavorite: PropTypes.bool,
}.isRequired;
