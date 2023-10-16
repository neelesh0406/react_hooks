import React, { useContext } from "react";
import { AppContext } from "./components/useContext/UserContext";

export default function Child() {
  const userData = useContext(AppContext);

  const { name, age } = userData;

  return (
    <div>
      Child : My name is {name} and I am {age} year's old
    </div>
  );
}
