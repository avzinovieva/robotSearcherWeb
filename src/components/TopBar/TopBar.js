import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../img/fixeLogo.png';
import NavBar from './NavBar/NavBar';
import RightBar from './RightBar/RightBar';
import bar from '../../img/bar.png';
import styles from './topBar.module.scss';
import version from '../../configure';
import TopBarMobile from './TopBarMobile';

const TopBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const refIcon = React.createRef();

  return (
    <div>
      <div className={styles.navigation}>
        <Container>
          <Row>
            <Col xl={4} xs={6} md={3} className={styles.logoBox}>
              <img
                src={logo}
                alt="logo"
                className={styles.logo}
                onClick={() => window.location.href = '/orderList'}
              />
              <span className={styles.version}>{version}</span>
            </Col>
            <Col xl={4} md={4} className={styles.navBar}>
              <NavBar isMobile={isMobile} />
            </Col>
            <Col xl={4} md={5} className={styles.rightBar}>
              <RightBar isMobile={isMobile} />
            </Col>
            <Col xs={6} md={2} className={styles.iconBarBox}>
              <img
                ref={refIcon}
                src={bar}
                alt="MenuBar"
                className={styles.menuBarIcon}
                onClick={
                  () => {
                    refIcon.current.classList.toggle(styles.closeMobileMenu);
                    setIsMobile(!isMobile);
                  }
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        {
          isMobile
            ? (
              <TopBarMobile isMobile={isMobile} />
            )
            : null
        }
      </div>
    </div>
  );
};

export default TopBar;
