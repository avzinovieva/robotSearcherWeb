import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Card.module.scss';

function Card(props) {
  const [redirectTo, setRedirectTo] = useState(false);
  const [cardId, setCardId] = useState(props.id);
  const renderRedirect = () => {
    if (redirectTo) {
      return <Redirect to={"/worktypesdetails/" + props.id} />;
    }
  };
//return <Redirect to={`/worktypesdetails/${cardId}`} />;
  const redirectHandler = () => {
    setRedirectTo(true);
    renderRedirect();
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.category}>{props.category}</div>
        <button className={styles.workTypes} onClick={redirectHandler}>
          {props.workTypes}
          {'Work Types'}
          {renderRedirect()}
        </button>
        <div className={styles.buttonsBlock}>
          <button className={styles.button}>Edit</button>
          <button className={styles.button}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
