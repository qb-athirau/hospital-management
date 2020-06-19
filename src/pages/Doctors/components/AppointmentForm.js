import React from 'react';
import { Form } from 'formik';
import { DateTimePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import Button from '../../../components/Button';
import { ButtonWrap } from '../style';
import FormikField from '../../../components/FormikField';
import { getAvailableTimeSlot } from '../helper';

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
  currentAppointments.appointments.some((appointment) => {
    if (
      moment(new Date(appointment.dateOfAppointment).toISOString()).isBetween(
        moment(new Date(value).toISOString()).subtract(7, 'minutes'),
        moment(new Date(value).toISOString()).add(7, 'minutes'),
      )
    ) {
      const timeSlot = getAvailableTimeSlot(currentAppointments.appointments, value);
      props.setStatus({
        dateOfAppointment: `Appointment not available. Please select from 9.00 am-  ${timeSlot} 6.00 pm`,
      });
      return true;
    } else {
      props.setStatus({ dateOfAppointment: '' });
    }
  });
};

const validateDatePatientName = (value, props) => {
  if (value.trim() === '') {
    props.setStatus({ name: 'Patient name cannot be blank' });
  } else {
    props.setStatus({ name: '' });
  }
};
export const AppointmentForm = (props) => {
  const { isSubmitting, valid, handleSubmit, validateField, dirty } = props;
  return (
    <Form name="Appointment" method="post" onSubmit={handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <FormikField
          name="patientName"
          label="PatientName"
          autoComplete="off"
          validate={(value) => validateDatePatientName(value, props)}
        />
        {props.status?.name && <div className="error">{props.status?.name}</div>}
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
        {props.status?.dateOfAppointment && (
          <div className="error">{props.status?.dateOfAppointment}</div>
        )}
        <ButtonWrap className="appointment-btn">
          <Button
            tabindex={3}
            primary
            type="submit"
            disabled={isSubmitting || props.status?.dateOfAppointment || !dirty}>
            {isSubmitting ? `Booking...` : `Book Now`}
          </Button>
        </ButtonWrap>
      </MuiPickersUtilsProvider>
    </Form>
  );
};
