import React from 'react';

import logobodysitetile from '../../assets/homepage/bodysitetile-1.png';
import logop2p from '../../assets/homepage/integrations-p2p.png';
import logojane from '../../assets/homepage/integrations-jane.png';
import logocerbo from '../../assets/homepage/integrations-cerbo.png';
import logooptimetra from '../../assets/homepage/integrations-optimetra.png';
import logobetter from '../../assets/homepage/integrations-better.png';
import logocharm from '../../assets/homepage/integrations-charm.png';
import '../../styles/components/homepage/_companies.scss';

const galleryArray = [
  { src: logobodysitetile, alt: 'bodysitetile Logo' },
  { src: logop2p, alt: 'p2p Logo' },
  { src: logojane, alt: 'jane Logo' },
  { src: logocerbo, alt: 'cerbo Logo' },
  { src: logooptimetra, alt: 'optimetra Logo' },
  { src: logobetter, alt: 'better Logo' },
  { src: logocharm, alt: 'charm Logo' }
];


const LandingGallery = () => {
  const galleryItems = galleryArray.concat(galleryArray.slice(0)).map(company =>
    <div key={company.src} className="companies-gallery-item">
      <img src={company.src} alt={company.alt} />
    </div>);

  return (
    <section className="companies">
      <div className="companies-description">
        <h2>Integrations</h2>
        <p>You can now easily dispense professional-grade supplements from the industry's largest online catalog directly to your patients, without inventory, and without leaving your EHR platform.
</p>
      </div>
      <div className="companies-gallery">
        <div className="companies-slider">
          {galleryItems}
        </div>
      </div>
    </section>
  );
};

export default LandingGallery;
