import {take,takeEvery,takeLatest,put,all,delay,fork,call} from "redux-saga/effects"

import { loadUsersStart,loadUsersError,loadUsersSucces ,createUsersSucces,createUsersError, deleteUsersSucces, deleteUsersError, updateUsersSucces, updateUsersError} from "./action"
import { loadUserApi } from "./api"
import * as types from "./actionType"
import { add, allUser, deleteUser, updateUser} from "../services/UserService"

 function* onLoadUserStartAsync(){
    try{
        const response=yield call(allUser)
        console.log("response",response);
        if(response.status==200){
            yield delay(500)
            console.log("response data",response.data);
            yield put(loadUsersSucces(response.data))
        }
    }
    catch(error){
        console.log("error",error);
        yield put(loadUsersError(error.response.data))
    }
}

 function* onCreateUserStartAsync({payload:users}){
    try{
        const response=yield call(add ,users)
        console.log("response",response);
        if(response.status==200){
           
            console.log("response data",response.data);
            yield put(createUsersSucces(response.data))
        }
    }
    
    catch(error){
        console.log("error",error);
        yield put(createUsersError(error.response.data))
    
}
 }



function* deleteUserStartAsyn(id){
    try{
        const response=yield call(deleteUser ,id)
        console.log("response",response);
        if(response.status==200){
           yield delay(500)
            console.log("response data",response.data);
            yield put(deleteUsersSucces(response.data))
        }
    }
    catch(error){
        console.log("error",error);
        yield put(deleteUsersError(error.response.data))
    }

}
function* onUpdateUserStartAsync({payload:{user,id}}){
    try{
        const response=yield call(updateUser,user ,id)
        console.log("response",response);
        if(response.status==200){
          
            console.log("response data",response.data);
            yield put(updateUsersSucces(response.data))
        }
    }
    catch(error){
        console.log("error",error);
        yield put(updateUsersError(error.response.data))
    }

}

function* deletedUser(){
    while(true){
        const {payload:id}=yield take(types.DELETE_USERS_START);
        yield call(deleteUserStartAsyn,id)
    }
}

 function* onLoadUser(){
    yield takeEvery(types.LOAD_USERS_START,onLoadUserStartAsync)
}


 function* onCreateUser(){
    yield takeLatest(types.CREATE_USERS_START,onCreateUserStartAsync)
}

function* onUpdateUser(){
    yield takeLatest(types.UPDATE_USERS_START,onUpdateUserStartAsync)
}

const userSaga=[fork(onLoadUser) ,fork(onCreateUser),fork(deletedUser),fork(onUpdateUser)]

export default function* rootSaga(){
    yield all([...userSaga])
}