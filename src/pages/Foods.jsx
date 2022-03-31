import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';

export default function Foods() {
  return (
    <div>
      <Header title="Foods" search profile />
      <RecipesCards searchType="meals" />
      <Footer />
    </div>
  );
}
