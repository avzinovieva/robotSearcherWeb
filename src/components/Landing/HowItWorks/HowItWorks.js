import React from 'react';
import phoneScreen from '../../../img/mobileScreen.png';
import t from '../../../translations/i18n';

import styles from './howItWorks.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const HowItWorks = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('landing.howItWorks.title')}</h2>
      <div className={styles.aboutUsContent}>
          <div className={styles.imgWrapper}>
        <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
          <img src={phoneScreen} alt="" className={styles.img}/>
        </ScrollAnimation>
          </div>
          <div>
              <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
            <p className={styles.text}>{t('landing.howItWorks.p1')}</p>
            <p className={styles.text}>{t('landing.howItWorks.p2')}</p>
              </ScrollAnimation>
          </div>
      </div>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
        <p className={styles.subtitle}>{t('landing.howItWorks.p3')}</p>
      </ScrollAnimation>
    </div>
  );
};

export default HowItWorks;
