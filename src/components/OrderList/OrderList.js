import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { orders } from '../../state/modules/orders/action';
import ListScreen from '../ListScreen/ListScreen';
import t from '../../translations/i18n';
import { USER_TOKEN } from '../../storageKeys';

const OrderList = ({ loading, ordersFunc, orders }) => {
  useEffect(() => {
    ordersFunc();
  }, [ordersFunc]);
  const token = localStorage.getItem(USER_TOKEN);
  return (
    token
      ? (
        <ListScreen
          loading={loading}
          items={orders}
          type="ordersList"
          inputSearchPlaceholder={`${t('ordersList.inputSearchPlaceholder')}`}
          showTheTableHeader
        />
      ) : (
        <Redirect to={{
          pathname: '/login',
        }}
        />
      )
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
