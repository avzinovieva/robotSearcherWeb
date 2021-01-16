import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import {TextField} from '@material-ui/core';
import styles from './cuponActivation.module.scss';
import {partialRegistration} from '../../state/modules/partialRegistration';
import {sendMyCode, getIsReferralValid} from '../../state/modules/referrals';

const splitPath = () => {
  const splitedPath = window.location.pathname.split('/');
  return splitedPath[splitedPath.length - 1];
};
const {user} = '';

// eslint-disable-next-line max-len
const CouponActivation = ({loading, isCodeValid, sendCode, partialRegistration}) => {
  useEffect( () => {
    sendCode(splitPath()).then((item) => console.log(item));
    isCodeValid(splitPath()).then((item) => console.log(item));
  }, []);
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
            className={styles.textField}
            label="Email"
            variant="outlined"
            onChange={(text)=>user.email = text}
          />
        </div>
        <TextField
          className={styles.textField}
          label="Username"
          variant="outlined"
          onChange={(text)=>user.email = text}/>
        <button
          className={styles.buttonStyle}
          variant="contained"
          disabled> Activate </button>
      </div>
    </div>
  );
};

CouponActivation.propTypes = {
  loading: PropTypes.bool.isRequired,
  sendCode: PropTypes.func.isRequired,
  partialRegistration: PropTypes.func.isRequired,
  isCodeValid: PropTypes.func.isRequired,
};

const mapStateToProps = ({sendMyCode}) => ({
  loading: sendMyCode.loading,
});

export default connect(
    () => mapStateToProps,
    {
      sendCode: sendMyCode,
      isCodeValid: getIsReferralValid,
      partialRegisterUser: partialRegistration,
    })(CouponActivation);
