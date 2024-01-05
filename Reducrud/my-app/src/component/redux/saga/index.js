import {all} from 'redux-saga/effects'
import StudentWatcherSaga from "./sagareducer/SagaReducer"

 function* rootsaga() {
  yield all([StudentWatcherSaga()])
  }
  export default rootsaga