import React from "react";
import styles from './order.module.scss';

const Order = (props) =>{
    return(
        <div className={styles.orderWrapper}>
            {props.img ? <img src="" alt="user img" className={styles.img}/> : <div className={styles.img}></div> }
            <p>Customer name</p>
            <p>Status</p>
            <p>OrderId</p>
            <p>Request data</p>
            <p>Money amount</p>
        </div>
    )
}

export  default Order;