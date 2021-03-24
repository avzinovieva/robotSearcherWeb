import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orders } from '../../state/modules/orders/action';
import ListScreen from '../ListScreen/ListScreen';
import t from '../../translations/i18n';

const OrderList = ({ loading, ordersFunc, orders }) => {
  useEffect(() => {
    ordersFunc();
  }, [ordersFunc]);

  return (
    <ListScreen
      loading={loading}
      items={orders}
      type="ordersList"
      inputSearchPlaceholder={`${t('ordersList.inputSearchPlaceholder')}`}
      showTheTableHeader
    />
  );
};

OrderList.propTypes = {
  loading: PropTypes.bool.isRequired,
  ordersFunc: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
};

OrderList.defaultProps = {
  orders: [],
};

const mapStateToProps = ({ orders }) => ({
  loading: orders.loading,
  orders: orders.orders,
});

export default connect(
  () => mapStateToProps,
  { ordersFunc: orders },
)(OrderList);
