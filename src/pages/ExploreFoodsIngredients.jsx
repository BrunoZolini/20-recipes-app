import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI } from '../service/API';
import context from '../context/myContext';

export default function ExploreFoodsIngredients() {
  const history = useHistory();
  const { setFilterIngredient } = useContext(context);
  const [ingredientsExplore, setIngredientsExplore] = useState();

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'foods', 'Ingredients');
      setIngredientsExplore(data.meals);
    };
    requestAPI();
  }, []);

  const handleClick = (ingredient) => {
    setFilterIngredient(ingredient);
    history.push('/foods');
  };

  return (
    <div>
      <Header title="Explore Ingredients" search={ false } profile />
      {ingredientsExplore
        && ingredientsExplore.filter((item, index) => index < +'12')
          .map(({ strIngredient }, index) => (
            <button
              type="button"
              onClick={ () => handleClick(strIngredient) }
              key={ strIngredient }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                alt={ strIngredient }
              />

              <p data-testid={ `${index}-card-name` }>{strIngredient}</p>
            </button>
          ))}
      <Footer />
    </div>
  );
}
