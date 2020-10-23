import React from 'react';
import {connect} from "react-redux";
import t from "../../translations/i18n";
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {masterAccept} from '../../state/modules/masterAccept/action';
import {masterDecline} from '../../state/modules/masterDecline/action';

import styles from './manageMasterModal.module.scss';

const declineReasonSchema = Yup.object().shape({
    reason: Yup.string()
        .min(10, 'not less then 10 letters')
        .trim()
        .required('Required'),
});

const ManageMasterModal = ({
        loadingAccept,
        loadingDecline,
        type,
        display,
        id,
        closePopup,
        acceptFunc,
        declineFunc}
        ) => {

    const handleClick = (reason) => {
        console.log(id,reason);
        type === 'accept' ?
            acceptFunc(id).then(async () => {await closePopup()})
            :
            declineFunc(id, reason).then(async () => {await closePopup()});
    };

    return(
        <div className={styles.popup} style={{display: display}}>
            <Formik
                initialValues={{
                    reason: '',
                }}
                validationSchema={declineReasonSchema}
                onSubmit={(values) => {
                    handleClick(values.reason);
                }}
            >
                {({errors, handleSubmit, isValid, handleChange})=>(
                    <div className={styles.popupContent}>
                        <p className={styles.title}>{t('mastersRequestsList.'+type+'.modal.title')}</p>
                        <p className={styles.subtitle}>{t('mastersRequestsList.'+type+'.modal.subtitle')}</p>

                            {type === 'decline' &&
                            <input
                                name={'reason'}
                                onChange={handleChange('reason')}
                                className={styles.input}
                            />
                            }
                            {type === 'decline' && errors.reason &&
                                    <div className={styles.error}>{errors.reason}</div>
                            }
                        <div className={styles.buttonsWrapper}>
                            <button
                                type='submit'
                                disabled={type === 'decline' && !isValid}
                                className={styles.button}
                                onClick={type === 'decline' ? handleSubmit : handleClick}
                            >{t('mastersRequestsList.'+type+'.modal.buttonYes')}</button>

                            <button
                                className={styles.button}
                                onClick={closePopup}
                            >{t('mastersRequestsList.'+type+'.modal.buttonNo')}</button>
                        </div>
                    </div>
                )}

            </Formik>
        </div>
    )
}

ManageMasterModal.propTypes = {
    loadingAccept: PropTypes.bool.isRequired,
    loadingDecline: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    closePopup: PropTypes.func.isRequired,
    acceptFunc: PropTypes.func.isRequired,
    declineFunc: PropTypes.func.isRequired,
}

const mapStateToProps = ({ masterAccept, masterDecline }) => ({
    loadingAccept: masterAccept.loading,
    loadingDecline: masterDecline.loading,
});


export default connect(
    () => mapStateToProps,
    {acceptFunc: masterAccept, declineFunc: masterDecline})
(ManageMasterModal);