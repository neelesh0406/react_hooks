import React from "react";
import Child from "./Child";

export default function Parent({ user }) {
  //   const { name, age } = user;

  return (
    <div>
      {/* My name is {name} and I am {age} year's old */}
      <Child />
    </div>
  );
}
