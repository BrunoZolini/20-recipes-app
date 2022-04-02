import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAPI } from '../service/API';
import context from '../context/myContext';
import '../styles/RecipesDetails.css';
import RecipesCards from './RecipesCards';
import HeadOfRecipesDetails from './HeadOfRecipesDetails';

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
  const history = useHistory();
  // const [favorite, setFavorite] = useState(false);
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

  const videoID = () => {
    const url = recipe.strYoutube;
    if (recipe.strYoutube) {
      const video = url.match(/(?:\?v=)(.*)/);
      return video[1];
    }
  };

  return (
    <div>
      {screen && (
        <div>
          <HeadOfRecipesDetails
            thumb={ recipe[`str${strType}Thumb`] }
            title={ recipe[`str${strType}`] }
            category={ withVideo ? (recipe.strCategory) : (recipe.strAlcoholic) }
          />

          {ingredient.filter((value) => (recipe[value]))
            .map((item, index) => (
              <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${recipe[item]} - ${recipe[measure[index]] !== null
                  ? recipe[measure[index]] : ''}`}
              </p>
            ))}

          <p data-testid="instructions">{recipe.strInstructions}</p>
          {withVideo && (
            <div className="video" data-testid="video">
              <iframe
                width="360"
                height="202"
                src={ `https://www.youtube.com/embed/${videoID()}` }
                title="YouTube video player"
                frameBorder="0"
                allow={ `accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;picture-in-picture` }
                allowFullScreen
              />
            </div>
          )}
          <div>
            <h3>Recommended</h3>
            <div className="scrollbar">
              <RecipesCards
                searchType={ reverseSearch }
                strType={ reverseStrType }
                page={ reversePage }
                maxLength="6"
                recomendation
              />
            </div>
          </div>
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="startRecipe"
            onClick={ () => {
              history.push(`/${page}/${id}/in-progress`);
            } }
          >
            Start Recipe
          </button>
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
