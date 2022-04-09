import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

export default function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer">
      <button
        className="footer-button"
        type="button"
        onClick={ () => history.push('/drinks') }
      >
        <img
          className="footer-button-img"
          data-testid="drinks-bottom-btn"
          alt="drinkIcon"
          src={ drinkIcon }
        />
      </button>
      <button
        className="footer-button"
        type="button"
        onClick={ () => history.push('/explore') }
      >
        <img
          className="footer-button-img"
          data-testid="explore-bottom-btn"
          alt="exploreIcon"
          src={ exploreIcon }
        />
      </button>
      <button
        className="footer-button"
        type="button"
        onClick={ () => history.push('/foods') }
      >
        <img
          className="footer-button-img"
          data-testid="food-bottom-btn"
          alt="mealIcon"
          src={ mealIcon }
        />
      </button>
    </footer>
  );
}
