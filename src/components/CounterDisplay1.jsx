import React, { useEffect } from "react";

export default function CounterDisplay1({ count }) {
  useEffect(() => {
    console.log("Function component : mounted");
    localStorage.setItem("show-counter", "true");

    return () => {
      console.log("Function component : unmounted...");
      localStorage.removeItem("show-counter");
    };
  }, []);

  useEffect(() => {
    console.log("Function component : updated...");
  }, [count]);

  return (
    <div>
      <span>Counter Display</span>
      {count}
    </div>
  );
}
