import React from 'react'
import { Card, ListGroup, Button } from "react-bootstrap";

export default function TweetCard() {
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          margin: "10px",
        }}
      >
        <Card.Body>
          <Card.Title>Gamze Kandara</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {/* <ListGroup.Item>02/26/2024</ListGroup.Item> */}
          <ListGroup.Item>Likes Count 💝 :</ListGroup.Item>
          <ListGroup.Item>#Hastags : </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">💬</Button>
          <Button variant="outline-primary">❤️️</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
