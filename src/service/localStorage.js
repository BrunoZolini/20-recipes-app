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
  return {};
};
