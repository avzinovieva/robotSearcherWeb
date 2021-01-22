import React from 'react';
import coloredBars from '../../../../img/coloredBar.png';
import {Link} from 'react-scroll';
import t from '../../../../translations/i18n';
import PropTypes from 'prop-types';

import styles from './navigationMobileMenu.module.scss';

const NavigationMobileMenu = ({closeMobileNavMenu}) => {
  return (
    <div className={styles.mobileMenu}>
      <img
        src={coloredBars}
        alt="bars"
        className = {styles.bars}
        onClick={closeMobileNavMenu}
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

NavigationMobileMenu.propTypes = {
  closeMobileNavMenu: PropTypes.func.isRequired,
};

export default NavigationMobileMenu;
