import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../styles/Header.css';

export default function Header({ title, profile, search }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();
  return (
    <header>
      <div className="header-section">
        {profile ? (
          <button
            className="header-button"
            type="button"
            onClick={ () => { history.push('/profile'); } }
          >
            <img
              className="header-button-img"
              data-testid="profile-top-btn"
              alt="profileIcon"
              src={ profileIcon }
            />
          </button>
        ) : <span className="fake-button" />}
        <h3
          className="header-title"
          data-testid="page-title"
        >
          {title}
        </h3>
        {search ? (
          <button
            className="header-button"
            type="button"
            onClick={ () => setIsDisabled(!isDisabled) }
          >
            <img
              className="header-button-img"
              data-testid="search-top-btn"
              alt="searchIcon"
              src={ searchIcon }
            />
          </button>
        ) : <span className="fake-button" />}
      </div>
      {isDisabled && (
        <div>
          <SearchBar page={ title } />
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
