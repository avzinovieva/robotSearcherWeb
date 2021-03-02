import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.scss'


function Cards(props) {
  // Set page value. Finding first and last card on the page
  const pageNumber = (!props.pageNumber)? 1 : props.pageNumber;
  const lastCardIndex = (props.cards.length < pageNumber*24)? props.cards.length: pageNumber*24;
  const firstCardIndex = (pageNumber-1)*24;
  // All cards on the page:
  const cardsElements = props.cards.slice(firstCardIndex, lastCardIndex).map(
      (card, i) => <Card
        key = {i}
        id={card.id}
        category={card.name}
        workTypes={'work types'}
      />);

  return (
    <div className={styles.cardsBlock}>
      {cardsElements}
    </div>
  );
}

Cards.defaultProps = {
  cards: [],
};
export default Cards;
