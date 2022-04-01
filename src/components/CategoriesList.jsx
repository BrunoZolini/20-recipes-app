import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI, fetchCategoriesAPI } from '../service/API';
import context from '../context/myContext';

export default function CategoriesList({ page, type }) {
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState([false, false, false, false, false]);

  const { searchValue, setSearchValue } = useContext(context);
  const maxItens = 5;

  useEffect(() => {
    const requestAPI = async () => {
      const data = await fetchCategoriesAPI(page);
      setCategories(data);
    };
    requestAPI();
  }, []);

  const handleCategoryButton = async (bool, index, value) => {
    if (!bool) {
      const data = await fetchAPI(value, 'category', page);
      setSearchValue({ ...searchValue, data });
      setIsChecked(isChecked.map((item, i) => (i === index ? !item : false)));
    } else {
      const data = await fetchAPI('', 'default', page);
      setSearchValue({ ...searchValue, data });
      setIsChecked(isChecked.map((item, i) => (i === index ? !item : false)));
    }
  };

  return (
    <form>
      <label htmlFor="filterCheckbox">
        {categories[type]
      && categories[type].filter((_item, index) => index < maxItens)
        .map(({ strCategory }, index) => (
          <div key={ index }>
            <label htmlFor={ strCategory }>
              <input
                data-testid={ `${strCategory}-category-filter` }
                id={ strCategory }
                name="filterCheckbox"
                type="checkbox"
                checked={ isChecked[index] }
                onChange={ () => handleCategoryButton(
                  isChecked[index], index, strCategory,
                ) }
              />
              {strCategory}
            </label>
          </div>
        ))}
      </label>
    </form>
  );
}

CategoriesList.propTypes = {
  page: PropTypes.string,
}.isRequired;
