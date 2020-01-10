import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/App.css";
import RobotsList from "../components/RobotsList";
import { searchFieldAction } from "../actions";

function App({ store }) {
  // let robots = useRef();
  const [ robots, setRobots ] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      setRobots(response.data.map(robot => ({
        id: robot.id,
        name: robot.name,
        username: robot.username,
        email: robot.email
      })));
    });
  }, []);

  return (
    <div className="App tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        value={store.getState().searchText}
        placeholder="search robots"
        onChange={({ target }) =>
          store.dispatch(searchFieldAction(target.value))
        }
      />

      <RobotsList
        robots={robots}
        searchText={store.getState().searchText}
      />
    </div>
  );
}

export default App;
