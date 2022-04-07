import React from 'react';
import Header from '../components/Header';
import DoneRecipesCards from '../components/DoneRecipesCards';
import DoneRecipesFilters from '../components/DoneRecipesFilters';

export default function DoneRecipes() {
  return (
    <div>
      <Header title="Done Recipes" search={ false } profile />
      <DoneRecipesFilters />
      <DoneRecipesCards />
    </div>
  );
}
