import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ringIcon from '../../../img/ring.png';
import profileIcon from '../../../img/user.png';
import { USER_LOGIN, USER_PASS, USER_TOKEN } from '../../../storageKeys';
import styles from './rightBar.module.scss';
import t from '../../../translations/i18n';

const RightBar = ({ isMobile }) => {
  if (window.location.pathname === '/login') return null;
  // TODO: add checking for user to be authenticated

  return (
    <div className={isMobile ? styles.rightNavigationMobile : styles.rightNavigation}>
      <div className={isMobile ? styles.iconsMobile : styles.iconsBase}>
        <div>
          <NavLink to="/notifications" className={isMobile ? styles.itemMobile : styles.item}>
            <img src={ringIcon} alt="ring" className={styles.ringIcon} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/profile" className={isMobile ? styles.itemMobile : styles.item}>
            <div className={styles.profileWrapper}>
              <img
                src={profileIcon}
                alt="profile"
                className={styles.profileIcon}
              />
            </div>
          </NavLink>
        </div>
      </div>
      <div
        className={isMobile ? styles.itemMobile : styles.item}
        onClick={() => {
          localStorage.removeItem(USER_TOKEN);
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(USER_PASS);
        }}
      >
        <NavLink to="/" className={styles.logOut}>{`${t('topBar.exitButton')}`}</NavLink>
      </div>
    </div>
  );
};

RightBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default RightBar;
