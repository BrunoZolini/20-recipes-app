import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ type, id, datatest }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShareButton = () => {
    clipboardCopy(`http://localhost:3000/${type}/${id}`);
    setIsCopied(true);
  };

  return (
    <div className="share-button-section">
      {isCopied && <p className="link-message">Link copied!</p>}
      <button
        className="button-share-favorite"
        type="button"
        onClick={ handleShareButton }
      >
        <img data-testid={ datatest } alt="shareIcon" src={ shareIcon } />
      </button>
    </div>
  );
}

ShareButton.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
