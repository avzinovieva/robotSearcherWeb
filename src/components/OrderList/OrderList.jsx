import React from 'react';
import s from './OrderList.module.scss';
import t from  '../../translations/i18n'

const OrderList = () => {
    return (
        <div className={s.title}>{`${t('orderList.header')}`}</div>
    )
}

export default OrderList; 