import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import React, {useEffect, useRef, useState} from 'react';
import {TextField} from '@material-ui/core';
import {ReCaptcha} from 'react-recaptcha-v3';
import styles from './cuponActivation.module.scss';
import {PARTIAL_REGISTRATION_SUCCESS, partialRegistration} from '../../state/modules/partialRegistration';
import {sendMyCode, getIsReferralValid, CHECK_REFERRAL_CODE_SUCCESS} from '../../state/modules/referrals';
import {Formik} from 'formik';
import t from '../../translations/i18n';
import * as Yup from 'yup';
// eslint-disable-next-line camelcase
import {reCAPTCHA_OPEN_KEY, reCAPTCHA_SECRET_KEY} from '../../storageKeys';
import {loadReCaptcha} from 'react-recaptcha-v3';
import {LOGIN_SUCCESS} from '../../state/modules/login';
import {login} from '../../state/modules/login/action';

const splitPath = () => {
  const splitedPath = window.location.pathname.split('/');
  return splitedPath[splitedPath.length - 1];
};
let recaptcha = '';
const {user} = '';
const declineReasonSchema = Yup.object().shape({
  email: Yup.string()
      .min(10, 'not less then 10 letters')
      .max(255, 'not more then 255 letters')
      .email(`entered string isn't email`)
      .trim()
      .required('Required'),
  phone: Yup.string()
      .min(10, 'number must be not less then 10 numbers')
      .max(13, 'max number count can be not bigger then 13')
      .trim()
      .required('Required'),
  userName: Yup.string()
      .min(6, 'not less then 6 letters')
      .max(255, 'not more then 255 letters')
      .trim()
      .required('Required'),
});

const getCaptcha = async () => {
  return localStorage.getItem(reCAPTCHA_OPEN_KEY);
};
export async function validateRecaptcha(recaptchaToken, expectedAction) {
  expectedAction = 'submit';
  const recaptchaSecret = await localStorage.getItem(reCAPTCHA_SECRET_KEY);
  const url = `https://www.recaptcha.net/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
  const valid = false;
  // const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  // await fetch(url, {method: 'post'})
  //     .then((response) => console.log(response))
  //     .then((data)=> {
  //       valid = (data.success && data.score && data.action && data.score >=0.5 && data.action === expectedAction);
  //     });
  return valid;
}
// eslint-disable-next-line max-len
const CouponActivation = ({loading, isCodeValid, sendCode, partialRegistration, loginUser}) => {
  const [isActive, setIsActive]=useState(false);

  useEffect( () => {
    isCodeValid(splitPath()).then((item) => {
      console.log(item);
      if (item.type===CHECK_REFERRAL_CODE_SUCCESS) {
        setIsActive(false);
      }
    });
    setIsActive(true);
    // let reCaptchaKey='';
    // if (reCaptchaKey==='') {
    //   reCaptchaKey=getCaptcha();
    //   // loadReCaptcha(reCaptchaKey, callback);
    // }
    // TODO to make recaptcha
  }, []);

  const verifyCallback = (recaptchaToken) => {
    // recaptcha.execute().then((item) => console.log(item));
    if (recaptchaToken) {
      validateRecaptcha(recaptchaToken, 'submit');
    };
  };
  return (
    <div>
      <ReCaptcha
        ref={(ref) => recaptcha = ref}
        sitekey={'6LfzADUaAAAAAFEhwt9Drcp3s_w7nVKF0XRIWmL8'}
        action={'submit'}
        verifyCallback={verifyCallback}
      />
      <div className={styles.header}>
        <div className={styles.headerTexts}>
          <p className={styles.fixeHeader}> Fixe </p>
          <p className={styles.secondText}> Coupons activation </p>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <p className={styles.mainContainerText}>Coupons activation  </p>
        <Formik
          initialValues={{
            email: '',
            phone: '',
            userName: '',
          }}
          validationSchema={declineReasonSchema}
          onSubmit={(values) => {
            // loadReCaptcha('6LfzADUaAAAAAFEhwt9Drcp3s_w7nVKF0XRIWmL8', verifyCallback);
            user.email=values.email;
            user.phone=values.phone;
            user.userName=values.userName;
            partialRegistration(user).then((response) => {
              console.log(response);
              if (response.type===PARTIAL_REGISTRATION_SUCCESS) {
                // loginUser(user);
                // TODO ask on Back about pass
                // if (isCodeValid) {
                //   sendCode(splitPath()).then((item) => console.log(item));
                // }
              }
            });
          }}
        >
          {({
            errors,
            setFieldTouched, handleSubmit,
            isValid,
            touched,
            handleChange})=>(
            <div>
              <div className={styles.textField}>
                <TextField
                  className={styles.textField}
                  label="Email"
                  variant="outlined"
                  onBlur={()=>setFieldTouched('email')}
                  onChange={handleChange('email')}
                />
                {touched.email && errors.email &&
                <p className={styles.errorText}> {errors.email}</p>
                }
              </div>
              <div className={styles.textField}>
                <TextField
                  className={styles.textField}
                  label="Phone"
                  variant="outlined"
                  onBlur={()=>setFieldTouched('phone')}
                  onChange={handleChange('phone')}
                />
                {touched.phone && errors.phone &&
                    <p className={styles.errorText}> {errors.phone}</p>
                }
              </div>
              <TextField
                className={styles.textField}
                label="Username"
                variant="outlined"
                onBlur={()=>setFieldTouched('userName')}
                onChange={handleChange('userName')}
              />
              {touched.userName && errors.userName &&
              <p className={styles.errorText}> {errors.userName}</p>
              }
              <button
                className={styles.buttonStyle}
                disabled={!isValid && !isActive}
                onClick={handleSubmit}
              >
                  Activate
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

CouponActivation.propTypes = {
  loading: PropTypes.bool.isRequired,
  sendCode: PropTypes.func.isRequired,
  partialRegistration: PropTypes.func.isRequired,
  isCodeValid: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
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
      loginUser: login,
    })(CouponActivation);
