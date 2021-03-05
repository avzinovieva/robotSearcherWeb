import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={props.pagesCount}
        siblingCount={0}
        page={props.pageNumber}
        onChange={props.handleChange}
        size="small"
      />
    </div>
  );
}
