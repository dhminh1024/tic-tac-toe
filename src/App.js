import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import PublicNavbar from "./components/PublicNavbar";
import Game from "./components/Game";

function App() {
  return (
    <>
      <PublicNavbar />
      <Container>
        <Row className="mt-3 justify-content-center">
          <Col md={6} className="d-flex flex-column align-items-center">
            <h2>Tic Tac Toe</h2>
            <hr />
            <Game />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
