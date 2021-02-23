import React, { useState } from 'react';
import { Link } from 'react-scroll';
import i18n from 'i18n-js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from '../../../../img/fixeLogo.png';
import bars from '../../../../img/bar.png';
import t from '../../../../translations/i18n';
import LanguageBlock from '../LanguageBlock/LanguageBlock';
import coloredBars from '../../../../img/coloredBar.png';

import styles from '../banner.module.scss';

const NavigationForLanding = () => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const languages = ['RU', 'UA', 'EN'];
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('fixe_landing_master_lang'));

  const navMenuRef = React.createRef();
  const lanMenuRef = React.createRef();

  const navigationMenu = () => (
    <div className={styles.mobileMenu} ref={navMenuRef}>
      <img
        src={coloredBars}
        alt="bars"
        className={styles.bars}
        onClick={
            () => navMenuRef.current.classList.toggle(styles.closeMobileMenu)
          }
      />
      <a href="#">
        <Link
          to="about"
          spy
          smooth
        >
          {t('landing.banner.aboutUs')}
        </Link>
      </a>
      <a href="#">
        <Link
          to="contacts"
          spy
          smooth
        >
          {t('landing.banner.contacts')}
        </Link>
      </a>
      <a href="#">
        {t('landing.banner.investors')}
      </a>
    </div>
  );
  const languageMenu = () => (
    <div className={styles.languageMenu} ref={lanMenuRef}>
      <p
        className={`${styles.selected} ${styles.text}`}
        onClick={
            () => lanMenuRef.current.classList.toggle(styles.closeMobileMenu)
          }
      >
        {selectedLanguage}
      </p>
      <div>
        {
            languages.map((item, i) => {
              if (item !== selectedLanguage) {
                return (
                  <p
                    key={i}
                    className={styles.text}
                    onClick={() => {
                      i18n.locale = item.toLocaleLowerCase();
                      localStorage.setItem('fixe_landing_master_lang', item);
                      setSelectedLanguage(item);
                      window.location.reload();
                    }}
                  >
                    {item}
                  </p>
                );
              }
            })
          }
      </div>
    </div>
  );

  return (
    <div>
      {
        isMobile && (
        <p
          className={styles.selectedLanguage}
          onClick={
            () => lanMenuRef.current.classList.toggle(styles.closeMobileMenu)
          }
        >
          {selectedLanguage}
        </p>
        )
      }
      <div className={styles.navigation}>
        <img src={logo} alt="logo" className={styles.logo} />
        {
          isMobile && (
          <img
            src={bars}
            alt="bars"
            className={styles.bars}
            onClick={
              () => navMenuRef.current.classList.toggle(styles.closeMobileMenu)
            }
          />
          )
        }
        <h3 className={styles.version}>1.0.0</h3>
        {
          navigationMenu()
        }
        {
          !isMobile && (
          <div className={styles.links}>
            <a
              href=""
              className={styles.navLink}
            >
              <Link
                to="about"
                spy
                smooth
              >
                {t('landing.banner.aboutUs')}
              </Link>
            </a>
            <a
              href=""
              className={styles.navLink}
            >
              <Link
                to="contacts"
                spy
                smooth
              >
                {t('landing.banner.contacts')}
              </Link>
            </a>
            <a
              href=""
              className={styles.navLink}
            >
              {t('landing.banner.investors')}
            </a>
            <div className={styles.navLink}>
              {
                languages.map((item, languageIndex) => (
                  <LanguageBlock
                    key={languageIndex}
                    selectedLanguage={selectedLanguage}
                    languages={languages}
                    curLanguage={item}
                    indexLanguage={languageIndex}
                    setSelectedLanguage={() => setSelectedLanguage()}
                  />
                ))
              }
            </div>
          </div>
          )
        }
      </div>
      {
        languageMenu()
      }
    </div>
  );
};

export default NavigationForLanding;
