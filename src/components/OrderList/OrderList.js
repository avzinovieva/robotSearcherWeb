import React, {useEffect, useState} from 'react';
import t from  '../../translations/i18n'
import TopBar from  '../TopBar/TopBar';
import Order from './Order/Order';
import PaginationBar from '../CategoriesList/Pagination/Pagination';
import SearchInput from './InputSearch/InputSearch';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import {orders} from '../../state/modules/orders/action';
import PropTypes from 'prop-types';

import styles from './OrderList.module.scss';

const OrderList = ({loading, ordersFunc, orders}) => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [ordersPerPage, setOrdersPerPage] = useState(10);

    useEffect(() => {
        ordersFunc();
    },[]);

    const pagesCount = Math.ceil(orders.length / ordersPerPage);
    const getOrdersToOutput = (orders) =>{
        const lastIndex = (orders.length < page*ordersPerPage)? orders.length: page*ordersPerPage;
        const firstIndex = (page-1)*ordersPerPage;

        if(filter === ''){
            return orders.slice(firstIndex, lastIndex)
        }

        return orders.filter(el => el.orderId === Number(filter) || el.masterName === filter).slice(firstIndex, lastIndex)
    }
    const handleChange = (event, value) => { setPage(value); };
    const pagination = (handleChange, page = 1, pagesCount) => {
        return (
            <div className={styles.pagination}>
                <PaginationBar handleChange={handleChange.bind(this)} pageNumber={page} pagesCount={pagesCount} />
            </div>)};

    return (
        <div className={styles.orderListWrapper}>
            <TopBar/>
            <div className={styles.pagination}>
                {pagination(handleChange, page, pagesCount)}
            </div>
            <p className={styles.title}>{t('orderList.header')}</p>
            <SearchInput onChangeFunc={text => setFilter(text)}/>
            {
                getOrdersToOutput(orders).map((item, i) =>
                    <Order orderData = {item} key={i} pageNum={page}/>)
            }
            <div className={styles.pagination}>
                {pagination(handleChange, page, pagesCount)}
            </div>
            <Footer onClickFunc = {
                () => {
                    setOrdersPerPage(ordersPerPage+10)
                    setPage(1)}
            }/>
        </div>
    )
}

OrderList.propTypes = {
    loading: PropTypes.bool.isRequired,
    ordersFunc: PropTypes.func.isRequired,
    orders: PropTypes.array.isRequired,
};

OrderList.defaultProps = {
    orders:[],
}

const mapStateToProps = ({orders}) => ({
    loading: orders.loading,
    orders: orders.orders,
});

export default connect(
    () => mapStateToProps,
    {ordersFunc: orders})(OrderList);