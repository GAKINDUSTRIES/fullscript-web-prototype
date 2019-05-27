import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressiveImage from 'react-progressive-image';
import Navigation from '../components/common/Navigation';
import HomePageFooter from '../components/homepage/HomePageFooter';
import backgroundImage from '../assets/landing.png';
import LandingGallery from '../components/homepage/LandingGallery';
import '../styles/components/homepage/_index.scss';

const HomePage = () => (
  <main className="landing">
    <div className="landing-content with-fixed-nav">
      <div>
        <h1>Grow your practice</h1>
        <p className="description">
          Save time and provide better care by dispensing supplements without inventory
        </p>
      </div>
    </div>
    <ProgressiveImage src={backgroundImage} placeholder="landing.png">
      {src => (
        <div
          style={{ backgroundImage: `url(${src})` }}
          className="landing-hero"
        >
          <Helmet>
            <title>Fullscript | Grow your practice</title>
          </Helmet>
          <Navigation />
        </div>
      )}
    </ProgressiveImage>
    <LandingGallery />
    <HomePageFooter />
  </main>
);

export default HomePage;
