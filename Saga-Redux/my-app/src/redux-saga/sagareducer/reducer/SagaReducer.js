import {call, put, takeLatest} from 'redux-saga/effects'
import * as Types from '../../type/Type'
import { deleteData, getApi, getidData, postApi, putData } from '../../../service/MockApi'
import { deleteError, deleteSuccess, getIdError, getIdSuccess, getSuccess, postError, postSuccess, putError, putSuccess } from '../../action/Action';

function* get(){
   try {
    const res = yield call(getApi)
    console.log(res);
    const{data,status}=res
    console.log(data);
    yield put(getSuccess(data))
   } catch (error) {
    console.error("Error");
   }
}
function* post({payload}){
    const res=yield call(postApi,payload)
    
    console.log(res);
    if(res.status===200){
     yield put(postSuccess(res.data))
    }else{
     yield put(postError("Error"))
    }
 }
 function* updateData(action){
    const res=yield call(putData,action.payload,action.payload.id)
    
    console.log(res);
    if(res.status===200){
     yield put(putSuccess(res.data))
    }else{
     yield put(putError("Error"))
    }
 }
 function* Delete ({payload}){
    const res=yield call(deleteData,payload)
    
    console.log(res);
    if(res.status===200|| res.status===201){
     yield put(deleteSuccess(res.data))
    }else{
     yield put(deleteError("Error"))
    }
 }

 function* fetchId({payload}){
    console.log(payload);
    const res=yield call(getidData,payload)
    
    console.log(res);
    if(res.status===200){
     yield put(getIdSuccess(res.data))
    }else{
     yield put(getIdError("Error"))
    }
 }


function* StudentWatchersaga(){
    yield takeLatest(Types.GET_REQUEST,get)
    yield takeLatest(Types.POST_REQUEST,post)
    yield takeLatest(Types.PUT_REQUEST,updateData)
    yield takeLatest(Types.DELETE_REQUEST,Delete)
    yield takeLatest(Types.GETID_REQ,fetchId)

}
export default StudentWatchersaga