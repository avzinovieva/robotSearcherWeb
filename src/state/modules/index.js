import login from './login';
import orders from './orders';
import masters from './masters';
import sendMyCode from './referrals';
import categories from './categories';
import {combineReducers} from 'redux';
import masterAccept from './masterAccept';
import masterDecline from './masterDecline';
import getIsReferralValid from './referrals';
import mastersRequests from './mastersRequests';
import partialRegistration from './partialRegistration';

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
});
