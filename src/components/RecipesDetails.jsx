import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { fetchAPI } from '../service/API';

export default function RecipesDetails({
  withVideo,
  id,
  page,
  recipeType,
  strType,
}) {
  const history = useHistory();
  const [favorite, setFavorite] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetchAPI(id, 'id', recipeType);
      setRecipe(Object.values(response)[0][0]);
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
          <img
            data-testid="recipe-photo"
            src={ recipe[`str${strType}Thumb`] }
            alt=""
          />
          <h1 data-testid="recipe-title">{recipe[`str${strType}`]}</h1>
          <button type="button">
            <img data-testid="share-btn" alt="shareIcon" src={ shareIcon } />
          </button>
          <div>
            <button
              type="button"
              onClick={ () => {
                setFavorite(!favorite);
              } }
            >
              {!favorite ? (
                <img
                  data-testid="favorite-btn"
                  alt="whiteHeartIcon"
                  src={ whiteHeartIcon }
                />
              ) : (
                <img
                  data-testid="favorite-btn"
                  alt="blackHeartIcon"
                  src={ blackHeartIcon }
                />
              )}
            </button>
          </div>
          <p data-testid="recipe-category">
            { withVideo ? (recipe.strCategory) : (recipe.strAlcoholic)}
          </p>
          {ingredient.filter((value) => (recipe[value] !== null))
            .map((item, index) => (
              <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {recipe[item]}
              </p>
            ))}
          <p data-testid="instructions">{recipe.strInstructions}</p>
          {withVideo && (
            <div className="video" data-testid="video">
              <a
                href={
                  recipe.strYoutube ? recipe.strYoutube : 'Video não encontrado'
                }
              >
                {recipe.strYoutube}
              </a>
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
          {measure.filter((value) => (recipe[value] !== null))
            .map((item, index) => (
              <p key={ index } data-testid={ `${index}-recomendation-card` }>
                {recipe[item]}
              </p>
            ))}
          <button
            type="button"
            data-testid="start-recipe-btn"
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
};
