import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from './style';
import { updateToast } from '../../store/actions/commonActions';

const Toast = (props) => {
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 3);
  }, []);

  const handleClose = () => {
    props.updateToast({
      value: false,
      message: '',
      variant: '',
    });
  };
  return (
    <Layout show={props.toastObj.value}>
      <span onClick={handleClose} className={`toast-bar ${props.toastObj.variant}`}>
        {props.toastObj.value && `${props.toastObj.message}`}
      </span>
    </Layout>
  );
};

Toast.propTypes = {
  updateToast: PropTypes.func.isRequired,
  toastObj: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateToast: (toastObj) => dispatch(updateToast(toastObj)),
  };
};

const mapStateToProps = (state) => {
  return {
    toastObj: state.commonReducer.toastObj,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Toast);
