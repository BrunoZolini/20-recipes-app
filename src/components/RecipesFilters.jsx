import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/myContext';

export default function RecipesFilters({ getData }) {
  const { setFilterRecipes } = useContext(context);

  useEffect(() => {
    setFilterRecipes(getData());
  }, []);

  const handleClickButton = ({ target: { name } }) => {
    const allDoneRecipes = getData();
    if (name === 'All') {
      setFilterRecipes(allDoneRecipes);
    } else {
      const filterDoneRecipes = allDoneRecipes.filter(({ type }) => name === type);
      setFilterRecipes(filterDoneRecipes);
    }
  };

  return (
    <div>
      <button
        name="All"
        type="button"
        onClick={ handleClickButton }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        name="food"
        type="button"
        onClick={ handleClickButton }
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        name="drink"
        type="button"
        onClick={ handleClickButton }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </div>
  );
}

RecipesFilters.propTypes = {
  getData: PropTypes.func,
}.isRequired;
