import React from 'react';
import PropTypes from 'prop-types';

import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer = ({ onClickFunc }) => (
  <Container className={styles.footer} onClick={() => onClickFunc()}>
    <Row>
      <Col>
        <button className={styles.button}>
          <span className={styles.footerButtonImg}>&#43;</span>
        </button>
      </Col>
    </Row>
  </Container>
);

Footer.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
};

export default Footer;
