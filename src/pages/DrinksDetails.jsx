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
        withVideo={ false }
        page="drinks"
        id={ id }
        recipeType="Drinks"
        strType="Drink"
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
