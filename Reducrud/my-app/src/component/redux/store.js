import rootReducer from "./reducer";
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootsaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware)
      )
    )


sagaMiddleware.run(rootsaga)

export default store