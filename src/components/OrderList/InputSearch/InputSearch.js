import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import searchIcon from '../../../img/search_icon.png';
import styles from './inputSearch.module.scss';

const InputSearch = ({ onChangeFunc, inputSearchPlaceholder, type }) => {
  const [filter, setFilter] = useState('');
  return (
    <Container>
      <Row className={styles.inputSearchBox}>
        <Col xl={12} className={styles.searchWrapper}>
          <img
            src={searchIcon}
            alt="search"
            className={styles.searchIcon}
            onClick={() => onChangeFunc(filter)}
          />
          <input
            placeholder={inputSearchPlaceholder}
            type="text"
            className={styles.inputSearch}
            onChange={(el) => setFilter(el.target.value)}
            onKeyUp={() => onChangeFunc(filter)}
          />
        </Col>
      </Row>
    </Container>
  );
};

InputSearch.propTypes = {
  onChangeFunc: PropTypes.func.isRequired,
  inputSearchPlaceholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputSearch;
