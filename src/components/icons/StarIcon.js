
import React from 'react';
import { number, bool, object } from 'prop-types';

const StarIcon = ({ width = 16, height = 16, disabled = false, style = {} }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} viewBox="0 0 16 16">
    <path fill={disabled ? 'rgba(126, 127, 130, 0.65)' : '#f7be00'} fillRule="evenodd" d="M8 11.5l-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L8 1l2.057 4.168 4.6.669-3.328 3.245.785 4.581z" />
  </svg>
);

StarIcon.propTypes = {
  width: number,
  height: number,
  disabled: bool,
  style: object
};

export default StarIcon;
