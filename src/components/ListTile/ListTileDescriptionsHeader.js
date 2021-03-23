import React from 'react';
import t from '../../translations/i18n';
import styles from './listTile.module.scss';

const ListTileDescriptionsHeader = () => (
  <div className={styles.tileWrapperHeaderDescriptions}>
    <div className={styles.p__name}>{`${t('ordersList.orderTableHeaders.userName')}`}</div>
    <div className={styles.p__orderId}>{`${t('ordersList.orderTableHeaders.orderId')}`}</div>
    <div className={styles.p__requestData}>{`${t('ordersList.orderTableHeaders.requestData')}`}</div>
    <div className={styles.p__moneyAmount}>{`${t('ordersList.orderTableHeaders.moneyAmount')}`}</div>
  </div>
);

export default ListTileDescriptionsHeader;
