import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./saga/index";
import rootsaga from "./sagareducer";

const sagaMiddleware =  createSagaMiddleware()
const store= createStore(rootReducer,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
)
sagaMiddleware.run(rootsaga)
export default store