import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Reason from './Reason/Reason';
import HowItWorks from './HowItWorks/HowItWorks';
import Footer from './Footer/Footer';
import PropTypes from 'prop-types';

const Landing = ({
  aboutUsParagraphs,
  reasonsParagraphs,
  mobileScreenImg,
  howItWorksParagraphs,
  howItWorksSubtitle,
}) => {
  const socialsLinks = {
    instagram: 'https://instagram.com/fixe.me',
    facebook: '',
    twitter: '',
  };

  return (
    <div>
      <Banner
        instagram = {socialsLinks.instagram}
        facebook = {socialsLinks.facebook}
        twitter = {socialsLinks.twitter}
      />
      <AboutUs aboutUsParagraphs={aboutUsParagraphs}/>
      <Reason reasonsParagraphs={reasonsParagraphs}/>
      <HowItWorks
        mobileScreenImg={mobileScreenImg}
        howItWorksParagraphs={howItWorksParagraphs}
        howItWorksSubtitle={howItWorksSubtitle}
      />
      <Footer
        instagram = {socialsLinks.instagram}
        facebook = {socialsLinks.facebook}
        twitter = {socialsLinks.twitter}
      />
    </div>
  );
};

Landing.propTypes = {
  aboutUsParagraphs: PropTypes.array.isRequired,
  reasonsParagraphs: PropTypes.array.isRequired,
  mobileScreenImg: PropTypes.string.isRequired,
  howItWorksParagraphs: PropTypes.array.isRequired,
  howItWorksSubtitle: PropTypes.string.isRequired,
};

export default Landing;
