import React from "react";
import styles from './topBar.module.scss';
import logo from '../../img/fixeLogo.png';
import NavBar from './NavBar/NavBar';

const TopBar = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.wrapper}>
                <img src={logo} alt="logo" className={styles.logo}/>
                <NavBar />
            </div>
        </div>
    );
}

export default TopBar;