import { useState } from "react";

const WelcomeComponent = () => {
  const [size, setSize] = useState(18);

  return (
    <>
      <h1
        style={{
          fontSize: size + "px"
        }}
      >
        Welcome
      </h1>
      <button
        onClick={() => {
          setSize(size + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setSize(size - 1);
        }}
      >
        -
      </button>
    </>
  );
};
export default WelcomeComponent;
