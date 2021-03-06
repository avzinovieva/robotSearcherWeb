import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { price } from '../../../state/modules/workTypesPrice/action';
import styles from './WorkTypeCard.module.scss';

const WorkTypeCard = ({ workTypesFunc, category, id }) => {
  const [priceArray, setPriceArray] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line max-len
    workTypesFunc(id).then((item) => {
      if (item.payload === undefined) {
        setPriceArray([]);
      } else { setPriceArray(item.payload.data); }
    });
  }, []);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.workTypesCategories}>{category}</div>
        <div className={styles.workTypesPrice}>{priceArray}</div>
        <div className={styles.buttonsBlock}>
          <button className={styles.button}>Edit</button>
          <button className={styles.button}>Delete</button>
        </div>
      </div>
    </div>
  );
};

WorkTypeCard.propTypes = {
  workTypesFunc: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.array.isRequired,
};

WorkTypeCard.defaultProps = {
  page: 1,
  workTypes: [],
  price: [],
};

const mapStateToProps = ({ id }) => ({
  loading: price({ id }).loading,
  price: price({ id }).price,
});

export default connect(
  () => mapStateToProps,
  { workTypesFunc: price },
)(WorkTypeCard);
