import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';
import CategoriesList from '../components/CategoriesList';
import { fetchAPI } from '../service/API';
import context from '../context/myContext';
import Footer from '../components/Footer';

export default function Drinks() {
  const { searchValue, setSearchValue } = useContext(context);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'default', 'Drinks');
      setSearchValue({ ...searchValue, data });
    };
    requestAPI();
  }, []);

  const { data } = searchValue;

  return (
    <div>
      {data.drinks && (
        <>
          <Header title="Drinks" search profile />
          <CategoriesList page="Drinks" type="drinks" />
          <RecipesCards
            searchType="drinks"
            strType="Drink"
            page="drinks"
            maxLength="12"
            recomendation={ false }
          />
          <Footer />
        </>
      )}
    </div>
  );
}
