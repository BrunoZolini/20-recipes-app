import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../context/myContext';
import ShareButton from './ShareButton';
import '../styles/DoneRecipesCards.css';

export default function DoneRecipesCards() {
  const { doneRecipes } = useContext(context);

  return (
    <div>
      {doneRecipes && doneRecipes.map((item, index) => (
        <div className="cards-container" key={ item.id }>
          <Link
            className="card-display"
            to={ `/${item.type}s/${item.id}` }
          >
            <img
              className="card-img"
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
              alt={ item.name }
            />
            <p data-testid={ `${index}-horizontal-name` }>{ item.name }</p>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { item.type === 'food'
              ? `${item.nationality} - ${item.category}` : item.alcoholicOrNot }
          </p>
          <p data-testid={ `${index}-horizontal-done-date` }>{ item.doneDate }</p>
          {item.tags.map((tag, i) => (
            <p
              key={ i }
              data-testid={ `${index}-${tag}-horizontal-tag` }
            >
              {tag}
            </p>
          ))}
          <ShareButton
            type={ `${item.type}s` }
            id={ item.id }
            datatest={ `${index}-horizontal-share-btn` }
          />
        </div>
      ))}
    </div>
  );
}
