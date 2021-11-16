import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
};

export const jobsSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    addTags: (state, action) => {
      state.tags = [...state.tags, action.payload.tag];
    },
    clearTags: (state, action) => {
      state.tags = [];
    },
    deleteTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload.tag);
    },
  },
});

export const { addTags, clearTags, deleteTag } = jobsSlice.actions;

export default jobsSlice.reducer;
