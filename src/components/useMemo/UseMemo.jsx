import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("🚀 countNumber ~ num", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <div>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new number : {checkData} </p>

      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  );
}
