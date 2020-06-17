import { connect } from 'react-redux';
import {
  getDoctorsList,
  addDoctor,
  updateDoctor,
  deleteDoctor,
  getAppointment,
  addAppointment,
} from './helper';
import { getDepartments } from '../Departments/helper';
import Doctors from './component';

const mapStateToProps = (state) => {
  return {
    doctorsList: state.doctors.doctorsList,
    departmentsDetails: state.departments.departmentData,
    userDetails: state.login.userDetails,
    loading: state.doctors.loading,
    appointments: state.doctors.appointments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getdoctorsList: () => dispatch(getDoctorsList()),
    addDoctor: (payload) => dispatch(addDoctor(payload)),
    departments: () => dispatch(getDepartments()),
    updateDoctor: (payload) => dispatch(updateDoctor(payload)),
    deleteDoctor: (payload) => dispatch(deleteDoctor(payload)),
    addAppointment: (payload) => dispatch(addAppointment(payload)),
    getAppointments: () => dispatch(getAppointment()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
