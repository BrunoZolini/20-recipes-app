export const setInProgressRecipes = (id, type, ingredients) => {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgress) {
    const obj = {
      ...inProgress[type],
      [id]: ingredients,
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      { ...inProgress, [type]: obj },
    ));
  } else {
    const obj = { [type]: {
      [id]: ingredients,
    } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
  }
};

export const getInProgressRecipes = (type) => {
  const localReturn = localStorage.getItem('inProgressRecipes');
  if (localReturn) {
    return JSON.parse(localReturn)[type];
  }
  return false;
};

export const addIngredientOnList = (type, id, list) => {
  const ingredientsList = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  if (ingredientsList) {
    const obj = {
      ...ingredientsList[type],
      [id]: list,
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      { ...ingredientsList, [type]: obj },
    ));
  }
};

export const deleteIngredientFromList = (type, id, text) => {
  const ingredientsList = JSON.parse(localStorage
    .getItem('inProgressRecipes'));
  if (ingredientsList) {
    const newIngredientsList = ingredientsList[type][id]
      .filter((item) => !item.includes(text));
    const obj = {
      ...ingredientsList[type],
      [id]: newIngredientsList,
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      { ...ingredientsList, [type]: obj },
    ));
  }
};

export const setFavoriteRecipes = (obj) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    const favoriteObj = {
      id: obj.id,
      type: obj.type,
      nationality: obj.nationality,
      category: obj.category,
      alcoholicOrNot: obj.alcoholicOrNot,
      name: obj.name,
      image: obj.image,
    };
    localStorage.setItem('favoriteRecipes', JSON.stringify(
      [...favoriteRecipes, favoriteObj],
    ));
  } else {
    const favoriteArr = [{
      id: obj.id,
      type: obj.type,
      nationality: obj.nationality,
      category: obj.category,
      alcoholicOrNot: obj.alcoholicOrNot,
      name: obj.name,
      image: obj.image,
    }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteArr));
  }
};

export const deleteFavoriteRecipe = (id) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const newFavoriteRecipes = favoriteRecipes.filter((item) => item.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
};

export const getFavoriteRecipes = () => {
  const localReturn = localStorage.getItem('favoriteRecipes');
  if (localReturn) {
    return JSON.parse(localReturn);
  }
  return [];
};

/* favoriteREcipes [{
    id: id-da-receita,
    type: food-ou-drink,
    nationality: nacionalidade-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita
}] */
