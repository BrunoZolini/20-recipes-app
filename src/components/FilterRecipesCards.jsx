import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import context from '../context/myContext';
import ShareButton from './ShareButton';
import '../styles/RecipesCards.css';
import FavoriteButton from './FavoriteButton';
import { deleteFavoriteRecipe, getFavoriteRecipes } from '../service/localStorage';
import '../styles/DoneFavoriteCards.css';

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
        <div className="done-favorite-container" key={ item.id }>
          <Link
            className="done-favorite-link"
            to={ `/${item.type}s/${item.id}` }
          >
            <img
              className="done-favorite-img"
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
              alt={ item.name }
            />
            <div className="done-favorite-textarea">
              <p
                className="done-favorite-name"
                data-testid={ `${index}-horizontal-name` }
              >
                { item.name }
              </p>
              <p
                className="done-favorite-category"
                data-testid={ `${index}-horizontal-top-text` }
              >
                { item.type === 'food'
                  ? `${item.nationality} - ${item.category}` : item.alcoholicOrNot }
              </p>

              { !isFavorite && (
                <p
                  className="done-favorite-date"
                  data-testid={ `${index}-horizontal-done-date` }
                >
                  { `Done in: ${item.doneDate}` }
                </p>)}

              <div className="done-favorite-tag-container">
                { !isFavorite && item.tags.map((tag, i) => (
                  <p
                    className="done-favorite-tag"
                    key={ i }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </Link>
          <div className="done-favorite-button">
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
        </div>
      ))}
    </div>
  );
}

FilterRecipesCards.propTypes = {
  isFavorite: PropTypes.bool,
}.isRequired;
