import React from "react";
import styles from "./Footer.module.scss";
import buttonImg from "../../../img/moreButton.png";

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <p>More</p>
            <button className={styles.button}><img src={buttonImg} alt="buttonImg" /></button>
        </div>
    );
}

export default Footer;