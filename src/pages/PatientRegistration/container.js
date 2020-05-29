import { connect } from 'react-redux';
import { registerPatient } from '../../store/actions/patientRegistrationAction';
import { PatientRegistration} from './component';

const mapDispatchToProps = (dispatch) => {
    return {
      registerPatient: (payload) => dispatch(registerPatient(payload)),
    };
  };
  export default connect(null, mapDispatchToProps)(PatientRegistration);