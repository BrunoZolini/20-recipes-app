import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchAPI } from '../service/API';
import context from '../context/myContext';
import '../styles/RecipesDetails.css';
import HeadOfRecipesDetails from './HeadOfRecipesDetails';
import VideoOfRecipesDetails from './VideoOfRecipesDetails';
import IngredientsListOfRecipesDetails from './IngredientsListOfRecipesDetails';
import RecommendedOfRecipesDetails from './RecommendedOfRecipesDetails';
import InstructionsOfRecipesDetails from './InstructionsOfRecipesDetails';
import ButtonOfRecipesDetails from './ButtonOfRecipesDetails';

export default function RecipesDetails({
  withVideo,
  id,
  page,
  recipeType,
  strType,
  // searchType,
  reverseType,
  reverseStrType,
  reverseSearch,
  reversePage,
}) {
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [screen, setScreen] = useState(false);
  const { searchValue, setSearchValue } = useContext(context);

  useEffect(() => {
    async function getData() {
      const response = await fetchAPI(id, 'id', recipeType);
      setRecipe(Object.values(response)[0][0]);
      const data = await fetchAPI('', 'default', reverseType);
      setSearchValue({ ...searchValue, data });
      const arrKeys = Object.keys(Object.values(response)[0][0]);
      const ingredients = arrKeys.filter((key) => key.includes('strIngredient'));
      setIngredient(ingredients);
      const measures = arrKeys.filter((key) => key.includes('strMeasure'));
      setMeasure(measures);
      setScreen(true);
    }
    getData();
  }, []);

  return (
    <div>
      {screen && (
        <div>
          <HeadOfRecipesDetails
            thumb={ recipe[`str${strType}Thumb`] }
            title={ recipe[`str${strType}`] }
            category={ withVideo ? (recipe.strCategory) : (recipe.strAlcoholic) }
          />

          <IngredientsListOfRecipesDetails
            recipe={ recipe }
            ingredient={ ingredient }
            measure={ measure }
          />

          <InstructionsOfRecipesDetails
            instructions={ recipe.strInstructions }
          />

          {withVideo && (
            <VideoOfRecipesDetails videoUrl={ recipe.strYoutube } />
          )}

          <RecommendedOfRecipesDetails
            reverseSearch={ reverseSearch }
            reverseStrType={ reverseStrType }
            reversePage={ reversePage }
          />

          <ButtonOfRecipesDetails
            page={ page }
            id={ id }
          />
        </div>
      )}
    </div>
  );
}

RecipesDetails.propTypes = {
  withVideo: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
  strType: PropTypes.string.isRequired,
  // searchType: PropTypes.string.isRequired,
  reverseType: PropTypes.string.isRequired,
  reverseStrType: PropTypes.string.isRequired,
  reverseSearch: PropTypes.string.isRequired,
  reversePage: PropTypes.string.isRequired,
};
