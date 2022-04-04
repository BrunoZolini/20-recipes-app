import React from 'react';
import PropTypes from 'prop-types';
import RecipesCards from './RecipesCards';

export default function RecommendedOfRecipesDetails({
  reverseSearch,
  reverseStrType,
  reversePage,
}) {
  return (
    <div>
      <h3>Recommended</h3>
      <div className="scrollbar">
        <RecipesCards
          searchType={ reverseSearch }
          strType={ reverseStrType }
          page={ reversePage }
          maxLength="6"
          recomendation
        />
      </div>
    </div>
  );
}

RecommendedOfRecipesDetails.propTypes = {
  reverseSearch: PropTypes.string,
  reverseStrType: PropTypes.string,
  reversePage: PropTypes.string,
}.isRequired;
