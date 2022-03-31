import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/myContext';

export default function RecipesCards({ searchType, strType }) {
  const { searchValue } = useContext(context);
  const { data } = searchValue;
  const maxItens = 12;

  return (
    <div>
      {data[searchType].filter((_item, index) => index < maxItens)
        .map((item, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              src={ item[`str${strType}Thumb`] }
              alt={ item[`str${strType}`] }
            />
            <p data-testid={ `${index}-card-name` }>{item[`str${strType}`]}</p>
          </div>
        )) }

    </div>
  );
}

RecipesCards.propTypes = {
  searchType: PropTypes.string,
}.isRequired;
