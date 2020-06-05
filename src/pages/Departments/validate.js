import * as Yup from 'yup';
import { validationText } from '../../configs/errorText';

const validator = {
  code: Yup.string().required(validationText.requireCode),
  name: Yup.string()
    .required(validationText.requireName),
};

export default validator;
