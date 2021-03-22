import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import corgi from '../../../img/corgi.png';
import t from '../../../translations/i18n';
import 'animate.css/animate.compat.css';
import PropTypes from 'prop-types';

import styles from './reason.module.scss';

const Reason = ({ reasonsParagraphs, corgiText }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{t('landing.reasons.title')}</h2>
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <div className={styles.corgiTextWrapper}>
        <p className={styles.corgiText}>
          <span className={styles.fixe}>Fixe </span>
          {corgiText}
        </p>
      </div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRight" animateOnce>
      <img src={corgi} alt="" className={styles.corgi} />
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInLeft" animateOnce>
      <ul className={styles.list}>
        {
            reasonsParagraphs.map((reasonTextObj, index) => (
              <li key={index}>
                {reasonTextObj.reason}
                <p>{reasonTextObj.description}</p>
              </li>
            ))
          }
      </ul>
    </ScrollAnimation>
  </div>
);

Reason.propTypes = {
  reasonsParagraphs: PropTypes.array.isRequired,
  corgiText: PropTypes.string.isRequired,
};

export default Reason;
