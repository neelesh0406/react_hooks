import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    for (let i = 0; i < 1000000000; i++) {}
  });

  return (
    <div>
      <h2>This is About</h2>
    </div>
  );
}
