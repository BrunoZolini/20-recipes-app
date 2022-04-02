import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonOfRecipesDetails({ instructions }) {
  return (
    <div>
      <p data-testid="instructions">{instructions}</p>
    </div>
  );
}

ButtonOfRecipesDetails.propTypes = {
  instructions: PropTypes.string,
}.isRequired;
