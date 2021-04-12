import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Card.module.scss';
import t from '../../../../translations/i18n';

function Card(props) {
  const [redirectTo, setRedirectTo] = useState(false);
  const renderRedirect = () => {
    if (redirectTo) {
      return <Redirect to={`/worktypesdetails/${props.id}`} />;
    }
  };
  const redirectHandler = () => {
    setRedirectTo(true);
    renderRedirect();
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.workTypes} onClick={redirectHandler}>
          {props.workTypes}
          {`${t('categories.buttons.workTypesButtonName')}`}
          {renderRedirect()}
        </div>
        <div className={styles.buttonsBlock}>
          <button className={styles.button}>{`${t('categories.buttons.edit')}`}</button>
          <button className={styles.button}>{`${t('categories.buttons.delete')}`}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
