import React, { Suspense, lazy } from "react";
import { Router, Link } from "@reach/router";

const Navigation = lazy(() => import("./pages/navigation"));
const MakingShapesWithSVG = lazy(() =>
  import("./pages/making-shapes-with-svg"),
);

function App() {
  console.log("started");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navigation path="/" default></Navigation>
        <MakingShapesWithSVG path="/making-shapes-with-svg"></MakingShapesWithSVG>
      </Router>
    </Suspense>
  );
}

export default App;
