import React, { Component } from "react";
import "./App.css";
import Box from "./components/Box";
import Player from "./components/Player";
import ScoreBoard from "./components/ScoreBoard";
import Title from "./components/Title";
import { resultCalc } from "./utilities/resultCalc";
import { calculateWinner } from './utilities/winCalculation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      winner: null,
      draws: null,
      result: null,
      playerSelect: true,
      buttons: [...Array(9)].fill(' '),
      // result:null
    }
    this.buttonClick = this.buttonClick.bind(this)
    this.resetGame = this.resetGame.bind(this)
    // this.resetResult = this.resetResult.bind(this)
  }

  buttonClick(e) {
    const idx = parseInt(e.target.name);
    let changedButtons = this.state.buttons;
    changedButtons[idx] = this.state.playerSelect ? 'X' : 'O';
    let draw = changedButtons.indexOf(' ') === -1 ? 1 : null;
    const winner = calculateWinner(this.state.buttons);
    this.setState({
      buttons: changedButtons,
      playerSelect: !this.state.playerSelect,
      winner: winner,
      draws: draw

    })

  }

  resetGame() {
    let value = resultCalc(this.state.draws, this.state.winner)
    this.setState({
      winner: null,
      draws: null,
      playerSelect: true,
      buttons: [...Array(9)].fill(' '),
      result: value
    })
  }

  // resetResult(){
  //   this.setState({
  //     result: null
  //   })
  // }

  render() {
    return (
      <div>
        <Title />
        {/* <ScoreBoard score={this.state.result} reset={this.resetResult}/> */}
        <Box buttons={this.state.buttons}
          buttonClick={this.buttonClick}
          wins={this.state.winner}
        />
        <Player winnerPlayer={this.state.winner}
          turn={this.state.playerSelect}
          draws={this.state.draws}
        />
        {(this.state.winner === 'X' || this.state.winner === 'O' || this.state.draws) &&
          <button className="resetBtn" onClick={this.resetGame}>Reset</button>}
      </div>
    );
  }
}

export default App;
