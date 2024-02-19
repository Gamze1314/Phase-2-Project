import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// card img size 287 x 180

function Home() {
  return (
    <div className="py-5 text-center" >
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="py-5 text-center">Hello !</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
