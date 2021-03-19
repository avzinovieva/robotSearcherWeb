import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopBar from '../TopBar/TopBar';
import t from '../../translations/i18n';
import WorkTypeCardsArray from './WorkTypeCards/WorkTypeCardsArray';
import Footer from '../Footer/Footer';
import { workTypes } from '../../state/modules/workTypes/action';
import PaginationBar from './Pagination/Pagination';
import ModalWindow from './ModalWindow/ModalWindow';
import styles from './WorkTypesDetails.module.scss';
import formStyles from './FormStyle.module.scss';

const WorkTypesDetails = ({ loading, workTypesFunc, workTypes }) => {
  const [page, setPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(24);
  const [workTypesArray, setWorkTypesArray] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const splitPath = () => {
    const splitedPath = window.location.pathname.split('/');
    return splitedPath[splitedPath.length - 1];
  };

  useEffect(() => {
    workTypesFunc(splitPath()).then((item) => {
      (!item.payload) ? setWorkTypesArray([]) : setWorkTypesArray(item.payload.data);
    });
  }, [workTypesFunc]);

  const pagesCount = Math.ceil(workTypesArray.length / cardsPerPage);
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
      <TopBar />
      <div className={styles.workTypesDetailsTitle}>
        <div className={styles.block}>
          <div className={styles.title}>{`${t('workTypesDetails.header')}`}</div>
          <button className={styles.button} onClick={() => setModalActive(true)}> +</button>
        </div>
        {pagination(handleChange, page, pagesCount)}
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <h1 className={styles.modalWindowTitle}>Work types details</h1>
        <form className={formStyles.modal__content_form} action="">
          <input className={formStyles.modal__content_input} type="text" placeholder="Work type name" />
          <input className={formStyles.modal__content_input} type="text" placeholder="Work default price" />
          <button className={formStyles.modal__content_button}>Save</button>
        </form>
      </ModalWindow>
      <div>
        <WorkTypeCardsArray cards={workTypesArray} pageNumber={page} loading={loading} />
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
  workTypesFunc: PropTypes.func.isRequired,
};

WorkTypesDetails.defaultProps = {
  page: 1,
  workTypes: [],

};

const mapStateToProps = ({ id }) => ({
  loading: workTypes({ id }).loading,
  workTypes: workTypes({ id }).workTypes,
});

export default connect(
  () => mapStateToProps,
  { workTypesFunc: workTypes },
)(WorkTypesDetails);
