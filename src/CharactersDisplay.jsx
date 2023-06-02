import { useState } from "react";

const CharactersDisplay = ({ characters }) => {
  const [showHeroes, setShowHeroes] = useState(false);
  const [showVillains, setShowVillains] = useState(false);
  const { heroes, villains } = characters;
  return (
    <>
      <button
        onClick={() => {
          setShowHeroes(!showHeroes);
        }}
      >
        {showHeroes ? "Hide " : "Show "}Heroes
      </button>
      <button
        onClick={() => {
          setShowVillains(!showVillains);
        }}
      >
        {showVillains ? "Hide " : "Show "}Villains
      </button>
      {showHeroes && <h1>Heroes:</h1>}
      {showHeroes &&
        heroes.map(({ name, powers, costume }) => {
          return (
            <>
              <h1>{name}</h1>
              <p>Powers: {powers}</p>
              <p>Costume: {costume}</p>
            </>
          );
        })}
      {showVillains && <h1>Villians:</h1>}
      {showVillains &&
        villains.map(({ name, powers, costume }) => {
          return (
            <>
              <h1>{name}</h1>
              <p>Powers: {powers}</p>
              <p>Costume: {costume}</p>
            </>
          );
        })}
    </>
  );
};
export default CharactersDisplay;
