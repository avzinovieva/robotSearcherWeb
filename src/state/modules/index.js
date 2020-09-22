import login from './login';
import categories from './categories';
import { combineReducers } from 'redux';

export default combineReducers({
    login: login,
    categories: categories,
});
