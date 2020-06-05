import * as Yup from 'yup';
import { validationText } from '../../configs/errorText';

const validator = {
  code: Yup.string().required(validationText.requireCode),
  fullName: Yup.string()
    .required(validationText.requireFullname),
    qualification: Yup.string()
    .required(validationText.requireQualification),
    dateOfJoining:  Yup.string()
    .required(validationText.requiredateOfJoining)
};

export default validator;
