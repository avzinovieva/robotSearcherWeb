import React from 'react';
import PropTypes from 'prop-types';

import styles from './listTile.module.scss';

const ListTile = ({itemData}) => {

    return(
        <div className={styles.tileWrapper}>
            {
                itemData.map((item) => {
                    switch (item.flag){
                        case 'img':
                            return <img src={item.item} alt='user_img' className={styles.img}/>;
                        case 'date':
                            return <p className={styles.p}>{item.item.split('T')[0].split('-').reverse().join('/')}</p>;
                        case 'title':
                            return  <div className={styles.description}>
                                <p className={styles.bold}>{item.item}</p>
                                <p className={styles.violet}>{itemData.filter((item) => item.flag == 'subtitle')[0].item}</p>
                            </div>;
                        case 'bold':
                            return <p className={styles.bold}>{item.item}</p>;
                        case 'subtitle':
                            return;
                        case 'violet':
                            return <p className={styles.violet}>{item.item}</p>;
                        default:
                            return <p className={styles.p}>{item.item}</p>;
                    }
                })
            }
        </div>
    )
}

ListTile.propTypes = {
    itemData: PropTypes.object.isRequired,
    flags: PropTypes.array.isRequired,
}

export default ListTile;