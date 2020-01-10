import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/App.css";
import Card from "../components/Card";
import ErrorBoundary from '../components/ErrorBoundary'
// import Scroll from '../components/Scroll';
// import { robots } from "./robots";

function App() {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        setRobots(
          response.data.map(robot => ({
            id: robot.id,
            name: robot.name,
            username: robot.username,
            email: robot.email
          }))
        )
      );
  }, []);

  return (
    <div className="App tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        value={search}
        placeholder="search robots"
        onChange={({ target }) => setSearch(target.value)}
      />
      <div className="container">
        <ErrorBoundary>
          {robots.length !== 0 ? 
            robots
              .filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()))
              .map(robot => <Card key={robot.id} robot={robot} />)
            : 
            <h1>Loading...</h1>
          }
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
