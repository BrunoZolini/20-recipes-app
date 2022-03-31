import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCategoriesAPI } from '../service/API';

export default function CategoriesList({ page, type }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchCategoriesAPI(page);
      setCategories(data);
    };
    requestAPI();
  }, []);
  const maxItens = 5;

  return (
    <div>
      {categories[type]
      && categories[type].filter((_item, index) => index < maxItens)
        .map(({ strCategory }, index) => (
          <div key={ index }>
            <button
              data-testid={ `${strCategory}-category-filter` }
              type="button"
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
