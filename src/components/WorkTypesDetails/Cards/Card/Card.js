import React from 'react';

import styles from './WorkTypeCard.module.scss';

function Card(props) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.workTypesCategories}>{props.workTypes}</div>
        <div className={styles.workTypesPrice}>{50.99}</div>
        <div className={styles.buttonsBlock}>
          <button className={styles.button}>Edit</button>
          <button className={styles.button}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
