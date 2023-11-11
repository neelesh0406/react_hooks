import React, { useState } from "react";

export default function Topic12() {
  return (
    <>
      <h1>Higher order Component</h1>
      <HocRed cmp={Counter} />
      <HocBlue cmp={Counter} />
    </>
  );
}

function HocRed(props) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <props.cmp />
    </div>
  );
}

function HocBlue(props) {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <props.cmp />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  );
}
