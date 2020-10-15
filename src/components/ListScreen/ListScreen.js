import React, {useState} from 'react';
import t from  '../../translations/i18n'
import TopBar from  '../TopBar/TopBar';
import PaginationBar from '../CategoriesList/Pagination/Pagination';
import SearchInput from '../OrderList/InputSearch/InputSearch';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import ListTile from '../ListTile/ListTile';

import styles from './listScreen.module.scss';

const ListScreen = ({loading, items, type}) => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const pagesCount = Math.ceil(items.length / itemsPerPage);
    const getItemsToOutput = (items, type) =>{
        const lastIndex = (items.length < page*itemsPerPage)? items.length: page*itemsPerPage;
        const firstIndex = (page-1)*itemsPerPage;

        if(filter === ''){
            return items.slice(firstIndex, lastIndex)
        }

        if(type === 'ordersList')
            return items.filter(el => el.orderId === Number(filter) || el.masterName === filter).slice(firstIndex, lastIndex);
        if(type === 'mastersList')
            return items.filter(el => el.masterName === filter).slice(firstIndex, lastIndex);
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
            <p className={styles.title}>{t(type + '.header')}</p>
            <SearchInput onChangeFunc={text => setFilter(text)}/>
            {
                getItemsToOutput(items, type).map((item, i) =>{
                    let itemData = [];
                    if(type === 'ordersList'){
                        itemData =[
                        {item: item.masterImageUrl, flag: 'img'},
                        {item: item.masterName, flag: 'title'},
                        {item: item.orderStatus, flag: 'subtitle'},
                        {item: item.orderId, flag: 'p'},
                        {item: item.requestDate, flag: 'date'},
                        {item: item.extraPrice, flag: 'p'},]
                    }
                    else if(type === 'mastersList'){
                        itemData=[
                        {item: item.masterImageUrl, flag: 'img'},
                        {item: item.masterName, flag: 'bold'},
                        {item: item.masterEmail, flag: 'violet'},
                        {item: item.masterCategories, flag: 'p'},]
                    }

                    return <ListTile
                        key={i}
                        itemData={itemData}
                    />
                })
            }
            <div className={styles.pagination}>
                {pagination(handleChange, page, pagesCount)}
            </div>
            <Footer onClickFunc = {
                () => {
                    setItemsPerPage(itemsPerPage+10)
                    setPage(1)}
            }/>
        </div>
    )
}

ListScreen.propTypes = {
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
};

export default ListScreen;