import React from 'react';
import logo from '../../img/fixeLogo.png';
import NavBar from './NavBar/NavBar';
import RightBar from './RightBar/RightBar';

import styles from './topBar.module.scss';

const TopBar = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.wrapper}>
        <img
          src={logo}
          alt='logo'
          className={styles.logo}
          onClick={() => window.location.reload()}/>
          <p className={styles.version}>1.0.0</p>
        <NavBar />
        <RightBar/>
      </div>
    </div>
  );
};

export default TopBar;
