import appReducer from "./app-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    app: appReducer
});
let store = createStore(reducers);

window.store = store;

export default store;