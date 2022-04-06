import React from 'react';
import PropTypes from 'prop-types';
import RecipesDetails from '../components/RecipesDetails';

export default function FoodsDetailsInProgress({
  match: {
    params: { id },
  },
}) {
  return (
    <div>
      <RecipesDetails
        inProgress
        withVideo={ false }
        page="foods"
        id={ id }
        recipeType="Foods"
        strType="Meal"
        searchType="meals"
        reverseType="Drinks"
        reverseStrType="Drink"
        reverseSearch="drinks"
        reversePage="drinks"
      />
    </div>
  );
}

FoodsDetailsInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
  }),
}.isRequired;
