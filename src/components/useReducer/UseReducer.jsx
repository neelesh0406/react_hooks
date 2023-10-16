import React, { useReducer, useState } from "react";
import reducer from "./reducer";

const initialValue = 0;

export default function UseReducer() {
  //   const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <button onClick={() => dispatch({ type: "DSC" })}>-</button>

      <span>{state}</span>

      <button onClick={() => dispatch({ type: "INC" })}>+</button>
    </div>
  );
}
