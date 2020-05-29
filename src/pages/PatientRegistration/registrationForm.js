import React from 'react';
import { Form } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '../../components/Button';
import { ButtonWrap } from './style';
import { PersonalDetails } from './components/personalDetails';
import { AddressSection } from './components/addressSection';
import { OtherSection } from './components/otherSection';
import { Wizard, WizardStep} from './components/Wizard';

export const RegistrationForm = (props) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    validateForm,
    handleSubmit,
    validatePhoneNumber,
  } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Wizard
      initialValues={{
        email: "",
        firstName: "",
        lastName: ""
      }}
      values={values}
      onSubmit={values =>{
        console.log(props.handleSubmit(values))
        props.handleSubmit(values);
      }}
    >
      <WizardStep
        onSubmit={() => console.log("Step1 onSubmit")}
      >
        <PersonalDetails
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          values={values}
        />
      </WizardStep>
      <WizardStep
        onSubmit={() => console.log("Step2 onSubmit")}
      >
        <AddressSection
          errors={errors}
          touched={touched}
          validateForm={validateForm}
          validatePhoneNumber={validatePhoneNumber}
        />
      </WizardStep>
      <WizardStep
        onSubmit={() => console.log("Step3 onSubmit")}
      >
      <OtherSection setFieldValue={setFieldValue} values={values} />
      </WizardStep>
      </Wizard>
    </MuiPickersUtilsProvider>
  );
};
