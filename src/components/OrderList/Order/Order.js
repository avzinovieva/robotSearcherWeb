import React from 'react';
import PropTypes from 'prop-types';

import styles from './order.module.scss';

const Order = ({orderData}) =>{
    return(
        <div className={styles.orderWrapper}>
            <img src={orderData.masterImageUrl} alt='user_img' className={styles.img}/>
            <div className={styles.description}>
                <p className={styles.customerName}>{orderData.masterName}</p>
                <p className={styles.status}>{orderData.orderStatus}</p>
            </div>
            <p className={styles.orderID}>{orderData.orderId}</p>
            <p className={styles.requestData}>{orderData.requestDate.split('T')[0].split('-').reverse().join('/')}</p>
            <p className={styles.amount}>{orderData.extraPrice}</p>
        </div>
    )
}

Order.propTypes = {
    orderData: PropTypes.object.isRequired,
};

export  default Order;