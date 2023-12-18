import React, { useState, useEffect } from "react";

const Loader = () => {
  const [state, setState] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer;
    if (state < 1850) {
      timer = setTimeout(() => {
        setState((prev) => prev + 185);
        setCounter((prev) => prev + 10);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "lightGrey",
          width: "1850px",
          height: "60px",
        }}
      >
        <div
          style={{
            backgroundColor: "orange",
            width: `${state}px`,
            height: "60px",
          }}
        ></div>
      </div>

      <center>
        <h1>{counter}%</h1>
      </center>
    </div>
  );
};

export default Loader;
