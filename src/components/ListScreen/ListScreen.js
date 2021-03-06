import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import TopBar from '../TopBar/TopBar';
import PaginationBar from '../Pagination/Pagination';
import InputSearch from '../OrderList/InputSearch/InputSearch';
import Footer from '../FooterAdmin/Footer';
import ListTile from '../ListTile/ListTile';
import ListTileDescriptionsHeader from '../ListTile/ListTileDescriptionsHeader';
import Popup from '../ManageMasterModal/ManageMasterModal';
import styles from './listScreen.module.scss';
import t from '../../translations/i18n';

const ListScreen = ({
  loading, items, type, inputSearchPlaceholder, showTheTableHeader,
}) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isVisibleAccept, setVisibleAccept] = useState(false);
  const [isVisibleDecline, setVisibleDecline] = useState(false);
  const [masterIdPopup, setMasterIdPopup] = useState(-1);
  const pagesCount = Math.ceil(items.length / itemsPerPage);

  const getItemsToOutput = (items, type) => {
    const lastIndex = (items.length < page * itemsPerPage) ? items.length : page * itemsPerPage;
    const firstIndex = (page - 1) * itemsPerPage;

    if (filter === '') {
      return items.slice(firstIndex, lastIndex);
    }

    if (type === 'ordersList') {
      return items.filter((el) => el.orderId === Number(filter)
          || el.masterName === filter).slice(firstIndex, lastIndex);
    }
    if (type === 'mastersList' || type === 'mastersRequestsList') {
      return items.filter((el) => el.masterName === filter).slice(firstIndex, lastIndex);
    }
  };
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pagination = (handleChange, page = 1, pagesCount) => (
    <div className={styles.pagination}>
      <PaginationBar
        handleChange={handleChange.bind(this)}
        pageNumber={page}
        pagesCount={pagesCount}
      />
    </div>
  );
  const closePopup = () => {
    setVisibleAccept(false);
    setVisibleDecline(false);
  };

  return (
    <div>
      <Container fluid className={styles.containerFluid}>
        <Row className={styles.orderListWrapper}>
          <Col xl={12}>
            {isVisibleAccept
              ? (
                <Popup
                  type="accept"
                  display="flex"
                  id={masterIdPopup}
                  closePopup={closePopup}
                />
              )
              : (
                <Popup
                  type="accept"
                  display="none"
                  id={masterIdPopup}
                  closePopup={closePopup}
                />
              )}
            {isVisibleDecline
              ? (
                <Popup
                  type="decline"
                  display="flex"
                  id={masterIdPopup}
                  closePopup={closePopup}
                />
              )
              : (
                <Popup
                  type="decline"
                  display="none"
                  id={masterIdPopup}
                  closePopup={closePopup}
                />
              )}
            <TopBar />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl={6} xs={12} md={6} className={styles.title_list}>
            {t(`${type}.header`)}
          </Col>
          <Col xl={6} xs={12} md={6}>
            <InputSearch
              onChangeFunc={(text) => setFilter(text)}
              inputSearchPlaceholder={inputSearchPlaceholder}
              type="ordersList"
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12} lg={12}>
            { showTheTableHeader ? <ListTileDescriptionsHeader /> : null}
          </Col>
        </Row>
        <Row>
          <Col>
            {
              getItemsToOutput(items, type).map((item, i) => {
                let itemData = [];
                let id = -1;
                if (type === 'ordersList') {
                  itemData = [
                    { item: item.userImage, flag: 'img' },
                    { item: item.userName, flag: 'title' },
                    { item: item.orderStatus, flag: 'subtitle' },
                    { item: item.orderId, flag: 'p' },
                    { item: item.requestDate, flag: 'date' },
                    { item: item.price, flag: 'p' }];

                  id = item.orderId;
                } else if (type === 'mastersList') {
                  itemData = [
                    { item: item.userImage, flag: 'img' },
                    { item: item.userName, flag: 'bold' },
                    { item: item.masterEmail, flag: 'violet' },
                    { item: item.masterCategories, flag: 'p' }];

                  id = item.masterId;
                } else if (type === 'mastersRequestsList') {
                  itemData = [
                    { item: item.userImage, flag: 'img' },
                    { item: item.masterName, flag: 'bold' },
                    { item: item.masterEmail, flag: 'violet' },
                    { item: item.masterCategories, flag: 'p' },
                    { item: '', flag: 'buttons' },
                  ];

                  id = item.masterId;
                }

                return (
                  <ListTile
                    key={i}
                    type={type}
                    itemData={itemData}
                    id={id}
                    openPopupAccept={() => {
                      setMasterIdPopup(id);
                      setVisibleAccept(true);
                    }}
                    openPopupDecline={() => {
                      setMasterIdPopup(id);
                      setVisibleDecline(true);
                    }}
                  />
                );
              })
                }
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <Footer onClickFunc={
              () => {
                setItemsPerPage(itemsPerPage + 10);
                setPage(1);
              }
            }
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12} className={styles.pagination}>
            {pagination(handleChange, page, pagesCount)}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ListScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  inputSearchPlaceholder: PropTypes.string.isRequired,
  showTheTableHeader: PropTypes.bool.isRequired,
};

export default ListScreen;
