import React from "react";
import { connect } from 'react-redux'
import { useEffect } from "react";
import "../styles/App.css";
import RobotsList from "../components/RobotsList";
import { setSearchText, fetchRobots } from "../actions";

function App({ searchText, robots, setSearchText, fetchRobots }) {
  // let robots = useRef();
  // const [ robots, setRobots ] = useState([])

  useEffect(() => {
    fetchRobots()
  }, []);

  return (
    <div className="App tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        value={searchText}
        placeholder="search robots"
        onChange={({ target }) => setSearchText(target.value)}
      />

      <RobotsList
        robots={robots}
        searchText={searchText}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  searchText: state.searchRobots.searchText,
  robots: state.fetchRobots.robots
})

const mapDispatchToProps = {
  setSearchText,
  fetchRobots
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
