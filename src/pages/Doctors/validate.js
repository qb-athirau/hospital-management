import * as Yup from 'yup';
import { validationText } from '../../configs/errorText';

export const validator = {
  fullName: Yup.string().required(validationText.requireFullname),
  qualification: Yup.string().required(validationText.requireQualification),
  dateOfJoining: Yup.string().required(validationText.requiredateOfJoining),
};
