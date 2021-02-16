import React from 'react';
import girl from '../../../img/girlWithPhone.png';
import t from '../../../translations/i18n';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import PropTypes from 'prop-types';

import styles from './aboutUs.module.scss';

const AboutUs = ({aboutUsParagraphs, landingType}) => {
  const isMobile = useMediaQuery('(max-width:576px)');
  return (
    <div className={styles.wrapper} id="about">
      <h2 className={styles.title}>{t('landing.aboutUs.title')}</h2>
      <div>
        <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
          <div className={styles.paragraphs}>
            {
              aboutUsParagraphs.map((paragraph, index) =>{
                if (index!==aboutUsParagraphs.length-1) {
                  return (
                    <p className={styles.text} key={index}>
                      {paragraph}
                    </p>);
                }
              },
              )
            }
            {!isMobile &&
            <p className={styles.text}>
              {aboutUsParagraphs[aboutUsParagraphs.length-1]}
            </p>}
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
          <img src={girl} alt="girl" className={styles.girl}/>
        </ScrollAnimation>
        {isMobile &&
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
          <p className={`${styles.textBottom} ${landingType === 'customer' && styles.textBottomCustomer}`}>
            {aboutUsParagraphs[aboutUsParagraphs.length-1]}
          </p>
        </ScrollAnimation>
        }
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  aboutUsParagraphs: PropTypes.array.isRequired,
};

export default AboutUs;
