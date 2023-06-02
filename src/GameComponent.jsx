import { useState } from "react";

const GameComponent = () => {
  const [lives, setLives] = useState(3);
  return (
    <>
      <h1>Current lives: {lives}</h1>
      <button
        onClick={() => {
          if (lives > 0) {
            return setLives(lives - 1);
          }
        }}
      >
        Lose a life
      </button>
      {lives === 0 && <p>Game Over</p>}
    </>
  );
};
export default GameComponent;
