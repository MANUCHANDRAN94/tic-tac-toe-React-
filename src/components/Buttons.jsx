import React from "react";

function Buttons(props) {
  return (
    <input
      type="button"
      disabled={props.ifWin !== null ? true : ( props.value === " " ? false : true )}
      className="tttButton"
      value={props.value}
      name={props.idx}
      onClick={props.onClickE}
    />
  );
}

export default Buttons;
