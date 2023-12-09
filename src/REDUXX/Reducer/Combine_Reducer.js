import { combineReducers } from 'redux'
import Reducer_new from './Reducer_new'
import Product_reducer from './Product_reducer'
import Reducer_t from '../../Redux Thunk/Reducer_t/Reducer_t'
import Reducer_sg from '../../Redux_Saga/Reducer/Reducer_sg'
import UserReducer from '../../Redux_Saga/Reducer/UserReducer'
import AddPostReducer from '../../Redux_Saga/Reducer/AddPostReducer'

const Combine_Reducer = combineReducers(
    {
        counter : Reducer_new,
        product : Product_reducer,
        user:Reducer_t,
        saga:Reducer_sg,
        person:UserReducer,
        addpost:AddPostReducer

    }
)

export default Combine_Reducer