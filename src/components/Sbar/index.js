import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function Sbar(props) {
  let msg1 = props.msg1;
  let msgbut = props.msgbut;
  let num = props.num;
  let actionMethod = props.actionMethod;
  let bgColor = props.bgColor;
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    actionMethod();
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        sx={{ color: "white", backgroundColor: `${bgColor}` }}
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
      >
        {msgbut}
        {props.addIcon}
      </Button>
      {/* <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}
      >
        Top-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'right',
        })}
      >
        Bottom-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'center',
        })}
      >
        Bottom-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'left',
        })}
      >
        Bottom-Left
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'left',
        })}
      >
        Top-Left
      </Button> */}
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={msg1}
        key={vertical + horizontal}
      />
    </div>
  );
}
