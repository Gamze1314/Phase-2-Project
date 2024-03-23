import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TweetForm from "../components/TweetForm";
import SearchBar from "../components/SearchBar";
import TweetsContainer from "../components/TweetsContainer";
import { useOutletContext } from "react-router-dom";

function ForYou() {
  const [tweets, setTweets] = useOutletContext();
  const [search, setSearch] = useState("Search");
  const [users, setUsers] = useState([]);

  const addTweet = (newTweet) => {
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  const uniqueUsers = tweets.map((tweet) => tweet.user);

  const maxLikes = tweets.filter((tweet) => {
    return (
      tweet.likeCount === Math.max(...tweets.map((tweet) => tweet.likeCount))
    );
  });

  const handleSearchChange = (e) => {
    const selectedOption = e.target.value;
    setSearch(selectedOption);
    console.log(search);

    if (selectedOption === "Users") {
      setSearch("Users");
      setUsers([...uniqueUsers]);
    } else if (selectedOption === "Most Liked") {
      setSearch("Most Liked");
      setTweets(maxLikes);
    } else if (selectedOption === "All") {
      setSearch("All");
      setTweets(tweets);
    }
  };

  console.log(users);
  return (
    <div>
      <div className="search-bar">
        <SearchBar onSearchChange={handleSearchChange} search={search} />
      </div>
      <Container>
        <Row>
          <Col sm={5}>
            <TweetForm addTweet={addTweet} tweets={tweets} />
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "120px" }}>
        <TweetsContainer tweets={tweets} users={users} search={search} />
      </div>
    </div>
  );
}

export default ForYou;
