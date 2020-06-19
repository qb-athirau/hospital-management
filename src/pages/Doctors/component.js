import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { DoctorLayout, DoctorSection, AddDepartment, Heading, Image } from './style';
import { Container } from '../../configs/styles/globalStyles';
import { CardWrapper } from '../Dashboard/style';
import { useMedia } from '../../utils/domUtils';
import Header from '../../components/Header';
import { headerList, popperList } from '../../configs/constants';
import { useModal } from '../../components/Modal/useModal';
import { CustomModal } from '../../components/Modal/customModal';
import { DoctorsForm } from './components/Form';
import Card from '../../components/Card';
import MainLoader from '../../components/Loader';
import PopperMenuItem from '../../components/Popper';
import { parseQueryString } from '../../utils/dataFormatter';
import { AppointmentForm } from './components/AppointmentForm';
import { validator, appointmentValidator } from './validate';

const EnhancedForm = withFormik({
  mapPropsToValues: (props) => ({
    fullName: props.data.fullName ?? '',
    age: props.data.age ?? '',
    qualification: props.data.qualification ?? '',
    dateOfJoining: props.data.dateOfJoining ?? new Date(),
    description: props.data.description ?? '',
    department: props.data.department.code ?? '',
  }),
  enableReinitialize: true,
  validationSchema: Yup.object().shape(validator),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.addDoctor(values);
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Department Form',
})(DoctorsForm);

const EnhancedAppointmentForm = withFormik({
  mapPropsToValues: (props) => ({
    patientName: '',
    doctorName: props.docName ?? '',
    dateOfAppointmnt: new Date(),
  }),
  enableReinitialize: true,
  validateOnBlur: false,
  // validateOnChange: false,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.addAppointment(values);
    const timeOut = setTimeout(() => {
      setSubmitting(false);
      clearTimeout(timeOut);
    }, 1000);
  },
  displayName: 'Appointment Form',
})(AppointmentForm);

const Doctors = (props) => {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const isMobile = useMedia('(max-width: 831px)');
  const [open, setOpen] = useState();
  const [editData, setEditData] = useState({});
  const [displayList, setDisplayList] = useState([]);
  const [appointmentFor, setAppointmentFor] = useState(false);
  const selected = useRef('');

  useEffect(() => {
    props.getdoctorsList();
    props.departments();
  }, []);
  useEffect(() => {
    const queryString = parseQueryString(window.location.search);
    selected.current = queryString?.selected ?? '';
    if (selected.current) {
      setDisplayList(
        props.doctorsList?.filter((item) => item?.department?.code === selected.current),
      );
    } else {
      setDisplayList(props.doctorsList);
    }
  }, [props.doctorsList]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = (index) => {
    setOpen(index);
  };
  const handleAppointmentClick = (docName) => {
    setAppointmentFor(docName);
    toggleModal();
    props.getAppointments();
  };
  const menuItemClick = (label, item) => {
    if (label === 'Edit') {
      setEditData(item);
      toggleModal();
    } else {
      props.deleteDoctor(item);
    }
  };
  const handleAddDoctor = (payload) => {
    const newData = {
      ...payload,
      id: editData?.id ?? Math.random(),
      dateOfJoining: new Date(payload.dateOfJoining).toISOString(),
    };
    editData ? props.updateDoctor(newData) : props.addDoctor(newData);
    setItemModalOpen(false);
  };
  const handleAddAppointment = (payload) => {
    setItemModalOpen(false);
  };
  return (
    <DoctorLayout>
      <Header navigationList={headerList} history={props.history} />
      {props.loading && <MainLoader />}
      <Container>
        <DoctorSection className="doctors">
          {props.userDetails?.role === 'admin' && (
            <FontAwesomeIcon className="plus-icon" onClick={toggleModal} icon={faPlusCircle} />
          )}
          <CardWrapper className="wrap">
            {displayList?.map((item, index) => (
              <Card key={index} className="card" nomargin={isMobile} noPadding animated>
                <DoctorSection.Wrap>
                  <DoctorSection.DetailsWrap>
                    <Image src={`${process.env.PUBLIC_URL}/images/common/avatar.png`} />
                    <DoctorSection.Info>
                      <DoctorSection.Name>{item.fullName}</DoctorSection.Name>
                      <DoctorSection.Department title={item.department.name}>
                        {item.department.name} | {item.age}Yrs
                      </DoctorSection.Department>
                      <DoctorSection.Qualification>
                        {item.qualification}
                      </DoctorSection.Qualification>
                    </DoctorSection.Info>
                  </DoctorSection.DetailsWrap>
                  <DoctorSection.Appointment onClick={() => handleAppointmentClick(item.fullName)}>
                    Book Appointment
                  </DoctorSection.Appointment>
                </DoctorSection.Wrap>
                {props.userDetails?.role === 'admin' && (
                  <React.Fragment>
                    <FontAwesomeIcon
                      className="dots-icon"
                      key={index}
                      icon={faEllipsisH}
                      onClick={() => handleTooltipOpen(index)}
                    />
                    <PopperMenuItem
                      open={open === index}
                      className="popper"
                      handleClose={handleClose}
                      popperList={popperList}
                      menuItemClick={(label) => menuItemClick(label, item)}
                    />
                  </React.Fragment>
                )}
              </Card>
            ))}
          </CardWrapper>
        </DoctorSection>
        <CustomModal
          title="Item Modal"
          open={itemModalOpen}
          handleClose={() => setItemModalOpen(false)}>
          {appointmentFor && (
            <AddDepartment>
              <Heading>Appointment Form</Heading>
              <EnhancedAppointmentForm
                addAppointment={(payload) => handleAddAppointment(payload)}
                docName={appointmentFor}
                appointment={props.appointments}
                selected={selected.current}
              />
            </AddDepartment>
          )}
          {!appointmentFor && (
            <AddDepartment>
              <Heading>Doctor Details</Heading>
              <EnhancedForm
                addDoctor={(payload) => handleAddDoctor(payload)}
                departments={props.departmentsDetails}
                data={editData}
              />
            </AddDepartment>
          )}
        </CustomModal>
      </Container>
    </DoctorLayout>
  );
};

export default Doctors;
