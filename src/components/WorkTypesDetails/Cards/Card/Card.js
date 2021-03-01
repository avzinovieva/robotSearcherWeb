import React from 'react';

import styles from './Card.module.scss';

// eslint-disable-next-line require-jsdoc
function Card(props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.workTypes}>{props.workTypes}</div>
        <div className={styles.buttonsBlock}>
          <button className={styles.button}>Edit</button>
          <button className={styles.button}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
