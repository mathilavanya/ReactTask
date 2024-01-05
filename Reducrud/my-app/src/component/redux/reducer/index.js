import { combineReducers } from "redux";
import ReduxReducer from './reduxreducer/ReduxReducer'
import Reducersaga from "./reduxreducer/Reducersaga";

const rootReducer = combineReducers({
        ReduxReducer,Reducersaga
});
export default rootReducer;