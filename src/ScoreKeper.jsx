/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ScoreKeeper = ({ players, target }) => {
  const [myPlayers, setMyPlayers] = useState(new Array(players).fill(0));

  const increment = (index) => {
    setMyPlayers((prev) => {
      let updatedVal = [...prev];
      updatedVal[index]++;
      return updatedVal;
    });
  };

  const reset = () => {
    setMyPlayers(new Array(players).fill(0));
  };

  return (
    <ul>
      {myPlayers.map((player, index) => (
        <li key={index}>
          Player {index + 1} : {player}
          <button onClick={() => increment(index)}>+1</button>
          {player >= target ? " Winner" : ""}
        </li>
      ))}
      <button onClick={reset}>Reset</button>
    </ul>
  );
};

export default ScoreKeeper;
