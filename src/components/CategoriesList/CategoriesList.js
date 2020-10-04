import React, { useState, useEffect } from 'react';
import t from '../../translations/i18n'
import TopBar from '../TopBar/TopBar';
import Cards from './Cards/Cards';
import Footer from '../Footer/Footer';
import PaginationBar from './Pagination/Pagination';
import PropTypes from 'prop-types';
import { categories } from '../../state/modules/categories/action';
import { connect } from 'react-redux';

import styles from './CategoriesList.module.scss';

const CategoriesList = ({loading, categoriesFunc, categories }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        categoriesFunc();
    },[]);

    let cardsPerPage = 24;
    //Amount of all pages with cards
    let pagesCount = Math.ceil(categories.length / cardsPerPage);

    //OnChange function for pagination and pagination element
    const handleChange = (event, value) => { setPage(value); };
    const pagination = (handleChange, page = 1, pagesCount) => {
        return (
            <div className={styles.Pagination}>
                <PaginationBar handleChange={handleChange.bind(this)} pageNumber={page} pagesCount={pagesCount} />
            </div>)};
    return (
        <div >
            <div className={styles.categoriesListWrapper}>
                <TopBar />
            </div>
            <div className={styles.categoriesListTitle}>
                <div className={styles.block}>
                    <div className={styles.title}>{`${t('categoriesList.header')}`}</div>
                    <button className={styles.button}>+</button>
                </div>
                {pagination(handleChange, page, pagesCount)}
            </div>
            <div className={styles.categoriesListContent}>
                <Cards cards={categories} pageNumber={page} />
            </div>
            <div className={styles.FooterBlock}>
                <Footer handleChange={handleChange.bind(this)} />
                {pagination(handleChange, page, pagesCount)}
            </div>
        </div>
    );
}

CategoriesList.propTypes = {
    loading: PropTypes.bool.isRequired,
    categoriesFunc: PropTypes.func.isRequired,
};

CategoriesList.defaultProps = {
    page:1,
    categories:[],
}

const mapStateToProps = ({ categories }) => ({
    loading: categories.loading,
    categories: categories.categories,
});

export default connect(
    () => mapStateToProps,
    { categoriesFunc: categories })(CategoriesList);

