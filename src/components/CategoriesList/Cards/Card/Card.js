import React from 'react';
import styles from './Card.module.scss';

//Function to check if card need !-sign
function IsUrgent(props) {
    if (props == true) {
        return (
            <div className={styles.Urgent}>!</div>
        );
    } else { return null; }
}


function Card(props) {
    return (
        <div className={styles.cardWrapper}>
            {/* !-sign on design
            <div className={styles.IsUrgentContainer}>
                {IsUrgent(props.IsUrgent)}
            </div> */}
            <div className={styles.cardContainer}>
                <div className={styles.category}>{props.category}</div>
                <div className={styles.workTypes}>{props.workTypes}</div>
                <div className={styles.buttonsBlock}>
                    <button className={styles.button}>Edit</button>
                    <button className={styles.button}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
