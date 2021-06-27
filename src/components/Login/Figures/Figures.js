import React from 'react';
import styles from '../login.module.scss';
import t from '../../../translations/i18n';

const Figures = () => (
  <div>
    <div className={styles.figuresBlocks}>
      <svg width="347" height="298" viewBox="0 0 347 298" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.figureOne}>
        <path d="M346.484 297.655L-191.627 215.51L110.643 -192.948L346.484 297.655Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="521" y1="61.8315" x2="158.844" y2="508.28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E0963" />
            <stop offset="1" stopColor="#1A1F9E" />
          </linearGradient>
        </defs>
      </svg>
      <svg className={styles.figureTwo} width="84" height="67" viewBox="0 0 84 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="67.9609" y="66.2058" width="77" height="34" transform="rotate(-151.96 67.9609 66.2058)" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="67.9609" y1="66.2058" x2="142.571" y2="74.4258" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E0963" />
            <stop offset="1" stopColor="#1A1F9E" />
          </linearGradient>
        </defs>
      </svg>
      <svg className={styles.figureThree} width="69" height="79" viewBox="0 0 69 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M69 39.5L-3.71128e-06 78.9042L-2.66458e-07 0.0958413L69 39.5Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="69" y1="-6" x2="64.7155" y2="83.0394" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E0963" />
            <stop offset="1" stopColor="#1A1F9E" />
          </linearGradient>
        </defs>
      </svg>
      <svg className={styles.figureFour} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" transform="rotate(-135 50 50)" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="1.52588e-05" x2="97.8405" y2="4.75972" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E0963" />
            <stop offset="1" stopColor="#1A1F9E" />
          </linearGradient>
        </defs>
      </svg>
      <svg className={styles.figureFive} width="351" height="254" viewBox="0 0 351 254" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.3 0.77672L0.0641954 411.357L350.457 254.127L26.3 0.77672Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="204" y1="-105.999" x2="-140.126" y2="87.1478" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E0963" />
            <stop offset="1" stopColor="#1A1F9E" />
          </linearGradient>
        </defs>
      </svg>
      <svg className={styles.figureSix} width="69" height="79" viewBox="0 0 69 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.42582e-07 39.5L69 0.0958413L69 78.9042L5.42582e-07 39.5Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="85" x2="4.28448" y2="-4.03939" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E0963" />
            <stop offset="1" stopColor="#1A1F9E" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <p className={styles.figuresHeaderText}>
          {t('login.hello')}
        </p>
        <p className={styles.figuresTextP}>{t('login.text')}</p>
      </div>
    </div>
  </div>
);
export default Figures;
