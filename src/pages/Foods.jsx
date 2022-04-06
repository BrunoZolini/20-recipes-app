import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
import RecipesCards from '../components/RecipesCards';
import { fetchAPI } from '../service/API';
import context from '../context/myContext';

export default function Foods() {
  const { searchValue, setSearchValue, filterIngredient } = useContext(context);

  useEffect(() => {
    const requestAPI = async () => {
      if (filterIngredient === '') {
        const data = await fetchAPI('', 'default', 'Foods');
        setSearchValue({ ...searchValue, data });
      } else {
        const data = await fetchAPI(filterIngredient, 'ingredient', 'Foods');
        setSearchValue({ ...searchValue, data });
      }
    };
    requestAPI();
  }, []);

  const { data } = searchValue;

  return (
    <div>
      {data.meals && (
        <>
          <Header title="Foods" search profile />
          <CategoriesList page="Foods" type="meals" />
          <RecipesCards
            searchType="meals"
            strType="Meal"
            page="foods"
            maxLength="12"
            recomendation={ false }
          />
          <Footer />
        </>
      )}
    </div>
  );
}
