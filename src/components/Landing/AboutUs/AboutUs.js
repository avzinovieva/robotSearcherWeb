import React from 'react';
import girl from '../../../img/girlWithPhone.png';
import t from '../../../translations/i18n';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import styles from './aboutUs.module.scss';

const AboutUs = () => {
  const isMobile = useMediaQuery('(max-width:576px)');
  return (
    <div className={styles.wrapper} id="about">
      <h2 className={styles.title}>{t('landing.aboutUs.title')}</h2>
      <div>
        <div className={styles.paragraphs}>
          <p className={styles.text}>{t('landing.aboutUs.p1')}</p>
          <p className={styles.text}>{t('landing.aboutUs.p2')}</p>
          {!isMobile &&
            <p className={styles.text}>{t('landing.aboutUs.p3')}</p>}
        </div>
        <img src={girl} alt="girl" className={styles.girl}/>
        {isMobile &&
         <p className={styles.textBottom}>{t('landing.aboutUs.p3')}</p>}
      </div>

    </div>
  );
};

export default AboutUs;
