import React from 'react';
import Header from '../components/Header';
import FilterRecipesCards from '../components/FilterRecipesCards';
import RecipesFilters from '../components/RecipesFilters';
import { getFavoriteRecipes } from '../service/localStorage';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" search={ false } profile />
      <RecipesFilters getData={ getFavoriteRecipes } />
      <FilterRecipesCards isFavorite />
    </div>
  );
}
