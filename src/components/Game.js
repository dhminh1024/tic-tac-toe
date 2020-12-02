import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Board from "./Board";

function getNextValue(squares) {
  // Your code here
  const countX = squares.filter((s) => s === "X").length;
  const countO = squares.filter((s) => s === "O").length;
  return countX === countO ? "X" : "O";
}

function getWinner(squares) {
  // Your code here
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}

function getStatus(squares, winner, nextValue) {
  // Your code here
  return winner
    ? `Winner: ${winner}`
    : squares.filter((s) => s === null).length === 0
    ? `Draw Game`
    : `Next player: ${nextValue}`;
}

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // States needed for saving history of moves
  // const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [currentStep, setCurrentStep] = useState(0);
  // const currentSquares = history[currentStep];

  // This state determines the next value is X or O?
  const nextValue = getNextValue(squares);
  // This state determines who is the winner
  const winner = getWinner(squares);
  // This state determines the status showing who is on the turn
  const status = getStatus(squares, winner, nextValue);

  const clickSquare = (index) => {
    // Your code here
    // You can modify this code below
    if (winner || squares[index]) return;
    const squaresCopy = [...squares];
    squaresCopy[index] = nextValue;
    setSquares(squaresCopy);
  };

  const restartGame = () => {
    // Your code here
    setSquares(Array(9).fill(null));
  };

  // Create the list of moves in history
  // const moves = history.___((squares, step) => {
  //   const description = step ? ___ : ___;
  //   const isCurrentStep = step === ___;
  //   return (
  //     <li key={step}>
  //       <Button disabled={currentStep} onClick={() => setCurrentStep(step)}>
  //         {desc} {isCurrentStep ? "(current)": null}
  //       </Button>
  //     </li>
  //   )
  // })

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center mb-3">
          <Button onClick={restartGame} size="sm">
            Restart
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Board squares={squares} onClick={clickSquare} />
          <div>
            <strong>Winner: {winner}</strong>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <strong>{status}</strong>
          </div>
          {/* The list of moves */}
          {/* <ol>{moves}</ol> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
