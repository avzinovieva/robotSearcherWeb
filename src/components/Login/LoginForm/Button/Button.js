import React from "react";
import styles from "./button.module.scss";

const Button = (props) => {
    return (
        <div>
            <button className={styles.button}>{props.str}</button>
        </div>
    );
}

export default Button;
