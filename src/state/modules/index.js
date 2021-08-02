import { combineReducers } from 'redux';
import login from './login';
import orders from './orders';
import masters from './masters';
import sendMyCode from './referrals';
import categories from './categories';
import masterAccept from './masterAccept';
import masterDecline from './masterDecline';
import getIsReferralValid from './referrals';
import mastersRequests from './mastersRequests';
import partialRegistration from './partialRegistration';
import loginSms from './loginSMS';

export default combineReducers({
  login,
  orders,
  masters,
  sendMyCode,
  categories,
  masterAccept,
  masterDecline,
  mastersRequests,
  getIsReferralValid,
  partialRegistration,
  loginSms,
});
