import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import context from '../context/myContext';
import '../styles/RecipesCards.css';

export default function RecipesCards({
  searchType,
  strType,
  page,
  maxLength,
  recomendation,
}) {
  const { searchValue } = useContext(context);
  const { data } = searchValue;

  return (
    <div className="cards-container">
      {data[searchType].filter((_item, index) => index < maxLength)
        .map((item, index) => (
          <Link
            className="card-display"
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            to={ `/${page}/${item[`id${strType}`]}` }
          >
            <div
              data-testid={ recomendation ? `${index}-recomendation-title`
                : `${index}-recipe-card` }
            >
              <img
                className="card-img"
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
