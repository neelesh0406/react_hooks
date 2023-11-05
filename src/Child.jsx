import React from "react";
import { useGlobalContext } from "./components/useContext/UserContext";

export default function Child() {
  const userData = useGlobalContext();

  const { name, age } = userData;

  return (
    <div>
      Child : My name is {name} and I am {age} year's old
    </div>
  );
}
