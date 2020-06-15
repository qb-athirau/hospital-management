import { createSlice } from '@reduxjs/toolkit';

const initialState = { doctorsList: [], loading: false };

const doctors = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    setDoctorListStart(state) {
      state.loading = true;
    },
    setDoctorsList(state, action) {
      state.doctorsList = action.payload;
      state.loading = false;
    },
    setsetDoctorsListFailure(state) {
      state.loading = false;
    },
    addDoctorData(state, action) {
      state.doctorsList.push(action.payload);
    },
    updateDoctorData(state, action) {
      state.doctorsList = state.doctorsList.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...action.payload };
        }
        return item;
      });
      state.loading = false;
    },
    deleteDoctorData(state, action) {
      state.doctorsList = state.doctorsList.filter((item) => item.code !== action.payload.code);
      state.loading = false;
    },
  },
});

export const {
  setDoctorListStart,
  setDoctorsList,
  setsetDoctorsListFailure,
  addDoctorData,
  updateDoctorData,
  deleteDoctorData,
} = doctors.actions;
export default doctors.reducer;
