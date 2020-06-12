import React, { useRef } from 'react';
import { Form } from 'formik';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';
import { FieldsWrapper } from '../../PatientRegistration/style';
import { ButtonWrap, Preview } from '../style';
import ProgressBar from '../../../components/ProgressBar';
import FormikField from '../../../components/FormikField';
import ContextMenu from '../../../components/contextMenu';

export const DepartmentForm = (props) => {
  const {
    errors,
    touched,
    isSubmitting,
    valid,
    handleSubmit,
    handleImageUpload,
    handleReject,
  } = props;
  const imageUploader = useRef();
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
      <FieldsWrapper>
        {!props.imageBlob && (
          <FontAwesomeIcon
            className="file-icon"
            size="2x"
            color="#2f839d"
            onClick={() => imageUploader.current.click()}
            icon={faFileImage}
          />
        )}
        {props.imageBlob && (
          <ContextMenu contextMenuList={props.imageProperties}>
            <Preview src={props.imageBlob} />
          </ContextMenu>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: 'none',
          }}
          name="uploadedImage"
        />
        <ProgressBar percentage={props.percentage} />{' '}
      </FieldsWrapper>
      <ButtonWrap>
        <Button tabindex={3} primary type="submit" disabled={isSubmitting}>
          {isSubmitting ? `Creating...` : `Create`}
        </Button>
      </ButtonWrap>
    </Form>
  );
};
