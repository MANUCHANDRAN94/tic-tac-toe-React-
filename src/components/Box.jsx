import React from "react";
import Buttons from "./Buttons";

function Box(props) {
  return (
    <div className="tttBox">
      {props.buttons.map((value, idx) => {
        return (
          <Buttons
            key={idx}
            value={value}
            idx={idx}
            onClickE={props.buttonClick}
            ifWin = {props.wins}
          />
        );
      })}
    </div>
  );
}

export default Box;
