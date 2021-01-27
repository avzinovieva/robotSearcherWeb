import React from 'react';
import android from '../../../img/android.png';
import logo from '../../../img/fixeLogo.png';
import facebookIcon from '../../../img/facebook.png';
import twitterIcon from '../../../img/twitter.png';
import instagramIcon from '../../../img/instagram.png';
import t from '../../../translations/i18n';
import masterQR from '../../../img/MasterQR.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GetMessage from './GetMessage/GetMessage';

import styles from './footer.module.scss';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';

const Footer = ({instagram, facebook, twitter}) => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const isTablet = useMediaQuery('(max-width:992px)');

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <p className={styles.subtitle}>{t('landing.footer.title')}</p>
        <GetMessage/>
        <div className={styles.downloadBlock}>
          <div className={styles.downloadAndroidBlock}>
            <div className={styles.android}>
              <img src={android} alt="android"/>
              <p className={`${styles.text} ${styles.dedicated}`}>
                {t('landing.footer.android')}
              </p>
            </div>
            <button className={styles.download}>Скачать приложение</button>
            <p className={styles.text}>
              <span className={styles.dedicated}>iOS - </span>
              {t('landing.footer.soon')}
              <span className={styles.dedicated}> App Store</span>
            </p>
          </div>
          { !isMobile && <div className={styles.downloadQRBlock}>
            <img src={masterQR} alt="masterQR" className={styles.qrCode}/>
            <p className={styles.text}>
              <span className={styles.dedicated}>QR - </span>
              {t('landing.footer.qrCode')}
            </p>
          </div>}
        </div>
        <div className={styles.links} id = 'contacts'>
          {!isTablet ?
              <div className={styles.link_block} style = {{textAlign: 'left'}}>
                <img src={logo} alt="" className={styles.footer_logo}/>
              </div> :
              <div className={styles.link_block}>
                <p className={styles.text}>{t('landing.footer.socials')}</p>
                <div className={styles.socials}>
                  <a href={facebook}><img src={facebookIcon} alt=""/></a>
                  <a href={twitter}><img src={twitterIcon} alt=""/></a>
                  <a href={instagram}><img src={instagramIcon} style={{marginRight: '0'}} alt=""/></a>
                </div>
              </div>
          }
          <div className={styles.link_block}>
            <p className={styles.text}>{t('landing.footer.city')}</p>
            <p className={styles.text}>+380 957 173 772</p>
            <p className={styles.text}>fixe.services@gmail.com</p>
          </div>
          {isTablet ?
              <div className={styles.link_block}>
                <img src={logo} alt="" className={styles.footer_logo}/>
              </div> :
              <div className={styles.link_block} style = {{display: 'flex', justifyContent: 'flex-end'}}>
                <div style = {{}} >
                  <p className={styles.text}>{t('landing.footer.socials')}</p>
                  <div className={styles.socials}>
                    <a href={facebook}><img src={facebookIcon} alt=""/></a>
                    <a href={twitter}><img src={twitterIcon} alt=""/></a>
                    <a href={instagram}><img src={instagramIcon} alt=""/></a>
                  </div>
                </div>
              </div>
          }
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
};

export default Footer;
