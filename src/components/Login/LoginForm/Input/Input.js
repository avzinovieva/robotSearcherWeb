import React from "react";
import styles from "./input.module.scss";
import eye from "../../../../img/eye-off.png";

const Input = (props) => {
    function showHidePass(e) {
        let type =e.target.parentNode.childNodes[0].type;
        type === 'text' ? type = 'password' : type = 'text';
        e.target.parentNode.childNodes[0].type = type;
    };


    return (
        <div className={styles.inputBlock}>
            <input type={props.type} placeholder={props.placeholder} className={styles.input}/>
            {
                (props.showSymbols) ? <img src={eye} className={styles.showPass} alt="eye" onClick={showHidePass}/> : ""
            }
        </div>
    );
}

export  default  Input;