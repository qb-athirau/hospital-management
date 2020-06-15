import { createSlice } from '@reduxjs/toolkit';

const initialState = { registerPatient: [] };

const registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    registerAction(state, action) {
      const { registerPatient } = action.payload;
      state.push({ registerPatient });
    },
  },
});

export const { registerAction } = registration.actions;
export default registration.reducer;
