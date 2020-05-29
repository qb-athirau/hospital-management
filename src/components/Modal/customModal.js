import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ModalWrap } from './style';

export const CustomModal = ({open, handleClose, children}) => {
  return (
    <ModalWrap
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <div className="paper">
         {children}
        </div>
      </Fade>
    </ModalWrap>
  );
};
