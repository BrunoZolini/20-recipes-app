import React, { useEffect, useContext } from 'react';
import context from '../context/myContext';
import { getDoneRecipes } from '../service/localStorage';

export default function DoneRecipesFilters() {
  const { setDoneRecipes } = useContext(context);

  useEffect(() => {
    setDoneRecipes(getDoneRecipes());
  }, []);

  const handleClickButton = ({ target: { name } }) => {
    const allDoneRecipes = getDoneRecipes();
    if (name === 'All') {
      setDoneRecipes(allDoneRecipes);
    } else {
      const filterDoneRecipes = allDoneRecipes.filter(({ type }) => name === type);
      setDoneRecipes(filterDoneRecipes);
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
