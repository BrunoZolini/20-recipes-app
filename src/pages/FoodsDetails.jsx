import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesDetails from '../components/RecipesDetails';
import context from '../context/myContext';
import { fetchAPI } from '../service/API';

export default function FoodsDetails({
  match: {
    params: { id },
  },
}) {
  const { recipe, setRecipe } = useContext(context);
  const { setIngredient } = useContext(context);
  const { setMeasure } = useContext(context);

  useEffect(() => {
    async function getData() {
      const response = await fetchAPI(id, 'id', 'Foods');
      setRecipe(Object.values(response)[0][0]);
      console.log(Object.values(response)[0][0]);

      const arrKeys = Object.keys(Object.values(response)[0][0]);
      const ingredients = arrKeys.filter((key) => key.includes('strIngredient'));
      setIngredient(ingredients);
      const measures = arrKeys.filter((key) => key.includes('strMeasure'));
      setMeasure(measures);
    }
    getData();
  }, []);

  return (
    <div>
      { recipe !== null && <RecipesDetails
        withVideo
        page="foods"
        id={ id }
        // recipeType="Foods"
        strType="Meal"
      />}
    </div>
  );
}

FoodsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
  }),
}.isRequired;
