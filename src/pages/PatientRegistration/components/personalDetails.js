import React from 'react';
import { ErrorMessage } from 'formik';
import { DatePicker } from 'formik-material-ui-pickers';
import { SectionWrap, Label, FieldsWrapper, StyledInlineErrorMessage } from '../style';
import { TextInput } from '../../../components/TextInput';
import FormikField from '../../../components/FormikField';
import FormikSelect from '../../../components/FormikSelect';
import { genderDetails } from '../../../configs/constants';

export const PersonalDetails = ({ errors, touched, setFieldValue, values }) => (
  <SectionWrap>
    <FieldsWrapper>
      <FormikField name="fullname" label="FullName" type="text" autoComplete="off" required />
      <FormikField
        name="email"
        label="Email"
        type="email"
        autoComplete="off"
        placeholder="ex: myname@example.com"
        required
      />
    </FieldsWrapper>
    <FieldsWrapper>
      <FormikField
        name="password"
        label="Password"
        type="password"
        autoComplete="off"
        autoCorrect="off"
        required
      />
      <FormikField
        name="confrmPasswrd"
        label="Confirm Password"
        type="password"
        autoComplete="off"
        autoCorrect="off"
        required
      />
    </FieldsWrapper>
    <FieldsWrapper className="genderWidth">
      <FormikSelect
        items={genderDetails}
        type="text"
        name="gender"
        label="Gender"
        autoCapitalize="off"
        autoCorrect="off"
        placeholder=""
        required
      />
      <FormikField
        name="dateOfBirth"
        label="Date of Birth"
        component={DatePicker}
        format="dd/MM/yyyy"
        autoComplete="off"
        required
      />
    </FieldsWrapper>
    <FieldsWrapper>
      <FormikField name="height" label="Height (inches)" type="number" autoComplete="off" />
      <FormikField name="weight" label="Weight (Kg)" type="number" autoComplete="off" />
    </FieldsWrapper>
  </SectionWrap>
);
