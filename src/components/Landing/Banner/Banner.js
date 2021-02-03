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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from 'react-scroll';
import LanguageBlock from './LanguageBlock/LanguageBlock';
import PropTypes from 'prop-types';

import styles from './banner.module.scss';
import coloredBars from '../../../img/coloredBar.png';
import i18n from 'i18n-js';

const Banner = ({instagram, facebook, twitter}) => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const languages = ['RU', 'UA', 'EN'];
  const [selectedLanguage, setSelectedLanguage] =
      useState(localStorage.getItem('fixe_landing_master_lang'));

  const navMenuRef = React.createRef();
  const lanMenuRef = React.createRef();

  const navigationMenu = () => {
    return (
      <div className={styles.mobileMenu} ref={navMenuRef}>
        <img
          src={coloredBars}
          alt="bars"
          className = {styles.bars}
          onClick={
            ()=>navMenuRef.current.classList.toggle(styles.closeMobileMenu)
          }
        />
        <a href="#">
          <Link
            to="about"
            spy={true}
            smooth={true}>
            {t('landing.banner.aboutUs')}
          </Link>
        </a>
        <a href="#">
          <Link
            to="contacts"
            spy={true}
            smooth={true}>
            {t('landing.banner.contacts')}
          </Link>
        </a>
      </div>
    );
  };
  const languageMenu = () => {
    return (
      <div className={styles.languageMenu} ref={lanMenuRef}>
        <p
          className={`${styles.selected} ${styles.text}`}
          onClick={
            // eslint-disable-next-line max-len
            () => lanMenuRef.current.classList.toggle(styles.closeMobileMenu)
          }
        >{selectedLanguage}</p>
        <div >
          {
            languages.map((item, i) => {
              if (item !== selectedLanguage) {
                return <p
                  key={i}
                  className={styles.text}
                  onClick={() => {
                    i18n.locale = item.toLocaleLowerCase();
                    localStorage.setItem('fixe_landing_master_lang', item);
                    setSelectedLanguage(item);
                    window.location.reload();
                  }}
                >{item}</p>;
              }
            })
          }
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        {
          isMobile && <p
            className={styles.selectedLanguage}
            onClick={
              () => lanMenuRef.current.classList.toggle(styles.closeMobileMenu)
            }
          >{selectedLanguage}</p>
        }
        <div className={styles.navigation}>
          <img src={logo} alt="logo" className={styles.logo}/>
          {
            isMobile && <img
              src={bars}
              alt="bars"
              className = {styles.bars}
              onClick={
                ()=>navMenuRef.current.classList.toggle(styles.closeMobileMenu)
              }
            />
          }
          {
            navigationMenu()
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
                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}>
                  {t('landing.banner.contacts')}</Link>
              </a>
              <div className={styles.navLink}>
                {
                  languages.map( (item, languageIndex) =>
                  // eslint-disable-next-line react/jsx-key
                    <LanguageBlock
                      selectedLanguage={selectedLanguage}
                      languages={languages}
                      curLanguage={item}
                      indexLanguage={languageIndex}
                      setSelectedLanguage={() => setSelectedLanguage()}
                    />,
                  )
                }
              </div>
            </div>
          }
        </div>
        {
          languageMenu()
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
              <a href={facebook} className={styles.social_link}>
                <img src={facebookIcon} alt="facebook"/>
              </a>
              <a href={twitter} className={styles.social_link}>
                <img src={twitterIcon} alt="twitter"/>
              </a>
              <a href={instagram} className={styles.social_link}>
                <img src={instagramIcon} alt="instagram"/>
              </a>
            </div>
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

Banner.propTypes = {
  instagram: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Banner;
