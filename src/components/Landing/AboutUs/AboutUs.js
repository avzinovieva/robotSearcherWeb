import React from 'react';
import girl from '../../../img/girlWithPhone.png';
import t from '../../../translations/i18n';

import styles from './aboutUs.module.scss';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const AboutUs = () => {
    const isMobile = useMediaQuery('(max-width:576px)');
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('landing.aboutUs.title')}</h2>
      <div>
        <div className={styles.paragraphs}>
          <p className={styles.text}>{t('landing.aboutUs.p1')}</p>
          <p className={styles.text}>{t('landing.aboutUs.p2')}</p>
          {!isMobile && <p className={styles.text}>{t('landing.aboutUs.p3')}</p>}
        </div>
        <img src={girl} alt="" className={styles.girl}/>
          {isMobile && <p className={styles.textBottom} style={{width: '70%'}}>{t('landing.aboutUs.p3')}</p>}
      </div>

    </div>
  );
};

export default AboutUs;
