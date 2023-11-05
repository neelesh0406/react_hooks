import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default function LazyTopic12() {
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<h1>Loading Home...</h1>}>
        <Home />
      </Suspense>
      <Suspense fallback={<h1>Loading About...</h1>}>
        <About />
      </Suspense>
    </div>
  );
}
