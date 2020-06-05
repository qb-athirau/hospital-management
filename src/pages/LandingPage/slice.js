import { createSlice } from '@reduxjs/toolkit';

const initialState = { newsFeedData: [] };

const landing = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setNewsFeed(state, action) {
      state.newsFeedData = action.payload;
    },
  },
});

export const { setNewsFeed } = landing.actions;
export default landing.reducer;
