import { createSlice } from '@reduxjs/toolkit';

const initialState = { departmentData: [], loading: false };

const departments = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    setDepartmentStart(state) {
      state.loading = true;
    },
    setDepartments(state, action) {
      state.departmentData = action.payload;
      state.loading = false;
    },
    setDepartmentFailure(state) {
      state.loading = false;
    },
    addDepartmentData(state, action) {
      state.departmentData.push(action.payload);
      state.loading = false;
    },
    updateDepartmentData(state, action) {
      state.departmentData = state.departmentData.map((item) => {
        if (item.code === action.payload.code) {
          item = { ...action.payload };
        }
        return item;
      });
      state.loading = false;
    },
    deleteDepartmentData(state, action) {
      state.departmentData = state.departmentData.filter(
        (item) => item.code !== action.payload.code,
      );
      state.loading = false;
    },
  },
});

export const {
  setDepartments,
  addDepartmentData,
  setDepartmentStart,
  setDepartmentFailure,
  updateDepartmentData,
  deleteDepartmentData,
} = departments.actions;
export default departments.reducer;
