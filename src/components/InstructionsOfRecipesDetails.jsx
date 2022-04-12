import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonOfRecipesDetails({ instructions }) {
  return (
    <div>
      <h3 className="subtitle">Instructions</h3>
      <p
        className="details-instructions-section"
        data-testid="instructions"
      >
        {instructions}
      </p>
    </div>
  );
}

ButtonOfRecipesDetails.propTypes = {
  instructions: PropTypes.string,
}.isRequired;
