import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const get_post_data = createAsyncThunk(
  "posts/get_post_data",
  async (args, { dispatch, getState }) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${args.userId}`
    ).then((res) => res.json());
  }
);

const initialState = {
  list: [],
  status: null,
};

const PostSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [get_post_data.pending]: (state, action) => {
      state.status = "loading";
    },
    [get_post_data.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [get_post_data.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// export const {} = PostSlice.actions

export default PostSlice.reducer;
