import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {
  if (window.location.pathname === '/login') return null;
  // TODO: add checking for user to be authenticated

  return (
    <div className={styles.navigation}>
      <div className={styles.item}>
        <NavLink to='/orderList' className={styles.item}> Orders </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/categories' className={styles.item}> Categories </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/users' className={styles.item}>Users </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/payment' className={styles.item}>Payment </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
