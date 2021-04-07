import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Pagination.module.scss';
import t from '../../translations/i18n';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationBar(props) {
  const classes = useStyles();
  const [pageNb, setPageNb] = useState(props.pageNumber);
  const [inputValue, setInputValue] = useState(1);

  const goTo = (value) => {
    const pageNumberValue = parseInt(value, 10);
    if (Number.isInteger(pageNumberValue)) {
      setPageNb(pageNumberValue);
    } else {
      setPageNb(1);
    }
  };

  const handleChangeInputValue = (e) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <Container className={classes.root}>
      <Row className={styles.paginationBox}>
        <Col className={styles.Pages}>
          <Pagination
            count={props.pagesCount}
            siblingCount={0}
            page={pageNb}
            onChange={props.handleChange}
            size="small"
            color="primary"
          />
          <div className={styles.nextPageBox}>
            <span className={styles.nextPagesLegend}>{`${t('pagination.nextToPageLegend')}`}</span>
            <input className={styles.inputNextPages} onChange={handleChangeInputValue} />
            <div className={styles.goToNextPageButton} onClick={() => goTo(inputValue)}>&gt;</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
