import React from 'react';
import Card from './Card/Card';
import styles from './Card/Card.module.scss';

function Cards(props) {
  const pageNumber = (!props.pageNumber) ? 1 : props.pageNumber;
  const lastCardIndex = (props.cards.length < pageNumber * 24)
    ? props.cards.length : pageNumber * 24;
  const firstCardIndex = (pageNumber - 1) * 24;
  const cardsElements = props.cards.slice(firstCardIndex, lastCardIndex).map(
    (card, i) => (
      <Card
        key={i}
        id={card.id}
        category={card.name}
        workTypes={card.workTypes}
      />
    ),
  );

  return (
    <div className={styles.cardsBox}>
      {cardsElements}
    </div>
  );
}

Cards.defaultProps = {
  cards: [],
};
export default Cards;
