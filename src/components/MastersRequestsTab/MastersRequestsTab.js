import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { mastersRequests } from '../../state/modules/mastersRequests/action';
import ListScreen from '../ListScreen/ListScreen';
import t from '../../translations/i18n';
import CheckAccess from '../Utils/CheckAccess';

const MastersList = ({ loading, mastersRequestsFunc, masters }) => {
  useEffect(() => {
    mastersRequestsFunc();
  }, [mastersRequestsFunc]);

  return (
    <div>
      <CheckAccess childrens />
      <ListScreen
        type="mastersRequestsList"
        items={masters}
        loading={loading}
        inputSearchPlaceholder={`${t('mastersRequestsList.inputSearchPlaceholder')}`}
        showTheTableHeader1={false}
      />
    </div>

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
