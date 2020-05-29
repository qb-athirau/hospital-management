import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  height: 30px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .toast-bar {
    top: 10px;
    padding: 10px;
    border: ${(props) => props.show ? `1px solid`:`0`};
    border-radius: 5px;
  }
  .warning {
    background-color: ${(props) => props.theme.toastWarning};
  }
  .error {
    background-color: ${(props) => props.theme.toastError};
  }
  .info {
    background-color: ${(props) => props.theme.toastInfo};
  }
  .success {
    background-color: ${(props) => props.theme.toastSuccess};
  }
  .content-msg-wrapper {
    width: calc(100% - 15px);
  }
  .closeBtn {
    position: absolute;
    top: 14px;
    right: 15px;
  }
  #client-snackbar {
    display: flex;
    align-items: initial;
  }
  .message {
    padding-left: 5px;
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
  }
`;
