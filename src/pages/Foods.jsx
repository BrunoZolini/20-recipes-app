import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import RecipesCards from '../components/RecipesCards';
import fetchAPI from '../service/API';
import context from '../context/myContext';

export default function Foods() {
  const { searchValue, setSearchValue } = useContext(context);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'name', 'Foods');
      setSearchValue({ ...searchValue, data });
    };
    requestAPI();
  }, []);

  return (
    <div>
      <Header title="Foods" search profile />
      <RecipesCards searchType="meals" />
    </div>
  );
}
