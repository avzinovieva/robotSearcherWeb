import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBar';
import RightBar from './RightBar/RightBar';
import styles from './topBar.module.scss';

const TopBarMobile = ({ isMobile }) => (
  <div className={styles.mobileMenu}>
    <Container>
      <Row>
        <Col><NavBar isMobile={isMobile} /></Col>
      </Row>
      <Row>
        <Col>
          <RightBar isMobile={isMobile} />
        </Col>
      </Row>
    </Container>
  </div>
);

TopBarMobile.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default TopBarMobile;
