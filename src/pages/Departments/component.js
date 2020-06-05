import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { DepartmentLayout, DepartmentSection, AddDepartment, Heading } from './style';
import Header from '../../components/Header';
import { headerList } from '../../configs/constants';
import { useModal } from '../../components/Modal/useModal';
import { CustomModal } from '../../components/Modal/customModal';
import { DepartmentForm } from './components/Form';
import validator from './validate';

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    code: '',
    name: '',
    description: ''
  }),
  validationSchema: Yup.object().shape(validator),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.addDept(values);
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Department Form',
})(DepartmentForm);

const Departments = (props) => {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();

  const handleAddDept = (payload) => {
    setItemModalOpen(false);
  };
  return (
    <DepartmentLayout>
      <Header navigationList={headerList} history={props.history} />
      <DepartmentSection>
        <FontAwesomeIcon className="plus-icon" onClick={toggleModal} icon={faPlusCircle} />
      </DepartmentSection>
      <CustomModal
        title="Item Modal"
        open={itemModalOpen}
        handleClose={() => setItemModalOpen(false)}>
        <AddDepartment>
          <Heading>Department Details</Heading>
          <EnhancedForm addDept={(payload) => handleAddDept(payload)} />
        </AddDepartment>
      </CustomModal>
    </DepartmentLayout>
  );
};

export default Departments;
