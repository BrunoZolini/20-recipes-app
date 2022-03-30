import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import context from '../context/myContext';

export default function RecipesCards({ searchType }) {
  const { searchValue } = useContext(context);
  const { data } = searchValue;
  const maxItens = 12;
  const negative = -1;
  const strType = searchType.charAt(0).toUpperCase() + searchType.slice(1, negative);

  return (
    <div>
      {data[searchType]
      && data[searchType].filter((_item, index) => index < maxItens)
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
