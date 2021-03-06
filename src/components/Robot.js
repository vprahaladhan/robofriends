import React from "react";

const Card = ({ robot }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${robot.id}?size=150x150`} alt={robot.username} />
      <h2>{robot.name}</h2>
      <p>{robot.email}</p>
    </div>
  );
};

export default Card;
