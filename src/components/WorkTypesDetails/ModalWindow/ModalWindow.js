import React from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import styles from './ModalWindowStyle.module.scss';

const ModalWindow = (props) => {
  const { active, setActive } = props;
  const { children } = props;
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <div className={styles.ts}>
            <div
              className={active ? styles.modal_active : styles.modal}
              onClick={() => setActive(false)}
            >
              <div
                className={active ? styles.modal__content_active : styles.modal__content}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ModalWindow;
