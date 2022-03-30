async function fetchAPI(value) {
  const getData = {
    foods: {
      ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`,
      name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`,
      letter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`,
    },
    drinks: {
      ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`,
      name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`,
      letter: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`,
    },
  };

  const request = await fetch(getData); // fetching the data from the API
  const response = await request.json();
  if (Object.keys(response)[0] === 'meals') return response.meals; // if the response is meals. return the meals
  if (Object.keys(response)[0] === 'drinks') return response.drinks; // if the response is drinks. return the drinks
}

export default fetchAPI;
