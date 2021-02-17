import React from 'react';
import styles from './cuponActivation.module.scss';
import {TextField} from '@material-ui/core';

const splitPath = () => {
  const splitedPath = window.location.pathname.split('/');
  return splitedPath[splitedPath.length - 1];
};

const CouponActivation = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerTexts}>
          <p className={styles.fixeHeader}> Fixe </p>
          <p className={styles.secondText}> Сoupons activation </p>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <p className={styles.mainContainerText}>Сoupons activation  </p>
        <div className={styles.textField}>
          <TextField
            label="Email"
            variant="outlined"
            style={{width:'100%'}}
          />


        </div>

        <TextField
          className={styles.textField}
          label="Username"
          variant="outlined"/>
        <button
          className={styles.buttonStyle}
          variant="contained"
          disabled> Activate </button>
      </div>
    </div>
  );
};

export default CouponActivation;
