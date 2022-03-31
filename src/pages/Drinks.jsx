import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';
import fetchAPI from '../service/API';
import context from '../context/myContext';

export default function Drinks() {
  const { searchValue, setSearchValue } = useContext(context);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'name', 'Drinks');
      setSearchValue({ ...searchValue, data });
    };
    requestAPI();
  }, []);

  return (
    <div>
      <Header title="Drinks" search profile />
      <RecipesCards searchType="drinks" />
    </div>
  );
}
