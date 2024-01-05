import {all} from 'redux-saga/effects'
import StudentWatchersaga from './reducer/SagaReducer'


function* rootsaga(){
    yield all ([StudentWatchersaga()])
}
export default rootsaga