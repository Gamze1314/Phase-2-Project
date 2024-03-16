import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TweetForm from "../components/TweetForm";
import SearchBar from "../components/SearchBar";
import TweetsContainer from "../components/TweetsContainer";
import { useOutletContext } from "react-router-dom";

function ForYou() {
  const [tweets, setTweets] = useOutletContext();
  const [search, setSearch] = useState("All");
  const [users, setUsers] = useState([]);

  const addTweet = (newTweet) => {
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  useEffect(() => { 
    if (search === "All") {
      fetchTweets(); // Fetch tweets only when search is "All"
    }
  }, [search]);

  const fetchTweets = () => {
    fetch("http://localhost:3001/tweets")
      .then((res) => res.json())
      .then((data) => setTweets(data))
      .catch((error) => console.error("Error fetching tweets:", error));
  };

  const handleSearchChange = (e) => {
    const selectedOption = e.target.value;
    setSearch(selectedOption);
    // No need to restore original tweets here, fetching will happen automatically if search is "All"
    if (selectedOption === "Users") {
      setSearch("Users");
      const uniqueUsers = tweets.map((tweet) => tweet.user);
      setUsers([...uniqueUsers]);
    } else if (selectedOption === "Most Liked") {
      setSearch("Most Liked");
      const maxLikes = tweets.filter((tweet) => {
        return (
          tweet.likeCount ===
          Math.max(...tweets.map((tweet) => tweet.likeCount))
        );
      });
      setTweets(maxLikes);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <SearchBar 
        onSearchChange={handleSearchChange} 
        search={search} />
      </div>
      <Container>
        <Row>
          <Col sm={5}>
            <TweetForm 
            addTweet={addTweet} 
            tweets={tweets} />
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "120px" }}>
        <TweetsContainer 
        tweets={tweets} 
        users={users} 
        search={search} />
      </div>
    </div>
  );
}

export default ForYou;
