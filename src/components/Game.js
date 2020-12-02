import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Board from "./Board";

// Step 0
// Discuss with your neighbors to analyze the structure of the app,
// Draw the tree of components

// STEP 6.6 - Rocket: History of moves
// Import useLocalStorageState from ../utils/useLocalStorageState
// Appy the custom hook to persist the game across browser refresh

function getNextValue(squares) {
  // STEP 3
  // Count how many X and O in squares.
  // If they are equal the nextValue must be X, otherwise O
}

function getWinner(squares) {
  // STEP 4
  // The winner is who has the three squares in a row, a column, or a diagonal
  // The index of those three squares are one of these options:
  // [0, 1, 2] : the first row
  // [3, 4, 5] : the second row
  // [6, 7, 8] : the third row
  // [0, 3, 6] : the first column
  // [1, 4, 7] : the second column
  // [2, 5, 8] : the third column
  // [0, 4, 8] : the top-left to bottom-right diagonal
  // [2, 4, 6] : the top-right to bottom-left diagonal
}

function getStatus(squares, winner, nextValue) {
  // STEP 5
  // Do we have a winner? -> `Winner: ${winner}`
  // If there are no free square to play, or the sum of null in squares equals 0 -> Draw game
  // Otherwise -> `Next player: ${nextValue}`
}

const Game = () => {
  // STEP 6.1 - Rocket: History of moves
  // Comment out this line below
  const [squares, setSquares] = useState(Array(9).fill(null));

  // STEP 6.2 - Rocket: History of moves
  // States needed for saving history of moves
  // const [history, setHistory] = useState([Array(9).fill(null)]);
  // const [currentStep, setCurrentStep] = useState(0);
  // const currentSquares = history[currentStep];

  // STEP 6.3 - Rocket: History of moves
  // Replace squares with currentSquares

  // This state determines the next value is X or O?
  // - nextValue ('X' or 'O')
  const nextValue = getNextValue(squares);
  // This state determines who is the winner
  // - winner ('X', 'O', or null)
  const winner = getWinner(squares);
  // This state determines the status showing who is on the turn
  // - status (`Winner: ${winner}`, `Draw`, or `Next player: ${nextValue}`)
  const status = getStatus(squares, winner, nextValue);

  const clickSquare = (index) => {
    // STEP 1
    // First, if there's already winner or there's already a value at the
    // given square index, then return

    // It's typically a bad idea to mutate or directly change state in React.
    // Doing so can lead to subtle bugs that can easily slip into production.
    // - Make a copy of the squares array. Hint `[...squares]` will do it!)

    // - Set the value of the square that was selected. Hint `squaresCopy[index] = nextValue`

    // - set the squares to your copy

    const squaresCopy = [...squares];
    squaresCopy[index] = index;
    setSquares(squaresCopy);
  };

  const restartGame = () => {
    // STEP 2
    // Restart the game is basically set the state of the app back to the initial value
    // -------
    // STEP 6.4 - Rocket: History of moves
    // Restart the game by reset `history` and `currentStep`
  };

  // STEP 6.5 - Rocket: History of moves
  // Create the list of moves in history
  // const moves = history.___((squares, step) => {
  //   const description = step ? ___ : ___;
  //   const isCurrentStep = step === ___;
  //   return (
  //     <li key={step}>
  //       <Button
  //         variant="outline-success"
  //         size="sm"
  //         disabled={isCurrentStep}
  //         onClick={() => setCurrentStep(step)}
  //       >
  //         {description} {isCurrentStep ? "(current)" : null}
  //       </Button>
  //     </li>
  //   );
  // });

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
          {/* STEP 6.6 - Rocket: History of moves */}
          {/* The list of moves */}
          {/* <ol>{moves}</ol> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
