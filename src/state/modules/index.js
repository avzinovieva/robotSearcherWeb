import login from './login';
import categories from './categories';
import orders from './orders';
import masters from './masters';
import mastersRequests from './mastersRequests';
import masterAccept from './masterAccept';
import masterDecline from './masterDecline';
import {combineReducers} from 'redux';

export default combineReducers({
  login,
  categories,
  orders,
  masters,
  mastersRequests,
  masterAccept,
  masterDecline,
});
