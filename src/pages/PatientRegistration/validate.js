import * as Yup from 'yup';
import { validationText } from '../../configs/errorText';
import { passwordRegex } from '../../configs/constants';

const validator = {
  fullname: Yup.string()
    .min(2, validationText.fullnameShort)
    .required(validationText.requireFullname),
  email: Yup.string().email(validationText.invalidEmail).required(validationText.requireEmail),
  gender: Yup.string().required(validationText.requireGender),
  dateOfBirth: Yup.string().required(validationText.requireDateofBirth),
  zipCode: Yup.string().required(validationText.requireZipcode),
  country: Yup.string().required(validationText.requireCountry),
  password: Yup.string()
    .required(validationText.requirePassword)
    .matches(passwordRegex, validationText.invalidPassword),
  confrmPasswrd: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(validationText.requireConfirmation),
};

export default validator;
