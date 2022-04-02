import React from 'react';
import PropTypes from 'prop-types';

export default function VideoOfRecipesDetails({ videoUrl }) {
  const videoID = () => {
    const video = videoUrl.match(/(?:\?v=)(.*)/);
    return video[1];
  };

  return (
    <div className="video" data-testid="video">
      <iframe
        width="360"
        height="202"
        src={ `https://www.youtube.com/embed/${videoID()}` }
        title="YouTube video player"
        frameBorder="0"
        allow={ `accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;picture-in-picture` }
        allowFullScreen
      />
    </div>
  );
}

VideoOfRecipesDetails.propTypes = {
  videoUrl: PropTypes.string,
}.isRequired;
