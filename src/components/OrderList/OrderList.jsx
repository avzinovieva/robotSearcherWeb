import React from 'react';
import s from './OrderList.module.scss';
import t from  '../../translations/i18n'
import TopBar from "../TopBar/TopBar";
import Order from "./Order/Order";

const OrderList = () => {
    return (
        <div className={s.orderListWrapper}>
            <TopBar/>
            <p className={s.title}>{t('orderList.header')}</p>
            <Order/>
        </div>
    )
}

export default OrderList; 