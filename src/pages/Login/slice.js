import { createSlice } from '@reduxjs/toolkit';

const initialState = { userDetails: {} };

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginAction(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const { loginAction } = login.actions;
export default login.reducer;
