import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { mastersRequests } from '../../state/modules/mastersRequests/action';
import ListScreen from '../ListScreen/ListScreen';
import t from '../../translations/i18n';
import { USER_TOKEN } from '../../storageKeys';

const MastersList = ({ loading, mastersRequestsFunc, masters }) => {
  useEffect(() => {
    mastersRequestsFunc();
  }, [mastersRequestsFunc]);
  const token = localStorage.getItem(USER_TOKEN);

  return (
    token
      ? (
        <ListScreen
          type="mastersRequestsList"
          items={masters}
          loading={loading}
          inputSearchPlaceholder={`${t('mastersRequestsList.inputSearchPlaceholder')}`}
          showTheTableHeader1={false}
        />
      ) : (
        <Redirect to={{
          pathname: '/login',
        }}
        />
      )
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

const mapStateToProps = ({ mastersRequests }) => ({
  loading: mastersRequests.loading,
  masters: mastersRequests.mastersRequests,
});

export default connect(
  () => mapStateToProps,
  { mastersRequestsFunc: mastersRequests },
)(MastersList);
