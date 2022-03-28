export const getFoods = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
  const results = await response.json();
  return results;
};

export const getDrinks = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  const results = await response.json();
  return results;
};
