import React from 'react';
import PropTypes from 'prop-types';

import styles from './listTile.module.scss';

const ListTile = ({itemData, id, openPopupAccept, openPopupDecline}) => {
  return (
    <div className={styles.tileWrapper} dataid={id}>
      {
        itemData.map((item) => {
          switch (item.flag) {
            case 'img':
              return <img
                src={item.item}
                alt='img'
                className={styles.img}
              />;
            case 'date':
              return <p className={styles.p}>
                {item.item.split('T')[0].split('-').reverse().join('/')}
              </p>;
            case 'title':
              return <div className={styles.description}>
                <p className={styles.bold}>{item.item}</p>
                <p className={styles.violet}>
                  {itemData.filter((item) => item.flag === 'subtitle')[0].item}
                </p>
              </div>;
            case 'bold':
              return <p className={styles.bold}>{item.item}</p>;
            case 'subtitle':
              return;
            case 'violet':
              return <p className={styles.violet}>{item.item}</p>;
            case 'buttons':
              return <div>
                <button
                  className={[styles.button, styles.decline].join(' ')}
                  onClick={openPopupDecline}
                >{'Decline'}</button>
                <button
                  className={[styles.button, styles.accept].join(' ')}
                  onClick={openPopupAccept}
                >{'Accept'}</button>
              </div>;
            default:
              return <p className={styles.p}>{item.item}</p>;
          }
        })
      }
    </div>
  );
};

ListTile.propTypes = {
  itemData: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  openPopupAccept: PropTypes.func.isRequired,
  openPopupDecline: PropTypes.func.isRequired,
};

export default ListTile;
