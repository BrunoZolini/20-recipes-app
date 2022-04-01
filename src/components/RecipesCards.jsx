import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import context from '../context/myContext';

export default function RecipesCards({ searchType, strType, page }) {
  const { searchValue } = useContext(context);
  const { data } = searchValue;
  const maxItens = 12;

  return (
    <div>
      {data[searchType].filter((_item, index) => index < maxItens)
        .map((item, index) => (
          <Link
            key={ index }
            to={ `/${page}/${item[`id${strType}`]}` }
          >
            <div
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ item[`str${strType}Thumb`] }
                alt={ item[`str${strType}`] }
              />
              <p data-testid={ `${index}-card-name` }>{item[`str${strType}`]}</p>
            </div>
          </Link>
        )) }

    </div>
  );
}

RecipesCards.propTypes = {
  searchType: PropTypes.string,
}.isRequired;
