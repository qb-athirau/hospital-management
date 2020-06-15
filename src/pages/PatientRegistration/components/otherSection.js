import React from 'react';
import { FormControlLabel } from '@material-ui/core';
import { Switch } from 'formik-material-ui';
import { SectionWrap, FieldsWrapper, FlexColumnWrap } from '../style';
import FormikField from '../../../components/FormikField';

export const OtherSection = ({ setFieldValue, values }) => (
  <SectionWrap>
    <FieldsWrapper>
      <FormControlLabel
        control={<FormikField className="switch" component={Switch} name="medications" />}
        label="Taking any medications, currently?"
      />
    </FieldsWrapper>
    <FlexColumnWrap>
      <FormikField
        name="medicationDetails"
        label="If yes, please list it here"
        type="text"
        multiline
        autoComplete="off"
      />
    </FlexColumnWrap>
  </SectionWrap>
);
