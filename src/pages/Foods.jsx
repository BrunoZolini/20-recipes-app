import React, { useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';
import fetchAPI from '../service/API';
import context from '../context/myContext';

export default function Foods() {
  const { searchValue, setSearchValue } = useContext(context);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'default', 'Foods');
      setSearchValue({ ...searchValue, data });
    };
    requestAPI();
  }, []);

  const { data } = searchValue;

  return (
    <div>
      {data.meals && (
        <>
          <Header title="Foods" search profile />
          <RecipesCards searchType="meals" strType="Meal" />
          <Footer />
        </>
      )}
    </div>
  );
}
