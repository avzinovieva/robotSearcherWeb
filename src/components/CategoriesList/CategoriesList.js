import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../translations/i18n';
import TopBar from '../TopBar/TopBar';
import Cards from './Cards/Cards';
import Footer from '../Footer/Footer';
import PaginationBar from './Pagination/Pagination';
import { categories } from '../../state/modules/categories/action';

import styles from './CategoriesList.module.scss';

const CategoriesList = ({ loading, categoriesFunc, categories }) => {
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(24);

  useEffect(() => {
    categoriesFunc();
  }, [categoriesFunc]);

  const pagesCount = Math.ceil(categories.length / cardsPerPage);

  // OnChange function for pagination and pagination element
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pagination = (handleChange, page = 1, pagesCount) => (
    <div className={styles.Pagination}>
      <PaginationBar
        handleChange={handleChange.bind(this)}
        pageNumber={page}
        pagesCount={pagesCount}
      />
    </div>
  );
  return (
    <div>
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
        <Footer onClickFunc={
          () => {
            setCardsPerPage(cardsPerPage + 10);
            setPage(1);
          }
        }
        />
        {pagination(handleChange, page, pagesCount)}
      </div>
    </div>
  );
};

CategoriesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  categoriesFunc: PropTypes.func.isRequired,
};

CategoriesList.defaultProps = {
  page: 1,
  categories: [],
};

const mapStateToProps = ({ categories }) => ({
  loading: categories.loading,
  categories: categories.categories,
});

export default connect(
  () => mapStateToProps,
  { categoriesFunc: categories },
)(CategoriesList);
