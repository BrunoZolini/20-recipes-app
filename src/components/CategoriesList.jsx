import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI, fetchCategoriesAPI } from '../service/API';
import context from '../context/myContext';

export default function CategoriesList({ page, type }) {
  const [categories, setCategories] = useState([]);
  const { searchValue, setSearchValue } = useContext(context);
  const maxItens = 5;

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchCategoriesAPI(page);
      setCategories(data);
    };
    requestAPI();
  }, []);

  const handleCategoryButton = async (category) => {
    const data = await fetchAPI(category, 'category', page);
    setSearchValue({ ...searchValue, data });
  };

  return (
    <div>
      {categories[type]
      && categories[type].filter((_item, index) => index < maxItens)
        .map(({ strCategory }, index) => (
          <div key={ index }>
            <button
              data-testid={ `${strCategory}-category-filter` }
              type="button"
              onClick={ () => handleCategoryButton(strCategory) }
            >
              {strCategory}
            </button>
          </div>
        ))}
    </div>
  );
}

CategoriesList.propTypes = {
  page: PropTypes.string,
}.isRequired;
