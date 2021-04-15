import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import TopBar from '../TopBar/TopBar';
import t from '../../translations/i18n';
import WorkTypeCardsArray from './WorkTypeCards/WorkTypeCardsArray';
import Footer from '../Footer/Footer';
import { workTypes } from '../../state/modules/workTypes/action';
import PaginationBar from '../Pagination/Pagination';
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
    <div className={styles.workTypesBox}>
      <Container fluid>
        <Row>
          <Col xl={12} className={styles.topBarBox}>
            <TopBar />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={styles.titleWrapper}>
          <Col className={styles.titleBox} xl={5} lg={5} md={7} sm={7}>
            <div className={styles.title}>{`${t('workTypesDetails.header')}`}</div>
            <button className={styles.button} onClick={() => setModalActive(true)}>&#43;</button>
          </Col>
          <Col xl={7} lg={7} md={5} sm={5} className={styles.paginationBoxTop}>
            {pagination(handleChange, page, pagesCount)}
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <ModalWindow active={modalActive} setActive={setModalActive}>
              <h1 className={styles.modalWindowTitle}>Work types details</h1>
              <form className={formStyles.modal__content_form} action="">
                <input
                  className={formStyles.modal__content_input}
                  type="text"
                  placeholder={`${t('placeholders.modalWindowInputName')}`}
                />
                <input
                  className={formStyles.modal__content_input}
                  type="text"
                  placeholder={`${t('placeholders.modalWindowInputPrice')}`}
                />
                <button
                  className={formStyles.modal__content_button}
                >
                  {`${t('modalWindow.button')}`}
                </button>
              </form>
            </ModalWindow>
          </Col>
        </Row>
        <Row className={styles.cardsBlock}>
          <WorkTypeCardsArray cards={workTypesArray} pageNumber={page} loading={loading} />
        </Row>
        <Row>
          <Col xl={12} lg={12}>
            <Footer onClickFunc={
                            () => {
                              setCardsPerPage(cardsPerPage + 10);
                              setPage(1);
                            }
                        }
            />
          </Col>
        </Row>
        <Row className={styles.paginationBoxBottom}>
          <Col xl={12} lg={12}>
            {pagination(handleChange, page, pagesCount)}
          </Col>
        </Row>
        <div className={!modalActive ? styles.footerBlock : styles.footerBlockHide} />
      </Container>
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
