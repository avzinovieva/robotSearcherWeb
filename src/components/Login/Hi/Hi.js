import React from "react";
import styles from "./hi.module.scss";
import hi from "../../../img/hiCloud.png"

const  Hi = () => {
    return (
        <div className={styles.hi}>
            <img src={hi} alt="hello" />
        </div>
    );
}

export default Hi;