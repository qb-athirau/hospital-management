import { createSlice } from '@reduxjs/toolkit';

const initialState = { userDetails: {} };

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginAction(state, action) {
      const { userDetails } = action.payload;
      state.push({ userDetails });
    },
  },
});

export const { loginAction } = login.actions;
export default login.reducer;
