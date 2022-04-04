import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI } from '../service/API';

export default function ExploreDrinks() {
  const history = useHistory();
  const handleClick = async () => {
    const requestAPI = await fetchAPI('', 'random', 'Drinks');
    console.log(requestAPI);
    const id = requestAPI.drinks[0].idDrink;
    console.log(id);
    history.push(`/drinks/${id}`);
  };
  return (
    <div>
      <Header title="Explore Drinks" search={ false } profile />
      <Link to="/explore/drinks/ingredients">
        <button type="button" data-testid="explore-by-ingredient">
          By Ingredient
        </button>
      </Link>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleClick }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}
