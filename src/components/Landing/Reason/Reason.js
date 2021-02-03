import React from 'react';
import corgi from '../../../img/corgi.png';
import textBoxBorder from '../../../img/textBoxBorder.png';
import t from '../../../translations/i18n';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

import styles from './reason.module.scss';

const Reason = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('landing.reasons.title')}</h2>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
        <div className={styles.corgiTextWrapper}>
          <img src={textBoxBorder} alt="" className={styles.corgiTextBg}/>
          <p className={styles.corgiText}>
            <span className={styles.fixe}>Fixe </span>
            {t('landing.reasons.corgiText')}
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
        <img src={corgi} alt="" className={styles.corgi}/>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
        <ul className={styles.list}>
          <li>{t('landing.reasons.reason1')}
            <p>{t('landing.reasons.reasonDesc1')}</p>
          </li>
          <li>{t('landing.reasons.reason2')}
            <p>{t('landing.reasons.reasonDesc2')}</p>
          </li>
          <li>{t('landing.reasons.reason3')}
            <p>{t('landing.reasons.reasonDesc3')}</p>
          </li>
        </ul>
      </ScrollAnimation>
    </div>
  );
};

export default Reason;
