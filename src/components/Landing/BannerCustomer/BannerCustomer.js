import React from 'react';
import NavigationForLanding from '../Banner/Navigation/NavigationForLanding';
import t from '../../../translations/i18n';
import facebookIcon from '../../../img/facebook.png';
import twitterIcon from '../../../img/twitter.png';
import instagramIcon from '../../../img/instagram.png';
import corgi from '../../../img/corgi.png';
import {Link} from 'react-scroll';
import bottomArrow from '../../../img/arrowBottom.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import textBg from '../../../img/textBox_customer.png';
import questionMark from '../../../img/questionMark.png';
import textBg_mobile from '../../../img/textBox_customer_mobile.png';

import styles from './bannerCustomer.module.scss';

const BannerCustomer = ({facebook, twitter, instagram}) => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const corgiTextBg = isMobile ? textBg_mobile : textBg;

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <NavigationForLanding/>
        <img src={questionMark} alt="question" className={styles.question}/>
        <div className={styles.titles}>
          <h2 className={styles.bannerTitle}>
            {t('landingCustomer.banner.subtitle1')}
          </h2>
          <h2 className={styles.bannerTitle}>
            {t('landingCustomer.banner.subtitle2')}
          </h2>
        </div>
        <div className={styles.corgiTextWrapper}>
          <img src={corgiTextBg} alt="" className={styles.corgiTextBackground}/>
          <p className={styles.corgiText}>
            {t('landingCustomer.banner.corgiText')}
          </p>
        </div>
        <div>
          <div className={styles.socials}>
            {facebook.length !== 0 &&
                          <a href={facebook} className={styles.social_link}>
                            <img src={facebookIcon} alt="facebook"/>
                          </a>
            }
            {twitter.length !== 0 &&
                          <a href={twitter} className={styles.social_link}>
                            <img src={twitterIcon} alt="twitter"/>
                          </a>
            }
            <a href={instagram} className={styles.social_link}>
              <img src={instagramIcon} alt="instagram"/>
            </a>
          </div>
        </div>
        <div className={styles.corgiImgWrapper}>
          <img src={corgi} alt="corgi" className={styles.corgiImg}/>
        </div>
        <Link to="about" spy={true} smooth={true}>
          <img src={bottomArrow} alt="scroll" className={styles.bottomArrow}/>
        </Link>
      </div>
    </div>
  );
};

BannerCustomer.propTypes = {
  instagram: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default BannerCustomer;
