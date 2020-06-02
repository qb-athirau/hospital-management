import { createSlice } from '@reduxjs/toolkit';

const initialState = { newsFeedData: [] };

const landing = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setNewsFeed(state, action) {
      const { newsFeedData } = action.payload;
      state.newsFeedData = newsFeedData;
    },
  },
});

export const { setNewsFeed } = landing.actions;
export default landing.reducer;
