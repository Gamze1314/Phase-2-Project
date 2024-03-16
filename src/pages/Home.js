import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="py-5 text-center">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="py-5 text-center">Hello World.</h1>
            <h2 className="py-5 text-center">Let's Chat.</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
