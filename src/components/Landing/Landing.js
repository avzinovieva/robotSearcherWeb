import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Reason from './Reason/Reason';
import HowItWorks from './HowItWorks/HowItWorks';
import Footer from './Footer/Footer';
import i18n from 'i18n-js';

const Landing = () => {
  document.title = 'Fixe Master';

  const language = localStorage.getItem('fixe_landing_master_lang');
  if (language == null) {
    i18n.locale = 'ua';
    localStorage.setItem('fixe_landing_master_lang', 'UA');
  } else {
    i18n.locale = language.toLocaleLowerCase();
  }

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
      <AboutUs/>
      <Reason/>
      <HowItWorks/>
      <Footer
        instagram = {socialsLinks.instagram}
        facebook = {socialsLinks.facebook}
        twitter = {socialsLinks.twitter}
      />
    </div>
  );
};

export default Landing;
