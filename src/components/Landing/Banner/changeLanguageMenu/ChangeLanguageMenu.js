import React from 'react';
import PropTypes from 'prop-types';

import styles from './changeLanguageMenu.module.scss';
import i18n from 'i18n-js';


const ChangeLanguageMenu = ({languages,
  selectedLanguage,
  closeMenu,
  setSelectedLanguage},
) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.selected} ${styles.text}`}
        onClick={closeMenu}
      >{selectedLanguage}</p>
      <div>
        {
          languages.map((item, i) => {
            if (item !== selectedLanguage) {
              return <p
                key={i}
                className={styles.text}
                onClick={() => {
                  i18n.locale = item.toLocaleLowerCase();
                  localStorage.setItem('fixe_landing_master_lang', item);
                  setSelectedLanguage(item);
                  window.location.reload();
                }}
              >{item}</p>;
            }
          })
        }
      </div>
    </div>
  );
};

ChangeLanguageMenu.propTypes = {
  languages: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
};

export default ChangeLanguageMenu;
