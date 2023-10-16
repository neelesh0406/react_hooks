import React, { useEffect, useState } from "react";

export default function ClearUp() {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const handleCurrentWidth = () => {
    setWidthCount(() => window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleCurrentWidth);

    return () => {
      window.removeEventListener("resize", handleCurrentWidth);
    };
  });

  return (
    <div>
      <h1>
        The width of the window is <span>{widthCount}</span>{" "}
      </h1>
    </div>
  );
}
