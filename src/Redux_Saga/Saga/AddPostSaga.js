import React from 'react'
import { call, put, takeLeading } from 'redux-saga/effects'
import { PostApi } from '../Apifetch/PostApi'

function* AddPostSaga(action) {
    try{
        const data = yield call(PostApi,action.payload)
        console.log(data);
        yield put({type:"SUCCESS",payload:data})
    }
    catch(error){
        yield put({type:"FAILURE",payload:error})
    }
}

export function* addpostWatcher(){
    yield takeLeading("POSTREQUEST",AddPostSaga)
}