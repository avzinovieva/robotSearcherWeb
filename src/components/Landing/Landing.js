import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Reason from './Reason/Reason';
import HowItWorks from './HowItWorks/HowItWorks';
import Footer from './Footer/Footer';
import BannerCustomer from './BannerCustomer/BannerCustomer';

const Landing = ({
  aboutUsParagraphs,
  reasonsParagraphs,
  mobileScreenImg,
  howItWorksParagraphs,
  howItWorksSubtitle,
  landingType,
  reasonsCorgiText,
}) => {
  const socialsLinks = {
    instagram: 'https://instagram.com/fixe.me',
    facebook: '',
    twitter: '',
  };

  return (
    <div>
      {landingType === 'master'
        ? (
          <Banner
            instagram={socialsLinks.instagram}
            facebook={socialsLinks.facebook}
            twitter={socialsLinks.twitter}
          />
        )
        : (
          <BannerCustomer
            instagram={socialsLinks.instagram}
            facebook={socialsLinks.facebook}
            twitter={socialsLinks.twitter}
          />
        )}
      <AboutUs aboutUsParagraphs={aboutUsParagraphs} landingType={landingType} />
      <Reason reasonsParagraphs={reasonsParagraphs} corgiText={reasonsCorgiText} />
      <HowItWorks
        mobileScreenImg={mobileScreenImg}
        howItWorksParagraphs={howItWorksParagraphs}
        howItWorksSubtitle={howItWorksSubtitle}
        landingType={landingType}
      />
      <Footer
        instagram={socialsLinks.instagram}
        facebook={socialsLinks.facebook}
        twitter={socialsLinks.twitter}
      />
    </div>
  );
};

Landing.propTypes = {
  aboutUsParagraphs: PropTypes.array.isRequired,
  reasonsParagraphs: PropTypes.array.isRequired,
  reasonsCorgiText: PropTypes.string.isRequired,
  mobileScreenImg: PropTypes.string.isRequired,
  howItWorksParagraphs: PropTypes.array.isRequired,
  howItWorksSubtitle: PropTypes.string.isRequired,
  landingType: PropTypes.string.isRequired,
};

export default Landing;