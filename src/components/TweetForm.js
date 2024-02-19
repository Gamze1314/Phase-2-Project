import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
// import Alert from "react-bootstrap/Alert";

export default function TweetForm() {
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row>
          <Col md={20}>
            <Form onSubmit={"handleSubmit"}>
              <Form.Group controlId="title">
                <Form.Label></Form.Label>
                <Col sm={25}>
                  <Form.Control
                    type="text"
                    name="tweet"
                    value=""
                    placeholder="What's happening?!"
                    // onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="hashtag">
                <Form.Label></Form.Label>
                <Col sm={25}>
                  <Form.Control
                    type="text"
                    name="hashtag"
                    value=""
                    placeholder="Hashtags#"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                POST
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
