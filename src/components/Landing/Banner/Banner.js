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
import NavigationMobileMenu from './NavigationMobileMenu/NavigationMobileMenu';
import t from '../../../translations/i18n';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from 'react-scroll';
import ChangeLanguageMenu from './changeLanguageMenu/ChangeLanguageMenu';
import LanguageBlock from './LanguageBlock/LanguageBlock';

import styles from './banner.module.scss';

const Banner = () => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const languages = ['RU', 'UA', 'EN'];
  const [selectedLanguage, setSelectedLanguage] =
      useState(localStorage.getItem('fixe_landing_master_lang'));
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [isMobileMenuLanguagesOpened, setMobileMenuLanguagesOpened] =
      useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        {
          isMobile && <p
            className={styles.selectedLanguage}
            onClick={() => setMobileMenuLanguagesOpened(true)}
          >{selectedLanguage}</p>
        }
        <div className={styles.navigation}>
          <img src={logo} alt="logo" className={styles.logo}/>
          {
            isMobile && !isMobileMenuOpened && <img
              src={bars}
              alt="bars"
              className = {styles.bars}
              onClick={() => setMobileMenuOpened( true)}/>
          }
          {
            isMobileMenuOpened && <NavigationMobileMenu
              closeMobileNavMenu = {() => setMobileMenuOpened(false)}/>
          }
          {
            !isMobile && <div className={styles.links}>
              <a
                href=""
                className={styles.navLink}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}>
                  {t('landing.banner.aboutUs')}</Link>
              </a>
              <a
                href=""
                className={styles.navLink}>
                {t('landing.banner.contacts')}
              </a>
              <div className={styles.navLink}>
                {
                  languages.map( (item, i) =>
                  // eslint-disable-next-line react/jsx-key
                    <LanguageBlock
                      selectedLanguage={selectedLanguage}
                      languages={languages}
                      curLanguage={item}
                      indexLanguage={i}
                      setSelectedLanguage={() => setSelectedLanguage()}
                    />,
                  )
                }
              </div>
            </div>
          }
        </div>
        {
          isMobileMenuLanguagesOpened && <ChangeLanguageMenu
            closeMenu={() => setMobileMenuLanguagesOpened(false)}
            languages={languages}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage = {() => setSelectedLanguage}/>
        }
        <div className={styles.bannerContent}>
          <div className={styles.corgiTextWrapper}>
            {
              isMobile ?
                <img
                  src={textImgMobile}
                  alt=""
                  className={styles.corgiTextBackground}/> :
                <img
                  src={textImg}
                  alt=""
                  className={styles.corgiTextBackground}/>
            }
            <h1
              className={styles.corgiText}>
              {t('landing.banner.corgiText')}</h1>
          </div>
          <div>
            <h2
              className={styles.bannerSubtitle}>
              {t('landing.banner.subtitle1')}</h2>
            <h2
              className={styles.bannerSubtitle}>
              {t('landing.banner.subtitle2')}</h2>
          </div>
          <div>
            <div className={styles.socials}>
              <a href=""><img src={facebookIcon} alt="facebook"/></a>
              <a href=""><img src={twitterIcon} alt="twitter"/></a>
              <a href=""><img src={instagramIcon} alt="instagram"/></a>
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
