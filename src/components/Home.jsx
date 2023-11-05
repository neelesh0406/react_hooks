import React, { memo } from "react";

const Home = () => {
  console.warn("Home rendered");
  return <div>This is Home</div>;
};

export default memo(Home);
