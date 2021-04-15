import React from 'react';
import PropTypes from 'prop-types';
import Card from './WorkTypeCard';
import styles from './Cards.module.scss';
import {Col, Container, Row} from "react-bootstrap";

const WorkTypeCardsArray = ({ pageNumber, cards }) => {
  pageNumber = (!pageNumber) ? 1 : pageNumber;
  const lastCardIndex = (cards.length < pageNumber * 24) ? cards.length : pageNumber * 24;
  const firstCardIndex = (pageNumber - 1) * 24;
  const cardsElements = cards.slice(firstCardIndex, lastCardIndex).map(
    (card, i) => (
      <Card
        key={i}
        id={card.id}
        category={card.name}
      />
    ),
  );
  return (
      <Container>
        <Row>
          <Col xl={12}>
            <div className={styles.cardsBlock}>
              {cardsElements}
            </div>
          </Col>
        </Row>
      </Container>

  );
};

WorkTypeCardsArray.defaultProps = {
  cards: [],
};

WorkTypeCardsArray.propTypes = {
  cards: PropTypes.array.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default WorkTypeCardsArray;
