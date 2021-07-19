import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import t from '../../translations/i18n';
import TopBar from '../TopBar/TopBar';
import Cards from './Cards/Cards';
import Footer from '../Footer/Footer';
import PaginationBar from '../Pagination/Pagination';
import { categories } from '../../state/modules/categories/action';
import styles from './CategoriesList.module.scss';
import InputSearch from '../OrderList/InputSearch/InputSearch';
import CheckAccess from '../Utils/CheckAccess';

const CategoriesList = ({ loading, categoriesFunc, categories }) => {
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(24);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    categoriesFunc();
  }, [categoriesFunc]);

  const pagesCount = Math.ceil(categories.length / cardsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const sortCategories = () => {
    if (filter !== '') {
      return categories.filter((item) => item.name === filter);
    }
    return categories;
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
      <CheckAccess childrens />
      <Container fluid className={styles.topBarBox}>
        <Row>
          <Col xl={12}>
            <TopBar />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={styles.categoriesListTitle}>
          <Col className={styles.block} xl={6} lg={6} md={6}>
            <p className={styles.title}>{`${t('categories.header')}`}</p>
            <div className={styles.buttonBox}>
              <button className={styles.button}>&#43;</button>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6}>
            <InputSearch
              inputSearchPlaceholder={`${t('categories.placeholder')}`}
              onChangeFunc={(text) => setFilter(text)}
              type="categories"
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <Cards cards={sortCategories()} pageNumber={page} />
          </Col>
        </Row>
        <Row className={styles.FooterBlock}>
          <Col xl={12}>
            <Footer onClickFunc={
                      () => {
                        setCardsPerPage(cardsPerPage + 10);
                        setPage(1);
                      }
                  }
            />
          </Col>
        </Row>
        <Row className={styles.paginationBox}>
          <Col xl={12}>
            {pagination(handleChange, page, pagesCount)}
          </Col>
        </Row>
      </Container>
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
