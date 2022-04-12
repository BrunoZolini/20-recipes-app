import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchAPI } from '../service/API';
import RecipesCards from '../components/RecipesCards';
import context from '../context/myContext';
import '../styles/SelectNationalities.css';

export default function ExploreFoodsNationalities() {
  const [filterNationality, setFilterNationality] = useState([]);
  const { searchValue, setSearchValue } = useContext(context);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchAPI('', 'default', 'Foods');
      setSearchValue({ ...searchValue, data });
      const dataNationality = await fetchAPI('', 'default', 'Nationality');
      setFilterNationality(dataNationality.meals);
    };
    requestAPI();
  }, []);

  const handleChange = async ({ target }) => {
    if (target.value === 'All') {
      const data = await fetchAPI('', 'default', 'Foods');
      setSearchValue({ ...searchValue, data });
    } else {
      const data = await fetchAPI(target.value, 'nationality', 'Foods');
      setSearchValue({ ...searchValue, data });
    }
  };

  const { data } = searchValue;
  console.log(data);

  return (
    <div>
      {data.meals && (
        <>
          <Header title="Explore Nationalities" search profile />
          <select
            className="select-nationalities"
            data-testid="explore-by-nationality-dropdown"
            onChange={ handleChange }
          >
            <option
              className="option-all"
              value="All"
              data-testid="All-option"
            >
              All
            </option>
            {filterNationality
              && filterNationality
                .map(({ strArea }, index) => (
                  <option
                    className="option-nationalities"
                    key={ index }
                    value={ strArea }
                    data-testid={ `${strArea}-option` }
                  >
                    {strArea}
                  </option>
                ))}
          </select>
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
