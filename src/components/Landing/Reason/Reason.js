import React from 'react';
import corgi from '../../../img/corgi.png';
import textBoxBorder from '../../../img/textBoxBorder.png';
import t from '../../../translations/i18n';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import PropTypes from 'prop-types';

import styles from './reason.module.scss';

const Reason = ({reasonsParagraphs}) => {
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
          {
            reasonsParagraphs.map((reasonTextObj, index) =>
              <li key={index}>{reasonTextObj.reason}
                <p>{reasonTextObj.description}</p>
              </li>,
            )
          }
        </ul>
      </ScrollAnimation>
    </div>
  );
};

Reason.propTypes = {
  reasonsParagraphs: PropTypes.array.isRequired,
};

export default Reason;
