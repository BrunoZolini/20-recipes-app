import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import fetchAPI from '../service/API';

function SearchBar() {
  const [searchValue, setSearchValue] = useState({ value: '', filter: '', data: [] });

  function handleChange({ target }) {
    setSearchValue({ ...searchValue, value: target.value });
  }

  const handleChecked = ({ target }) => {
    if (target.checked) setSearchValue({ ...searchValue, filter: target.value }); // if checked, set filter to target.value
  };

  /* const handleSubmit = async () => {
    const { page } = props;
    console.log(page);
    const { value, filter } = searchValue;
    const data = await fetchAPI(value, filter);
    setSearchValue({ ...searchValue, data });
  }; */

  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search..."
        value={ searchValue.value }
        onChange={ handleChange }
      />
      <div>
        <label htmlFor="ingredient">
          Ingredient
          <input
            name="filter"
            onChange={ handleChecked }
            value="ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            name="filter"
            onChange={ handleChecked }
            value="name"
            type="radio"
            data-testid="name-search-radio"
          />
        </label>
        <label htmlFor="Letter">
          First letter
          <input
            name="filter"
            onChange={ handleChecked }
            value="Letter"
            type="radio"
            data-testid="first-letter-search-radio"
          />
        </label>
        <button type="button" data-testid="exec-search-btn" onClick={ handleSubmit }>
          Search
        </button>
      </div>
    </div>
  );
}

/* SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
}; */
export default SearchBar;
