import React from 'react';
import InputMask from 'react-input-mask';
import t from '../../../../translations/i18n';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useTranslation} from 'react-i18next';
import '../../../../translations/i18next';

import styles from './getMessage.module.scss';


const GetMessage = () => {
  // eslint-disable-next-line no-unused-vars
  const {t1, i18n} = useTranslation();
  const curLanguage = localStorage.getItem('fixe_landing_master_lang');
  if (i18n.language !== curLanguage.toLocaleLowerCase()) {
    i18n.changeLanguage(curLanguage.toLocaleLowerCase());
  }
  return (<Formik
    initialValues={{
      phoneNum: '',
    }}
    validationSchema={
      Yup.object().shape({
        phoneNum: Yup.string()
            .min(19, i18n.t('landing.footer.errors.minimumLength') + 10)
            .max(20, i18n.t('landing.footer.errors.maximumLength') + 14)
            .trim()
            .required(i18n.t('required')),
      })
    }
    onSubmit={(values) => {
      console.log(values.phoneNum.replace(/[^\d]/g, ''));
    }}
  >
    {({
      handleChange,
      errors,
      handleSubmit,
      touched,
    }) => {
      return (
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
      );
    }}
  </Formik>);
};

export default GetMessage;
