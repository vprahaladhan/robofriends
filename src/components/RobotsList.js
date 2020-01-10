import React from "react";
import Robot from "../components/Robot";
import ErrorBoundary from "../components/ErrorBoundary";

const RobotsList = ({ robots, searchText }) => {
  return (
    <div className="container">
      <ErrorBoundary>
        {robots ? (
          robots
            .filter(robot =>
              robot.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map(robot => <Robot key={robot.id} robot={robot} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default RobotsList;
