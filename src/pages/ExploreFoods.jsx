import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI } from '../service/API';
import '../styles/ExploreFoods.css';

export default function ExploreFoods() {
  const history = useHistory();
  const handleClick = async () => {
    const requestAPI = await fetchAPI('', 'random', 'Foods');
    const id = requestAPI.meals[0].idMeal;
    history.push(`/foods/${id}`);
  };

  return (
    <div>
      <Header title="Explore Foods" search={ false } profile />
      <section className="explore-foods-container">
        <Link to="/explore/foods/ingredients">
          <button
            className="explore-foods-button"
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            className="explore-foods-button"
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        </Link>
        <button
          className="explore-foods-button"
          type="button"
          data-testid="explore-surprise"
          onClick={ handleClick }
        >
          Surprise me!
        </button>
      </section>
      <Footer />
    </div>
  );
}
