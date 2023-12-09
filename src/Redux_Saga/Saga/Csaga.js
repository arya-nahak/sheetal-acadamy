import { put,takeLatest,delay}  from 'redux-saga/effects'
function Increment(){
    return {
        type :'in'
    }
}

function Decrement(){
    return {
        type :'dc'
    }
}


export function* incrementAsync(){
    yield delay(2000)
    yield put(Increment())
}

export function* decrementAsync(){
    yield delay(2000)
    yield put(Decrement())
}


export function* watchIncremetAsync(){
    yield takeLatest('INCREMENT_ASYNC',incrementAsync)   
}

export function* watchDecrementAsync(){
    yield takeLatest('DECREMENT_ASYNC',decrementAsync)
}
