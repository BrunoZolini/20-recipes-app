import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI } from '../service/API';

export default function ExploreFoodsIngredients() {
  const [ingredientsExplore, setIngredientsExplore] = useState();

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'default', 'Ingredients');
      console.log(data.meals);
      setIngredientsExplore(data.meals);
    };
    requestAPI();
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" search={ false } profile />
      {ingredientsExplore
        && ingredientsExplore.filter((item, index) => index < +'12')
          .map(({ strIngredient }, index) => (
            <div
              key={ strIngredient }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                alt={ strIngredient }
              />

              <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
            </div>
          ))}
      <Footer />
    </div>
  );
}
