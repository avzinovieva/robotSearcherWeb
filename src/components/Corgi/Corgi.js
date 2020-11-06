import React from 'react';
import corgi from '../../img/corgiWithCloud.png';

import styles from './corgi.module.scss';

const Corgi = () => {
  return (
    <div className={styles.corgi}>
      <img src={corgi} alt='corgi' />
    </div>
  );
};

export default Corgi;
