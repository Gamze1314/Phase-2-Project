import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

export default function TweetForm({ addTweet }) {
  const [formData, setFormData] = useState({
    text: "",
    title: "",
    likeCount: 0,
    hashtags: "",
    user: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newData) => {
        addTweet(newData);
      });
    // clear form data
    setFormData({
      text: "",
      title: "",
      likeCount: 0,
      hashtags: "",
      user: "",
    });
  }

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
