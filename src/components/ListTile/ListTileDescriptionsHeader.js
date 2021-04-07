import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import t from '../../translations/i18n';
import styles from './listTile.module.scss';

const ListTileDescriptionsHeader = () => (
  <Container className={styles.tileWrapperHeaderDescriptions}>
    <Row>
      <Col xl={6} lg={6} md={6} sm={7} xs={6} className={styles.p__orderId}>{`${t('ordersList.orderTableHeaders.orderId')}`}</Col>
      <Col xl={3} lg={3} md={3} sm={3} className={styles.p__requestData}>{`${t('ordersList.orderTableHeaders.requestData')}`}</Col>
      <Col xl={3} lg={3} md={3} sm={1} xs={6} className={styles.p__moneyAmount}>{`${t('ordersList.orderTableHeaders.moneyAmount')}`}</Col>
    </Row>
  </Container>
);

export default ListTileDescriptionsHeader;
