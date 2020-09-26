import React from "react";

function Player(props) {
  if (props.winnerPlayer === "X" || props.winnerPlayer === "O") {
    return (
      <div className="playerBox" style={{ color: "green" }}>
        <h4>
          {props.winnerPlayer} <span> wins!!!! 👏👏👏</span>
        </h4>
      </div>
    );
  } else if (props.draws) {
    return (
      <div className="playerBox">
        <h4>
          Its a Draw... Try again! <span>🤠</span>
        </h4>
      </div>
    );
  } else {
    return (
      <div className="playerBox">
        <h3>
          It's
          {props.turn ? " X's " : " O's "}
          turn...👍
        </h3>
      </div>
    );
  }
}

export default Player;
