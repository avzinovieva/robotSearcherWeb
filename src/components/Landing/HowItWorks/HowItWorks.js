import React from 'react';
import phoneScreen from '../../../img/mobileScreen.png';
import t from '../../../translations/i18n';

import styles from './howItWorks.module.scss';

const HowItWorks = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('landing.howItWorks.title')}</h2>
      <div className={styles.aboutUsContent}>
        <img src={phoneScreen} alt="" className={styles.img}/>
        <div>
          <p className={styles.text}>{t('landing.howItWorks.p1')}</p>
          <p className={styles.text}>{t('landing.howItWorks.p2')}</p>
        </div>
      </div>
      <p className={styles.subtitle}>{t('landing.howItWorks.p3')}</p>
    </div>
  );
};

export default HowItWorks;
