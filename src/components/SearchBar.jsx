import React from 'react';

export default function SearchBar() {
  return (

    <form>
      <input data-testid="search-input" type="text" placeholder="Search..." />
      <label htmlFor="ingredient-search-radio">
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          id="ingredient-search-radio"
        />
        Ingredient
      </label>
      <label htmlFor="name-search-radio">
        <input
          data-testid="name-search-radio"
          type="radio"
          id="name-search-radio"
        />
        Name
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          id="first-letter-search-radio"
        />
        First Letter
      </label>
      <button
        data-testid="exec-search-btn"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
