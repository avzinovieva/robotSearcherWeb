import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import t from '../../../translations/i18n';

const NavBar = ({ isMobile }) => {
  if (window.location.pathname === '/login') return null;
  // TODO: add checking for user to be authenticated

  return (
    <div className={!isMobile ? styles.navigation : styles.navigationMobile}>
      <div className={styles.item}>
        <NavLink to="/orderList" className={styles.item}>{`${t('topBar.orders')}`}</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/categories" className={styles.item}>{`${t('topBar.categories')}`}</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users" className={styles.item}>{`${t('topBar.users')}`}</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/payment" className={styles.item}>{`${t('topBar.payment')}`}</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/categoriesPrice" className={styles.item}>{`${t('topBar.categoriesPrice')}`}</NavLink>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default NavBar;
