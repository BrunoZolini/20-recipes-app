import React from 'react';
import Header from '../components/Header';
import FilterRecipesCards from '../components/FilterRecipesCards';
import RecipesFilters from '../components/RecipesFilters';
import { getDoneRecipes } from '../service/localStorage';
import '../styles/DoneRecipes.css';

export default function DoneRecipes() {
  return (
    <div>
      <Header title="Done Recipes" search={ false } profile />
      <RecipesFilters getData={ getDoneRecipes } />
      <FilterRecipesCards isFavorite={ false } />
    </div>
  );
}
