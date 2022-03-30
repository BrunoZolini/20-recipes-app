import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState({
    value: '',
    filter: 'ingredient',
    data: [] });

  return (
    <MyContext.Provider value={ { searchValue, setSearchValue } }>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;
