import React from 'react';

const InstagramIcon = () => (
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
      <path fill="#2A5B83" d="M38.743 19.295c0 10.62-8.61 19.23-19.23 19.23-10.62 0-19.229-8.61-19.229-19.23 0-10.62 8.61-19.23 19.23-19.23 10.62 0 19.229 8.61 19.229 19.23" />
      <path fill="#FFF" d="M27.075 9.96H12.92c-1.219 0-2.207.986-2.207 2.202v14.166c0 1.216.988 2.202 2.207 2.202h14.155c1.22 0 2.207-.986 2.207-2.202V12.162a2.205 2.205 0 0 0-2.207-2.202zm-3.015 2.901c0-.32.26-.58.58-.58h1.74c.321 0 .581.26.581.58v1.741c0 .32-.26.58-.58.58H24.64a.58.58 0 0 1-.58-.58v-1.74zm-4.04 2.843a3.567 3.567 0 0 1 3.57 3.563 3.567 3.567 0 0 1-3.57 3.562 3.567 3.567 0 0 1-3.572-3.562 3.567 3.567 0 0 1 3.571-3.563zm7.522 10.505c0 .32-.26.58-.58.58H13.033a.58.58 0 0 1-.58-.58v-8.705h2.32c-.301.435-.404 1.247-.404 1.763 0 3.107 2.535 5.635 5.65 5.635 3.114 0 5.649-2.528 5.649-5.635 0-.516-.074-1.316-.449-1.763h2.322v8.705z" />
    </g>
  </svg>
);

export default InstagramIcon;
