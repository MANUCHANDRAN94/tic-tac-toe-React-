import React, { useState, useEffect } from "react";

function ScoreBoard(props) {
  const [result, setresult] = useState({
    X: 0,
    O: 0,
    D: 0,
  });
  let value = props.score;

  useEffect(() => {
    if (value !== null) {
      setresult((prev) => {
        return {
          ...prev,
          [value]: result[value] + 1,
        };
      });
      props.reset();
    }
  });

  return (
    <div className="scoreBoard">
      <h2>Score Board</h2>
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
            <td>{result.X}</td>
            <td>{result.D}</td>
          </tr>
          <tr>
            <td>player2</td>
            <td>{result.O}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreBoard;
