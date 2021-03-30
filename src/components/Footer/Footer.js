import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({ onClickFunc }) => (
  <div className={styles.footer} onClick={() => onClickFunc()}>
    <button className={styles.button}>
      <div className={styles.footerButtonImg}>+</div>
    </button>
  </div>
);

Footer.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
};

export default Footer;
