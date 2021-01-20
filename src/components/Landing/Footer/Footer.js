import React, {useState} from 'react';
import android from '../../../img/android.png';
import logo from '../../../img/fixeLogo.png';
import facebookIcon from '../../../img/facebook.png';
import twitterIcon from '../../../img/twitter.png';
import instagramIcon from '../../../img/instagram.png';
import t from '../../../translations/i18n';
import masterQR from '../../../img/MasterQR.svg';
import * as Yup from 'yup';
import {Formik} from 'formik';
import InputMask from 'react-input-mask';

import styles from './footer.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const GetLinkMasterSchema = Yup.object().shape({
  phoneNum: Yup.string()
      .min(19, t('landing.footer.errors.minimumLength') + 10)
      .max(20, t('landing.footer.errors.maximumLength') + 14)
      .trim()
      .required(t('landing.footer.errors.required')),
});

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:576px)');
  const isTablet = useMediaQuery('(max-width:992px)');

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <p className={styles.subtitle}>{t('landing.footer.title')}</p>
        <Formik
          initialValues={{
            phoneNum: '',
          }}
          validationSchema={GetLinkMasterSchema}
          onSubmit={(values) => {
            console.log(values.phoneNum.replace(/[^\d]/g, ''));
          }}
        >
          {({
            handleChange,
            errors,
            handleSubmit,
            touched,
            setFieldTouched,
          }) => (
            <div className={styles.sendMessageBlock}>
              {touched.phoneNum && errors.phoneNum &&
              <p className={styles.errorMes}>{errors.phoneNum}</p>}
              <InputMask
                mask="+380 (99) 999-99-99"
                onChange={handleChange('phoneNum')}>
                { () =>
                  <input
                    type='text'
                    className={styles.input}
                    placeholder={'+ 380 (ХХ) ХХХ-ХХ-ХХ'}
                    name={'phoneNum'}
                  />
                }
              </InputMask>
              <button
                className={styles.getLink}
                onClick={handleSubmit}
              >{t('landing.footer.getLink')}</button>
            </div>
          )}
        </Formik>
        <div className={styles.downloadBlock}>
          <div className={styles.downloadAndroidBlock}>
            <div className={styles.android}>
              <img src={android} alt="android"/>
              <p className={`${styles.text} ${styles.dedicated}`}>{t('landing.footer.android')}</p>
            </div>
            <button className={styles.download}>Скачать приложение</button>
            <p className={styles.text}><span className={styles.dedicated}>iOS - </span>{t('landing.footer.soon')}<span className={styles.dedicated}> App Store</span></p>
          </div>
          { !isMobile && <div className={styles.downloadQRBlock}>
            <img src={masterQR} alt="masterQR" className={styles.qrCode}/>
            <p className={styles.text}><span className={styles.dedicated}>QR - </span>{t('landing.footer.qrCode')}</p>
          </div>}
        </div>
        <div className={styles.links}>
          {!isTablet ?
              <img src={logo} alt=""/> :
              <div>
                <p className={styles.text}>{t('landing.footer.socials')}</p>
                <div className={styles.socials}>
                  <img src={facebookIcon} alt=""/>
                  <img src={twitterIcon} alt=""/>
                  <img src={instagramIcon} style={{marginRight: '0'}} alt=""/>
                </div>
              </div>
          }
          <div>
            <p className={styles.text}>{t('landing.footer.city')}</p>
            <p className={styles.text}>+380 957 173 772</p>
            <p className={styles.text}>fixe.services@gmail.com</p>
          </div>
          {isTablet ?
              <img src={logo} alt="" className={styles.logo}/> :
              <div>
                <p className={styles.text}>{t('landing.footer.socials')}</p>
                <div className={styles.socials}>
                  <a href=""><img src={facebookIcon} alt=""/></a>
                  <a href=""><img src={twitterIcon} alt=""/></a>
                  <a href=""><img src={instagramIcon} alt=""/></a>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
