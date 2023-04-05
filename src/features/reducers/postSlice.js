import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    selectPosts: (state, { type, payload }) => {
      return { ...state, posts: payload };
    },
    viewDetail: (state, { type, payload }) => {
      return { ...state, post: payload };
    },
    removeSelected: (state, { type, payload }) => {
      return {};
    },
  },
});

export const { selectPosts, viewDetail, removeSelected } = postSlice.actions;
export default postSlice.reducer;
