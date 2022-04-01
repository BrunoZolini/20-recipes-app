import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState({
    value: '',
    filter: 'ingredient',
    data: [] });
  const [favorite, setFavorite] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState([]);

  const state = {
    searchValue,
    setSearchValue,
    favorite,
    setFavorite,
    ingredient,
    setIngredient,
    recipe,
    setRecipe,
    measure,
    setMeasure,
  };

  return (
    <MyContext.Provider value={ state }>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;
