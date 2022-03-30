import React from 'react';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';

export default function Drinks() {
  return (
    <div>
      <Header title="Drinks" search profile />
      <RecipesCards searchType="drinks" />

    </div>
  );
}
