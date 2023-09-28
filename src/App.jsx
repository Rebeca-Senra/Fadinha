import React, { useState, useRef } from "react";
import './App.css';

import imgpaper from './assets/papel.png';
import imgrock from './assets/pedra.png';
import imgscissors from './assets/tesoura.png';

const App = () => {
  const bet = useRef(null);

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [wallet, setWallet] = useState(100);

  const choices = ["rock", "paper", "scissors"];

  const getImageSrc = (choice) => {
    switch (choice) {
      case "rock":
        return imgrock;
      case "paper":
        return imgpaper;
      case "scissors":
        return imgscissors;
      default:
        return "";
    }
  };

  const playGame = (choice) => {
    setUserChoice(choice);
    const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomComputerChoice);

    if (choice === randomComputerChoice) {
      setResult("It's a tie!");
    } else if (
      (choice === "rock" && randomComputerChoice === "scissors") ||
      (choice === "scissors" && randomComputerChoice === "paper") ||
      (choice === "paper" && randomComputerChoice === "rock")
    ) {
      setResult("You win!");
      setWallet(wallet + 25);
    } else {
      setResult("You lose!");
      setWallet(wallet - 25);
    }
  };

  return (
    <div className="main">
      <h1 className="title">Rock Paper Scissors</h1>
      

      <div className="lulu">
        <div className="bequinha"><h2>User Choice:</h2> <div className="btns"><button onClick={() => playGame("rock")}>Rock</button>
          <button onClick={() => playGame("paper")}>Paper</button>
          <button onClick={() => playGame("scissors")}>Scissors</button></div><br></br><br></br> <img src={getImageSrc(userChoice)} alt={userChoice} id="userChoice" /></div>
        <div className="bequinha"><h2 className="cc">Computer Choice: </h2><img src={getImageSrc(computerChoice)} alt={computerChoice} id="computerChoice" /></div>
      </div>







      <h2 className="treasure">Result: {result}</h2>
      
    </div>
  );
};

export default App;
