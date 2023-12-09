import React from "react";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import FetchApi from "../Apifetch/FetchApi";

function* Handlegetuser() {
  try {
    const users = yield call(FetchApi);

    yield put({ type: "GET_USERS_SUCCESS", payload: users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", payload: err });
  }
}


function* WatchUserSaga(){

    yield takeEvery("GET_USERS_REQUESTED",Handlegetuser)
}

export default WatchUserSaga;
