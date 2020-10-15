import React from 'react';
import Card from './Card/Card'
import styles from './Cards.module.scss';
import { categories } from '../../../state/modules/categories/action';

function Cards(props) {
    //Set page value. Finding first and last card on the page
    let pageNumber = (props.pageNumber == undefined)? 1 : props.pageNumber;
    let lastCardIndex = (props.cards.length < pageNumber*24)? props.cards.length: pageNumber*24;
    let firstCardIndex = (pageNumber-1)*24;
    //All cards on the page:
    let cardsElements = props.cards.slice(firstCardIndex, lastCardIndex).map(
        card => <Card id={card.id} category={card.name} workTypes={'work types'}/>);

    return (
        <div className={styles.cardsBlock}>
                {cardsElements}
        </div>
    )
}

Cards.defaultProps = {
    cards:[],
}
export default Cards;