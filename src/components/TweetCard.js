import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

export default function TweetCard({ title , text , likeCount, user, hashtags }) {
  return (
    <div>
      <Card
        style={{
          width: "25rem",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          margin: "10px",
        }}
      >
        <Card.Body>
          <Card.Title>Title : {title}</Card.Title>
          <Card.Text>{user} : {text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {/* <ListGroup.Item>02/26/2024</ListGroup.Item> */}
          <ListGroup.Item>Like 💝 : {likeCount}</ListGroup.Item>
          <ListGroup.Item>#Hastags : {hashtags}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">💬</Button>
          <Button variant="outline-primary">❤️️</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
