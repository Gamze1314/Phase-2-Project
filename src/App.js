import "./App.css";
import NavBar from "./NavBar.js";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

//useEffect is a function that will run a function when the component is first rendered.=> get the data from the server.
//useOutletContext hook to access the context in the child components.
function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tweets")
      .then((res) => res.json())
      .then((data) => setTweets(data));
  }, []);

  // use context prop to pass down data to ForYou.
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Outlet context={[tweets, setTweets]} />
    </div>
  );
}

export default App;
