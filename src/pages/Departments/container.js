import { connect } from 'react-redux';
import { getDepartments, addDepartment, updateDepartment, deleteDepartment } from './helper';
import { Departments } from './component';
import { updateToast } from '../../slices/toasterSlice';

const mapStateToProps = (state) => {
  return {
    departmentsDetails: state.departments.departmentData,
    loading: state.departments.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    departments: () => dispatch(getDepartments()),
    addDepartment: (payload) => dispatch(addDepartment(payload)),
    updateDepartment: (payload) => dispatch(updateDepartment(payload)),
    deleteDepartment: (payload) => dispatch(deleteDepartment(payload)),
    updateToast: (payload) => dispatch(updateToast(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Departments);
