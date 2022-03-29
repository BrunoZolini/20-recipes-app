import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, profile, search }) {
  const history = useHistory();
  return (
    <div>
      {profile && (
        <button
          type="button"
          onClick={ () => { history.push('/profile'); } }
        >
          <img
            data-testid="profile-top-btn"
            alt="profileIcon"
            src={ profileIcon }
          />
        </button>
      )}
      <h3
        data-testid="page-title"
      >
        {title}
      </h3>
      {search && (
        <button
          type="button"
        >
          <img
            data-testid="search-top-btn"
            alt="searchIcon"
            src={ searchIcon }
          />
        </button>
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
