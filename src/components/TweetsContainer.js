import React from "react";
import TweetCard from "./TweetCard";
// Render Tweet cards here.

function TweetsContainer({ tweets , users , search }) {
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

   const lis = users.map((user) => <li key={user}>{user}</li>);

  return (
    <div style={containerStyle}>
      {search === "Users" ?
      <div>
        <ul>{lis}</ul>
      </div>
      : cards}
    </div>
  );
}

export default TweetsContainer;
