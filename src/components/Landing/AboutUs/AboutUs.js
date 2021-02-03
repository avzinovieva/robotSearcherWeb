import React from 'react';
import girl from '../../../img/girlWithPhone.png';
import t from '../../../translations/i18n';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

import styles from './aboutUs.module.scss';

const AboutUs = () => {
  const isMobile = useMediaQuery('(max-width:576px)');
  return (
    <div className={styles.wrapper} id="about">
      <h2 className={styles.title}>{t('landing.aboutUs.title')}</h2>
      <div>
        <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
          <div className={styles.paragraphs}>
            <p className={styles.text}>{t('landing.aboutUs.p1')}</p>
            <p className={styles.text}>{t('landing.aboutUs.p2')}</p>
            {!isMobile &&
            <p className={styles.text}>{t('landing.aboutUs.p3')}</p>}
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
          <img src={girl} alt="girl" className={styles.girl}/>
        </ScrollAnimation>
        {isMobile &&
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
          <p className={styles.textBottom}>{t('landing.aboutUs.p3')}</p>
        </ScrollAnimation>
        }
      </div>
    </div>
  );
};

export default AboutUs;
