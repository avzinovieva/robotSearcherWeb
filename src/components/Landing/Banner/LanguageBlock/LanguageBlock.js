import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';

import styles from './languageBlock.module.scss';

const LanguageBlock = ({languages,
  selectedLanguage,
  curLanguage,
  i,
  setSelectedLanguage}) => {
  const underlinedState = selectedLanguage === curLanguage ?
        '1px solid #ffffff' : 'none';
  return (
    <div key={i}>
      <a
        href=""
        className={styles.lang}
        style = {{'borderBottom': underlinedState}}
        onClick={() => {
          i18n.locale = curLanguage.toLocaleLowerCase();
          localStorage
              .setItem('fixe_landing_master_lang', curLanguage);
          setSelectedLanguage(curLanguage);
        }}>{curLanguage}</a>
      {i !== languages.length -1 && <span>/</span>}
    </div>
  );
};

LanguageBlock.propTypes = {
  languages: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  curLanguage: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
};

export default LanguageBlock;
