import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/App.css";
import Card from "../components/Card";
import { searchFieldAction } from '../actions';
import ErrorBoundary from '../components/ErrorBoundary'
// import Scroll from '../components/Scroll';
// import { robots } from "./robots";

function App({ store }) {
  // const [search, setSearch] = useState("");
  // let robots = [];
  // let search = React.createRef();
  const [ robots, setRobots ] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => 
        setRobots(response.data.map(robot => ({
            id: robot.id,
            name: robot.name,
            username: robot.username,
            email: robot.email
          })))
      );
  }, []);

  return (
    <div className="App tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        value={store.getState().searchText}
        placeholder="search robots"
        onChange={({ target }) => store.dispatch(searchFieldAction(target.value))}
      />
      <div className="container">
        <ErrorBoundary>
          {robots.length !== 0 ? 
            robots
              .filter(robot => robot.name.toLowerCase().includes(store.getState().searchText.toLowerCase()))
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
