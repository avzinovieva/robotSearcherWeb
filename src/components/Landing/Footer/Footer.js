import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import android from '../../../img/android.png';
import logo from '../../../img/fixeLogo.png';
import facebookIcon from '../../../img/facebook.png';
import twitterIcon from '../../../img/twitter.png';
import instagramIcon from '../../../img/instagram.png';
import telegramIcon from '../../../img/telegram.png';
import t from '../../../translations/i18n';

import styles from './footer.module.scss';

const Footer = ({
  instagram, facebook, twitter, telegram, download, qrCode
}) => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const isTablet = useMediaQuery('(max-width:992px)');

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        {/* <p className={styles.subtitle}>{t('landing.footer.title')}</p> */}
        {/* <GetMessage/> */}
        <div className={styles.downloadBlock}>
          <div className={styles.downloadAndroidBlock}>
            <div className={styles.android}>
              <img src={android} alt="android" />
              <p className={`${styles.text} ${styles.dedicated}`}>
                {t('landing.footer.android')}
              </p>
            </div>
            <a href={download}>
              <button className={styles.download}>
                {t('landing.footer.download')}
              </button>
            </a>
            <p className={styles.text}>
              <span className={styles.dedicated}>iOS - </span>
              {t('landing.footer.soon')}
              <span className={styles.dedicated}> App Store</span>
            </p>
          </div>
          { !isMobile && (
          <div className={styles.downloadQRBlock}>
            <img src={qrCode} alt="masterQR" className={styles.qrCode} />
            <p className={styles.text}>
              <span className={styles.dedicated}>QR - </span>
              {t('landing.footer.qrCode')}
            </p>
          </div>
          )}
        </div>
        <div className={styles.links} id="contacts">
          {!isTablet
            ? (
              <div className={`${styles.link_block} ${styles.leftPos}`}>
                <img src={logo} alt="" className={styles.footer_logo} />
              </div>
            )
            : (
              <div className={styles.link_block}>
                <p className={styles.text}>{t('landing.footer.socials')}</p>
                <div className={styles.socials}>
                  <a href={facebook} className={styles.social_link_footer}>
                    <img src={facebookIcon} alt="" />
                  </a>
                  <a href={twitter} className={styles.social_link_footer}>
                    <img src={twitterIcon} alt="" />
                  </a>
                  <a href={instagram} className={styles.social_link_footer}>
                    <img src={instagramIcon} alt="" />
                  </a>
                  <a href={telegram} className={styles.social_link_footer}>
                    <img src={telegramIcon} alt="" />
                  </a>
                </div>
              </div>
            )}
          <div className={styles.link_block}>
            <p className={styles.text}>{t('landing.footer.city')}</p>
            <p className={styles.text}>+380 957 173 772</p>
            <p className={styles.text}>fixe.services@gmail.com</p>
          </div>
          {isTablet
            ? (
              <div className={styles.link_block}>
                <img src={logo} alt="" className={styles.footer_logo} />
              </div>
            )
            : (
              <div className={`${styles.link_block} ${styles.rightPos}`}>
                <div>
                  <p className={styles.text}>{t('landing.footer.socials')}</p>
                  <div className={styles.socials}>
                    <a href={facebook} className={styles.social_link_footer}>
                      <img src={facebookIcon} alt="" />
                    </a>
                    <a href={twitter} className={styles.social_link_footer}>
                      <img src={twitterIcon} alt="" />
                    </a>
                    <a href={instagram} className={styles.social_link_footer}>
                      <img src={instagramIcon} alt="" />
                    </a>
                    <a href={telegram} className={styles.social_link_footer}>
                      <img src={telegramIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            )}
        </div>
        <p className={styles.copyright}>
          © 2020-2021 Fixe. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  instagram: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  telegram: PropTypes.string.isRequired,
  download: PropTypes.string.isRequired,
  qrCode: PropTypes.string.isRequired,
};

export default Footer;
