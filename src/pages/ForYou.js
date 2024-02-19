import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TweetForm from "../components/TweetForm";
import SearchBar from "../components/SearchBar";
import TweetsContainer from "../components/TweetsContainer";

function ForYou() {
  return (
    <div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <Container>
        <Row>
          <Col sm={5}>
            <TweetForm />
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "120px" }}>
        <TweetsContainer />
      </div>
    </div>
  );
}

export default ForYou;
