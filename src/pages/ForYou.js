import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TweetForm from "../components/TweetForm";
import SearchBar from "../components/SearchBar";
import TweetsContainer from "../components/TweetsContainer";
import { Outlet, useOutletContext } from "react-router-dom"

//useOutletContext to access the context.

function ForYou() {
  const [tweets, setTweets] = useOutletContext();

  const addTweet = (newTweet) => {
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  return (
    <div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <Container>
        <Row>
          <Col sm={5}>
            <TweetForm addTweet={addTweet} tweets={tweets} />
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "120px" }}>
        <TweetsContainer tweets={tweets} />
      </div>
    </div>
  );
}

export default ForYou;
