async function fetchAPI(value, filters, page) {
  const getData = {
    Foods: {
      ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`,
      name: `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`,
      letter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`,
      default: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',

    },
    Drinks: {
      ingredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`,
      name: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`,
      letter: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`,
      default: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',

    },
  };
  const request = await fetch(getData[page][filters]); // fetching the data from the API
  const response = await request.json();
  if (response.meals === null) response.meals = [];
  if (response.drinks === null) response.drinks = [];

  return response;
}

export default fetchAPI;
