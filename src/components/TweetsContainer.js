import React from "react";
import TweetCard from "./TweetCard";
// Render Tweet cards here.

function TweetsContainer({ tweets }) {
  const [tweet] = tweets

const cards = tweets.map((tweet) => {
  return <TweetCard 
  
  key={tweet.id} 
  title={tweet.title} 
  text={tweet.text} 
  likeCount={tweet.likeCount} 
  user={tweet.user}
  hashtags={tweet.hashtags} 
  />
})

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around", // You can adjust this based on your layout preference
    flexWrap: "wrap", // Allows cards to wrap to the next line if the container is not wide enough
  };

  return (
    <div style={containerStyle}>
      {cards}
    </div>
  );
}

export default TweetsContainer;
