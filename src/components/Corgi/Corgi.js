import React from "react";
import styles from "./corgi.module.scss";
import corgi from "../../img/corgiWithCloud.png"

const  Corgi = () => {
    return (
        <div className={styles.corgi}>
            <img src={corgi} alt="corgi" />
        </div>
    );
}

export default Corgi;