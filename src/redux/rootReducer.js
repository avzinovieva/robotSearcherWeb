import {combineReducers} from "redux";
import dataReducer from "./Data/dataReducer";
import loginReducer from "./Login";

const rootReducer=combineReducers({
    //data:dataReducer,
    login: loginReducer,
})

export default rootReducer;