// - useLayoutEffect runs synchronously after a render but before the screen is updated.

// - useEffect runs asynchronously and after a render is painted to the screen.

import React, { useEffect, useLayoutEffect, useState } from "react";

export default function LayoutEffect() {
  useEffect(() => {
    console.log("First useeffect");
  });

  useLayoutEffect(() => {
    console.log("Second useeffect");
  });

  useEffect(() => {
    console.log("Third useeffect");
  });

  return (
    <div>
      LayoutEffect
      <h1>0</h1>
    </div>
  );
}
