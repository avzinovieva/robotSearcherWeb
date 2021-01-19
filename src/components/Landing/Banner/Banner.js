import React, {useState} from 'react';
import logo from '../../../img/fixeLogo.png';
import textImg from '../../../img/textBox.png';
import textImgMobile from '../../../img/textBox_mobile.png';
import facebookIcon from '../../../img/facebook.png';
import twitterIcon from '../../../img/twitter.png';
import instagramIcon from '../../../img/instagram.png';
import corgi from '../../../img/corgi.png';
import bottomArrow from '../../../img/arrowBottom.png';
import bars from '../../../img/bar.png';
import t from '../../../translations/i18n';
import i18n from 'i18n-js';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import styles from './banner.module.scss';

const Banner = () => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const languages = ['RU', 'UA', 'EN'];
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('fixe_landing_master_lang'));
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>

        {isMobile &&
        <p className={styles.selectedLanguage}>{selectedLanguage}</p>}
        <div className={styles.navigation}>
          <img src={logo} alt="logo" className={styles.logo}/>
          {isMobile && <img src={bars} alt="bars" className = {styles.bars}/>}
          {!isMobile && <div className={styles.links}>
            <a
              href=""
              className={styles.navLink}
            >{t('landing.banner.aboutUs')}</a>
            <a href="" className={styles.navLink}>{t('landing.banner.contacts')}</a>
            <div className={styles.navLink}>
              {
                languages.map( (item, i) => {
                  const underlinedState = selectedLanguage === item ? '1px solid #ffffff' : 'none';
                  return (
                    <div key={i}>
                      <a href="" className={styles.lang} style = {{'borderBottom': underlinedState}} onClick={() => {
                        i18n.locale = item.toLocaleLowerCase();
                        localStorage.setItem('fixe_landing_master_lang', item);
                        setSelectedLanguage(item);
                      }}>{item}</a>
                      {i !== languages.length -1 && <span>/</span>}
                    </div>
                  );
                })
              }
            </div>
          </div> }
        </div>

        <div className={styles.bannerContent}>
          <div className={styles.corgiTextWrapper}>
            {isMobile ?
                <img
                  src={textImgMobile}
                  alt=""
                  className={styles.corgiTextBackground}/> :
                <img
                  src={textImg}
                  alt=""
                  className={styles.corgiTextBackground}/>
            }
            <h1 className={styles.corgiText}>{t('landing.banner.corgiText')}</h1>
          </div>
          <div className={styles.subtitles}>
            <h2 className={styles.bannerSubtitle}>{t('landing.banner.subtitle1')}</h2>
            <h2 className={styles.bannerSubtitle}>{t('landing.banner.subtitle2')}</h2>
          </div>
          <div>
            <div className={styles.socials}>
              <img src={facebookIcon} alt="facebook"/>
              <img src={twitterIcon} alt="twitter"/>
              <img src={instagramIcon} alt="instagram"/>
            </div>
          </div>
        </div>
        <div className={styles.corgiImgWrapper}>
          <img src={corgi} alt="corgi" className={styles.corgiImg}/>
        </div>
        <img src={bottomArrow} alt="scroll" className={styles.bottomArrow}/>
      </div>
    </div>
  );
};

export default Banner;
