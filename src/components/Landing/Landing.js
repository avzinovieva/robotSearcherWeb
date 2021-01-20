import React from 'react';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Reason from './Reason/Reason';
import HowItWorks from './HowItWorks/HowItWorks';
import Footer from './Footer/Footer';
import i18n from 'i18n-js';

import styles from './landing.module.scss';

const Landing = () => {
  const language = localStorage.getItem('fixe_landing_master_lang');
  if (language == null) {
    i18n.locale = 'UA'.toLocaleLowerCase();
    localStorage.setItem('fixe_landing_master_lang', 'UA');
  } else {
    i18n.locale = language.toLocaleLowerCase();
  }

  return (
    <div className={styles.wrapper}>
      <Banner/>
      <AboutUs/>
      <Reason/>
      <HowItWorks/>
      <Footer i18n = {i18n}/>
    </div>
  );
};

export default Landing;
