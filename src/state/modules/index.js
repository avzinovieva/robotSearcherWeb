import login from './login';
import categories from './categories';
import orders from './orders';
import { combineReducers } from 'redux';
import masters from './masters';

export default combineReducers({
    login: login,
    categories: categories,
    orders: orders,
    masters: masters,
});
