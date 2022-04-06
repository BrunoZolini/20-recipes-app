import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState({
    value: '',
    filter: 'ingredient',
    data: [] });

  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsChecked, setIngredientsChecked] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const state = {
    searchValue,
    setSearchValue,
    ingredientsList,
    setIngredientsList,
    ingredientsChecked,
    setIngredientsChecked,
    isDisabled,
    setIsDisabled,
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
