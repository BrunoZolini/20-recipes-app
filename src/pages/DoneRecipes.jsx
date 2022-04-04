import React from 'react';
import Header from '../components/Header';

export default function DoneRecipes() {
  return (
    <div>
      <Header title="Done Recipes" search={ false } profile />
      <button type="button" data-testid="filter-by-all-btn">
        All
      </button>
      <button type="button" data-testid="filter-by-food-btn">
        Food
      </button>
      <button type="button" data-testid="filter-by-drink-btn">
        Drinks
      </button>
      <img data-testid="0-horizontal-image" src="" alt="" />
      <p data-testid="0-horizontal-top-text">categoria</p>
      <p data-testid="0-horizontal-name">nome da receita</p>
      <p data-testid="0-horizontal-done-date">data da receita</p>
      <p data-testid="0-horizontal-share-btn">share</p>
      <p data-testid="0-Pasta-horizontal-tag">tag</p>
    </div>
  );
}
