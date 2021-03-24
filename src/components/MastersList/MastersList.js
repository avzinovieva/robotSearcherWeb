import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { masters } from '../../state/modules/masters/action';
import ListScreen from '../ListScreen/ListScreen';
import t from '../../translations/i18n';

const MastersList = ({ loading, mastersFunc, masters }) => {
  useEffect(() => {
    mastersFunc();
  }, [mastersFunc]);

  return (
    <ListScreen
      type="mastersList"
      items={masters}
      loading={loading}
      inputSearchPlaceholder={`${t('mastersList.inputSearchPlaceholder')}`}
      showTheTableHeader={false}
    />
  );
};

MastersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  mastersFunc: PropTypes.func.isRequired,
  masters: PropTypes.array.isRequired,
};

MastersList.defaultProps = {
  masters: [],
};

const mapStateToProps = ({ masters }) => ({
  loading: masters.loading,
  masters: masters.masters,
});

export default connect(
  () => mapStateToProps,
  { mastersFunc: masters },
)(MastersList);
