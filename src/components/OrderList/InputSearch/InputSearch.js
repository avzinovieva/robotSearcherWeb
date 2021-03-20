import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../../img/search_icon.png';

import styles from './inputSearch.module.scss';
import t from '../../../translations/i18n';

const InputSearch = ({ onChangeFunc }) => {
  const [filter, setFilter] = useState('');
  return (
    <div className={styles.searchWrapper}>
      <img
        src={searchIcon}
        alt="search"
        className={styles.searchIcon}
        onClick={() => onChangeFunc(filter)}
      />
      <input
        placeholder={`${t('ordersList.inputSearchPlaceholder')}`}
        type="text"
        className={styles.inputSearch}
        onChange={(el) => setFilter(el.target.value)}
        onKeyUp={() => onChangeFunc(filter)}
      />
    </div>
  );
};

InputSearch.propTypes = {
  onChangeFunc: PropTypes.func.isRequired,
};

export default InputSearch;
