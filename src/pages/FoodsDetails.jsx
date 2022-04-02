import React from 'react';
import PropTypes from 'prop-types';
import RecipesDetails from '../components/RecipesDetails';

export default function FoodsDetails({
  match: {
    params: { id },
  },
}) {
  return (
    <div>
      <RecipesDetails
        withVideo
        page="foods"
        id={ id }
        recipeType="Foods"
        strType="Meal"
      />
    </div>
  );
}

FoodsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
  }),
}.isRequired;
