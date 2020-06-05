import React from 'react';
import { Form, ErrorMessage } from 'formik';
import Button from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';
import { FieldsWrapper } from '../../PatientRegistration/style';
import { ButtonWrap } from '../style';
import FormikField from '../../../components/FormikField';

export const DepartmentForm = (props) => {
  const { errors, touched, isSubmitting, valid, handleSubmit } = props;
  return (
    <Form name="Add department" method="post" onSubmit={handleSubmit}>
      <FieldsWrapper>
        <FormikField name="code" label="Code" autoComplete="off" />
      </FieldsWrapper>
      <FieldsWrapper>
        <FormikField name="name" label="Name" autoComplete="off" />
      </FieldsWrapper>
      <FormikField
        name="description"
        label="Description"
        type="text"
        multiline
        autoComplete="off"
      />
      <ButtonWrap>
        <Button tabindex={3} primary type="submit" disabled={isSubmitting}>
          {isSubmitting ? `Creating...` : `Create`}
        </Button>
      </ButtonWrap>
    </Form>
  );
};
