import React, { useState } from "react";

function ScoreBoard(props) {
//   const [result, setresult] = useState(0);
//     let value = props.score;

//   if (value) {
//     if (value === "D") {
//       setresult(result + 1);
//     }
//     props.reset()
//   }

  return (
    <div className="scoreBoard">
      <h2>HTML Table</h2>
      {props.score}
      <table>
        <thead>
          <tr>
            <th>Players</th>
            <th>Win</th>
            <th>Draws</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>player1</td>
            {/* <td>{result.p1w}</td> */}
            {/* <td>{result}</td> */}
          </tr>
          <tr>
            <td>player2</td>
            {/* <td>{result.p2w}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreBoard;
