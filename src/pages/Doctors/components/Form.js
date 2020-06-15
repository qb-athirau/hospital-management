import React from 'react';
import { Form } from 'formik';
import { DatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '../../../components/Button';
import { FieldsWrapper } from '../../PatientRegistration/style';
import { ButtonWrap } from '../style';
import FormikField from '../../../components/FormikField';
import FormikSelect from '../../../components/FormikSelect';

export const DoctorsForm = (props) => {
  const { errors, touched, isSubmitting, valid, handleSubmit, departments } = props;
  const departmentList = departments.map((item) => ({ label: item.name, value: item.code }));
  return (
    <Form name="Add doctor" method="post" onSubmit={props.handleSubmit}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <FieldsWrapper>
          <FormikField name="fullName" label="Name" autoComplete="off" />
          <FormikField name="age" label="Age" type="number" autoComplete="off" />
        </FieldsWrapper>
        <FieldsWrapper>
          <FormikField name="qualification" label="Qualification" autoComplete="off" />
          <FormikField
            name="dateOfJoining"
            label="Date of Joining"
            component={DatePicker}
            format="dd/MM/yyyy"
            autoComplete="off"
          />
        </FieldsWrapper>
        <FieldsWrapper>
          <FormikField
            name="description"
            label="Description"
            type="text"
            multiline
            autoComplete="off"
          />
          <FormikSelect
            items={departmentList}
            type="text"
            name="department"
            label="Dept."
            fullwidth
            autoCapitalize="off"
            autoCorrect="off"
            placeholder=""
          />
        </FieldsWrapper>

        <ButtonWrap>
          <Button tabindex={3} primary type="submit" disabled={isSubmitting}>
            {isSubmitting ? `Creating...` : `Create`}
          </Button>
        </ButtonWrap>
      </MuiPickersUtilsProvider>
    </Form>
  );
};
