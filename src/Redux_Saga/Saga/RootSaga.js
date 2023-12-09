import { all } from "redux-saga/effects";
import { watchDecrementAsync, watchIncremetAsync } from "./Csaga";
import WatchUserSaga from "./WatchUserSaga";
import { addpostWatcher } from "./AddPostSaga";

export default function* rootsaga(){
    yield all([watchIncremetAsync(),watchDecrementAsync(),WatchUserSaga(),addpostWatcher()])    
}