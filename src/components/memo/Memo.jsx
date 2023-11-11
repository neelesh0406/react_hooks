import React, { useState } from "react";
import Home from "./Home";

export default function Memo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Memo
      <p>
        {count}
        <button onClick={() => setCount(count + 1)}>+ 1</button>
      </p>
      <Home />
    </div>
  );
}
