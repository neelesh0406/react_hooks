import React, { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null);

  const changeInput = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "white";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={changeInput}>Submit</button>
    </div>
  );
}
