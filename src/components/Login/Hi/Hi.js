import React from 'react';
import hi from '../../../img/hiCloud.png';

import styles from './hi.module.scss';

const Hi = () => {
  return (
    <div className={styles.hi}>
      <img src={hi} alt='hello' />
    </div>
  );
};

export default Hi;
