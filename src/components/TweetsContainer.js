import React from "react";
import TweetCard from "./TweetCard";

function TweetsContainer({ tweets, users, search }) {
  let content;

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around", // You can adjust this based on your layout preference
    flexWrap: "wrap", // Allows cards to wrap to the next line if the container is not wide enough
  };

  if (search === "All" || search === "Most Liked") {
    content = tweets.map((tweet) => (
      <TweetCard
        key={tweet.id}
        id={tweet.id}
        title={tweet.title}
        text={tweet.text}
        likeCount={tweet.likeCount}
        user={tweet.user}
        hashtags={tweet.hashtags}
      />
    ));
  } else if (search === "Users") {
    content = (
      <div>
        <h3>Suggested Users to Follow</h3>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    content = null;
  }

  return <div style={containerStyle}>{content}</div>;
}

export default TweetsContainer;
