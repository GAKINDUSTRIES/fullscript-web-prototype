import React from 'react';

const FacebookIcon = () => (
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
      <path fill="#43619C" d="M19.515.066C8.894.066.284 8.676.284 19.297c0 10.617 8.61 19.227 19.231 19.227 10.616 0 19.227-8.61 19.227-19.227 0-10.62-8.61-19.231-19.227-19.231z" />
      <path fill="#FFF" d="M28.87 27.933c0 .567-.278.937-.84.937h-4.731v-7.09h2.406l.364-3.04H23.3v-1.58c0-.81.217-1.459 1.382-1.459h1.657v-2.416c-.507-.035-1.292-.111-2.32-.111-2.137 0-3.758 1.307-3.758 3.707v1.86h-2.533v3.038h2.533v7.091h-8.773c-.567 0-.85-.37-.85-.937V11.391c0-.567.283-1.261.85-1.261H28.03c.563 0 .841.694.841 1.261v16.542z" />
    </g>
  </svg>
);

export default FacebookIcon;
