import * as Yup from 'yup';
import { validationText } from '../../configs/errorText';
import { passwordRegex } from '../../configs/constants';

const validator = {
  email: Yup.string().email(validationText.invalidEmail).required(validationText.requireEmail),
  password: Yup.string()
    .required(validationText.requirePassword)
    .matches(passwordRegex, validationText.invalidPassword),
};

export default validator;
