import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { price } from '../../../state/modules/workTypesPrice/action';
import styles from './WorkTypeCard.module.scss';
import t from '../../../translations/i18n';

const WorkTypeCard = ({ workTypesFunc, category, id }) => {
  const [priceArray, setPriceArray] = useState([]);

  useEffect(() => {
    workTypesFunc(id).then((item) => {
      (!item.payload) ? setPriceArray([]) : setPriceArray(item.payload.data);
    });
  }, []);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.workTypesCategories}>{category}</div>
        <div className={styles.workTypesPrice}>{priceArray}</div>
        <div className={styles.buttonsBlock}>
          <button className={styles.button}>{`${t('workTypesDetails.cards.buttonEdit')}`}</button>
          <button className={styles.button}>{`${t('workTypesDetails.cards.buttonDelete')}`}</button>
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
