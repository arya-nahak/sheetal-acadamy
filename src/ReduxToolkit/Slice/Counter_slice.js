import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:0
}

const Counter_slice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
        increment:(state)=>{
            state.data += 1
        },
        decrement:(state)=>{
            state.data -= 1
        },      
        incrementbyinput:(state,action)=>{
            state.data += action.payload
        }
  }
});

export const {increment,decrement,incrementbyinput} = Counter_slice.actions

export default Counter_slice.reducer