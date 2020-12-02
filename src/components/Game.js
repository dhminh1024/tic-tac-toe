import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Board from "./Board";
import useLocalStorageState from "../utils/useLocalStorageState";

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
  // const [squares, setSquares] = useState(Array(9).fill(null));

  // States needed for saving history of moves
  const [history, setHistory] = useLocalStorageState("ttt_history", [
    Array(9).fill(null),
  ]);
  const [currentStep, setCurrentStep] = useLocalStorageState("ttt_step", 0);
  const currentSquares = history[currentStep];

  // This state determines the next value is X or O?
  const nextValue = getNextValue(currentSquares);
  // This state determines who is the winner
  const winner = getWinner(currentSquares);
  // This state determines the status showing who is on the turn
  const status = getStatus(currentSquares, winner, nextValue);

  const clickSquare = (index) => {
    // Your code here
    // You can modify this code below
    // if (winner || squares[index]) return;

    // const squaresCopy = [...squares];
    // squaresCopy[index] = nextValue;
    // setSquares(squaresCopy);

    if (winner || currentSquares[index]) return;

    const newHistory = history.slice(0, currentStep + 1);
    const squaresCopy = [...currentSquares];
    squaresCopy[index] = nextValue;
    setHistory([...newHistory, squaresCopy]);
    setCurrentStep(newHistory.length);
  };

  const restartGame = () => {
    // Your code here
    // setSquares(Array(9).fill(null));

    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
  };

  // Create the list of moves in history
  const moves = history.map((squares, step) => {
    const description = step ? `Go to move ${step}` : `Go to game start`;
    const isCurrentStep = step === currentStep;
    return (
      <li key={step}>
        <Button
          variant="outline-success"
          size="sm"
          disabled={step === currentStep}
          onClick={() => setCurrentStep(step)}
        >
          {description} {isCurrentStep ? "(current)" : null}
        </Button>
      </li>
    );
  });

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
          <Board squares={currentSquares} onClick={clickSquare} />
          <div>
            <strong>Winner: {winner}</strong>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <strong>{status}</strong>
          </div>
          {/* The list of moves */}
          <ol>{moves}</ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
