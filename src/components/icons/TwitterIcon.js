import React from 'react';

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">
    <defs>
      <filter id="a" width="135.9%" height="135.9%" x="-17.9%" y="-12.8%" filterUnits="objectBoundingBox">
        <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
        <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" filter="url(#a)" transform="translate(4 2)">
      <path fill="#24A9E6" d="M38.743 19.295c0 10.62-8.61 19.23-19.23 19.23-10.62 0-19.229-8.61-19.229-19.23 0-10.62 8.61-19.23 19.23-19.23 10.62 0 19.23 8.61 19.23 19.23" />
      <path fill="#FFF" d="M29.255 11.576a7.652 7.652 0 0 1-2.473.967 3.839 3.839 0 0 0-2.84-1.26c-2.148 0-3.89 1.788-3.89 3.991 0 .313.032.617.1.909-3.235-.167-6.102-1.754-8.023-4.171a4.063 4.063 0 0 0-.527 2.008c0 1.384.687 2.606 1.732 3.322a3.815 3.815 0 0 1-1.764-.498v.05c0 1.933 1.342 3.547 3.123 3.912a3.71 3.71 0 0 1-1.025.14c-.251 0-.496-.023-.733-.07.496 1.585 1.932 2.74 3.635 2.77A7.683 7.683 0 0 1 10.81 25.3a10.833 10.833 0 0 0 5.966 1.792c7.159 0 11.073-6.08 11.073-11.354 0-.174-.004-.347-.01-.517a7.992 7.992 0 0 0 1.94-2.066 7.622 7.622 0 0 1-2.234.628 3.985 3.985 0 0 0 1.711-2.207" />
    </g>
  </svg>
);

export default TwitterIcon;
