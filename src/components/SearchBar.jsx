import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import fetchAPI from '../service/API';
import context from '../context/myContext';

function SearchBar({ page }) {
  const history = useHistory();

  const { searchValue, setSearchValue } = useContext(context);

  function handleChange({ target }) {
    setSearchValue({ ...searchValue, value: target.value });
  }

  const handleChecked = ({ target }) => {
    if (target.checked) setSearchValue({ ...searchValue, filter: target.value }); // if checked, set filter to target.value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value, filter } = searchValue;

    if (filter === 'letter' && value.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const data = await fetchAPI(value, filter, page);
      setSearchValue({ ...searchValue, data });
      if (data.meals === null || data.drinks === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else {
        if (page === 'Foods' && data.meals.length === 1) {
          history.push(`/foods/${data.meals[0].idMeal}`);
        }
        if (page === 'Drinks' && data.drinks.length === 1) {
          history.push(`/drinks/${data.drinks[0].idDrink}`);
        }
      }
    }
  };

  return (
    <form>
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
            defaultChecked
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
            value="letter"
            type="radio"
            data-testid="first-letter-search-radio"
          />
        </label>
        <button type="submit" data-testid="exec-search-btn" onClick={ handleSubmit }>
          Search
        </button>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  page: PropTypes.string.isRequired,
};
export default SearchBar;
