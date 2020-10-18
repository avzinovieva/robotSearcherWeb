import { connect } from 'react-redux';
import {masters} from '../../state/modules/masters/action';
import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import ListScreen from '../ListScreen/ListScreen';


const MastersList = ({loading, mastersFunc, masters}) =>{

    useEffect(() => {
        mastersFunc();
    },[]);

    return (
        <ListScreen type={'mastersList'} items={masters} loading={loading}/>
    )
}

MastersList.propTypes = {
    loading: PropTypes.bool.isRequired,
    mastersFunc: PropTypes.func.isRequired,
    masters: PropTypes.array.isRequired,
};

MastersList.defaultProps = {
    masters:[],
}

const mapStateToProps = ({masters}) => ({
    loading: masters.loading,
    masters: masters.masters,
});

export default connect(
    () => mapStateToProps,
    {mastersFunc: masters})(MastersList);