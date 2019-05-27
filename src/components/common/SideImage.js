import React from 'react';
import { string, integer } from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

const SideImage = ({ src, placeholder, className = 'side-img' }) => (
  <ProgressiveImage src={src} placeholder={placeholder}>
    {src =>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={className}
      />
    }
  </ProgressiveImage>
);

SideImage.propTypes = {
  src: string.isRequired,
  placeholder: string.isRequired,
  className: string
};

export default SideImage;
