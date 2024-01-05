import { getApi } from "../../../service/MockApi";
import { getError, getRequest, getSuccess } from "../../action/ActionSaga";
import  * as Types from "../../type/TypeSaga";
import {takeLatest,call, put} from 'redux-saga/effects'

function* get(){
    console.log('saga');
  const res = yield call(getApi)
  console.log(res);
  if(res.status===200){
    yield put(getSuccess(res.data))
  
  }
  else{
    yield put(getError('ERROR'))

  }
}
function* StudentWatcherSaga() {
 yield takeLatest(getRequest,get)
}

export default StudentWatcherSaga;
