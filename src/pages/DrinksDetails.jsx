import React from 'react';
import PropTypes from 'prop-types';
import RecipesDetails from '../components/RecipesDetails';

export default function DrinksDetails({
  match: {
    params: { id },
  },
}) {
  return (
    <div>
      <RecipesDetails
        inProgress={ false }
        withVideo={ false }
        page="drinks"
        id={ id }
        recipeType="Drinks"
        strType="Drink"
        searchType="cocktails"
        reverseType="Foods"
        reverseStrType="Meal"
        reverseSearch="meals"
        reversePage="foods"
      />
    </div>
  );
}

DrinksDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
  }),
}.isRequired;
