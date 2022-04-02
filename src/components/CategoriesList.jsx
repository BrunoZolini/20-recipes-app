import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI, fetchCategoriesAPI } from '../service/API';
import context from '../context/myContext';

export default function CategoriesList({ page, type }) {
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState([false, false, false, false, false, false]);

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
      console.log(data);
      setSearchValue({ ...searchValue, data });
      setIsChecked(isChecked.map((item, i) => (i === index ? !item : false)));
    }
  };

  return (
    <form>
      <label htmlFor="All">
        <input
          data-testid="All-category-filter"
          id="All"
          name="filterCheckbox"
          type="checkbox"
          checked={ isChecked[0] }
          onChange={ () => handleCategoryButton(
            true, 0, '',
          ) }
        />
        All
      </label>

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
                checked={ isChecked[index + 1] }
                onChange={ () => handleCategoryButton(
                  isChecked[index + 1], index + 1, strCategory,
                ) }
              />
              {strCategory}
            </label>
          </div>
        ))}
    </form>
  );
}

CategoriesList.propTypes = {
  page: PropTypes.string,
}.isRequired;
