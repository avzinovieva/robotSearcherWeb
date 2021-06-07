import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import textImg from '../../../img/textBox.png';
import textImgMobile from '../../../img/textBox_mobile.png';
import facebookIcon from '../../../img/facebook.png';
import twitterIcon from '../../../img/twitter.png';
import instagramIcon from '../../../img/instagram.png';
import telegramIcon from '../../../img/telegram.png';
import corgi from '../../../img/corgi.png';
import bottomArrow from '../../../img/arrowBottom.png';
import t from '../../../translations/i18n';
import NavigationForLanding from './Navigation/NavigationForLanding';

import styles from './banner.module.scss';

const Banner = ({
  instagram, facebook, twitter, telegram,
}) => {
  const isMobile = useMediaQuery('(max-width:576px)');

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <NavigationForLanding />
        <div className={styles.content}>
          <div className={styles.bannerContent}>
            <div className={styles.corgiTextWrapper}>
              {
                isMobile
                  ? (
                    <div className={styles.corgiTextBackgroundMobile}>
                      <h1
                        className={styles.corgiText}
                      >
                        {t('landing.banner.corgiText')}
                      </h1>
                    </div>
                  )
                  : (
                    <div className={styles.corgiTextBackground}>
                      <h1
                        className={styles.corgiText}
                      >
                        {t('landing.banner.corgiText')}
                      </h1>
                    </div>
                  )
            }
            </div>
            <div>
              <h2
                className={styles.bannerSubtitle}
              >
                {t('landing.banner.subtitle1')}
              </h2>
              <h2
                className={styles.bannerSubtitle}
              >
                {t('landing.banner.subtitle2')}
              </h2>
            </div>
            <div>
              <div className={styles.socials}>
                <a href={facebook} className={styles.social_link}>
                  <img src={facebookIcon} alt="facebook" />
                </a>
                <a href={twitter} className={styles.social_link}>
                  <img src={twitterIcon} alt="twitter" />
                </a>
                <a href={instagram} className={styles.social_link}>
                  <img src={instagramIcon} alt="instagram" />
                </a>
                <a href={telegram} className={styles.social_link}>
                  <img src={telegramIcon} alt="telegram" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.corgiImgWrapper}>
            <img src={corgi} alt="corgi" className={styles.corgiImg} />
          </div>
        </div>
        <Link to="about" spy smooth>
          <img src={bottomArrow} alt="scroll" className={styles.bottomArrow} />
        </Link>
      </div>
    </div>
  );
};

Banner.propTypes = {
  instagram: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  telegram: PropTypes.string.isRequired,
};

export default Banner;
