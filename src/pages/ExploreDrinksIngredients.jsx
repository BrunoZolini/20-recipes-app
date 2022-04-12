import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI } from '../service/API';
import context from '../context/myContext';
import '../styles/RecipesCards.css';

export default function ExploreDrinksIngredients() {
  const history = useHistory();
  const { setFilterIngredient } = useContext(context);
  const [ingredientsExplore, setIngredientsExplore] = useState();

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'drinks', 'Ingredients');
      setIngredientsExplore(data.drinks);
    };
    requestAPI();
  }, []);

  const handleClick = (ingredient) => {
    setFilterIngredient(ingredient);
    history.push('/drinks');
  };

  return (
    <div className="cards-container">
      <Header title="Explore Ingredients" search={ false } profile />
      {ingredientsExplore
        && ingredientsExplore.filter((_item, index) => index < +'12')
          .map(({ strIngredient1 }, index) => (
            <card
              className="card-display"
              type="button"
              onClick={ () => handleClick(strIngredient1) }
              key={ strIngredient1 }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                className="card-img"
                data-testid={ `${index}-card-img` }
                src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                alt={ strIngredient1 }
              />

              <p
                className="card-name"
                data-testid={ `${index}-card-name` }
              >
                {strIngredient1}
              </p>
            </card>
          ))}
      <Footer />
    </div>
  );
}
