import React from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteButton({ favorite, handleFavoriteButton, datatest }) {
  return (
    <div>
      <button
        className="button-share-favorite"
        type="button"
        onClick={ handleFavoriteButton }
      >
        <img
          data-testid={ datatest }
          alt="favorite-btn"
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
        />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  favorite: PropTypes.bool,
  handleFavoriteButton: PropTypes.func,
}.isRequired;
