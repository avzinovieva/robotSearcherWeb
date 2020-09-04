import React from "react";
import styles from './topBar.module.scss';
import logo from '../../img/fixeLogo.png';

const TopBar = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.wrapper}>
                <img src={logo} alt="logo" className={styles.logo}/>
            </div>
        </div>
    );
}

export default TopBar;