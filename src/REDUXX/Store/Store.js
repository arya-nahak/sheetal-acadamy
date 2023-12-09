import { applyMiddleware, createStore } from "redux";
import Reducer_new from "../Reducer/Reducer_new";
import Reducerexe2 from "../Reducer/Reducerexe2";
import Combine_Reducer from "../Reducer/Combine_Reducer";
// import thunk from "redux-thunk";

// import createSagaMiddleware from 'redux-saga'
// import rootsaga from "../../Redux_Saga/Saga/RootSaga";


// const sagaMiddleWare = createSagaMiddleware()
// const store = createStore(
//     Combine_Reducer,
//     applyMiddleware(sagaMiddleWare)
// )

// sagaMiddleWare.run(rootsaga)





import fromSlice from '../../ReduxToolkit/Slice/Counter_slice'
import {configureStore} from '@reduxjs/toolkit';
import PostSlice from "../../ReduxToolkit/Toolkit_with_thunk/Slice/PostSlice";
import Datagetslice from "../../ReduxToolkit/Toolkit_with_thunk/Slice/Datagetslice";

export const store = configureStore({
    reducer:{
        counter: fromSlice,
        posts:PostSlice,
        gdata:Datagetslice
    }
})

export default store;



// redux thunk

// import { applyMiddleware, createStore } from "redux";
// import Reducer_new from "../Reducer/Reducer_new";
// import Reducerexe2 from "../Reducer/Reducerexe2";
// import Combine_Reducer from "../Reducer/Combine_Reducer";
// import thunk from "redux-thunk";


// const store = createStore(
//     Combine_Reducer,
//     applyMiddleware(thunk)
// )

// export default store;
















// import { createStore } from "redux";
// import Reducer_new from "../Reducer/Reducer_new";
// import Reducerexe2 from "../Reducer/Reducerexe2";
// import Combine_Reducer from "../Reducer/Combine_Reducer";

// const store = createStore(Reducer_new);
// const store = createStore(Reducerexe2);

// const store = createStore(
//     Combine_Reducer
// )

// export default store;
















// import { createStore } from "redux";
// import Reducer_new from "../Reducer/Reducer_new";
// import Reducerexe2 from "../Reducer/Reducerexe2";
// import Combine_Reducer from "../Reducer/Combine_Reducer";

// const store = createStore(Reducer_new);
// const store = createStore(Reducerexe2);

// const store = createStore(
//     Combine_Reducer
// )

// export default store;



// for redux-toolkit with saga

// import { configureStore } from '@reduxjs/toolkit'
// import mySlice from '../../Redux_toolkit_with_saga/Slice/Slice'
// import createSagaMiddleware from 'redux-saga'
// import { rootSaga } from '../../Redux_toolkit_with_saga/RootSagafunc/Sagafunc'

// const sagamiddleware = createSagaMiddleware()

// export const store = configureStore({
//     reducer:{
//         sli:mySlice,
//     },
//     middleware:(getDefaultMiddleware)=>{
//         getDefaultMiddleware({thunk:false}).concat(sagamiddleware)
//     }
// })

// sagamiddleware.run(rootSaga)