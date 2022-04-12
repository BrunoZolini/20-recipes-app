import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Explore.css';

export default function Explore() {
  return (
    <div>
      <Header title="Explore" search={ false } profile />
      <section className="explore-container">
        <Link to="/explore/foods">
          <button
            className="explore-button"
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            className="explore-button"
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
