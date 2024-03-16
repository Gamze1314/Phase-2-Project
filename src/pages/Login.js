import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup, Alert } from "react-bootstrap";

function Login() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.formUsername.value;
    const password = event.target.elements.formPassword.value;

    if (!username || !password) {
      setShowAlert(true);
      return;
    }

    // Handle login logic here
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control type="text" placeholder="Enter username" />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            {showAlert && (
              <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                Please enter login details.
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

