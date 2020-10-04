import React from 'react';
import buttonImg from '../../img/moreButton.png';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({onClickFunc}) => {
    return (
        <div className={styles.footer} onClick={() => onClickFunc()}>
            <p>More</p>
            <button className={styles.button}><img src={buttonImg} alt='buttonImg' /></button>
        </div>
    );
}

Footer.propTypes = {
    onClickFunc: PropTypes.func.isRequired,
};

export default Footer;