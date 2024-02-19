import React from "react";
import TweetCard from "./TweetCard";
// Render Tweet cards here.

function TweetsContainer() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around", // You can adjust this based on your layout preference
    flexWrap: "wrap", // Allows cards to wrap to the next line if the container is not wide enough
  };

  return (
    <div style={containerStyle}>
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </div>
  );
}

export default TweetsContainer;
