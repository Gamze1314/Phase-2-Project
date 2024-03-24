import React, { useState } from "react";
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

  const uniqueUsers = tweets.map((tweet) => {
    if (search === "Users") return true;

    return tweet.user;
  });

  const filteredTweets =
    search === "Most Liked"
      ? tweets.filter(
          (tweet) =>
            tweet.likeCount === Math.max(...tweets.map((t) => t.likeCount))
        )
      : tweets;

  const handleSearchChange = (e) => {
    const selectedOption = e.target.value;
    setSearch(selectedOption);
    console.log(search);

    if (selectedOption === "Users") {
      setSearch("Users");
      setUsers([...uniqueUsers]);
    } else if (selectedOption === "Most Liked") {
      setSearch("Most Liked");
      setTweets(filteredTweets);
    } else if (selectedOption === "All") {
      setSearch("All");
      setTweets([...tweets]);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <SearchBar onSearchChange={handleSearchChange} search={search} />
      </div>
      <Container>
        <Row>
          <Col sm={5}>
            <TweetForm addTweet={addTweet} />
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "120px" }}>
        <TweetsContainer tweets={filteredTweets} users={users} search={search} />
      </div>
    </div>
  );
}

export default ForYou;
