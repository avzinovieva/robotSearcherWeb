import React from 'react';
import PropTypes from 'prop-types';
import t from '../../../translations/i18n';
import ScrollAnimation from 'react-animate-on-scroll';


import styles from './howItWorks.module.scss';

const HowItWorks = ({
  mobileScreenImg,
  howItWorksParagraphs,
  howItWorksSubtitle,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('landing.howItWorks.title')}</h2>
      <div className={styles.aboutUsContent}>
        <div className={styles.imgWrapper}>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
            <img src={mobileScreenImg} alt="" className={styles.img}/>
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
            <p className={styles.text}>{t('landing.howItWorks.p1')}</p>
            {
                  (howItWorksParagraphs.length > 1) ?
                      <ul>
                        {
                          howItWorksParagraphs.map((text, i) =>
                            <li key={i}>{text}</li>,
                          )
                        }
                      </ul> :
                      <p className={styles.text}>{howItWorksParagraphs[0]}</p>
            }
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
        <p className={styles.subtitle}>{howItWorksSubtitle}</p>
      </ScrollAnimation>
    </div>
  );
};

HowItWorks.propTypes = {
  mobileScreenImg: PropTypes.string.isRequired,
  howItWorksParagraphs: PropTypes.array.isRequired,
  howItWorksSubtitle: PropTypes.string.isRequired,
};

export default HowItWorks;
