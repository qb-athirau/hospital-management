import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { DepartmentLayout, DepartmentSection, AddDepartment, Heading, Image } from './style';
import { Container } from '../../configs/styles/globalStyles';
import { CardWrapper } from '../Dashboard/style';
import { useMedia } from '../../utils/domUtils';
import Header from '../../components/Header';
import { headerList, popperList, allowedExtensions, toastMessages } from '../../configs/constants';
import { useModal } from '../../components/Modal/useModal';
import { CustomModal } from '../../components/Modal/customModal';
import { DepartmentForm } from './components/Form';
import Card from '../../components/Card';
import MainLoader from '../../components/Loader';
import PopperMenuItem from '../../components/Popper';
import { errorHandler } from './helper';
import validator from './validate';

const EnhancedForm = withFormik({
  mapPropsToValues: (props) => ({
    code: props.data.code ?? '',
    name: props.data.name ?? '',
    description: props.data.description ?? '',
    uploadedImage: props.data.image ?? '',
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

export const Departments = (props) => {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal();
  const isMobile = useMedia('(max-width: 831px)');
  const [imageBlob, setImageBlob] = useState();
  const [percentLoaded, setPercentLoaded] = useState(0);
  const reader = useRef();
  const [open, setOpen] = useState();
  const [editData, setEditData] = useState({});
  const [imageProperties, setImageProperties] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = (index) => {
    setOpen(index);
  };

  useEffect(() => {
    props.departments();
  }, []);

  const handleAddDept = (payload) => {
    setItemModalOpen(false);
    const data = {
      ...payload,
      image: imageBlob,
    };
    editData ? props.updateDepartment(data) : props.addDepartment(data);
    setEditData({});
  };
  const updateProgress = (e) => {
    if (e.lengthComputable) {
      setPercentLoaded(Math.round((e.loaded / e.total) * 100));
    }
  };

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file && allowedExtensions.exec(e.target.value)) {
      setImageProperties([file.name, `${Math.round(file.size / Math.pow(1024, 1))} KB`]);
      reader.current = new FileReader();
      reader.current.onprogress = updateProgress;
      reader.current.onerror = (evt) => errorHandler(evt, props.updateToast);
      reader.current.onload = (e) => {
        setImageBlob(e.target.result);
      };
      reader.current.onabort = (e) => {
        setPercentLoaded(0);
      };
      reader.current.readAsDataURL(file);
    }
  };
  const handleReject = () => {
    reader.current.abort();
  };
  const menuItemClick = (label, item) => {
    if (label === 'Edit') {
      setEditData(item);
      toggleModal();
    } else {
      props.deleteDepartment(item);
    }
  };
  return (
    <DepartmentLayout>
      <Header navigationList={headerList} history={props.history} />
      {props.loading && <MainLoader />}
      <Container>
        <DepartmentSection className="department">
          {props.userDetails?.role === 'admin' && (
            <FontAwesomeIcon className="plus-icon" onClick={toggleModal} icon={faPlusCircle} />
          )}
          <CardWrapper className="wrap">
            {props.departmentsDetails?.map((item, index) => (
              <Card key={index} className="card" nomargin={isMobile} animated>
                <DepartmentSection.DetailsWrap>
                  <Image
                    src={
                      item?.image ??
                      `${process.env.PUBLIC_URL}/images/departments/ic_${item.name}.png`
                    }
                  />
                  <DepartmentSection.Info>
                    <DepartmentSection.Name>{item.name}</DepartmentSection.Name>
                    <DepartmentSection.Description title={item.description}>
                      {item.description}
                    </DepartmentSection.Description>
                  </DepartmentSection.Info>
                </DepartmentSection.DetailsWrap>
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
        </DepartmentSection>
        <CustomModal
          title="Item Modal"
          open={itemModalOpen}
          handleClose={() => setItemModalOpen(false)}>
          <AddDepartment>
            <Heading>Department Details</Heading>
            <EnhancedForm
              addDept={(payload) => handleAddDept(payload)}
              handleImageUpload={(e) => handleImageUpload(e)}
              percentage={percentLoaded}
              handleReject={() => handleReject()}
              data={editData}
              imageBlob={imageBlob}
              imageProperties={imageProperties}
            />
          </AddDepartment>
        </CustomModal>
      </Container>
    </DepartmentLayout>
  );
};
