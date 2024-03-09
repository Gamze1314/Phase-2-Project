import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
// import Alert from "react-bootstrap/Alert";

export default function TweetForm() {
  // state to hold form data.
  const [formData, setFormData] = useState({
    text: "",
    title: "",
    likeCount: 0,
    hashtags: "",
    user: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newData = {
      text: e.target.text.value,
      title: e.target.title.value,
      likeCount: 0,
      hashtags: e.target.hashtags.value,
      user: e.target.user.value,
    };

    setFormData(newData);
  }

  console.log(formData);

  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row>
          <Col md={20}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label></Form.Label>
                <Col sm={25}>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Topic.."
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label></Form.Label>
                <Col sm={25}>
                  <Form.Control
                    type="text"
                    name="text"
                    value={formData.text}
                    placeholder="What's happening?!"
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="hashtags">
                <Form.Label></Form.Label>
                <Col sm={25}>
                  <Form.Control
                    type="text"
                    name="hashtags"
                    value={formData.hashtags}
                    placeholder="Hashtags#"
                    onChange={(e) =>
                      setFormData({ ...formData, hashtags: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="user">
                <Form.Label></Form.Label>
                <Col sm={25}>
                  <Form.Control
                    type="text"
                    name="user"
                    value={formData.user}
                    placeholder="Enter your name.."
                    onChange={(e) =>
                      setFormData({ ...formData, user: e.target.value })
                    }
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
