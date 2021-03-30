import React from 'react';
import { NavLink } from 'react-router-dom';
import ringIcon from '../../../img/ring.png';
import profileIcon from '../../../img/user.png';
import { USER_LOGIN, USER_PASS, USER_TOKEN } from '../../../storageKeys';

import styles from './rightBar.module.scss';

const RightBar = () => {
  if (window.location.pathname === '/login') return null;
  // TODO: add checking for user to be authenticated

  return (
    <div className={styles.rightNavigation}>
      <div>
        <NavLink to="/notifications" className={styles.item}>
          <img src={ringIcon} alt="ring" className={styles.ringIcon} />
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile" className={styles.item}>
          <div className={styles.profileWrapper}>
            <img
              src={profileIcon}
              alt="profile"
              className={styles.profileIcon}
            />
          </div>
        </NavLink>
      </div>
      <div
        className={styles.item}
        onClick={() => {
          localStorage.removeItem(USER_TOKEN);
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(USER_PASS);
        }}
      >
        <NavLink to="/" className={styles.logOut}>Выйти</NavLink>
      </div>
    </div>
  );
};

export default RightBar;
