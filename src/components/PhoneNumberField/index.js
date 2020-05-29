import React from 'react';
import MaskedInput from 'react-text-mask';
import { ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { phoneNumberMask } from '../../configs/constants';

const PhoneNumberField = (props) => (
  <Field {...props} as={TextField} helperText={<ErrorMessage name={props.name} />} />
);


export default PhoneNumberField;