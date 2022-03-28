import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const INITIAL_STATE = { nome: 'Xablau', idade: 100 };
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <MyContext.Provider value={ { state, setState } }>
      {children}
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;
