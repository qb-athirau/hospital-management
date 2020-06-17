import React from 'react';
import { Form } from 'formik';
import { DateTimePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import Button from '../../../components/Button';
import { ButtonWrap } from '../style';
import FormikField from '../../../components/FormikField';

const validateDateOfAppointment = (value, props) => {
  let currentAppointments = [];
  props.appointment.forEach((item) => {
    if (item.departmentCode === props.selected) {
      currentAppointments = item.doctors.find((doctorDetails) => {
        if (doctorDetails.fullName === props.docName) {
          return doctorDetails;
        }
      });
    }
  });
  currentAppointments.appointments.forEach((appointment) => {
    if (
      moment(new Date(appointment.dateOfAppointment).toISOString()).isBetween(
        moment(new Date(value).toISOString()).subtract(7, 'minutes'),
        moment(new Date(value).toISOString()).add(7, 'minutes'),
      )
    ) {
      props.setStatus({ dateOfAppointment: 'appointment not available' });
      return 0;
    }
  });
};
export const AppointmentForm = (props) => {
  const { isSubmitting, valid, handleSubmit, validateField } = props;
  return (
    <Form name="Appointment" method="post" onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <FormikField name="patientName" label="PatientName" autoComplete="off" />
        <FormikField name="doctorName" label="DoctorName" autoComplete="off" />
        <FormikField
          name="dateOfAppointmnt"
          label="Date of appointment"
          component={DateTimePicker}
          format="dd/MM/yyyy"
          autoComplete="off"
          validate={(value) => validateDateOfAppointment(value, props)}
          onChange={() => {
            validateField('dateOfAppointmnt');
          }}
        />
        {props.status?.dateOfAppointment && <div>{props.status?.dateOfAppointment}</div>}
        <ButtonWrap className="appointment-btn">
          <Button tabindex={3} primary type="submit" disabled={isSubmitting}>
            {isSubmitting ? `Booking...` : `Book Now`}
          </Button>
        </ButtonWrap>
      </MuiPickersUtilsProvider>
    </Form>
  );
};
