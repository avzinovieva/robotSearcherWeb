import {connect} from 'react-redux';
import {mastersRequests} from '../../state/modules/mastersRequests/action';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import ListScreen from '../ListScreen/ListScreen';

const MastersList = ({loading, mastersRequestsFunc, masters}) =>{
  useEffect(() => {
    mastersRequestsFunc();
  }, [mastersRequestsFunc]);

  return (
    <ListScreen type={'mastersRequestsList'} items={masters} loading={loading}/>
  );
};

MastersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  mastersRequestsFunc: PropTypes.func.isRequired,
  masters: PropTypes.array.isRequired,
};

MastersList.defaultProps = {
  masters: [],
};

const mapStateToProps = ({mastersRequests}) => ({
  loading: mastersRequests.loading,
  masters: mastersRequests.mastersRequests,
});

export default connect(
    () => mapStateToProps,
    {mastersRequestsFunc: mastersRequests})(MastersList);
