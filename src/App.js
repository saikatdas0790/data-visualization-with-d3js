import React, { Suspense, lazy } from "react";
import { Router, Link } from "@reach/router";

const Navigation = lazy(() => import("./pages/navigation"));
const MakingShapesWithSVG = lazy(() =>
  import("./pages/making-shapes-with-svg"),
);
const IntroductionToD3JS = lazy(() => import("./pages/introduction-to-d3js"));

function App() {
  console.log("started");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navigation path="/" default></Navigation>
        <MakingShapesWithSVG path="/making-shapes-with-svg"></MakingShapesWithSVG>
        <IntroductionToD3JS path="/introduction-to-d3js"></IntroductionToD3JS>
      </Router>
    </Suspense>
  );
}

export default App;
