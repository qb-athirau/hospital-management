import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { RegistrationForm } from './components/Form';
import { RegistrationLayout, Heading, Image } from './style';
import validator from './validate';
import { validationText } from '../../configs/errorText';
import { regex, headerList } from '../../configs/constants';
import Header from '../../components/Header';

export const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    fullname: '',
    email: '',
    password: '',
    confrmPasswrd: '',
    gender: '',
    dateOfBirth: new Date(),
    phoneNumber: '',
    height: '',
    weight: '',
  }),
  validationSchema: Yup.object().shape(validator),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.registerPatient(values);
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Patient Registration Form',
})(RegistrationForm);

export const PatientRegistration = (props) => {
  const handleValidator = {
    set: (obj, prop, value) => {
      obj[prop] = Yup.string().matches(regex, validationText.invalidPhoneNumber);
      return true;
    },
  };
  const validatePhoneNumber = async (value, validateForm) => {
    const response = await new Promise((resolve, reject) => {
      const proxyValidator = new Proxy(validator, handleValidator);
      proxyValidator.phoneNumber = value;
      resolve();
    }).then(() => {
      validateForm();
    });
  };
  return (
    <RegistrationLayout>
      <Header navigationList={headerList} history={props.history} />
      <Heading.Wrap>
        <Heading.Left>
        </Heading.Left>
        <Heading.Right>
          <Heading>New Patient Registration</Heading>
          <Heading.SubHeading>Please fill in the form below</Heading.SubHeading>
        </Heading.Right>
      </Heading.Wrap>
      <EnhancedForm
        registerPatient={props.registerPatient}
        validatePhoneNumber={validatePhoneNumber}
      />
    </RegistrationLayout>
  );
};


