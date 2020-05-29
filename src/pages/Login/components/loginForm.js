import React from 'react';
import { Form, ErrorMessage } from 'formik';
import Button from '../../../components/Button';
import { TextInput } from '../../../components/TextInput';
import { FieldsWrapper, StyledInlineErrorMessage } from '../../PatientRegistration/style';
import { LoginLabel, ButtonWrap } from '../style';
import FormikField from '../../../components/FormikField';

export const LoginForm = (props) => {
  const { errors, touched, isSubmitting, valid, handleSubmit } = props;
  return (
    <Form name="login" method="post" onSubmit={handleSubmit}>
      <FieldsWrapper>
        <FormikField
          name="email"
          label="Email"
          type="email"
          autoComplete="off"
          placeholder="ex: myname@example.com"
        />
      </FieldsWrapper>
      <FieldsWrapper>
        <FormikField
          name="password"
          label="Password"
          type="password"
          autoComplete="off"
          autoCorrect="off"
        />
      </FieldsWrapper>
      <ButtonWrap>
        <Button tabindex={3} primary type="submit" disabled={isSubmitting}>
          {isSubmitting ? `Logging...` : `Login`}
        </Button>
      </ButtonWrap>
    </Form>
  );
};
