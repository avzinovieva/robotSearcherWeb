import React from 'react';

import styles from './WorkTypeCard.module.scss';

// eslint-disable-next-line require-jsdoc
function Card(props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.category}>{props.workTypes}</div>
        {console.log(props.workTypes)}
        <div className={styles.workTypes}>{50.99}</div>
        <div className={styles.buttonsBlock}>
          <button className={styles.button}>Edit</button>
          <button className={styles.button}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
