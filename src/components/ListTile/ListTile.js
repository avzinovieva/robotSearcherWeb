import React from 'react';
import PropTypes from 'prop-types';

import { Col, Container, Row } from 'react-bootstrap';
import styles from './listTile.module.scss';

const ListTile = ({
  itemData, id, openPopupAccept, openPopupDecline,
}) => (
  <Container key={id} className={styles.tileWrapper} dataid={id}>
    <Row>
      {
        itemData.map((item, i) => {
          switch (item.flag) {
            case 'img':
              return (
                <Col xl={1} lg={1} md={1} sm={2} xs={12} className={styles.img}>
                  <img
                    key={i}
                    src={item.item}
                    alt="img"
                    className={styles.img}
                  />
                </Col>
              );
            case 'date':
              return (
                <Col xl={3} lg={3} md={3} sm={3} xs={6}>
                  <p key={i + 3} className={styles.p}>
                    {item.item.split('T')[0].split('-').reverse().join('/')}
                  </p>
                </Col>
              );
            case 'title':
              return (
                <Col xl={3} lg={3} md={3} sm={3} xs={12} key={i + 2} className={styles.description}>
                  <p className={styles.bold}>{item.item}</p>
                  <p className={styles.violet}>
                    {itemData.filter((item) => item.flag === 'subtitle')[0].item}
                  </p>
                </Col>
              );
            case 'bold':
              return <p className={styles.bold}>{item.item}</p>;
            case 'subtitle':
              return;
            case 'violet':
              return <p className={styles.violet}>{item.item}</p>;
            case 'buttons':
              return (
                <div>
                  <button
                    className={[styles.button, styles.decline].join(' ')}
                    onClick={openPopupDecline}
                  >
                    Decline
                  </button>
                  <button
                    className={[styles.button, styles.accept].join(' ')}
                    onClick={openPopupAccept}
                  >
                    Accept
                  </button>
                </div>
              );
            default:
              return (
                <Col
                  xl={2}
                  lg={2}
                  md={2}
                  sm={2}
                  xs={3}
                >
                  <p
                    key={i + 1}
                    className={styles.p}
                  >
                    {item.item}
                  </p>
                </Col>
              );
          }
        })
      }
    </Row>
  </Container>

);

ListTile.propTypes = {
  itemData: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  openPopupAccept: PropTypes.func.isRequired,
  openPopupDecline: PropTypes.func.isRequired,
};

export default ListTile;
