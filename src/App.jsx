import React from "react";
import "./App.css";
import Memo from "./components/memo/Memo";
import Topic12 from "./components/Topic12";
import LazyTopic12 from "./components/LazyTopic12";

export default function App() {
  return (
    <div className="app">
      <Topic12 />
      {/* <LazyTopic12 /> */}
      {/* <Memo /> */}
    </div>
  );
}
