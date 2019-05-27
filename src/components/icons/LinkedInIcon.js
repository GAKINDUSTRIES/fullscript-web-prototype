import React from 'react';

const LinkedInIcon = () => (
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
      <path fill="#187FB8" d="M38.743 19.295c0 10.62-8.61 19.23-19.23 19.23-10.62 0-19.229-8.61-19.229-19.23 0-10.62 8.61-19.23 19.23-19.23 10.62 0 19.23 8.61 19.23 19.23" />
      <path fill="#FFF" d="M11.486 15.882h3.641V27.42h-3.641V15.88zm13.592-.111c2.588 0 4.621 1.66 4.621 5.234v6.416h-4.13v-5.972c0-1.563-.645-2.63-2.066-2.63-1.086 0-1.69.72-1.971 1.414-.106.25-.09.597-.09.943v6.245h-4.09s.052-10.578 0-11.54h4.09v1.812c.242-.792 1.55-1.922 3.636-1.922zm-11.839-5.336c1.344 0 2.17.861 2.196 2 0 1.118-.852 2.003-2.221 2.003h-.026c-1.318 0-2.173-.882-2.173-2 0-1.14.88-2.003 2.224-2.003z" />
    </g>
  </svg>
);

export default LinkedInIcon;
