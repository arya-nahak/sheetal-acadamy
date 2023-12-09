
// Not in use 


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getdata = createAsyncThunk("dataget/getdata", () => {
  return fetch("https://fakestoreapi.com/products")
  .then((y=>y.json()))
});

const initialState = {
  list: [],
  status:null
};

const Datagetslice = createSlice({
  name: "dataget",
  initialState,
  extraReducers: {
    [getdata.fulfilled]:(state,action)=>{
        state.list = action.payload
        state.status='success'
    },
    [getdata.rejected]:(state,action)=>[
        state.status = 'failed'
    ]
  },
});

// export const {} = Datagetslice.actions

export default Datagetslice.reducer;
