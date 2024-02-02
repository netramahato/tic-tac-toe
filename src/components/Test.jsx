import "./test.css";
import React, { useState } from "react";

export default function Test(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Testing useState</h1>
      <h2>I'm {props.name}</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
