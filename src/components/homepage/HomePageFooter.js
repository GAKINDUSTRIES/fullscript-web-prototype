import React from 'react';

import FacebookIcon from '../icons/FacebookIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';

const LandingFooter = () => (
  <footer className="landing-footer">
    <p>Follow us on:</p>
    <div className="social-links">
      <a href="https://www.facebook.com/Fullscript/" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://www.linkedin.com/company/fullscript" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/FullscriptHQ" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
      <a href="https://www.instagram.com/fullscript/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
    </div>
    <div className="other-links">
      <a
        href="https://fullscript.com/terms-of-service"
      >Terms and Conditions
      </a>
      <span>|</span>
      <a
        href="https://fullscript.com/privacy-policy"
      >Privacy Policy
      </a>
    </div>
  </footer>
);

export default LandingFooter;
