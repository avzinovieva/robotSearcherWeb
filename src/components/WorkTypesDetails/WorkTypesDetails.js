import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TopBar from '../TopBar/TopBar';
import t from '../../translations/i18n';
import Cards from './Cards/Cards';
import Footer from '../Footer/Footer';
import {categories} from '../../state/modules/categories/action';
import PaginationBar from './Pagination/Pagination';
import ModalWindow from './ModalWindow/ModalWindow';
import styles from './WorkTypesDetails.module.scss';

const WorkTypesDetails = ({loading, categoriesFunc, categories}) => {
    const [page, setPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(24);

    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        categoriesFunc();
    }, []);
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
            <TopBar/>
            <div className={styles.workTypesDetailsTitle}>
                <div className={styles.block}>
                    <div className={styles.title}>{`${t('workTypesDetails.header')}`}</div>
                    <button className={styles.button} onClick={() => setModalActive(true)}> +</button>
                </div>
                {pagination(handleChange, page, pagesCount)}
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <h1 className={styles.modalWindowTitle}>Work types details</h1>
                <form action="">
                    <input type="text" placeholder="Work type name"/>
                    <input type="text" placeholder="Work default price"/>
                    <button>Save</button>
                </form>
            </ModalWindow>
            <div>
                <Cards cards={categories} pageNumber={page}/>
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

WorkTypesDetails.propTypes = {
    loading: PropTypes.bool.isRequired,
    categoriesFunc: PropTypes.func.isRequired,
};

WorkTypesDetails.defaultProps = {
    page: 1,
    categories: [],
};

const mapStateToProps = ({categories}) => ({
    loading: categories.loading,
    categories: categories.categories,
});

export default connect(
    () => mapStateToProps,
    {categoriesFunc: categories},
)(WorkTypesDetails);
