import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const initialState = {
  mouseX: null,
  mouseY: null,
};
const ContextMenu = (props) => {
  const [state, setState] = React.useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };
  return (
    <div onContextMenu={handleClick} style={{ cursor: 'context-menu' }}>
      {props.children}
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }>
        {props.contextMenuList.map((item) => (
          <MenuItem onClick={handleClose}>{item}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ContextMenu;
