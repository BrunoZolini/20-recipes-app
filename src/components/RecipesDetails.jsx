import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import context from '../context/myContext';

export default function RecipesDetails({
  withVideo,
  id,
  page,
  // recipeType,
  strType,
}) {
  const { favorite, setFavorite } = useContext(context);
  const { recipe } = useContext(context);
  const { ingredient } = useContext(context);
  const { measure } = useContext(context);
  const history = useHistory();

  const videoID = () => {
    const url = recipe.strYoutube;
    if (recipe.strYoutube) {
      const video = url.match(/(?:\?v=)(.*)/);
      return video[1];
    }
  };

  return (
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
      {withVideo ? <p data-testid="recipe-category">{recipe.strCategory}</p>
        : <p data-testid="recipe-category">{recipe.strAlcoholic}</p>}
      {ingredient.filter((value) => (recipe[value].length))
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
      {measure.filter((value) => (recipe[value].length))
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
  );
}

RecipesDetails.propTypes = {
  withVideo: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  // recipeType: PropTypes.string.isRequired,
  strType: PropTypes.string.isRequired,
};
