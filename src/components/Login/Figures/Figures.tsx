import React from 'react';
import styles from '../login.module.scss';
import t from '../../../translations/i18n';

const Figures: React.FC = () => (
  <div>
    <div className={styles.figuresBlocks}>
      <svg width="347" height="298" viewBox="0 0 347 298" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.figureOne}>
        <path d="M346.484 297.655L-191.627 215.51L110.643 -192.948L346.484 297.655Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="521" y1="61.8315" x2="158.844" y2="508.28" gradientUnits="userSpaceOnUse">
            <stop className={styles.figuresColorBlue} />
            <stop offset="1" className={styles.figuresColorViolet} />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.figureSix} />
      <div className={styles.figuresTextBox}>
        <p className={styles.figuresHeaderText}>
          {t('login.hello')}
        </p>
        <p className={styles.figuresTextP}>{t('login.text')}</p>
      </div>
      <div className={styles.figureTwo} />
      <div className={styles.figureThree} />
      <div className={styles.figureFour} />
      <div className={styles.figureFive} />
    </div>
  </div>
);

export default Figures;
