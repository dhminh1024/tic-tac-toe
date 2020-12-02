import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Board from "./Board";

function getNextValue(squares) {
  // Your code here
}

function getWinner(squares) {
  // Your code here
}

function getStatus(squares, winner, nextValue) {
  // Your code here
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
    const squaresCopy = [...squares];
    squaresCopy[index] = index;
    setSquares(squaresCopy);
  };

  const restartGame = () => {
    // Your code here
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
            <strong>Winner:</strong>
            {winner}
          </div>
        </Col>
        <Col md={6}>
          <div>
            <strong>Next player:</strong> {status}
          </div>
          {/* The list of moves */}
          {/* <ol>{moves}</ol> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
